import anime from 'animejs';
import {
    initTradeProcess,
    updateShow,
    updateProcessSection,
    updateScrollProgress,
    updateBackground,
    updateBuySection,
    updateSellSection,
    updateProgressTimer,
    updateSuccessTransition,
    listenForTradeClose,
    closeTradeProcess,
    updateParticles,
    updateSellExchange,
    initBuyInfo,
    initSellInfo,
    initProgressMessage,
    updateSellProgress
} from '../updateTradeProcess';
import { randomSellExchange } from '../model';

const WAIT_FOR_CLOSE_TIMEOUT = 5 * 60 * 1000;

export function showTradeProcess(tradeState) {
    return initialAnimation(tradeState).then(() => {
        if (tradeState.data.status !== 'completed') {
            return updateTimer(tradeState);
        } else {
            initSellInfo(tradeState);
            initBuyInfo(tradeState);
        }
    }).then(() => {
        return sellAnimation(tradeState);
    }).then(()=> {
        return successAnimation(tradeState);
    }).then(() => {
        return listenForTradeClose(tradeState, WAIT_FOR_CLOSE_TIMEOUT)
            .then(() => {
                closeTradeProcess(tradeState);
            });
    });
}

function updateTimer(tradeState) {
    return new Promise((resolve, reject) => {
        let count = 0;
        const timerId = setInterval(() => {
            updateProgressTimer(tradeState);
            // Every five second update icon
            if (count >= 5) {
                tradeState.data.sellExchange = randomSellExchange(tradeState.data);
                updateSellExchange(tradeState);
                count = 0;
            }
            count++;
        }, 1000);
        tradeState.onComplete = () => {
            clearInterval(timerId);
            initSellInfo(tradeState);
            initBuyInfo(tradeState);
            resolve();
        };
    });
}

function initialAnimation(tradeState) {
    const SCROLL_DURATION = 500;
    const SECTION_DURATION = 600;

    const TOTAL_SHOW_DURATION = SECTION_DURATION * 3 + SECTION_DURATION;
    const timeline = new anime.timeline();
    let timelineOffset = 0;

    timeline.add({
        duration: SCROLL_DURATION,
        easing: 'linear',
        targets: tradeState,
        scrollProgress: 1,
        begin: function () {
            initTradeProcess(tradeState);
            updateBackground(tradeState);
            updateBuySection(tradeState);
            updateProcessSection(tradeState);
            updateSellSection(tradeState);
        }
    }, timelineOffset);

    timelineOffset += SCROLL_DURATION;

    timeline.add({
        duration: SECTION_DURATION * 3,
        easing: 'linear',
        targets: tradeState,
        backgroundProgress: 1,
        update: function (anim) {
            if (!anim.completed) {
                updateBackground(tradeState);
            }
        }
    }, timelineOffset);

    timelineOffset += SECTION_DURATION;

    timeline.add({
        duration: SECTION_DURATION,
        easing: 'linear',
        targets: tradeState,
        buySectionProgress: 1,
        update: function (anim) {
            if (!anim.completed) {
                updateBuySection(tradeState);
            }
        }
    }, timelineOffset);

    timelineOffset += SECTION_DURATION;

    timeline.add({
        duration: SECTION_DURATION,
        easing: 'linear',
        targets: tradeState,
        processSectionProgress: 1,
        update: function (anim) {
            if (!anim.completed) {
                updateProcessSection(tradeState);
            }
        }
    }, timelineOffset);

    timelineOffset += SECTION_DURATION;

    timeline.add({
        duration: SECTION_DURATION,
        easing: 'linear',
        targets: tradeState,
        sellSectionProgress: 1,
        update: function (anim) {
            if (!anim.completed) {
                updateSellSection(tradeState);
            }
        }
    }, timelineOffset);

    return timeline.finished;
}

function sellAnimation(tradeState) {
    const SELL_DURATION = 5 * 1000; // ms
    const timeline = new anime.timeline();
    timeline.add({
        duration: SELL_DURATION,
        easing: 'linear',
        targets: tradeState,
        sellProgress: 1,
        begin: function(anim) {
            initProgressMessage(tradeState);
        },
        update: function (anim) {
            if (!anim.completed) {
                updateSellProgress(tradeState);
            }
        }
    });
    return timeline.finished;
}

function successAnimation(tradeState) {
    const timeline = new anime.timeline();
    const SUCCESS_TRANSITION_DURATION = 800;
    let timelineOffset = 0;

    timeline.add({
        duration: SUCCESS_TRANSITION_DURATION,
        easing: 'linear',
        targets: tradeState,
        successTransitionProgress: 1,
        update: function (anim) {
            if (!anim.completed) {
                updateSuccessTransition(tradeState);
            }
        }
    }, timelineOffset);

    timeline.add({
        duration: SUCCESS_TRANSITION_DURATION,
        easing: 'linear',
        targets: tradeState,
        particlesProgress: 1,
        update: function (anim) {
            if (!anim.completed) {
                updateParticles(tradeState);
            }
        }
    }, timelineOffset + SUCCESS_TRANSITION_DURATION * 0.5);
    return timeline.finished;
}
