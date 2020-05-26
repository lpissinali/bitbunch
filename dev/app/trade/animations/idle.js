import anime from 'animejs';
import { state } from '../state';
import {
    updateBuyExchanges,
    updateSellExchanges,
    updateCurrencies,
    updateExchangeMarkers,
    updateLines
} from '../update';
import { clipOffset, scrollColumn } from './helpers';

export const IDLE_SCROLL_SPEED = 1/6;// Pixels per ms

export function idleAnimation() {
    return scrollColumns()
        .then(selectRandomTrade);
}

function scrollColumns() {
    const SEARCH_DURATION = 1500;
    const timeline = new anime.timeline();
    timeline.add(scrollColumn(state.columns.currencies,
        -IDLE_SCROLL_SPEED * SEARCH_DURATION,
        SEARCH_DURATION,
        updateCurrencies), 0);
    timeline.add(scrollColumn(state.columns.buyExchanges,
        IDLE_SCROLL_SPEED * SEARCH_DURATION,
        SEARCH_DURATION,
        updateBuyExchanges), 0);
    timeline.add(scrollColumn(state.columns.sellExchanges,
        IDLE_SCROLL_SPEED * SEARCH_DURATION,
        SEARCH_DURATION,
        updateSellExchanges), 0);
    timeline.add({
        duration: SEARCH_DURATION,
        easing: 'linear',
        update: () => updateExchangeMarkers()
    }, 0);
    return timeline.finished;
}

function selectRandomTrade() {
    const SEEK_DURATION = 800;
    const DRAW_LINES_DURATION = 800;
    const PAUSE_DURATION = 500;
    const HIDE_LINES_DURATION = 800;
    const TOTAL_DURATION = SEEK_DURATION + DRAW_LINES_DURATION + PAUSE_DURATION + HIDE_LINES_DURATION;
    const timeline = new anime.timeline();

    // Keep currencies column scrolling
    timeline.add(scrollColumn(state.columns.currencies,
        -IDLE_SCROLL_SPEED * TOTAL_DURATION,
        TOTAL_DURATION,
        updateCurrencies), 0);

    let timelineOffset = 0;

    // Select two random exchanges and cryprocurrency in the current viewport
    const newSelection = createRandomSelection();
    state.seekProgress = 0;
    timeline.add({
        duration: SEEK_DURATION,
        easing: 'linear',
        targets: state,
        seekProgress: 1,
        update: function(anim) {
            if(!anim.completed) {
                updateExchangeMarkers(newSelection);
            }
        },
        complete: function(anim) {
            state.selection = newSelection;
        }
    }, timelineOffset);

    timelineOffset += SEEK_DURATION;

    // Draw lines to from exchanges to currencies
    timeline.add({
        duration: DRAW_LINES_DURATION,
        targets: state,
        lineProgress: 1,
        easing: 'linear',
        update: function(anim) {
            if (!anim.completed) {
                updateLines();
            }
        }
    }, timelineOffset);

    timelineOffset += DRAW_LINES_DURATION;

    // Pause for a moment but keep updating lines - because currencies are moving
    timeline.add({
        duration: PAUSE_DURATION,
        targets: state,
        update: function(anim) {
            if (!anim.completed) {
                updateLines();
            }
        }
    }, timelineOffset);

    timelineOffset += PAUSE_DURATION;

    // Hide lines
    timeline.add({
        duration: HIDE_LINES_DURATION,
        targets: state,
        lineProgress: 0,
        easing: 'linear',
        update:  function(anim) {
            if (!anim.completed) {
                updateLines();
            }
        }
    }, timelineOffset);

    return timeline.finished;
}

function getFirstVisibleIndex(object) {
    return Math.floor(-object.offset / (object.size + object.gap));
}

function getRandomVisibleIndex(object, add) {
    const off = 1;
    let indexStart = getFirstVisibleIndex(object) + off;
    const height = state.stage.isVertical ? state.stage.height : state.stage.width;
    let indexEnd = indexStart + Math.floor(height / (object.size + object.gap))  - off;
    let index = indexStart + Math.floor(Math.random() * (indexEnd - indexStart)) + add;
    if (index < 0) {
        index = object.count + index % object.count;
    } else if (index >= object.count) {
        index = index % object.count;
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
        sellExchange
    };
}
