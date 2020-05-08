import { createElements } from './createElements';
import { handleResize } from './handleResize';
import { idleAnimation } from './animations/idle';
import {
  scrollIntoView,
  selectCurrency,
  showInstantTrade,
  showInstantTradeSellProgress,
  showInstantTradeSuccess,
  closeInstantTrade,
} from './animations/trade';
import { state } from './state';
import { currencies, exchanges, randomSellExchange } from './model';

const $profitsSlider = $('.profits__slider-wrapper');

function createFakeTrade() {
  const startTime = new Date().getTime();
  const endTime = startTime + 60 * 1000;

  const newTrade = {
    id: startTime,
    buyExchange: 2,
    sellExchange: 26,
    currency: 5,
    wallet: state.wallet,
    profit: 0.0332,
    amount: 1,
    buyPrice: 166.66,
    sellPrice: 161.3046,
    startTime,
    endTime,
    status: 'completed',
  };

  state.trade.trades.push(newTrade);
  state.trade.current = newTrade;
}

function removeFakeTrade() {
  state.trade.trades = [];
  state.trade.current = null;
}

function animLoop() {
  if (!state.animLoopPaused) {
    idleAnimation().then(animLoop);
  } else {
    performStep(1);
  }
}

function toggleSliderControls(toggle) {
  if (toggle === 'on') {
    $profitsSlider.find('.slick-next').attr('disabled', false);
    $profitsSlider.find('.slick-prev').attr('disabled', false);
    $('.profits__slider-dots').css('display', 'block');
  } else {
    $profitsSlider.find('.slick-next').attr('disabled', true);
    $profitsSlider.find('.slick-prev').attr('disabled', true);
    $('.profits__slider-dots').css('display', 'none');
  }
}

function performStep(step) {
  if (step === 1) {
    scrollIntoView().then(() => {
      selectCurrency(true).then(() => {
        toggleSliderControls('on');
      });
    });
  }

  if (step === 2) {
    toggleSliderControls('off');

    showInstantTrade().then(() => {
      showInstantTradeSellProgress(true).then(() => {
        toggleSliderControls('on');
      });
    });
  }

  if (step === 3) {
    toggleSliderControls('off');

    showInstantTradeSuccess().then(() => {
      toggleSliderControls('on');
    });
  }
}

function resetSteps() {
  toggleSliderControls('off');

  closeInstantTrade().then(() => {
    toggleSliderControls('on');
    state.animLoopPaused = false;
    state.lineProgress = 0;
    state.seekProgress = 0;
    state.selectProgress = 0;
    state.expandProgress = 0;
    state.showMoreProgress = 0;
    state.showSellProgress = 0;
    state.successProgress = 0;
    state.particlesProgress = 0;

    animLoop();
  });
}

createElements();
handleResize();

animLoop();

createFakeTrade();

window.addEventListener('resize', handleResize);

if ($profitsSlider.length) {
  $profitsSlider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    if (currentSlide === 0 && nextSlide === 1) {
      toggleSliderControls('off');
      state.animLoopPaused = true;
    }
    if (currentSlide === 1 && nextSlide === 2) {
      performStep(2);
    }
    if (currentSlide === 2 && nextSlide === 3) {
      performStep(3);
    }
    if (currentSlide === 3 && nextSlide === 0) {
      resetSteps();
    }
  });
}
