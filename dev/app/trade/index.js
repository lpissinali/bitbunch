import { createElements } from './createElements';
import { handleResize } from './handleResize';
import { idleAnimation } from './animations/idle';
import {
  instantTradeAnimation,
  showInstantTradeSuccess,
  longTradeAnimation,
} from './animations/trade';
import { state } from './state';
import { currencies, exchanges, randomSellExchange } from './model';
import { showTradeProcess } from './animations/trade-process';
import { listenForTrades } from './net2';

// FORCE ALL INSTANT TRADES UNTIL SERVER FIXED
const INSTANT_TRADE_THRESHOLD = 60 * 1000; // ms
const INVALID_TIMER_ID = -1;
let timerId = -1;
let pendingTrade = null;

function clearPendingTrade() {
  if (timerId !== INVALID_TIMER_ID) {
    clearTimeout(timerId);
    timerId = INVALID_TIMER_ID;
  }
  pendingTrade = null;
}

function checkPendingTradeType(trade) {
  if (pendingTrade) {
    // There is already pending trade, so we got updated value
    if (pendingTrade.id === trade.id) {
      pendingTrade = trade;
    } else {
      // Something is wrong, we already have pending trade, so just discard old one
      clearPendingTrade();
      checkPendingTradeType(trade);
      return;
    }
  }
  if (trade.status === 'completed') {
    clearPendingTrade();
    trade.isInstant = true;
    state.trade.trades.push(trade);
    return;
  }
  const durationSoFar = Math.max(new Date().getTime() - trade.startTime, 0);
  if (durationSoFar >= INSTANT_TRADE_THRESHOLD) {
    trade.isInstant = false;
    state.trade.trades.push(trade);
    return;
  }
  pendingTrade = trade;
  timerId = setTimeout(() => {
    if (pendingTrade) {
      pendingTrade.isInstant = false;
      state.trade.trades.push(pendingTrade);
      clearPendingTrade();
    }
  }, INSTANT_TRADE_THRESHOLD - durationSoFar);
}

function createFakeTrade() {
  const startTime = new Date().getTime();
  const endTime = startTime + 60 * 1000;

  const newTrade = {
    id: startTime,
    buyExchange: 2,
    sellExchange: 26,
    currency: 3,
    wallet: state.wallet,
    profit: 0.07,
    amount: 1,
    buyPrice: 0.0062,
    sellPrice: 0.0063,
    startTime,
    endTime,
    status: 'completed',
  };

  checkPendingTradeType(newTrade);
}

// listenForTrades(state.wallet, (tradeInfo) => {
//     let currency = -1;
//     if (tradeInfo.target_currency) {
//         currency = currencies.indexOf(tradeInfo.target_currency);
//         if (currency === -1) {
//             console.log(`Currency ${tradeInfo.target_currency} not found`);
//             return;
//         }
//     }

//     let buyExchange = -1;
//     if (tradeInfo.buy_exchange) {
//         buyExchange = exchanges.indexOf(tradeInfo.buy_exchange);
//         if (buyExchange === -1) {
//             console.log(`Exchange ${tradeInfo.buy_exchange} not found`);
//             return;
//         }
//     }

//     let sellExchange = -1;
//     if (tradeInfo.sell_exchange) {
//         sellExchange = exchanges.indexOf(tradeInfo.sell_exchange);
//         if (sellExchange === -1) {
//             console.log(`Exchange ${tradeInfo.sell_exchange} not found`);
//             return;
//         }
//     }

//     if (currency === -1 || buyExchange === -1) {
//         // Ignore initial state when currency is not selected yet and no buy exchange
//         return;
//     }

//     const startTime = new Date(tradeInfo.start_time).getTime();
//     const newTrade = {
//         id: startTime,
//         buyExchange,
//         sellExchange,
//         currency,
//         wallet: state.wallet,
//         profit: tradeInfo.actual_profit,
//         amount: tradeInfo.amount,
//         buyPrice: tradeInfo.buy_price,
//         sellPrice: tradeInfo.sell_price,
//         startTime: startTime,
//         endTime: tradeInfo.status === 'completed' ? new Date(tradeInfo.end_time).getTime() : -1,
//         status: tradeInfo.status
//     };

//     // If new trade data is already being animated just update corresponding values
//     if (state.trade.current && state.trade.current.id === newTrade.id) {
//         state.trade.current = newTrade;
//         return;
//     } else {
//         let index = state.trade.trades.findIndex(x => x.id === newTrade.id);
//         if (index !== -1) {
//             state.trade.trades[index] = newTrade;
//             return;
//         }
//         index = state.trade.activeTrades.findIndex(x => x.data.id === newTrade.id);
//         if (index !== -1) {
//             const activeTrade = state.trade.activeTrades[index];
//             activeTrade.data = newTrade;
//             if (newTrade.status === 'completed') {
//                 activeTrade.onComplete();
//             }
//             return;
//         }
//     }
//     // Otherwise wait some time to detect if trade is instant trade or long trade
//     checkPendingTradeType(newTrade);
// });

function filterOldTrades() {
  const expireTime = new Date().getTime() - 5 * 60 * 1000; // ms
  // Filter trades which finished before expire time
  // This is usefull when user moves to other pages which freezes animations
  state.trade.trades = state.trade.trades.filter(x => {
    if (x.status === 'completed') {
      return x.endTime > expireTime;
    }
    return true;
  });
}

function animLoop() {
  filterOldTrades();
  if (state.trade.trades.length) {
    const trade = state.trade.trades.shift();
    state.trade.current = trade;
    if (trade.isInstant) {
      instantTradeAnimation().then(animLoop);
    } else {
      // Select random sell exchange just to show initial animation
      if (trade.sellExchange === -1) {
        trade.sellExchange = randomSellExchange(trade);
      }
      longTradeAnimation().then(() => {
        const tradeState = {
          scrollProgress: 0,
          backgroundProgress: 0,
          buySectionProgress: 0,
          processSectionProgress: 0,
          sellSectionProgress: 0,
          sellProgress: 0,
          successTransitionProgress: 0,
          particlesProgress: 0,
          data: state.trade.current,
          onComplete: () => {},
        };
        state.trade.current = null;
        state.trade.activeTrades.push(tradeState);
        showTradeProcess(tradeState).then(() => {
          const index = state.trade.activeTrades.indexOf(tradeState);
          state.trade.activeTrades.splice(index, 1);
        });
        animLoop();
      });
    }
  } else {
    idleAnimation().then(animLoop);
  }
}

createElements();
handleResize();

setTimeout(() => {
  animLoop();
}, 3000);

setTimeout(() => {
  createFakeTrade();
}, 5000);

setTimeout(() => {
  createFakeTrade();
}, 15000);

window.addEventListener('resize', handleResize);
