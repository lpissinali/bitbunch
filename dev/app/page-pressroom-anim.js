/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.pressroom-header')) {
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

    function animCardBlock(bClass, bTrigg) {
      const tl = new TimelineMax();
      tl.from(bClass, 0.5, { scale: 0.8, opacity: 0 }, 0.5);
      AnimationScene(bTrigg, tl);
    }

    if (window.matchMedia('(max-width: 570px)').matches) {
      // pressroom header
      if (document.querySelector('.pressroom-header')) {
        const tl_press_header = new TimelineMax();
        tl_press_header.from('.pressroom-header__headline-block', 0.5, { y: '70%', opacity: 0 });
        tl_press_header.from('.pressroom-header__decor', 0.5, { y: '25%', opacity: 0 }, 0.2);
        AnimationScene('.pressroom-header', tl_press_header);
      }

      // news-releases
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.news-releases', tl_news_releases);

        //
        animCardBlock('.news-releases__anim-order-1', '.news-releases');
        animCardBlock('.news-releases__anim-order-2', '.news-releases__anim-order-1');
        animCardBlock('.news-releases__anim-order-3', '.news-releases__anim-order-2');
        animCardBlock('.news-releases__anim-order-4', '.news-releases__anim-order-3');
        animCardBlock('.news-releases__anim-order-5', '.news-releases__anim-order-4');
        animCardBlock('.news-releases__anim-order-6', '.news-releases__anim-order-5');
      }

      // news-releases
      if (document.querySelector('.standarts')) {
        const tl_standarts = new TimelineMax();
        tl_standarts.from('.standarts__headline', 0.5, { y: '100%', opacity: 0 });
        tl_standarts.from('.standarts__subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.standarts', tl_standarts);

        //
        animCardBlock('.standarts__logo-block', '.standarts__subtitle');
        animCardBlock('.standarts__brand-block', '.standarts__logo-block');
      }

      //
    } else if (window.matchMedia('(max-width: 1000px)').matches) {
      console.log('animation - tablet');

      // pressroom header
      if (document.querySelector('.pressroom-header')) {
        const tl_press_header = new TimelineMax();
        tl_press_header.from('.pressroom-header__headline-block', 0.5, { y: '70%', opacity: 0 });
        tl_press_header.from('.pressroom-header__decor', 0.5, { y: '25%', opacity: 0 }, 0.2);
        AnimationScene('.pressroom-header', tl_press_header);
      }

      // news-releases
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.news-releases', tl_news_releases);
      }

      //
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__anim-order-1', 0.5, { scale: 0.8, opacity: 0 }, 0.5);
        AnimationScene('.news-releases', tl_news_releases);
      }

      //
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__anim-order-2', 0.5, { scale: 0.8, opacity: 0 }, 0.7);
        AnimationScene('.news-releases', tl_news_releases);
      }

      //
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__anim-order-3', 0.5, { scale: 0.8, opacity: 0 }, 0.5);
        AnimationScene('.news-releases__anim-order-1', tl_news_releases);
      }

      //
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__anim-order-4', 0.5, { scale: 0.8, opacity: 0 }, 0.7);
        AnimationScene('.news-releases__anim-order-1', tl_news_releases);
      }

      //
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__anim-order-5', 0.5, { scale: 0.8, opacity: 0 }, 0.5);
        AnimationScene('.news-releases__anim-order-3', tl_news_releases);
      }

      //
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__anim-order-6', 0.5, { scale: 0.8, opacity: 0 }, 0.7);
        AnimationScene('.news-releases__anim-order-3', tl_news_releases);
      }

      // news-releases
      if (document.querySelector('.standarts')) {
        const tl_standarts = new TimelineMax();
        tl_standarts.from('.standarts__headline', 0.5, { y: '100%', opacity: 0 });
        tl_standarts.from('.standarts__subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_standarts.from('.standarts__logo-block', 0.5, { y: '10%', opacity: 0 }, 0.5);
        tl_standarts.from('.standarts__brand-block', 0.5, { y: '10%', opacity: 0 }, 0.9);
        AnimationScene('.standarts', tl_standarts);
      }

      // desktop animation
    } else {
      console.log('animation - desktop');

      // pressroom header
      if (document.querySelector('.pressroom-header')) {
        const tl_press_header = new TimelineMax();
        tl_press_header.from('.pressroom-header__headline-block', 0.5, { y: '40%', opacity: 0 });
        tl_press_header.from('.pressroom-header__decor', 0.5, { y: '20%', opacity: 0 }, 0.2);
        AnimationScene('.pressroom-header', tl_press_header);
      }

      // news-releases
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_news_releases.from('.news-releases__anim-order-1', 0.5, { scale: 0.8, opacity: 0 }, 0.5);
        tl_news_releases.from('.news-releases__anim-order-2', 0.5, { scale: 0.8, opacity: 0 }, 0.7);
        tl_news_releases.from('.news-releases__anim-order-3', 0.5, { scale: 0.8, opacity: 0 }, 0.9);
        tl_news_releases.from('.news-releases__anim-order-4', 0.5, { scale: 0.8, opacity: 0 }, 1.1);
        tl_news_releases.from('.news-releases__anim-order-5', 0.5, { scale: 0.8, opacity: 0 }, 1.3);
        tl_news_releases.from('.news-releases__anim-order-6', 0.5, { scale: 0.8, opacity: 0 }, 1.5);
        AnimationScene('.news-releases', tl_news_releases);
      }

      // news-releases
      if (document.querySelector('.standarts')) {
        const tl_standarts = new TimelineMax();
        tl_standarts.from('.standarts__headline', 0.5, { y: '100%', opacity: 0 });
        tl_standarts.from('.standarts__subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_standarts.from('.standarts__logo-block', 0.5, { y: '25%', opacity: 0 }, 0.5);
        tl_standarts.from('.standarts__brand-block', 0.5, { y: '25%', opacity: 0 }, 0.9);
        AnimationScene('.standarts', tl_standarts);
      }
    }
  }
});
