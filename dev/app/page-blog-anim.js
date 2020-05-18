/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.blog-header')) {
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

    function news_tab(block, container, dur) {
      const tl_news_tab = new TimelineMax();
      tl_news_tab.from(block, 0.5, { scale: 0.8, opacity: 0 }, dur);
      AnimationScene(container, tl_news_tab);
    }

    if (window.matchMedia('(max-width: 570px)').matches) {
      // blog header
      if (document.querySelector('.blog-header')) {
        const tl_press_header = new TimelineMax();
        tl_press_header.from('.blog-header__headline-block', 0.5, { y: '70%', opacity: 0 });
        tl_press_header.from('.blog-header__decor', 0.5, { y: '25%', opacity: 0 }, 0.2);
        AnimationScene('.blog-header', tl_press_header);
      }

      // news-releases 1
      if (document.querySelector('.news-releases__animation-wrapper-1')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-1', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-1', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.news-releases__animation-wrapper-1', tl_news_releases);
        //
        news_tab('.news-releases__anim-order-1', '.news-releases__animation-wrapper-1', 0.5);
        news_tab('.news-releases__anim-order-2', '.news-releases__anim-order-1', 0.5);
        news_tab('.news-releases__anim-order-3', '.news-releases__anim-order-2', 0.5);
        news_tab('.news-releases__anim-order-4', '.news-releases__anim-order-3', 0.5);
        news_tab('.news-releases__anim-order-5', '.news-releases__anim-order-4', 0.5);
        news_tab('.news-releases__anim-order-6', '.news-releases__anim-order-5', 0.5);
      }

      // news-releases 2
      if (document.querySelector('.news-releases__animation-wrapper-2')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-2', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-2', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.news-releases__animation-wrapper-2', tl_news_releases);
        //
        news_tab('.news-releases__anim-order-11', '.news-releases__animation-wrapper-2', 0.5);
        news_tab('.news-releases__anim-order-12', '.news-releases__anim-order-11', 0.5);
        news_tab('.news-releases__anim-order-13', '.news-releases__anim-order-12', 0.5);
        news_tab('.news-releases__anim-order-14', '.news-releases__anim-order-13', 0.5);
        news_tab('.news-releases__anim-order-15', '.news-releases__anim-order-14', 0.5);
        news_tab('.news-releases__anim-order-16', '.news-releases__anim-order-15', 0.5);
      }

      // news-releases 3
      if (document.querySelector('.news-releases__animation-wrapper-3')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-3', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-3', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.news-releases__animation-wrapper-3', tl_news_releases);
        //
        news_tab('.news-releases__anim-order-21', '.news-releases__animation-wrapper-3', 0.5);
        news_tab('.news-releases__anim-order-22', '.news-releases__anim-order-21', 0.5);
        news_tab('.news-releases__anim-order-23', '.news-releases__anim-order-22', 0.5);
        news_tab('.news-releases__anim-order-24', '.news-releases__anim-order-23', 0.5);
        news_tab('.news-releases__anim-order-25', '.news-releases__anim-order-24', 0.5);
        news_tab('.news-releases__anim-order-26', '.news-releases__anim-order-25', 0.5);
      }

      //
    } else if (window.matchMedia('(max-width: 1000px)').matches) {
      console.log('animation - tablet');

      // blog header
      if (document.querySelector('.blog-header')) {
        const tl_press_header = new TimelineMax();
        tl_press_header.from('.blog-header__headline-block', 0.5, { y: '70%', opacity: 0 });
        tl_press_header.from('.blog-header__decor', 0.5, { y: '25%', opacity: 0 }, 0.2);
        AnimationScene('.blog-header', tl_press_header);
      }

      // news-releases 1
      if (document.querySelector('.news-releases__animation-wrapper-1')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-1', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-1', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.news-releases__animation-wrapper-1', tl_news_releases);
        //
        news_tab('.news-releases__anim-order-1', '.news-releases__animation-wrapper-1', 0.5);
        news_tab('.news-releases__anim-order-2', '.news-releases__animation-wrapper-1', 0.7);
        news_tab('.news-releases__anim-order-3', '.news-releases__anim-order-1', 0.5);
        news_tab('.news-releases__anim-order-4', '.news-releases__anim-order-1', 0.7);
        news_tab('.news-releases__anim-order-5', '.news-releases__anim-order-3', 0.5);
        news_tab('.news-releases__anim-order-6', '.news-releases__anim-order-3', 0.7);
      }

      // news-releases 2
      if (document.querySelector('.news-releases__animation-wrapper-2')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-2', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-2', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.news-releases__animation-wrapper-2', tl_news_releases);
        //
        news_tab('.news-releases__anim-order-11', '.news-releases__animation-wrapper-2', 0.5);
        news_tab('.news-releases__anim-order-12', '.news-releases__animation-wrapper-2', 0.7);
        news_tab('.news-releases__anim-order-13', '.news-releases__anim-order-11', 0.5);
        news_tab('.news-releases__anim-order-14', '.news-releases__anim-order-11', 0.7);
        news_tab('.news-releases__anim-order-15', '.news-releases__anim-order-13', 0.5);
        news_tab('.news-releases__anim-order-16', '.news-releases__anim-order-13', 0.7);
      }

      // news-releases 3
      if (document.querySelector('.news-releases__animation-wrapper-3')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-3', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-3', 0.5, { y: '100%', opacity: 0 }, 0.2);
        AnimationScene('.news-releases__animation-wrapper-3', tl_news_releases);
        //
        news_tab('.news-releases__anim-order-21', '.news-releases__animation-wrapper-3', 0.5);
        news_tab('.news-releases__anim-order-22', '.news-releases__animation-wrapper-3', 0.7);
        news_tab('.news-releases__anim-order-23', '.news-releases__anim-order-21', 0.5);
        news_tab('.news-releases__anim-order-24', '.news-releases__anim-order-21', 0.7);
        news_tab('.news-releases__anim-order-25', '.news-releases__anim-order-23', 0.5);
        news_tab('.news-releases__anim-order-26', '.news-releases__anim-order-23', 0.7);
      }

      // desktop animation
    } else {
      console.log('animation - desktop');

      // blog header
      if (document.querySelector('.blog-header')) {
        const tl_press_header = new TimelineMax();
        tl_press_header.from('.blog-header__headline-block', 0.5, { y: '40%', opacity: 0 });
        tl_press_header.from('.blog-header__decor', 0.5, { y: '20%', opacity: 0 }, 0.2);
        AnimationScene('.blog-header', tl_press_header);
      }

      // news-releases 1
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-1', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-1', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_news_releases.from('.news-releases__anim-order-1', 0.5, { scale: 0.8, opacity: 0 }, 0.5);
        tl_news_releases.from('.news-releases__anim-order-2', 0.5, { scale: 0.8, opacity: 0 }, 0.7);
        tl_news_releases.from('.news-releases__anim-order-3', 0.5, { scale: 0.8, opacity: 0 }, 0.9);
        tl_news_releases.from('.news-releases__anim-order-4', 0.5, { scale: 0.8, opacity: 0 }, 1.1);
        tl_news_releases.from('.news-releases__anim-order-5', 0.5, { scale: 0.8, opacity: 0 }, 1.3);
        tl_news_releases.from('.news-releases__anim-order-6', 0.5, { scale: 0.8, opacity: 0 }, 1.5);
        AnimationScene('.news-releases__animation-wrapper-1', tl_news_releases);
      }

      // news-releases 2
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-2', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-2', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_news_releases.from(
          '.news-releases__anim-order-11',
          0.5,
          { scale: 0.8, opacity: 0 },
          0.5
        );
        tl_news_releases.from(
          '.news-releases__anim-order-12',
          0.5,
          { scale: 0.8, opacity: 0 },
          0.7
        );
        tl_news_releases.from(
          '.news-releases__anim-order-13',
          0.5,
          { scale: 0.8, opacity: 0 },
          0.9
        );
        tl_news_releases.from(
          '.news-releases__anim-order-14',
          0.5,
          { scale: 0.8, opacity: 0 },
          1.1
        );
        tl_news_releases.from(
          '.news-releases__anim-order-15',
          0.5,
          { scale: 0.8, opacity: 0 },
          1.3
        );
        tl_news_releases.from(
          '.news-releases__anim-order-16',
          0.5,
          { scale: 0.8, opacity: 0 },
          1.5
        );
        AnimationScene('.news-releases__animation-wrapper-2', tl_news_releases);
      }

      // news-releases 3
      if (document.querySelector('.news-releases')) {
        const tl_news_releases = new TimelineMax();
        tl_news_releases.from('.news-releases__headline-3', 0.5, { y: '100%', opacity: 0 });
        tl_news_releases.from('.news-releases__subtitle-3', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_news_releases.from(
          '.news-releases__anim-order-21',
          0.5,
          { scale: 0.8, opacity: 0 },
          0.5
        );
        tl_news_releases.from(
          '.news-releases__anim-order-22',
          0.5,
          { scale: 0.8, opacity: 0 },
          0.7
        );
        tl_news_releases.from(
          '.news-releases__anim-order-23',
          0.5,
          { scale: 0.8, opacity: 0 },
          0.9
        );
        tl_news_releases.from(
          '.news-releases__anim-order-24',
          0.5,
          { scale: 0.8, opacity: 0 },
          1.1
        );
        tl_news_releases.from(
          '.news-releases__anim-order-25',
          0.5,
          { scale: 0.8, opacity: 0 },
          1.3
        );
        tl_news_releases.from(
          '.news-releases__anim-order-26',
          0.5,
          { scale: 0.8, opacity: 0 },
          1.5
        );
        AnimationScene('.news-releases__animation-wrapper-3', tl_news_releases);
      }
    }
  }
});
