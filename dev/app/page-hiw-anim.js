/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.hiw-header')) {
    const controller = new ScrollMagic.Controller();

    function AnimationScene(section, tween) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.70,
      })
        .reverse(false)
        .setTween(tween)
        .addTo(controller);
    }

    if (window.matchMedia('(max-width: 570px)').matches) {
      console.log('animation - tablet');

      // hiw-header
      if (document.querySelector('.hiw-header')) {
        const tl_hiw_header = new TimelineMax();
        tl_hiw_header.from('.hiw-header__headline-block', 0.5, { y: '20%', opacity: 0 });
        AnimationScene('.hiw-header', tl_hiw_header);
      }

      // arbitrage
      if (document.querySelector('.arbitrage')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.arbitrage__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.arbitrage__decor', 0.7, { opacity: 0 }, 1);
        AnimationScene('.arbitrage', tl_big_team);

        //
        const tl_arb_card_1 = new TimelineMax();
        tl_arb_card_1.from('.arbitrage__card-1', 0.5, { y: '15%', opacity: 0 });
        AnimationScene('.arbitrage__headline', tl_arb_card_1);

        //
        const tl_arb_card_2 = new TimelineMax();
        tl_arb_card_2.from('.arbitrage__card-2', 0.5, { y: '15%', opacity: 0 });
        AnimationScene('.arbitrage__card-1', tl_arb_card_2);

        //
        const tl_arb_card_3 = new TimelineMax();
        tl_arb_card_3.from('.arbitrage__card-3', 0.5, { y: '15%', opacity: 0 });
        AnimationScene('.arbitrage__card-2', tl_arb_card_3);

        //
        const tl_arb_card_4 = new TimelineMax();
        tl_arb_card_4.from('.arbitrage__card-4', 0.5, { y: '15%', opacity: 0 });
        AnimationScene('.arbitrage__card-3', tl_arb_card_4);
      }

      // profits
      if (document.querySelector('.profits')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.profits__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.profits__subtitle', 0.7, { y: '10%', opacity: 0 }, 0.3);
        tl_big_team.from('.profits__slider-container', 0.7, { y: '10%', opacity: 0 }, 0.6);
        tl_big_team.from('.profits__slider-image', 0.7, { y: '10%', opacity: 0 }, 0.9);

        // dot animation
        tl_big_team.from('.profits__slider-dot-right', 0.3, { opacity: 0 });
        AnimationScene('.profits', tl_big_team);
      }

      // get-started
      if (document.querySelector('.profits')) {
        const tl_get_started = new TimelineMax();
        tl_get_started.from('.get-started__subtitle', 0.5, { y: '120%', opacity: 0 });
        tl_get_started.from('.get-started__headline', 0.5, { y: '100%', opacity: 0 }, 0);
        tl_get_started.from('.get-started__button', 0.5, { opacity: 0 }, 0.5);
        AnimationScene('.get-started', tl_get_started);
      }

      // rates
      if (document.querySelector('.rates')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.rates__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.rates__subtitle', 0.7, { y: '100%', opacity: 0 }, 0.3);
        tl_big_team.from('.rates__table', 0.7, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.rates', tl_big_team);
      }

      // ai-trading
      if (document.querySelector('.ai-trading')) {
        const tl_ai_trading = new TimelineMax();
        tl_ai_trading.from('.ai-trading__headline', 0.7, { y: '100%', opacity: 0 });
        tl_ai_trading.from('.ai-trading__subtitle', 0.7, { y: '30%', opacity: 0 }, 0.3);
        tl_ai_trading.from('.ai-trading__title', 0.7, { y: '100%', opacity: 0 }, 0.5);
        tl_ai_trading.from('.ai-trading__description', 0.7, { y: '100%', opacity: 0 }, 0.7);
        tl_ai_trading.from('.ai-trading__flex-container', 0.7, { y: '10%', opacity: 0 }, 0.9);
        AnimationScene('.ai-trading', tl_ai_trading);
      }

      // calculation
      if (document.querySelector('.calculation')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.calculation__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.calculation__subtitle', 0.7, { y: '100%', opacity: 0 }, 0.3);
        tl_big_team.from('.calculation__flex-container', 0.7, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.calculation', tl_big_team);
      }

      // started
      if (document.querySelector('.started')) {
        const tl_started = new TimelineMax();
        tl_started.from('.started__headline', 0.5, { y: '100%', opacity: 0 });
        tl_started.from('.started__subtitle', 0.7, { y: '100%', opacity: 0 }, 0.3);
        AnimationScene('.started', tl_started);

        //
        const tl_started_card_1 = new TimelineMax();
        tl_started_card_1.from('.started__anim-block-1', 0.7, { y: '30%', opacity: 0 });
        AnimationScene('.started__subtitle', tl_started_card_1);

        //
        const tl_started_card_2 = new TimelineMax();
        tl_started_card_2.from('.started__anim-block-2', 0.7, { y: '30%', opacity: 0 });
        AnimationScene('.started__anim-block-1', tl_started_card_2);

        //
        const tl_started_card_3 = new TimelineMax();
        tl_started_card_3.from('.started__anim-block-3', 0.7, { y: '30%', opacity: 0 });
        AnimationScene('.started__anim-block-2', tl_started_card_3);

        //
        const tl_started_card_4 = new TimelineMax();
        tl_started_card_4.from('.started__anim-block-4', 0.7, { y: '30%', opacity: 0 });
        AnimationScene('.started__anim-block-3', tl_started_card_4);

        //
        const tl_started_card_5 = new TimelineMax();
        tl_started_card_5.from('.started__anim-block-5', 0.7, { y: '30%', opacity: 0 });
        AnimationScene('.started__anim-block-4', tl_started_card_5);

        //
        const tl_started_card_6 = new TimelineMax();
        tl_started_card_6.from('.started__anim-block-6', 0.7, { y: '30%', opacity: 0 });
        AnimationScene('.started__anim-block-5', tl_started_card_6);
      }

      // upfront
      if (document.querySelector('.upfront')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.upfront__header-block', 0.5, { y: '10%', opacity: 0 });
        tl_big_team.from('.upfront__table-block', 0.7, { y: '10%', opacity: 0 }, 0.3);
        AnimationScene('.upfront', tl_big_team);
      }
    } else if (window.matchMedia('(max-width: 1000px)').matches) {
      console.log('animation - tablet');

      // hiw-header
      if (document.querySelector('.hiw-header')) {
        const tl_hiw_header = new TimelineMax();
        tl_hiw_header.from('.hiw-header__headline-block', 0.5, { y: '20%', opacity: 0 });
        AnimationScene('.hiw-header', tl_hiw_header);
      }

      // arbitrage
      if (document.querySelector('.arbitrage')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.arbitrage__headline', 0.5, { y: '100%', opacity: 0 });
        AnimationScene('.arbitrage', tl_big_team);

        //
        const tl_arb_card_2 = new TimelineMax();
        tl_arb_card_2.from('.arbitrage__card-2', 0.5, { y: '15%', opacity: 0 });
        AnimationScene('.arbitrage__headline', tl_arb_card_2);

        //
        const tl_arb_card_1 = new TimelineMax();
        tl_arb_card_1.from('.arbitrage__card-1', 0.5, { y: '15%', opacity: 0 });
        AnimationScene('.arbitrage__card-2', tl_arb_card_1);

        //
        const tl_arb_card_4 = new TimelineMax();
        tl_arb_card_4.from('.arbitrage__card-4', 0.5, { y: '15%', opacity: 0 });
        AnimationScene('.arbitrage__card-1', tl_arb_card_4);

        //
        const tl_arb_card_3 = new TimelineMax();
        tl_arb_card_3.from('.arbitrage__card-3', 0.5, { y: '15%', opacity: 0 });
        tl_arb_card_3.from('.arbitrage__decor', 0.7, { opacity: 0 });
        AnimationScene('.arbitrage__card-4', tl_arb_card_3);
      }

      // profits
      if (document.querySelector('.profits')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.profits__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.profits__subtitle', 0.7, { y: '10%', opacity: 0 }, 0.3);
        tl_big_team.from('.profits__slider-container', 0.7, { y: '10%', opacity: 0 }, 0.6);
        tl_big_team.from('.profits__slider-image', 0.7, { y: '10%', opacity: 0 }, 0.9);

        // dot animation
        tl_big_team.from('.profits__slider-dot-right', 0.3, { opacity: 0 });
        AnimationScene('.profits', tl_big_team);
      }

      // get-started
      if (document.querySelector('.profits')) {
        const tl_get_started = new TimelineMax();
        tl_get_started.from('.get-started__subtitle', 0.5, { y: '-120%', opacity: 0 });
        tl_get_started.from('.get-started__headline', 0.5, { y: '-100%', opacity: 0 }, 0);
        tl_get_started.from('.get-started__button', 0.4, { opacity: 0 }, 0.5);
        AnimationScene('.get-started', tl_get_started);
      }

      // rates
      if (document.querySelector('.rates')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.rates__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.rates__subtitle', 0.7, { y: '100%', opacity: 0 }, 0.3);
        tl_big_team.from('.rates__table', 0.7, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.rates', tl_big_team);
      }

      // ai-trading
      if (document.querySelector('.ai-trading')) {
        const tl_ai_trading = new TimelineMax();
        tl_ai_trading.from('.ai-trading__headline', 0.7, { x: '-15%', opacity: 0 });
        tl_ai_trading.from('.ai-trading__subtitle', 0.7, { x: '-15%', opacity: 0 }, 0.3);
        tl_ai_trading.from('.ai-trading__title', 0.7, { x: '-16%', opacity: 0 }, 0.5);
        tl_ai_trading.from('.ai-trading__description', 0.7, { x: '-15%', opacity: 0 }, 0.7);
        tl_ai_trading.from('.ai-trading__flex-container', 0.7, { y: '10%', opacity: 0 }, 0.9);
        AnimationScene('.ai-trading', tl_ai_trading);
      }

      // calculation
      if (document.querySelector('.calculation')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.calculation__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.calculation__subtitle', 0.7, { y: '100%', opacity: 0 }, 0.3);
        tl_big_team.from('.calculation__flex-container', 0.7, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.calculation', tl_big_team);
      }

      // started
      if (document.querySelector('.started')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.started__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.started__subtitle', 0.7, { y: '100%', opacity: 0 }, 0.3);
        tl_big_team.from('.started__flex-container', 0.7, { y: '10%', opacity: 0 }, 0.6);
        AnimationScene('.started', tl_big_team);
      }

      // upfront
      if (document.querySelector('.upfront')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.upfront__header-block', 0.5, { y: '10%', opacity: 0 });
        tl_big_team.from('.upfront__table-block', 0.7, { y: '10%', opacity: 0 }, 0.3);
        AnimationScene('.upfront', tl_big_team);
      }

      // desktop animation
    } else {
      console.log('animation - desktop');

      // arbitrage
      if (document.querySelector('.arbitrage')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.arbitrage__headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.arbitrage__card-1', 0.8, { opacity: 0 }, 0.8);
        tl_big_team.from('.arbitrage__card-3', 0.8, { opacity: 0 }, 0.8);
        tl_big_team.from('.arbitrage__card-2', 0.7, { y: '20%', opacity: 0 }, 1.2);
        tl_big_team.from('.arbitrage__card-4', 0.7, { y: '20%', opacity: 0 }, 1.2);
        tl_big_team.from('.arbitrage__decor', 0.7, { opacity: 0 }, 1.7);
        AnimationScene('.arbitrage', tl_big_team);
      }

      // profits
      if (document.querySelector('.profits')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.profits__headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.profits__subtitle', 0.7, { y: '-100%', opacity: 0 }, 0.3);
        tl_big_team.from('.profits__animation-order-1', 0.7, { x: '-100', opacity: 0 }, 0.7);
        tl_big_team.from('.profits__animation-order-2', 0.7, { x: '-100', opacity: 0 }, 0.7);
        tl_big_team.from('.profits__wrapper .slick-next ', 0.7, { x: '100', opacity: 0 }, 0.7);
        tl_big_team.from('.profits__wrapper .slick-prev', 0.7, { x: '100', opacity: 0 }, 0.7);
        tl_big_team.from('.profits__slider-image', 0.7, { y: '10%', opacity: 0 }, 1);

        // dot animation
        tl_big_team.from('.profits__slider-dot-right', 0.3, { opacity: 0 });
        AnimationScene('.profits', tl_big_team);
      }

      // get-started
      if (document.querySelector('.profits')) {
        const tl_get_started = new TimelineMax();
        tl_get_started.from('.get-started__subtitle', 0.5, { y: '-120%', opacity: 0 });
        tl_get_started.from('.get-started__headline', 0.5, { y: '-100%', opacity: 0 }, 0);
        tl_get_started.from('.get-started__button', 0.7, { opacity: 0 }, 0.7);
        AnimationScene('.get-started', tl_get_started);
      }

      // rates
      if (document.querySelector('.rates')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.rates__headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.rates__subtitle', 0.7, { y: '-100%', opacity: 0 }, 0.3);
        tl_big_team.from('.rates__table', 0.7, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.rates', tl_big_team);
      }

      // ai-trading
      if (document.querySelector('.ai-trading')) {
        const tl_ai_trading = new TimelineMax();
        tl_ai_trading.from('.ai-trading__headline', 0.7, { x: '-15%', opacity: 0 });
        tl_ai_trading.from('.ai-trading__subtitle', 0.7, { x: '-15%', opacity: 0 }, 0.3);
        tl_ai_trading.from('.ai-trading__title', 0.7, { x: '-16%', opacity: 0 }, 0.5);
        tl_ai_trading.from('.ai-trading__description', 0.7, { x: '-15%', opacity: 0 }, 0.7);
        tl_ai_trading.from('.ai-trading__flex-container', 0.7, { y: '10%', opacity: 0 }, 0.9);
        AnimationScene('.ai-trading', tl_ai_trading);
      }

      // calculation
      if (document.querySelector('.calculation')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.calculation__headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.calculation__subtitle', 0.7, { y: '-100%', opacity: 0 }, 0.3);
        tl_big_team.from('.calculation__flex-container', 0.7, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.calculation', tl_big_team);
      }

      // started
      if (document.querySelector('.started')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.started__headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.started__subtitle', 0.7, { y: '-100%', opacity: 0 }, 0.3);
        tl_big_team.from('.started__anim-block-1', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_big_team.from('.started__anim-block-2', 0.7, { scale: 0.8, opacity: 0 }, 1.15);
        tl_big_team.from('.started__anim-block-3', 0.7, { scale: 0.8, opacity: 0 }, 1.3);
        tl_big_team.from('.started__anim-block-4', 0.7, { scale: 0.8, opacity: 0 }, 1.45);
        tl_big_team.from('.started__anim-block-5', 0.7, { scale: 0.8, opacity: 0 }, 1.6);
        tl_big_team.from('.started__anim-block-6', 0.7, { scale: 0.8, opacity: 0 }, 1.75);
        AnimationScene('.started', tl_big_team);
      }

      // upfront
      if (document.querySelector('.upfront')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.upfront__header-block', 0.5, { x: '-10%', opacity: 0 });
        tl_big_team.from('.upfront__table-block', 0.7, { x: '10%', opacity: 0 }, 0.3);
        AnimationScene('.upfront', tl_big_team);
      }
    }
  }
});
