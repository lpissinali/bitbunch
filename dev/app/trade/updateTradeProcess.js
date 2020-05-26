import { state } from './state';
import anime from 'animejs';
import { getCurrencyIcon, currencyCodeToName, currencies, getExchangeIcon, exchanges } from './model';
import { formatTime, formatCurrency, formatDuration } from './utils';
import { listenForClose } from './animations/helpers';

const activeTradesContainer = document.querySelector('.active-trades-container');
const activeTrades = document.querySelector('.active-trades');
const activeTradeTemplate = document.querySelector('.active-trade-template');

const tradeRenderers = {};

export function initTradeProcess(tradeState) {
    const trade = tradeState.data;
    const walletCurrencyCode = trade.wallet.toUpperCase();
    const currencyCode = currencies[trade.currency];
    const currencyName = currencyCodeToName[currencyCode];

    const activeTrade = activeTradeTemplate.cloneNode(true);

    const buySection = activeTrade.querySelector('.buy-section');
    const sellSection = activeTrade.querySelector('.sell-section');
    const processSection = activeTrade.querySelector('.process-section');
    const background = activeTrade.querySelector('.background');
    const progressMessage = activeTrade.querySelector('.progress-message');
    const progressBackground = activeTrade.querySelector('.progress-background');
    const progressTimer = activeTrade.querySelector('.progress-timer');

    tradeRenderers[tradeState.data.id] = {
        activeTrade,
        buySection,
        sellSection,
        processSection,
        background,
        progressMessage,
        progressTimer,
        progressBackground,
        processInfo: activeTrade.querySelector('.progress-info'),
        successInfo: activeTrade.querySelector('.success-info'),
        particles1: activeTrade.querySelector('.particles2'),
        particles2: activeTrade.querySelector('.particles1'),
    };

    activeTrades.appendChild(activeTrade);

    const currencyIconNode = activeTrade.querySelector('.currency-icon');
    currencyIconNode.setAttribute('src', getCurrencyIcon(currencyCode));
    const currencyNameNode = activeTrade.querySelector('.currency-name');
    currencyNameNode.textContent = `${currencyName}(${currencyCode})`;

    const profitValueNode = activeTrade.querySelector('.profit-value');
    profitValueNode.textContent = formatCurrency(trade.profit);
    const profitCurrencyNode = activeTrade.querySelector('.profit-currency');
    profitCurrencyNode.textContent = trade.wallet.toUpperCase();

    initBuyInfo(tradeState);
    const sellInfoNode = activeTrade.querySelector('.sell-info');
    sellInfoNode.innerHTML = 'Waiting';

    activeTrade.classList.toggle('active-trade-template', false);
    activeTrade.classList.toggle('d-none', false);

    initSellInfo(tradeState);
    initProgressMessage(tradeState);

    activeTradesContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end'
    });
}

export function initBuyInfo(tradeState) {
    const trade = tradeState.data;
    const walletCurrencyCode = trade.wallet.toUpperCase();
    const currencyCode = currencies[trade.currency];
    const buyExchangeName = exchanges[trade.buyExchange];

    const activeTrade = tradeRenderers[trade.id].activeTrade;

    const buyInfoNode = activeTrade.querySelector('.buy-info');
    const boughtInTargetCurrency = formatCurrency(trade.amount * trade.buyPrice);
    const boughtInWalletCurrency = formatCurrency(trade.amount);
    let boughtTime = formatTime(trade.startTime);
    boughtTime = `<span style="white-space: nowrap;">at <strong>${boughtTime}</strong></span>`;
    buyInfoNode.innerHTML = `Bought <strong>${boughtInTargetCurrency}</strong> ${currencyCode}
      for <strong>${boughtInWalletCurrency}</strong> ${walletCurrencyCode} ${boughtTime}`;

    const buyExchangeIconNode = activeTrade.querySelector('.buy-exchange-icon');
    buyExchangeIconNode.setAttribute('src', getExchangeIcon(buyExchangeName));

    const buyExchangeNameNode = activeTrade.querySelector('.buy-exchange-name');
    buyExchangeNameNode.textContent = buyExchangeName;

    const buyRateNode = activeTrade.querySelector('.buy-rate');
    buyRateNode.textContent = `${formatCurrency(1/trade.buyPrice)} ${walletCurrencyCode}`;
}

export function updateSellExchange(tradeState) {
    const trade = tradeState.data;
    const activeTradeNode = tradeRenderers[trade.id].activeTrade;
    if (trade.sellExchange !== -1) {
        const sellExchangeName = exchanges[trade.sellExchange];

        const sellExchangeIconNode = activeTradeNode.querySelector('.sell-exchange-icon');
        sellExchangeIconNode.setAttribute('src', getExchangeIcon(sellExchangeName));

        const sellExchangeNameNode = activeTradeNode.querySelector('.sell-exchange-name');
        sellExchangeNameNode.textContent = sellExchangeName;
    }
}

export function initSellInfo(tradeState) {
    const trade = tradeState.data;
    const walletCurrencyCode = trade.wallet.toUpperCase();
    const currencyCode = currencies[trade.currency];
    const activeTradeNode = tradeRenderers[trade.id].activeTrade;
    const sellInfoNode = activeTradeNode.querySelector('.sell-info');

    updateSellExchange(tradeState);

    const sellRateNode = activeTradeNode.querySelector('.sell-rate');
    if (trade.status === 'completed') {
        sellRateNode.textContent = `${formatCurrency(1/trade.sellPrice)} ${walletCurrencyCode}`;
    } else {
        sellRateNode.textContent = '';
    }

    if (trade.status === 'completed') {
        const soldInTargetCurrency = formatCurrency(trade.amount * trade.buyPrice);
        const soldInWalletCurrency = formatCurrency(trade.amount * trade.buyPrice / trade.sellPrice);
        let soldTime = formatTime(trade.endTime);
        soldTime = `<span style="white-space: nowrap;">at <strong>${soldTime}</strong></span>`;
        sellInfoNode.innerHTML = `Sold <strong>${soldInTargetCurrency}</strong> ${currencyCode}
          for <strong>${soldInWalletCurrency}</strong> ${walletCurrencyCode} ${soldTime}`;
    } else {
        sellInfoNode.innerHTML = 'Waiting';
    }
}


export function updateScrollProgress(tradeState) {

}

export function initProgressMessage(tradeState) {
    const trade = tradeState.data;
    const currencyCode = currencies[trade.currency];
    const progressMessage = tradeRenderers[tradeState.data.id].progressMessage;
    if (trade.status === 'completed') {
        const sellExchangeName = exchanges[trade.sellExchange];
        progressMessage.innerHTML = `Selling <strong>${currencyCode}</strong> at <strong>${sellExchangeName}</strong>`;
    } else {
        progressMessage.innerHTML = 'Finding Best Exchange';
    }

    updateProgressTimer(tradeState);
}

export function updateProgressTimer(tradeState) {
    const trade = tradeState.data;
    const timeSoFar = Math.max(new Date().getTime() - trade.startTime, 0);
    const progressTimer = tradeRenderers[tradeState.data.id].progressTimer;
    progressTimer.textContent = formatDuration(timeSoFar);
}

export function updateSellProgress(tradeState) {
    const progressBackground = tradeRenderers[tradeState.data.id].progressBackground;
    const progress = (tradeState.sellProgress - 1) * 100;
    if (state.stage.isVertical) {
        anime.set(progressBackground, {
            skew: '-15deg',
            translateX: `${progress}%`
        });
    } else {
        anime.set(progressBackground, {
            translateX: `${progress}%`
        });
    }
}

export function updateBackground(tradeState) {
    const background = tradeRenderers[tradeState.data.id].background;
    if (state.stage.isVertical) {
        anime.set(background, {
            translateX: `${-(1 - tradeState.backgroundProgress) * 100}%`,
            translateY: 0,
        });
    } else {
        anime.set(background, {
            translateX: 0,
            translateY: `${-(1 - tradeState.backgroundProgress) * 100}%`,
        });
    }
}

export function updateBuySection(tradeState) {
    const buySection = tradeRenderers[tradeState.data.id].buySection;
    if (state.stage.isVertical) {
        anime.set(buySection, {
            translateX: 0,
            translateY: `${(1 - tradeState.buySectionProgress) * 100}%`,
        });
    } else {
        anime.set(buySection, {
            translateX: `${(1 - tradeState.buySectionProgress) * 100}%`,
            translateY: 0,
        });
    }
}

export function updateProcessSection(tradeState) {
    const processSection = tradeRenderers[tradeState.data.id].processSection;
    if (state.stage.isVertical) {
        anime.set(processSection, {
            translateX: 0,
            translateY: `${-(1 - tradeState.processSectionProgress) * 100}%`,
        });
    } else {
        anime.set(processSection, {
            translateX: `${-(1 - tradeState.processSectionProgress) * 100}%`,
            translateY: 0,
        });
    }
}

export function updateSellSection(tradeState) {
    const sellSection = tradeRenderers[tradeState.data.id].sellSection;
    if (state.stage.isVertical) {
        anime.set(sellSection, {
            translateX: 0,
            translateY: `${(1 - tradeState.sellSectionProgress) * 100}%`,
        });
    } else {
        anime.set(sellSection, {
            translateX: `${(1 - tradeState.sellSectionProgress) * 100}%`,
            translateY: 0,
        });
    }
}

export function updateSuccessTransition(tradeState) {
    const processInfo = tradeRenderers[tradeState.data.id].processInfo;
    const successInfo = tradeRenderers[tradeState.data.id].successInfo;
    const progressBackground = tradeRenderers[tradeState.data.id].progressBackground;
    anime.set(processInfo, {
        opacity: 1 - tradeState.successTransitionProgress,
    });
    anime.set(progressBackground, {
        opacity: 0.1 * (1 - tradeState.successTransitionProgress),
    });
    anime.set(successInfo, {
        opacity: tradeState.successTransitionProgress,
    });
}

export function updateParticles(tradeState) {
    const particles1 = tradeRenderers[tradeState.data.id].particles1;
    const particles2 = tradeRenderers[tradeState.data.id].particles2;
    const opacity = 1 - 2 * Math.abs(tradeState.particlesProgress - 0.5);
    const scale = 0.6 + (1.5 - 0.6) * tradeState.particlesProgress;
    anime.set(particles1, {
        opacity,
        scale,
        translateY: '-50%'
    });
    anime.set(particles2, {
        opacity,
        scale,
        translateY: '-50%'
    });
}

export function listenForTradeClose(tradeState, timeout) {
    const activeTrade = tradeRenderers[tradeState.data.id].activeTrade;
    return listenForClose(activeTrade.querySelector('.close-btn'), timeout);
}

export function closeTradeProcess(tradeState) {
    const activeTrade = tradeRenderers[tradeState.data.id].activeTrade;
    activeTrades.removeChild(activeTrade);
    delete tradeRenderers[tradeState.data.id];
}
