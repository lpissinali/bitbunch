let controller;
let signal;
let currentWallet = '';

export function getToken(refresh) {
    return fetch(`/user/get-api-token${refresh ? '/1' : ''}`, {signal}).then(response => {
        if (response.status !== 200) {
            throw new Error('Retrieving token failed');
        }
        return response.json();
    }).then(data => {
        if (data.error) {
            throw new Error(data.error);
        }
        return data.token;
    });
}

export function connectToSocket(token, callback) {
    return new Promise((resolve, reject) => {
        const wallet = currentWallet;
        const url = `ws://dev.bitbunch.com:9000/api/v1/wallets/${wallet}/current-trade?token=${token}`;
        const socket = new WebSocket(url);

        socket.addEventListener('message', function (event) {
            callback(JSON.parse(event.data));
        });

        socket.addEventListener('error', function (event) {
            console.log('Socket error');
        });

        socket.addEventListener('close', function (event) {
            console.log(`Close: ${event.code}`);
            reject(new Error(event.code));
        });

        const abortListener = () => {
            socket.disconnect();
            signal.removeEventListener('abort', abortListener);
            reject(new Error('Abort'));
        };
        signal.addEventListener('abort', abortListener);
    });
}

export function tryConnectToSocket(token, callback) {
    return connectToSocket(token, callback).catch(error => {
        if (error.message == '1006') {
            // Retry with refreshed token
            return getToken(true).then((newToken) => connectToSocket(newToken, callback));
        }
    });
}

export function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

export function listenForTrades(wallet, callback) {
    if (currentWallet != wallet) {
        currentWallet = wallet;
        if (controller) {
            controller.abort();
        }
        controller = new AbortController();
        signal = controller.signal;
    }
    getToken().then((token) => tryConnectToSocket(token, callback)).catch((error) => {
        console.log(error);
    });
}
