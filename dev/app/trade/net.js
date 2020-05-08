import { state } from "./state";

const REFRESH_INTERVAL = 20000;

let token = '';
let server_endpoint = '';

export function getToken(refresh) {
    return fetch(`/user/get-api-token${ refresh ? '/1' : ''}`).then(response => {
        if (response.status !== 200) {
            throw new Error('Retrieving token failed');
        }
        return response.json();
    }).then(data => {
        if (data.error) {
            throw new Error(data.error);
        }
        server_endpoint = data.url;
        return data.token;
    });
}

function getCurrentTrade(wallet) {
    return fetch(`${server_endpoint}/api/v1/wallets/${wallet}/current-trade`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then(responseData => {
        if (responseData.response_code !== '0000') {
            throw responseData;
        }
        return responseData.data;
    });
}

function tryGetCurrentTrade(wallet) {
    return getCurrentTrade(wallet).catch(error => {
        // Renew token if it expired and retry
        if (error.response_code === '2003') {
            return getToken(true).then(x => {
                token = x;
                return getCurrentTrade(wallet);
            });
        } else {
            throw new Error(error.message);
        }
    });
}

export function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

let lastTradeId = '';

function getTradeId(trade) {
    return trade.start_time;
}

function getRemainingDuration(trade) {
    const endTime = new Date(trade.end_time).getTime();
    const currentTime = new Date().getTime();
    return endTime - currentTime;
}

function tradeLoop(callback) {
    const wallet = state.wallet;
    return tryGetCurrentTrade(wallet).then(trade => {
        trade.wallet = wallet;
        trade.id = getTradeId(trade);
        // Check if we received this trade already
        if (lastTradeId !== trade.id) {
            lastTradeId = trade.id;
            // Check if trade expired already
            const remainingDuration = getRemainingDuration(trade);
            if (remainingDuration > 0) {
                callback(trade);
                // Query again after current trade finished
                return wait(remainingDuration).then(() => tradeLoop(callback));
            } else {
                console.log('Negative remaining time');
                console.log(trade);
            }
        }
        return wait(REFRESH_INTERVAL).then(() => tradeLoop(callback));
    }).catch(error => {
        console.log(error.message);
        return wait(REFRESH_INTERVAL).then(() => tradeLoop(callback));
    });
}

// Check for token expiration
export function listenForTrades(callback) {
    getToken().then(x => {
        token = x;
        tradeLoop(callback);
    }).catch(error => {
        console.log('Failed to initialize service access');
        console.log(error);
    });
}
