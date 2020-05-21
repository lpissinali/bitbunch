import { exchanges, currencies } from './model';

export const state = {
  columns: {
    buyExchanges: {
      offset: 814,
      min: 0,
      max: 0,
      size: 44,
      gap: 30,
      count: exchanges.length,
    },
    currencies: {
      offset: 18,
      size: 66,
      gap: 30,
      min: 0,
      max: 0,
      count: currencies.length,
    },
    sellExchanges: {
      offset: 592,
      size: 44,
      gap: 30,
      min: 0,
      max: 0,
      count: exchanges.length,
    },
  },
  trade: {
    pending: null,
    trades: [],
    current: null,
    activeTrades: [],
  },
  selection: {
    buyExchange: 22,
    sellExchange: 25,
    currency: 3,
  },
  animLoopPaused: true,
  lineProgress: 0,
  seekProgress: 0,
  selectProgress: 0,
  expandProgress: 0,
  showMoreProgress: 0,
  showInfoProgress: 0,
  showSellProgress: 0,
  successProgress: 0,
  particlesProgress: 0,
  wallet: 'btc',
  stage: {
    width: 0,
    height: 0,
    isVertical: null,
  },
};
