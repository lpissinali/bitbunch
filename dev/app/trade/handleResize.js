import anime from 'animejs';
import { state } from './state';
import {
  VERTICAL_CURRENCY_WIDTH,
  VERTICAL_EXCHANGES_WIDTH,
  VERTICAL_HEIGHT,
  HORIZONTAL_HEIGHT,
  HORIZONTAL_CURRENCY_WIDTH,
  HORIZONTAL_EXCHANGES_HEIGHT,
  BREAK_POINT,
} from './layout';
import {
  updateExchangeMarkers,
  updateLines,
  updateSelectColumns,
  updateSelectRects,
  updateTradeRect,
} from './update';

const mainContainer = document.getElementById('trade-exchange');
const container = document.getElementById('trade-display');
const connectorsContainer = document.getElementById('connectors-display');

const buyExchangesBox = container.querySelector('.buyExchanges-box');
const buyExchangesBackground = buyExchangesBox.querySelector('.exchanges-background');
const currenciesBox = container.querySelector('.currencies-box');
const sellExchangesBox = container.querySelector('.sellExchanges-box');
const sellExchangesBackground = sellExchangesBox.querySelector('.exchanges-background');

const currenciesScroll = container.querySelector('.currencies-box .scrolling-area');
const buyExchangesScroll = container.querySelector('.buyExchanges-box .scrolling-area');
const sellExchangesScroll = container.querySelector('.sellExchanges-box .scrolling-area');

const selectColumn1 = container.querySelector('.buyExchanges-box .select-column');
const selectColumn2 = container.querySelector('.sellExchanges-box .select-column');

const tradeRect = document.querySelector('.selected-trade');
const selectRect1 = document.querySelector('.select-rect1');
const selectRect2 = document.querySelector('.select-rect2');

const activeTradesContainer = document.querySelector('.active-trades-container');

function positionColumn(target, object, columnWidth) {
  let offset = -object.max;
  if (state.stage.isVertical) {
    anime.set(target, {
      translateX: 0,
      translateY: object.offset,
    });
    for (let i = 0; i < target.children.length; i++) {
      const child = target.children[i];
      anime.set(child, {
        translateX: (columnWidth - object.size) * 0.5,
        translateY: offset,
      });
      offset += object.size + object.gap;
    }
  } else {
    anime.set(target, {
      translateX: object.offset,
      translateY: 0,
    });
    for (let i = 0; i < target.children.length; i++) {
      const child = target.children[i];
      anime.set(child, {
        translateX: offset,
        translateY: (columnWidth - object.size) * 0.5,
      });
      offset += object.size + object.gap;
    }
  }
}

function updateCurrencyConnectors() {
  const { size } = state.columns.currencies;
  const halfSize = size * 0.5;
  const pos1 = state.stage.isVertical ? { cx: 0, cy: halfSize } : { cx: halfSize, cy: 0 };
  const pos2 = state.stage.isVertical ? { cx: size, cy: halfSize } : { cx: halfSize, cy: size };
  for (let i = 0; i < currenciesScroll.children.length; i++) {
    const child = currenciesScroll.children[i];
    const circles = child.querySelectorAll('circle');
    anime.set(circles[0], pos1);
    anime.set(circles[1], pos1);
    anime.set(circles[2], pos2);
    anime.set(circles[3], pos2);
  }
}

function updateDirection() {
  const { stage } = state;
  anime.set(mainContainer, {
    height: stage.height,
  });
  if (stage.isVertical) {
    anime.set(buyExchangesBackground, {
      width: VERTICAL_EXCHANGES_WIDTH,
      height: stage.height,
    });
    anime.set(sellExchangesBackground, {
      width: VERTICAL_EXCHANGES_WIDTH,
      height: stage.height,
    });
    positionColumn(currenciesScroll, state.columns.currencies, 0);
    positionColumn(buyExchangesScroll, state.columns.buyExchanges, VERTICAL_EXCHANGES_WIDTH);
    positionColumn(sellExchangesScroll, state.columns.sellExchanges, VERTICAL_EXCHANGES_WIDTH);
    updateCurrencyConnectors();

    const columnRect = selectColumn1.getBBox();
    anime.set(selectColumn1, {
      visibility: 'visible',
      translateY: (stage.height - columnRect.height) * 0.5,
    });
    anime.set(selectColumn2, {
      visibility: 'visible',
      translateY: (stage.height - columnRect.height) * 0.5,
    });

    selectRect1.classList.toggle('horizontal', false);
    selectRect2.classList.toggle('horizontal', false);

    tradeRect.classList.toggle('horizontal', false);
    mainContainer.classList.toggle('horizontal', false);

    if (activeTradesContainer) activeTradesContainer.classList.toggle('horizontal', false);
  } else {
    anime.set(buyExchangesBackground, {
      width: stage.width,
      height: HORIZONTAL_EXCHANGES_HEIGHT,
    });
    anime.set(sellExchangesBackground, {
      width: stage.width,
      height: HORIZONTAL_EXCHANGES_HEIGHT,
    });
    positionColumn(currenciesScroll, state.columns.currencies, 0);
    positionColumn(buyExchangesScroll, state.columns.buyExchanges, HORIZONTAL_EXCHANGES_HEIGHT);
    positionColumn(sellExchangesScroll, state.columns.sellExchanges, HORIZONTAL_EXCHANGES_HEIGHT);
    updateCurrencyConnectors();

    anime.set(selectColumn1, { visibility: 'hidden' });
    anime.set(selectColumn2, { visibility: 'hidden' });

    selectRect1.classList.toggle('horizontal', true);
    selectRect2.classList.toggle('horizontal', true);

    tradeRect.classList.toggle('horizontal', true);

    mainContainer.classList.toggle('horizontal', true);
    if (activeTradesContainer) activeTradesContainer.classList.toggle('horizontal', true);
  }
}

function updateOnResize() {
  const { stage } = state;
  if (stage.isVertical) {
    anime.set(currenciesBox, {
      translateX: stage.width * 0.5,
      translateY: 0,
    });
    anime.set(sellExchangesBox, {
      translateX: stage.width - VERTICAL_EXCHANGES_WIDTH,
      translateY: 0,
    });
  } else {
    anime.set(currenciesBox, {
      translateX: 0,
      translateY: stage.height * 0.5,
    });
    anime.set(sellExchangesBox, {
      translateX: 0,
      translateY: stage.height - HORIZONTAL_EXCHANGES_HEIGHT,
    });
  }
  updateLines();
  updateExchangeMarkers();
  if (state.selectProgress) {
    updateSelectColumns();
    updateSelectRects();
    updateTradeRect();
  }
}

export function handleResize() {
  state.stage.width = mainContainer.clientWidth;
  const isVertical = state.stage.width >= BREAK_POINT;
  if (isVertical) {
    state.stage.height = VERTICAL_HEIGHT;
  } else {
    state.stage.height = HORIZONTAL_HEIGHT;
  }
  if (state.stage.isVertical !== isVertical) {
    state.stage.isVertical = isVertical;
    updateDirection();
    updateExchangeMarkers();
  }
  updateOnResize();
}
