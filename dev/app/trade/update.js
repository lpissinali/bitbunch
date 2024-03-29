import anime from 'animejs';
import { state } from './state';
import {
  HORIZONTAL_EXCHANGES_HEIGHT,
  HORIZONTAL_SELECTED_CURRENCY_HEIGHT,
  SELECT_COLUMN_WIDTH,
  SELECTED_CURRENCY_HEIGHT,
  SELECTED_CURRENCY_HEIGHT_SUCCESS,
  SELECTED_CURRENCY_WIDTH,
  SELECTED_EXCHANGE_WIDTH,
  TABLET_SELECTED_EXCHANGE_WIDTH,
  VERTICAL_EXCHANGES_WIDTH,
  TABLET_EXCHANGES_WIDTH,
} from './layout';
import {
  currencies,
  currencyCodeToName,
  exchanges,
  getCurrencyIcon,
  getExchangeIcon,
} from './model';
import { formatCurrency, formatTime, fitToBoundaries } from './utils';
import { IDLE_SCROLL_SPEED } from './animations/idle.js';


const container = document.getElementById('trade-display');
const currenciesScroll = container.querySelector('.currencies-box .scrolling-area');
const buyExchangesScroll = container.querySelector('.buyExchanges-box .scrolling-area');
const sellExchangesScroll = container.querySelector('.sellExchanges-box .scrolling-area');

const connectorsContainer = document.getElementById('connectors-display');

const buyExchangesSelector = connectorsContainer.querySelector('.select-marker1');
const sellExchangesSelector = connectorsContainer.querySelector('.select-marker2');
const { width: markerWidth } = buyExchangesSelector.getBoundingClientRect();
const spaceToEdge = 0.5 * markerWidth + 10;

const line1 = connectorsContainer.querySelector('.line1');
const line2 = connectorsContainer.querySelector('.line2');
const line1Gradient = connectorsContainer.querySelector('defs #exchange-connection-line1-fill');
const line2Gradient = connectorsContainer.querySelector('defs #exchange-connection-line2-fill');

const selectColumn1 = container.querySelector('.buyExchanges-box .select-column');
const selectColumn2 = container.querySelector('.sellExchanges-box .select-column');

const selectRect1 = document.querySelector('.select-rect1');
const selectRect2 = document.querySelector('.select-rect2');
const tradeRect = document.querySelector('.selected-trade');
const shortTradeContainer = tradeRect.querySelector('.short-details');
const shortTradeIcon = tradeRect.querySelector('.short-details .icon-container');
const shortTradeDetails = tradeRect.querySelector('.short-details .info');
const tradeSuccessSection = tradeRect.querySelector('.success-section');
const tradeSuccessSectionParent = tradeSuccessSection.closest('.overflow-hidden');

const buyInfoSection = tradeRect.querySelector('.buy-info');
const buyInfoSectionContent = buyInfoSection.querySelector('.content');
const sellInfoSection = tradeRect.querySelector('.sell-info');
const sellInfoProgress = sellInfoSection.querySelector('.sell-progress');
const sellInfoSectionContent = sellInfoSection.querySelector('.content');

const particles1 = document.querySelector('.particles .particles1');
const particles2 = document.querySelector('.particles .particles2');

const overlay1 = document.querySelector('.overlay-1');
const overlay2 = document.querySelector('.overlay-2');

export function updateBuyExchanges() {
  if (state.stage.isVertical) {
    anime.set(buyExchangesScroll, {
      translateY: state.columns.buyExchanges.offset,
    });
  } else {
    anime.set(buyExchangesScroll, {
      translateX: state.columns.buyExchanges.offset,
    });
  }
}

export function updateSellExchanges() {
  if (state.stage.isVertical) {
    anime.set(sellExchangesScroll, {
      translateY: state.columns.sellExchanges.offset,
    });
  } else {
    anime.set(sellExchangesScroll, {
      translateX: state.columns.sellExchanges.offset,
    });
  }
}

export function updateCurrencies() {
  if (state.stage.isVertical) {
    anime.set(currenciesScroll, {
      translateY: state.columns.currencies.offset,
    });
  } else {
    anime.set(currenciesScroll, {
      translateX: state.columns.currencies.offset,
    });
  }
}

export function updateOverlays() {
  if (state.stage.isVertical) {
    anime.set([overlay1, overlay2], {
      opacity: 0,
    });
  } else {
    anime.set([overlay1, overlay2], {
      opacity: state.selectProgress,
    });
  }
}

export function updateCurrenciesOpacity() {
  if (state.stage.isVertical) {
    anime.set(currenciesScroll, {
      opacity: 1 - state.showMoreProgress,
    });
  } else {
    anime.set(currenciesScroll, {
      opacity: 1 - state.expandProgress,
    });
  }
}

export function getTargetOffset(index, object) {
  // Two cases of object position on screen, choose closest to middle
  const itemSize = object.size + object.gap;
  const size = state.stage.isVertical ? state.stage.height : state.stage.width;
  const off1 = object.offset + index * itemSize;
  const off2 = object.offset - (object.count - index) * itemSize;
  const delta1 = Math.abs(size * 0.5 - off1);
  const delta2 = Math.abs(size * 0.5 - off2);
  if (delta1 > delta2) {
    return off2 + object.size * 0.5;
  }
  return off1 + object.size * 0.5;
}

const HORIZONTAL_OFFSET_MARKER = 14;

export function updateExchangeMarkers(newSelection) {
  let buyExchangeOffset = getTargetOffset(state.selection.buyExchange, state.columns.buyExchanges);
  let sellExchangeOffset = getTargetOffset(
    state.selection.sellExchange,
    state.columns.sellExchanges
  );
  if (newSelection) {
    buyExchangeOffset
      += state.seekProgress
      * (getTargetOffset(newSelection.buyExchange, state.columns.buyExchanges) - buyExchangeOffset);
    sellExchangeOffset
      += state.seekProgress
      * (getTargetOffset(newSelection.sellExchange, state.columns.sellExchanges)
        - sellExchangeOffset);
  }
  if (state.stage.isVertical) {
    buyExchangeOffset = fitToBoundaries(
      buyExchangeOffset,
      spaceToEdge,
      state.stage.height - spaceToEdge
    );
    sellExchangeOffset = fitToBoundaries(
      sellExchangeOffset,
      spaceToEdge,
      state.stage.height - spaceToEdge
    );

    const exchangesWidth = state.stage.isTablet ? TABLET_EXCHANGES_WIDTH : VERTICAL_EXCHANGES_WIDTH;
    anime.set(buyExchangesSelector, {
      translateX: exchangesWidth + HORIZONTAL_OFFSET_MARKER * state.selectProgress,
      translateY: buyExchangeOffset,
    });
    anime.set(sellExchangesSelector, {
      translateX:
        state.stage.width - exchangesWidth - HORIZONTAL_OFFSET_MARKER * state.selectProgress,
      translateY: sellExchangeOffset,
    });
    const borderOpacity = 1 - state.selectProgress;
    anime.set(buyExchangesSelector.children[0], {
      opacity: borderOpacity,
    });
    anime.set(sellExchangesSelector.children[0], {
      opacity: borderOpacity,
    });
  } else {
    buyExchangeOffset = fitToBoundaries(
      buyExchangeOffset,
      spaceToEdge,
      state.stage.width - spaceToEdge
    );
    sellExchangeOffset = fitToBoundaries(
      sellExchangeOffset,
      spaceToEdge,
      state.stage.width - spaceToEdge
    );

    anime.set(buyExchangesSelector, {
      translateX: buyExchangeOffset,
      translateY: HORIZONTAL_EXCHANGES_HEIGHT,
    });
    anime.set(sellExchangesSelector, {
      translateX: sellExchangeOffset,
      translateY: state.stage.height - HORIZONTAL_EXCHANGES_HEIGHT,
    });
    anime.set(buyExchangesSelector.children[0], {
      opacity: 1,
    });
    anime.set(sellExchangesSelector.children[0], {
      opacity: 1,
    });
  }
}

export function scrollBuyExchangeMarkerToCenter() {
  return scrollExchangeMarkerToCenter(buyExchangesSelector);
}

export function scrollSellExchangeMarkerToCenter() {
  return scrollExchangeMarkerToCenter(sellExchangesSelector);
}

export function scrollExchangeMarkerToCenter(exchangeMarker) {
  if (state.stage.isVertical) {
    return scrollExchangeMarkerToCenterVertically(exchangeMarker);
  }
  return scrollExchangeMarkerToCenterHorizontally(exchangeMarker);
}

export function scrollExchangeMarkerToCenterVertically(exchangeMarker) {
  const initialOffsetY = parseFloat(anime.get(exchangeMarker, 'translateY'));
  const stageCenterY = state.stage.height / 2;
  const duration = Math.abs(stageCenterY - initialOffsetY) / IDLE_SCROLL_SPEED;
  const scrollDirection = initialOffsetY <= stageCenterY ? 1 : -1;

  return {
    duration,
    easing: 'linear',
    update(animation) {
      anime.set(exchangeMarker, {
        translateY: initialOffsetY + animation.currentTime * scrollDirection * IDLE_SCROLL_SPEED,
      });
    },
  };
}

export function scrollExchangeMarkerToCenterHorizontally(exchangeMarker) {
  const initialOffsetX = parseFloat(anime.get(exchangeMarker, 'translateX'));
  const stageCenterX = state.stage.width / 2;
  const duration = Math.abs(stageCenterX - initialOffsetX) / IDLE_SCROLL_SPEED;
  const scrollDirection = initialOffsetX <= stageCenterX ? 1 : -1;

  return {
    duration,
    easing: 'linear',
    update(animation) {
      anime.set(exchangeMarker, {
        translateX: initialOffsetX + animation.currentTime * scrollDirection * IDLE_SCROLL_SPEED,
      });
    },
  };
}

function updateLineGradient(lineGradient, { x1, y1, x2, y2 }) {
  if (typeof x1 === 'number') {
    lineGradient.setAttribute('x1', x1);
  }
  if (typeof y1 === 'number') {
    lineGradient.setAttribute('y1', y1);
  }
  if (typeof x2 === 'number') {
    lineGradient.setAttribute('x2', x2);
  }
  if (typeof y2 === 'number') {
    lineGradient.setAttribute('y2', y2);
  }
}

export function getMaxSelectedCurrentWidth() {
  const { width: tradeExchangeWidth } = container.getBoundingClientRect();
  const { width: buyExchangesBoxWidth } = container
    .querySelector('.buyExchanges-box')
    .getBoundingClientRect();
  const { width: sellExchangesBoxWidth } = container
    .querySelector('.sellExchanges-box')
    .getBoundingClientRect();
  return Math.min(
    SELECTED_CURRENCY_WIDTH,
    tradeExchangeWidth - buyExchangesBoxWidth - sellExchangesBoxWidth - 2 * (12 + 4)
  );
}

export function updateLines() {
  if (state.lineProgress === 0) {
    anime.set(line1, { x1: 0, x2: 0, y1: 0, y2: 0 });
    anime.set(line2, { x1: 0, x2: 0, y1: 0, y2: 0 });
    return;
  }

  const buyCurrency = state.selection.buyCurrency === undefined
    ? state.selection.currency
    : state.selection.buyCurrency;
  const sellCurrency = state.selection.sellCurrency === undefined
    ? state.selection.currency
    : state.selection.sellCurrency;

  if (state.stage.isVertical) {
    const exchangesWidth = state.stage.isTablet ? TABLET_EXCHANGES_WIDTH : VERTICAL_EXCHANGES_WIDTH;

    const maxWidth = getMaxSelectedCurrentWidth();
    const expandDelta = (maxWidth - state.columns.currencies.size) * 0.5;

    {
      const xFrom = exchangesWidth + HORIZONTAL_OFFSET_MARKER * state.selectProgress;
      const xTo = state.stage.width * 0.5
        - state.columns.currencies.size * 0.5
        - state.expandProgress * expandDelta;
      const targetX = xFrom + (xTo - xFrom) * state.lineProgress;
      const positions = { x1: xFrom, x2: targetX };
      if (!state.isClosingInstantTrade) {
        const targetY1 = getTargetOffset(state.selection.buyExchange, state.columns.buyExchanges);
        positions.y1 = targetY1;
        positions.y1 = fitToBoundaries(positions.y1, spaceToEdge, state.stage.height - spaceToEdge);

        const targetY2 = getTargetOffset(buyCurrency, state.columns.currencies);
        positions.y2 = targetY1 + (targetY2 - targetY1) * state.lineProgress;
        positions.y2 = fitToBoundaries(positions.y2, spaceToEdge, state.stage.height - spaceToEdge)
      }
      anime.set(line1, positions);
      updateLineGradient(line1Gradient, positions);
    }
    {
      const xFrom = state.stage.width - exchangesWidth - HORIZONTAL_OFFSET_MARKER * state.selectProgress;
      const xTo = state.stage.width * 0.5
        + state.columns.currencies.size * 0.5
        + state.expandProgress * expandDelta;
      const targetX = xFrom + (xTo - xFrom) * state.lineProgress;
      const positions = { x1: xFrom, x2: targetX };
      if (!state.isClosingInstantTrade) {
        const targetY1 = getTargetOffset(state.selection.sellExchange, state.columns.sellExchanges);
        positions.y1 = targetY1;
        positions.y1 = fitToBoundaries(positions.y1, spaceToEdge, state.stage.height - spaceToEdge);

        const targetY2 = getTargetOffset(sellCurrency, state.columns.currencies);
        positions.y2 = targetY1 + (targetY2 - targetY1) * state.lineProgress;
        positions.y2 = fitToBoundaries(positions.y2, spaceToEdge, state.stage.height - spaceToEdge);
      }
      anime.set(line2, positions);
      updateLineGradient(line2Gradient, positions);
    }
  } else {
    const expandDelta = (HORIZONTAL_SELECTED_CURRENCY_HEIGHT - state.columns.currencies.size) * 0.5;
    {
      const yFrom = HORIZONTAL_EXCHANGES_HEIGHT;
      const yTo = state.stage.height * 0.5
        - state.columns.currencies.size * 0.5
        - state.showMoreProgress * expandDelta;
      const targetY = yFrom + (yTo - yFrom) * state.lineProgress;
      const positions = { y1: yFrom, y2: targetY };
      if (!state.isClosingInstantTrade) {
        const targetX1 = getTargetOffset(state.selection.buyExchange, state.columns.buyExchanges);
        positions.x1 = targetX1;
        positions.x1 = fitToBoundaries(positions.x1, spaceToEdge, state.stage.width - spaceToEdge);

        const targetX2 = getTargetOffset(buyCurrency, state.columns.currencies);
        positions.x2 = targetX1 + (targetX2 - targetX1) * state.lineProgress;
        positions.x2 = fitToBoundaries(positions.x2, spaceToEdge, state.stage.width - spaceToEdge);
      }
      anime.set(line1, positions);
      updateLineGradient(line1Gradient, positions);
    }
    {
      const yFrom = state.stage.height - HORIZONTAL_EXCHANGES_HEIGHT;
      const yTo = state.stage.height * 0.5
        + state.columns.currencies.size * 0.5
        + state.showMoreProgress * expandDelta;
      const targetY = yFrom + (yTo - yFrom) * state.lineProgress;
      const positions = { y1: yFrom, y2: targetY };
      if (!state.isClosingInstantTrade) {
        const targetX1 = getTargetOffset(state.selection.sellExchange, state.columns.sellExchanges);
        positions.x1 = targetX1;
        positions.x1 = fitToBoundaries(positions.x1, spaceToEdge, state.stage.width - spaceToEdge);

        const targetX2 = getTargetOffset(sellCurrency, state.columns.currencies);
        positions.x2 = targetX1 + (targetX2 - targetX1) * state.lineProgress;
        positions.x2 = fitToBoundaries(positions.x2, spaceToEdge, state.stage.width - spaceToEdge);
      }
      anime.set(line2, positions);
      updateLineGradient(line2Gradient, positions);
    }
  }
}

export function updateSelectColumns() {
  if (state.stage.isVertical) {
    const exchangesWidth = state.stage.isTablet ? TABLET_EXCHANGES_WIDTH : VERTICAL_EXCHANGES_WIDTH;
    {
      const xFrom = exchangesWidth - SELECT_COLUMN_WIDTH;
      const x = xFrom + state.selectProgress * SELECT_COLUMN_WIDTH - 1;
      anime.set(selectColumn1, { translateX: x });
    }
    {
      const xFrom = 0;
      const x = xFrom - state.selectProgress * SELECT_COLUMN_WIDTH + 1;
      anime.set(selectColumn2, { translateX: x });
    }
  }
}

export function initSelectRects() {
  anime.set(selectRect1, {
    opacity: 0,
    visibility: 'visible',
  });
  anime.set(selectRect2, {
    opacity: 0,
    visibility: 'visible',
  });
  {
    const imageNode = selectRect1.querySelector('img');
    const textNode = selectRect1.querySelector('.text');

    const exchangeText = exchanges[state.selection.buyExchange];

    const newImage = document.createElement('img');
    newImage.setAttribute('src', getExchangeIcon(exchangeText, true))
    selectRect1.replaceChild(newImage, imageNode);

    textNode.textContent = exchangeText;
  }
  {
    const imageNode = selectRect2.querySelector('img');
    const textNode = selectRect2.querySelector('.text');

    const exchangeText = exchanges[state.selection.sellExchange];

    const newImage = document.createElement('img');
    newImage.setAttribute('src', getExchangeIcon(exchangeText, true))
    selectRect2.replaceChild(newImage, imageNode);

    textNode.textContent = exchangeText;
  }
}

export function hideSelectRects() {
  anime.set(selectRect1, {
    visibility: 'hidden',
  });
  anime.set(selectRect2, {
    visibility: 'hidden',
  });
}

export function updateSelectRectsOpacity() {
  anime.set([selectRect1, selectRect2], {
    opacity: state.showSelectRectsProgress,
  });
}

export function updateSelectRects() {
  if (state.stage.isVertical) {
    const size = state.stage.isTablet ? 44 : 54;
    const y = (state.stage.height - size) * 0.5;
    const exchangesWidth = state.stage.isTablet ? TABLET_EXCHANGES_WIDTH : VERTICAL_EXCHANGES_WIDTH;
    const selectedExchangeWidth = state.stage.isTablet
      ? TABLET_SELECTED_EXCHANGE_WIDTH
      : SELECTED_EXCHANGE_WIDTH;
    const width = size + state.selectProgress * (selectedExchangeWidth - size);
    {
      const xFrom = (exchangesWidth - size) * 0.5;
      const xTo = (exchangesWidth + SELECT_COLUMN_WIDTH - selectedExchangeWidth) * 0.5;
      const x = xFrom + state.selectProgress * (xTo - xFrom);
      anime.set(selectRect1, {
        translateX: x,
        translateY: y,
        width,
      });
    }
    {
      const xFrom = state.stage.width - (exchangesWidth + size) * 0.5;
      const xTo = state.stage.width
        - (exchangesWidth + SELECT_COLUMN_WIDTH - selectedExchangeWidth) * 0.5
        - selectedExchangeWidth;
      const x = xFrom + state.selectProgress * (xTo - xFrom);
      anime.set(selectRect2, {
        translateX: x,
        translateY: y,
        width,
      });
    }
  } else {
    const MAX_WIDTH = 130;
    const size = 44;
    const width = size + state.selectProgress * (MAX_WIDTH - size);
    const x = (state.stage.width - width) * 0.5;
    {
      const y = (HORIZONTAL_EXCHANGES_HEIGHT - size) * 0.5;
      anime.set(selectRect1, {
        translateX: x,
        translateY: y,
        width,
      });
    }
    {
      const y = state.stage.height - (HORIZONTAL_EXCHANGES_HEIGHT + size) * 0.5;
      anime.set(selectRect2, {
        translateX: x,
        translateY: y,
        width,
      });
    }
  }
}

export function initTradeRect() {
  anime.set(tradeRect, {
    visibility: 'visible',
    opacity: 0,
  });
  const imageNode = tradeRect.querySelector('.icon-container img');
  const nameNode = shortTradeDetails.querySelector('.title .name');
  const codeNode = shortTradeDetails.querySelector('.title .currency');
  const valueNode = shortTradeDetails.querySelector('.profit .value');
  const currencyNode = shortTradeDetails.querySelector('.profit .currency');

  const currencyCode = currencies[state.selection.currency];

  const newImage = document.createElement('img');
  newImage.setAttribute('src', getCurrencyIcon(currencyCode, true))
  imageNode.parentNode.replaceChild(newImage, imageNode);

  codeNode.textContent = currencyCode;
  nameNode.textContent = currencyCodeToName[currencyCode];
  currencyNode.textContent = state.wallet.toUpperCase();
  valueNode.textContent = formatCurrency(state.trade.current.spread);
}

export function hideTradeRect() {
  anime.set(tradeRect, {
    visibility: 'hidden',
  });
}

export function updateShortDetails() {
  if (state.stage.isVertical) {
    const xIcon = state.showMoreProgress * (shortTradeContainer.offsetWidth / 2 - 25);
    const yInfo = state.showMoreProgress * 60;
    anime.set(shortTradeIcon, {
      translateX: xIcon > 0 ? xIcon : 0,
    });

    anime.set(shortTradeDetails, {
      translateY: yInfo,
    });
  }
}

export function updateCurrencyRectOpacity() {
  anime.set(tradeRect, {
    opacity: state.showCurrencyRectProgress,
  });
}

export function updateTradeRect() {
  if (state.stage.isVertical) {
    const maxWidth = getMaxSelectedCurrentWidth();
    const { size } = state.columns.currencies;
    const width = size + state.expandProgress * (maxWidth - size);
    const xFrom = (state.stage.width - size) * 0.5;
    const xTo = (state.stage.width - maxWidth) * 0.5;
    const x = xFrom + state.expandProgress * (xTo - xFrom);
    const height = size + state.showMoreProgress * (SELECTED_CURRENCY_HEIGHT - size);
    // const y = (state.stage.height - height) * 0.5;
    const targetOffset = getTargetOffset(state.selection.currency, state.columns.currencies);
    const y = targetOffset - height * 0.5;

    anime.set(tradeRect, {
      translateX: x,
      translateY: y,
      width,
      height,
    });

    anime.set(shortTradeDetails, {
      opacity: state.expandProgress,
    });

    if (state.showMoreProgress === 1) {
      shortTradeContainer.classList.toggle('vertical-expanded', true);
    } else {
      shortTradeContainer.classList.toggle('vertical-expanded', false);
    }
  } else {
    const { size } = state.columns.currencies;
    const width = size + state.expandProgress * (SELECTED_CURRENCY_WIDTH - size);

    const targetOffset = getTargetOffset(state.selection.currency, state.columns.currencies);
    const xFrom = targetOffset - size * 0.5;
    const xTo = targetOffset - SELECTED_CURRENCY_WIDTH * 0.5;

    const x = xFrom + state.expandProgress * (xTo - xFrom);
    const height = size + state.showMoreProgress * (HORIZONTAL_SELECTED_CURRENCY_HEIGHT - size);
    const y = (state.stage.height - height) * 0.5;
    anime.set(tradeRect, {
      translateX: x,
      translateY: y,
      width,
      height,
    });
    anime.set(shortTradeDetails, {
      opacity: state.expandProgress,
    });
  }
}

export function initShowMore() {
  const profitNode = shortTradeDetails.querySelector('.profit');

  const valueNode = tradeSuccessSection.querySelector('.value');
  const currencyNode = tradeSuccessSection.querySelector('.currency');

  // currencyNode.textContent = state.wallet.toUpperCase();
  currencyNode.textContent = state.percentage;
  valueNode.textContent = formatCurrency(state.trade.current.profit);

  const trade = state.trade.current;
  const walletCurrency = state.wallet.toUpperCase();
  const currencyCode = currencies[trade.currency];
  const buyExchangeName = exchanges[trade.buyExchange];
  const sellExchangeName = exchanges[trade.sellExchange];

  const boughtInTargetCurrency = trade.buyPrice; //formatCurrency(trade.amount * trade.buyPrice);
  const boughtInWalletCurrency = trade.buyPrice; //formatCurrency(trade.amount, 7);

  let time = formatTime(state.trade.current.startTime);
  time = `at <span style="white-space: nowrap;"> ${time}</span>`;
  buyInfoSectionContent.innerHTML = `Buy <strong>${currencyCode}</strong> at <strong>${boughtInWalletCurrency} ${walletCurrency}</strong><br> on ${buyExchangeName} <strong>${time}</strong>`;

  const soldInTargetCurrency = boughtInTargetCurrency;
  const soldInWalletCurrency = trade.sellPrice; // formatCurrency(boughtInTargetCurrency / trade.sellPrice, 7);

  time = formatTime(state.trade.current.endTime);
  time = `at <span style="white-space: nowrap;">${time}</span>`;
  sellInfoSectionContent.innerHTML = `Sell <strong>${currencyCode}</strong> at <strong>${soldInWalletCurrency} ${walletCurrency}</strong><br> on ${sellExchangeName} <strong>${time}</strong>`;

  updateInstantTradeSuccess();
  updateInstantTradeInfoProgress();
}

export function updateInstantTradeSuccess() {
  if (state.stage.isVertical) {
    const offset = SELECTED_CURRENCY_HEIGHT;
    const currentHeight = tradeRect.offsetHeight;
    const height = currentHeight + state.successProgress * (SELECTED_CURRENCY_HEIGHT_SUCCESS - currentHeight);
    const targetOffset = getTargetOffset(state.selection.currency, state.columns.currencies);
    const y = targetOffset - height * 0.5;

    anime.set(tradeRect, {
      translateY: y,
      height,
    });

    anime.set(tradeSuccessSection, {
      translateY: offset * (1 - state.successProgress),
      opacity: state.successProgress,
    });

    if (state.successProgress === 1) {
      tradeSuccessSectionParent.classList.toggle('h-100', true);
    } else {
      tradeSuccessSectionParent.classList.toggle('h-100', false);
    }
  } else {
    const offset = HORIZONTAL_SELECTED_CURRENCY_HEIGHT;

    anime.set(tradeSuccessSection, {
      translateY: offset * (1 - state.successProgress),
      opacity: state.successProgress,
    });

    if (state.successProgress === 1) {
      tradeSuccessSectionParent.classList.toggle('h-100', true);
    } else {
      tradeSuccessSectionParent.classList.toggle('h-100', false);
    }
  }
}

export function updateInstantTradeInfoProgress() {
  const offset = SELECTED_CURRENCY_WIDTH;
  const progress = -2 * (0.5 - state.showInfoProgress);

  anime.set(buyInfoSection, {
    translateX: offset * progress,
  });

  anime.set(sellInfoSection, {
    translateX: -offset * progress,
  });
}

export function updateInstantTradeSellProgress() {
  const progress = state.showSellProgress * sellInfoSection.offsetWidth;

  anime.set(sellInfoProgress, {
    translateX: progress,
    scale: '1, 1',
  });
}

export function hideShowMore() {

}

export function hideSellProgress() {
  sellInfoProgress.style.transform = '';
}

export function updateParticles() {
  const opacity = 1 - 2 * Math.abs(state.particlesProgress - 0.5);
  const scale = 0.6 + (1.5 - 0.6) * state.particlesProgress;
  anime.set(particles1, {
    opacity,
    scale,
  });
  anime.set(particles2, {
    opacity,
    scale,
  });
}
