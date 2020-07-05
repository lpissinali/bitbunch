import anime from 'animejs';
import { state } from '../state';
import {
  updateBuyExchanges,
  updateSellExchanges,
  updateCurrencies,
  updateCurrenciesOpacity,
  updateShortDetails,
  updateExchangeMarkers,
  updateLines,
  updateSelectColumns,
  initSelectRects,
  updateSelectRects,
  hideSelectRects,
  initTradeRect,
  updateTradeRect,
  hideTradeRect,
  getTargetOffset,
  initShowMore,
  updateInstantTradeSuccess,
  hideShowMore,
  updateParticles,
  updateInstantTradeInfoProgress,
  updateInstantTradeSellProgress,
  hideSellProgress,
  updateSelectRectsOpacity,
  updateCurrencyRectOpacity,
  updateOverlays,
} from '../update';
import { clipOffset, scrollColumn, listenForClose } from './helpers';
import { SELECTED_EXCHANGE_WIDTH } from '../layout';
import { IDLE_SCROLL_SPEED } from "./idle.js";
import { SELECTED_CURRENCY_WIDTH } from "../layout.js";
import { scrollBuyExchangeMarkerToCenter, scrollSellExchangeMarkerToCenter } from "../update.js";

function centerItemOffset(index, object) {
  const offset = getTargetOffset(index, object);
  const size = state.stage.isVertical ? state.stage.height : state.stage.width;
  const targetOffset = size * 0.5;
  return targetOffset - offset;
}

function ensureItemVisibleOffset(index, object) {
  const offset = getTargetOffset(index, object);
  const size = state.stage.isVertical ? state.stage.height : state.stage.width;
  if (offset < 0) {
    return object.size - offset;
  }
  if (offset > size) {
    return size - object.size - offset;
  }
  return offset;
}

function offscreenItemOffset(index, object) {
  const size = state.stage.isVertical ? state.stage.height : state.stage.width;
  const offset = getTargetOffset(index, object);
  const targetOffset = size + object.size * 0.5;
  return targetOffset - offset;
}

export function instantTradeAnimation() {
  const timeline = new anime.timeline();
  const WAIT_TIME_FOR_CLOSE = 5000;
  const closeButton = document.querySelector('#close-instant-trade');
  return scrollIntoView()
    .then(selectCurrency)
    .then(showInstantTrade)
    .then(showInstantTradeSellProgress)
    .then(showInstantTradeSuccess)
    .then(() => {
      return listenForClose(closeButton, WAIT_TIME_FOR_CLOSE);
    })
    .then(closeInstantTrade);
}

export function longTradeAnimation() {
  return scrollIntoView()
    .then(selectCurrency)
    .then(closeLongTrade);
}

export function scrollIntoView() {
  const timeline = new anime.timeline();
  const SEEK_DURATION = 700;

  // Scroll to current trade
  const currentTrade = state.trade.current;

  // Scroll currencies so target currency is within screen bounds
  const currencyInitialOffset = ensureItemVisibleOffset(
    currentTrade.currency,
    state.columns.currencies
  );
  const currencySeekDuration = SEEK_DURATION;
  timeline.add(
    scrollColumn(
      state.columns.currencies,
      currencyInitialOffset,
      currencySeekDuration,
      updateCurrencies
    ),
    0
  );

  // Scroll exchanges column so buyExchange is centered
  const buyExchangeScrollOffset = centerItemOffset(currentTrade.buyExchange, state.columns.buyExchanges);
  const buyExchangeSeekDuration = SEEK_DURATION;
  timeline.add(
    scrollColumn(
      state.columns.buyExchanges,
      buyExchangeScrollOffset,
      buyExchangeSeekDuration,
      updateBuyExchanges
    ),
    0
  );

  // Scroll exchange column so sellExchange is centered
  const sellExchangeScrollOffset = centerItemOffset(currentTrade.sellExchange, state.columns.sellExchanges);
  const sellExchangeSeekDuration = SEEK_DURATION;
  timeline.add(
    scrollColumn(
      state.columns.sellExchanges,
      sellExchangeScrollOffset,
      sellExchangeSeekDuration,
      updateSellExchanges
    ),
    0
  );
  
  const scrollBuyExchangeMarkerAnimation = scrollBuyExchangeMarkerToCenter();
  timeline.add(scrollBuyExchangeMarkerAnimation, 0);

  const scrollSellExchangeMarkerAnimation = scrollSellExchangeMarkerToCenter();
  timeline.add(scrollSellExchangeMarkerAnimation, 0);

  // Scroll exchange markers to the new trade positions
  const seekDuration = Math.max(
    currencySeekDuration,
    buyExchangeSeekDuration,
    sellExchangeSeekDuration,
    scrollBuyExchangeMarkerAnimation.duration,
    scrollSellExchangeMarkerAnimation.duration
  );
  const newSelection = {
    currency: currentTrade.currency,
    buyExchange: currentTrade.buyExchange,
    sellExchange: currentTrade.sellExchange,
  };
  state.seekProgress = 0;
  timeline.add(
    {
      duration: seekDuration,
      easing: 'linear',
      targets: state,
      seekProgress: 1,
      complete() {
        state.selection = newSelection;
      },
    },
    0
  );

  return timeline.finished;
}

export function getCurrencyBoxes() {
  return document.querySelectorAll(
    '#trade-display .currencies-box .scrolling-area > .currency-box'
  );
}

export function selectCurrency(ignorePause = false) {
  const LINE_DURATION = 500;
  const SHOW_SELECT_RECTS_DURATION = 300;
  const SELECT_DURATION = 400;
  const MOVE_CURRENCY_DURATION = 400;
  const EXPAND_DURATION = 400;
  const EXPAND_PAUSE_DURATION = 1000;
  const PARTICLES_DURATION = 700;

  const currentTrade = state.trade.current;

  let timelineOffset = 0;
  const timeline = new anime.timeline();

  // Draw lines to currency from exchanges
  timeline.add(
    {
      duration: LINE_DURATION,
      targets: state,
      lineProgress: 1,
      easing: 'linear',
      update(anim) {
        if (!anim.completed) {
          updateLines();
        }
      },
    },
    timelineOffset
  );
  timelineOffset += LINE_DURATION;

  timeline.add(
    {
      duration: SHOW_SELECT_RECTS_DURATION,
      targets: state,
      easing: 'linear',
      showSelectRectsProgress: 1,
      begin: () => {
        initSelectRects();
        updateSelectRects();
      },
      update(anim) {
        if (!anim.completed) {
          updateSelectRectsOpacity();
        }
      },
    },
    timelineOffset
  );

  timelineOffset += SHOW_SELECT_RECTS_DURATION * 0.8;

  // Expand exchanges
  timeline.add(
    {
      duration: SELECT_DURATION,
      targets: state,
      selectProgress: 1,
      easing: 'linear',
      update(anim) {
        if (!anim.completed) {
          updateSelectColumns();
          updateExchangeMarkers();
          updateLines();
          updateSelectRects();
          updateOverlays();
        }
      },
    },
    timelineOffset
  );
  timelineOffset += SELECT_DURATION;

  // Scroll currency to center, keep updating lines
  timeline.add(
    scrollColumn(
      state.columns.currencies,
      centerItemOffset(currentTrade.currency, state.columns.currencies),
      MOVE_CURRENCY_DURATION,
      () => {
        updateCurrencies();
        updateLines();
      }
    ),
    timelineOffset
  );
  timelineOffset += MOVE_CURRENCY_DURATION;

  timeline.add(
    {
      duration: SHOW_SELECT_RECTS_DURATION,
      targets: state,
      easing: 'linear',
      showCurrencyRectProgress: 1,
      begin: () => {
        initTradeRect();
        updateTradeRect();
      },
      update(anim) {
        if (!anim.completed) {
          updateCurrencyRectOpacity();
        }
      },
    },
    timelineOffset
  );

  timelineOffset += SHOW_SELECT_RECTS_DURATION * 0.5;

  // Expand currency
  timeline.add(
    {
      duration: EXPAND_DURATION,
      targets: state,
      expandProgress: 1,
      easing: 'linear',
      update(anim) {
        if (!anim.completed) {
          updateTradeRect();
          updateLines();
          updateCurrenciesOpacity();
        }
      }
    },
    timelineOffset
  );

  // Show success particles
  state.particlesProgress = 0;
  timeline.add(
    {
      duration: PARTICLES_DURATION,
      easing: 'linear',
      targets: state,
      particlesProgress: 1,
      update(anim) {
        if (!anim.completed) {
          updateParticles();
        }
      },
    },
    timelineOffset + EXPAND_DURATION * 0.5
  );

  timelineOffset += EXPAND_DURATION;

  if (!ignorePause) {
    // Pause in expanded state
    timeline.add(
      {
        duration: EXPAND_PAUSE_DURATION,
        easing: 'linear',
      },
      timelineOffset
    );
  }

  return timeline.finished;
}

export function showInstantTradeSellProgress(ignorePause = false) {
  const timeline = new anime.timeline();
  const SHOW_INFO_DURATION = 500;
  const SHOW_SELL_PROGRESS_DURATION = 500;
  const PAUSE_BUY_SELL_INFO = 1200 + 5000;
  let timelineOffset = 0;

  state.showInfoProgress = 0;
  state.showSellProgress = 0;

  timeline.add(
    {
      duration: SHOW_INFO_DURATION,
      easing: 'linear',
      targets: state,
      showInfoProgress: 0.5,
      update(anim) {
        if (!anim.completed) {
          updateInstantTradeInfoProgress();
        }
      },
    },
    timelineOffset
  );

  timelineOffset += SHOW_INFO_DURATION + 200;

  timeline.add(
    {
      duration: SHOW_SELL_PROGRESS_DURATION,
      easing: 'easeOutExpo',
      targets: state,
      showSellProgress: 1,
      update(anim) {
        if (!anim.completed) {
          updateInstantTradeSellProgress();
        }
      },
    },
    timelineOffset
  );

  if (!ignorePause) {
    timeline.add({
      duration: PAUSE_BUY_SELL_INFO,
      easing: 'linear',
      targets: state,
    });
  }

  return timeline.finished;
}

export function showInstantTradeSuccess() {
  const HIDE_INFO_DURATION = 500;
  const SHOW_SUCCESS_DURATION = 500;

  const timeline = new anime.timeline();
  timeline.add({
    duration: HIDE_INFO_DURATION,
    easing: 'linear',
    targets: state,
    showInfoProgress: 1,
    update(anim) {
      if (!anim.completed) {
        updateInstantTradeInfoProgress();
      }
    },
  });

  timeline.add({
    duration: SHOW_SUCCESS_DURATION,
    easing: 'linear',
    targets: state,
    successProgress: 1,
    update(anim) {
      if (!anim.completed) {
        updateInstantTradeSuccess();
      }
    },
  });

  return timeline.finished;
}

export function showInstantTrade() {
  const SHOW_MORE_DURATION = 500;

  const timeline = new anime.timeline();
  timeline.add(
    {
      duration: SHOW_MORE_DURATION,
      easing: 'linear',
      targets: state,
      showMoreProgress: 1,
      begin(anim) {
        initShowMore();
      },
      update(anim) {
        if (!anim.completed) {
          updateTradeRect();
          updateLines();
          updateCurrenciesOpacity();
          updateShortDetails();
        }
      },
    },
    0
  );

  return timeline.finished;
}

export function closeInstantTrade() {
  const COLLAPSE_DURATION = 400;
  const CLOSE_DURATION = 500;
  const SHOW_SELECT_RECTS_DURATION = 400;
  const DESELECT_DURATION = 400;

  const timeline = new anime.timeline();

  let timelineOffset = 0;

  timeline.add(
    {
      duration: CLOSE_DURATION,
      targets: state,
      showMoreProgress: 0,
      successProgress: 0,
      easing: 'linear',
      update(anim) {
        if (!anim.completed) {
          updateInstantTradeSuccess();
          updateCurrenciesOpacity();
          updateSelectRects();
          updateShortDetails();
          updateTradeRect();
        }
      },
    },
    timelineOffset
  );

  timelineOffset += CLOSE_DURATION;

  // Collapse currency
  timeline.add(
    {
      duration: COLLAPSE_DURATION,
      targets: state,
      expandProgress: 0,
      lineProgress: 0,
      easing: 'linear',
      update(anim) {
        if (!anim.completed) {
          updateTradeRect();
          updateLines();
          updateCurrenciesOpacity();
        }
      }
    },
    timelineOffset
  );

  timelineOffset += COLLAPSE_DURATION;

  timeline.add(
    {
      duration: SHOW_SELECT_RECTS_DURATION,
      targets: state,
      easing: 'linear',
      showCurrencyRectProgress: 0,
      update(anim) {
        if (!anim.completed) {
          updateCurrencyRectOpacity();
        }
      },
      complete: () => {
        hideTradeRect();
      },
    },
    timelineOffset
  );

  timelineOffset += SHOW_SELECT_RECTS_DURATION * 0.5;

  timeline.add(
    {
      duration: DESELECT_DURATION,
      targets: state,
      selectProgress: 0,
      lineProgress: 0,
      easing: 'linear',
      begin() {
        state.isClosingInstantTrade = true;
      },
      complete() {
        state.expandProgress = 0;
        hideTradeRect();
        hideShowMore();
        hideSellProgress();
        state.isClosingInstantTrade = false;
      },
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers();
          updateSelectColumns();
          updateLines();
          updateSelectRects();
          updateOverlays();
        }
      },
    },
    timelineOffset
  );

  timelineOffset += DESELECT_DURATION;

  timeline.add(
    {
      duration: SHOW_SELECT_RECTS_DURATION,
      targets: state,
      easing: 'linear',
      showSelectRectsProgress: 0,
      update(anim) {
        if (!anim.completed) {
          updateSelectRectsOpacity();
        }
      },
      complete: () => {
        hideSelectRects();
      },
    },
    timelineOffset - SHOW_SELECT_RECTS_DURATION * 0.5
  );

  /*
  let scrollDistance;
  if (state.stage.isVertical) {
    scrollDistance = state.stage.height * 0.5 + state.columns.currencies.size * 0.5;
  } else {
    scrollDistance = state.stage.width * 0.5 + SELECTED_CURRENCY_WIDTH * 0.5;
  }
  const scrollDuration = scrollDistance / IDLE_SCROLL_SPEED;

  timeline.add(
    {
      ...scrollColumn(
        state.columns.currencies,
        -scrollDistance,
        scrollDuration,
        () => {
          updateCurrencies();
          updateTradeRect();
        },
      )
    },
    timelineOffset
  );
  */

  return timeline.finished;
}

function closeLongTrade() {
  const CLOSE_DURATION = 1000;
  const timeline = new anime.timeline();

  const currentTrade = state.trade.current;

  // Scroll current currency offscreen
  timeline.add(
    scrollColumn(
      state.columns.currencies,
      offscreenItemOffset(currentTrade.currency, state.columns.currencies)
        + SELECTED_EXCHANGE_WIDTH * 0.5,
      CLOSE_DURATION,
      updateCurrencies
    ),
    0
  );

  timeline.add(
    {
      duration: CLOSE_DURATION,
      targets: state,
      lineProgress: 0,
      selectProgress: 0,
      easing: 'linear',
      complete() {
        state.expandProgress = 0;
        hideTradeRect();
        hideSelectRects();
      },
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers();
          updateSelectColumns();
          updateSelectRects();
          updateTradeRect();
          updateLines();
          updateOverlays();
        }
      },
    },
    0
  );

  return timeline.finished;
}
