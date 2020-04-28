/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.hiw-header')) {
    const controller = new ScrollMagic.Controller();

    function AnimationScene(section, tween) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.55,
      })
        .reverse(false)
        .setTween(tween)
        .addTo(controller);
    }

    // if (window.matchMedia('(max-width: 570px)').matches) {
    // } else

    if (window.matchMedia('(max-width: 1100px)').matches) {
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
        tl_big_team.from('.arbitrage__flex-container', 0.7, { y: '10%', opacity: 0 }, 0.3);
        AnimationScene('.arbitrage', tl_big_team);
      }

      // profits
      if (document.querySelector('.profits')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.profits__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.profits__subtitle', 0.7, { y: '10%', opacity: 0 }, 0.3);
        tl_big_team.from('.profits__slider-container', 0.7, { y: '10%', opacity: 0 }, 0.6);
        tl_big_team.from('.profits__slider-image', 0.7, { y: '10%', opacity: 0 }, 0.9);
        AnimationScene('.profits', tl_big_team);
      }

      // rates
      if (document.querySelector('.rates')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.rates__headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.rates__subtitle', 0.7, { y: '100%', opacity: 0 }, 0.3);
        tl_big_team.from('.rates__table', 0.7, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.rates', tl_big_team);
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
        tl_big_team.from('.arbitrage__anim-block-1', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_big_team.from('.arbitrage__anim-block-2', 0.7, { scale: 0.8, opacity: 0 }, 1.15);
        tl_big_team.from('.arbitrage__anim-block-3', 0.7, { scale: 0.8, opacity: 0 }, 1.3);
        tl_big_team.from('.arbitrage__anim-block-4', 0.7, { scale: 0.8, opacity: 0 }, 1.45);
        AnimationScene('.arbitrage', tl_big_team);
      }

      // profits
      if (document.querySelector('.profits')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.profits__headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.profits__subtitle', 0.7, { y: '-100%', opacity: 0 }, 0.3);
        tl_big_team.from('.profits__slider-container', 0.7, { x: '-10%', opacity: 0 }, 0.7);
        tl_big_team.from('.profits__slider-image', 0.7, { y: '10%', opacity: 0 }, 1);
        AnimationScene('.profits', tl_big_team);
      }

      // rates
      if (document.querySelector('.rates')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.rates__headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.rates__subtitle', 0.7, { y: '-100%', opacity: 0 }, 0.3);
        tl_big_team.from('.rates__table', 0.7, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.rates', tl_big_team);
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
