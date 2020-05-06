import anime from 'animejs';
import { state } from '../state';
import {
  updateBuyExchanges,
  updateSellExchanges,
  updateCurrencies,
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
  updateInstantTradeSellProgress,
} from '../update';
import { clipOffset, scrollColumn, listenForClose } from './helpers';
import { SELECTED_EXCHANGE_WIDTH } from '../layout';

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
  const SEEK_DURATION = 900;

  // Scroll to current trade
  const currentTrade = state.trade.current;

  // Scroll currencies so target currency is within screen bounds
  const currencyInitialOffset = ensureItemVisibleOffset(
    currentTrade.currency,
    state.columns.currencies
  );
  timeline.add(
    scrollColumn(state.columns.currencies, currencyInitialOffset, SEEK_DURATION, updateCurrencies),
    0
  );

  // Scroll exchanges column so buyExchange is centered
  timeline.add(
    scrollColumn(
      state.columns.buyExchanges,
      centerItemOffset(currentTrade.buyExchange, state.columns.buyExchanges),
      SEEK_DURATION,
      updateBuyExchanges
    ),
    0
  );

  // Scroll exchange column so sellExchange is centered
  timeline.add(
    scrollColumn(
      state.columns.sellExchanges,
      centerItemOffset(currentTrade.sellExchange, state.columns.sellExchanges),
      SEEK_DURATION,
      updateSellExchanges
    ),
    0
  );

  // Scroll exchange markers to the new trade positions
  const newSelection = {
    currency: currentTrade.currency,
    buyExchange: currentTrade.buyExchange,
    sellExchange: currentTrade.sellExchange,
  };
  state.seekProgress = 0;
  timeline.add(
    {
      duration: SEEK_DURATION,
      easing: 'linear',
      targets: state,
      seekProgress: 1,
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers(newSelection);
        }
      },
      complete() {
        state.selection = newSelection;
      },
    },
    0
  );

  return timeline.finished;
}

export function selectCurrency(ignorePause = false) {
  const LINE_DURATION = 500;
  const SELECT_DURATION = 800;
  const MOVE_CURRENCY_DURATION = 500;
  const EXPAND_DURATION = 800;
  const EXPAND_PAUSE_DURATION = 1000;
  const PARTICLES_DURATION = 1000;

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

  // Expand exchanges
  timeline.add(
    {
      duration: SELECT_DURATION,
      targets: state,
      selectProgress: 1,
      easing: 'linear',
      begin: initSelectRects,
      update(anim) {
        if (!anim.completed) {
          updateSelectColumns();
          updateExchangeMarkers();
          updateLines();
          updateSelectRects();
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

  // Expand currency
  timeline.add(
    {
      duration: EXPAND_DURATION,
      targets: state,
      expandProgress: 1,
      easing: 'linear',
      begin: initTradeRect,
      update(anim) {
        if (!anim.completed) {
          updateTradeRect();
          updateLines();
        }
      },
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
  const SHOW_INFO_DURATION = 800;
  const PAUSE_BUY_SELL_INFO = 2500;

  state.showSellProgress = 0;

  timeline.add(
    {
      duration: SHOW_INFO_DURATION,
      easing: 'linear',
      targets: state,
      showSellProgress: 0.5,
      update(anim) {
        if (!anim.completed) {
          updateInstantTradeSellProgress();
        }
      },
    },
    0
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
  const HIDE_INFO_DURATION = 800;
  const SHOW_SUCCESS_DURATION = 800;

  const timeline = new anime.timeline();
  timeline.add({
    duration: HIDE_INFO_DURATION,
    easing: 'linear',
    targets: state,
    showSellProgress: 1,
    update(anim) {
      if (!anim.completed) {
        updateInstantTradeSellProgress();
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
  const SHOW_MORE_DURATION = 800;

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
        }
      },
    },
    0
  );

  return timeline.finished;
}

export function closeInstantTrade() {
  const CLOSE_DURATION = 1000;
  const timeline = new anime.timeline();
  timeline.add(
    {
      duration: CLOSE_DURATION,
      targets: state,
      showMoreProgress: 0,
      successProgress: 0,
      easing: 'linear',
      complete() {
        hideShowMore();
      },
      update(anim) {
        if (!anim.completed) {
          updateInstantTradeSuccess();
          updateTradeRect();
          updateLines();
        }
      },
    },
    0
  );

  timeline.add(
    {
      duration: CLOSE_DURATION,
      targets: state,
      expandProgress: 0,
      selectProgress: 0,
      lineProgress: 0,
      easing: 'linear',
      complete() {
        hideTradeRect();
        hideSelectRects();
      },
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers();
          updateSelectColumns();
          updateTradeRect();
          updateLines();
          updateSelectRects();
        }
      },
    },
    CLOSE_DURATION
  );

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
        }
      },
    },
    0
  );

  return timeline.finished;
}
