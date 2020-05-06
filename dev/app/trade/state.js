import { exchanges, currencies } from './model';

export const state = {
    columns: {
        buyExchanges: {
            offset: 0,
            min: 0,
            max: 0,
            size: 44,
            gap: 30,
            count: exchanges.length
        },
        currencies: {
            offset: 0,
            size: 66,
            gap: 30,
            min: 0,
            max: 0,
            count: currencies.length
        },
        sellExchanges: {
            offset: 200,
            size: 44,
            gap: 30,
            min: 0,
            max: 0,
            count: exchanges.length
        }
    },
    trade: {
        pending: null,
        trades: [],
        current: null,
        activeTrades: [],
    },
    selection: {
        buyExchange: 1,
        sellExchange: 4,
        currency: 3,
    },
    animLoopPaused: false, 
    lineProgress: 0,
    seekProgress: 0,
    selectProgress: 0,
    expandProgress: 0,
    showMoreProgress: 0,
    showSellProgress: 0,
    successProgress: 0,
    particlesProgress: 0,
    wallet: 'btc',
    stage: {
        width: 0,
        height: 0,
        isVertical: null
    },
};
