import anime from 'animejs';
import { state } from '../state';
import {
  updateBuyExchanges,
  updateSellExchanges,
  updateCurrencies,
  updateExchangeMarkers,
  updateLines,
  experiment,
} from '../update';
import { clipOffset, scrollColumn } from './helpers';

export const IDLE_SCROLL_SPEED = 1 / 6; // Pixels per ms

export function idleAnimation() {
  return scrollColumns().then(selectRandomTrade);
}

function scrollColumns() {
  const SEARCH_DURATION = 1900;
  const RANDOM_SEEK_DURATION = 700;
  const IDLE_SEEK_DURATION = (SEARCH_DURATION - 2 * RANDOM_SEEK_DURATION) / 3;

  const timeline = new anime.timeline();
  timeline.add(
    scrollColumn(
      state.columns.currencies,
      -IDLE_SCROLL_SPEED * SEARCH_DURATION,
      SEARCH_DURATION,
      updateCurrencies
    ),
    0
  );
  timeline.add(
    scrollColumn(
      state.columns.buyExchanges,
      IDLE_SCROLL_SPEED * SEARCH_DURATION,
      SEARCH_DURATION,
      updateBuyExchanges
    ),
    0
  );
  timeline.add(
    scrollColumn(
      state.columns.sellExchanges,
      IDLE_SCROLL_SPEED * SEARCH_DURATION,
      SEARCH_DURATION,
      updateSellExchanges
    ),
    0
  );

  const getRandomExchanges = () => {
    let buyExchange = getRandomVisibleIndex(state.columns.buyExchanges, 0, IDLE_SCROLL_SPEED * RANDOM_SEEK_DURATION);
    do {
      buyExchange = getRandomVisibleIndex(state.columns.buyExchanges, 0, IDLE_SCROLL_SPEED * RANDOM_SEEK_DURATION);
    } while (buyExchange === state.selection.buyExchange);
    let sellExchange;
    do {
      sellExchange = getRandomVisibleIndex(state.columns.sellExchanges, 0, IDLE_SCROLL_SPEED * RANDOM_SEEK_DURATION);
    } while (sellExchange === buyExchange || sellExchange === state.selection.sellExchange);
    return {
      buyExchange,
      sellExchange,
    };
  };

  // Select two random exchanges and cryprocurrency in the current viewport
  let newSelection;

  let timelineOffset = 0;

  timeline.add(
    {
      duration: IDLE_SEEK_DURATION,
      easing: 'linear',
      targets: state,
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers();
        }
      },
    },
    timelineOffset
  );

  timelineOffset += IDLE_SEEK_DURATION;

  timeline.add(
    {
      duration: RANDOM_SEEK_DURATION,
      easing: 'linear',
      targets: state,
      seekProgress: [0, 1],
      begin() {
        newSelection = getRandomExchanges();
        state.seekProgress = 0;
      },
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers(newSelection);
        }
      },
      complete() {
        state.selection = newSelection;
      },
    },
    timelineOffset
  );

  timelineOffset += RANDOM_SEEK_DURATION;

  timeline.add(
    {
      duration: IDLE_SEEK_DURATION,
      easing: 'linear',
      targets: state,
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers();
        }
      },
    },
    timelineOffset
  );

  timelineOffset += IDLE_SEEK_DURATION;

  timeline.add(
    {
      duration: RANDOM_SEEK_DURATION,
      easing: 'linear',
      targets: state,
      seekProgress: [0, 1],
      begin() {
        newSelection = getRandomExchanges();
      },
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers(newSelection);
        }
      },
      complete() {
        state.selection = newSelection;
        state.seekProgress = 0;
      },
    },
    timelineOffset
  );

  timelineOffset += RANDOM_SEEK_DURATION;

  timeline.add(
    {
      duration: IDLE_SEEK_DURATION,
      easing: 'linear',
      targets: state,
      update(anim) {
        if (!anim.completed) {
          updateExchangeMarkers();
        }
      },
    },
    timelineOffset
  );

  return timeline.finished;
}

function selectRandomTrade() {
  const SEEK_DURATION = 500;
  const DRAW_LINES_DURATION = 400;
  const PAUSE_DURATION = 600;
  const HIDE_LINES_DURATION = 400;
  const TOTAL_DURATION = SEEK_DURATION + DRAW_LINES_DURATION + PAUSE_DURATION + HIDE_LINES_DURATION;
  const timeline = new anime.timeline();

  // Keep currencies column scrolling
  timeline.add(
    scrollColumn(
      state.columns.currencies,
      -IDLE_SCROLL_SPEED * TOTAL_DURATION,
      TOTAL_DURATION,
      updateCurrencies
    ),
    0
  );

  let timelineOffset = 0;

  // Select two random exchanges and cryprocurrency in the current viewport
  const newSelection = createRandomSelection();
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
      complete(anim) {
        state.selection = newSelection;
      },
    },
    timelineOffset
  );

  timelineOffset += SEEK_DURATION;

  // Draw lines to from exchanges to currencies
  timeline.add(
    {
      duration: DRAW_LINES_DURATION,
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

  timelineOffset += DRAW_LINES_DURATION;

  // Pause for a moment but keep updating lines - because currencies are moving
  timeline.add(
    {
      duration: PAUSE_DURATION,
      targets: state,
      update(anim) {
        if (!anim.completed) {
          updateLines();
        }
      },
    },
    timelineOffset
  );

  timelineOffset += PAUSE_DURATION;

  // Hide lines
  timeline.add(
    {
      duration: HIDE_LINES_DURATION,
      targets: state,
      lineProgress: 0,
      easing: 'linear',
      update(anim) {
        if (!anim.completed) {
          updateLines();
        }
      },
    },
    timelineOffset
  );

  return timeline.finished;
}

function getFirstVisibleIndex(object, offsetDelta) {
  const delta = offsetDelta || 0;
  return Math.floor(-(object.offset + delta) / (object.size + object.gap));
}

function getRandomVisibleIndex(object, add, offsetDelta) {
  const off = 1;
  const indexStart = getFirstVisibleIndex(object, offsetDelta) + off;
  const height = state.stage.isVertical ? state.stage.height : state.stage.width;
  const indexEnd = indexStart + Math.floor(height / (object.size + object.gap)) - off;
  const random = Math.random();
  let index = indexStart + Math.floor(random * (indexEnd - indexStart)) + add;
  if (index < 0) {
    index = object.count + (index % object.count);
  } else if (index >= object.count) {
    index %= object.count;
  }
  return index;
}

/**
 * Select two indexes of exchanges visible on screen and currencies on screen.
 */
function createRandomSelection() {
  const buyExchange = getRandomVisibleIndex(state.columns.buyExchanges, 0);
  let sellExchange;
  do {
    sellExchange = getRandomVisibleIndex(state.columns.sellExchanges, 0);
  } while (sellExchange === buyExchange);
  const buyCurrency = getRandomVisibleIndex(state.columns.currencies, 2);
  let sellCurrency;
  do {
    sellCurrency = getRandomVisibleIndex(state.columns.currencies, 2);
  } while (sellCurrency === buyCurrency);
  return {
    buyCurrency,
    sellCurrency,
    buyExchange,
    sellExchange,
  };
}
