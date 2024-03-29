/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.our-team-header')) {
    const controller = new ScrollMagic.Controller();

    function AnimationScene(section, tween, durationTime, offsetValue) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.55,
        duration: durationTime,
        offset: offsetValue,
      })
        .reverse(false)
        .setTween(tween)
        .addTo(controller);
    }

    function AnimationScene2(section, tween, durationTime, offsetValue) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.75,
        duration: durationTime,
        offset: offsetValue,
      })
        .reverse(false)
        .setTween(tween)
        .addTo(controller);
    }

    // our-team header
    if (document.querySelector('.our-team-header')) {
      const tl_team_header = new TimelineMax();
      tl_team_header.from('.our-team-header__headline-block, .our-team-header__headline', 0.6, {
        y: '40%',
        opacity: 0,
      });
      tl_team_header.from('.our-team-header__video-poster', 0.3, { scale: '.8', opacity: 0 });
      tl_team_header.from('.our-team-header__video-bg', 0.6, { scale: '.95', opacity: 0 });
      AnimationScene('.our-team-header', tl_team_header);
      setTimeout(() => {
        $('.our-team-header__video-poster').addClass('if-hover');
      }, 1000);
    }

    // our-team success
    if (document.querySelector('#anim-success-trigger')) {
      const tl_team_success = new TimelineMax();
      tl_team_success.from('#anim-success-1', 0.5, { x: '-100%', opacity: 0 });
      tl_team_success.from('#anim-success-5, #anim-success-6', 0.5, {
        scale: '.8',
        opacity: 0,
      });
      tl_team_success.from('#anim-success-2', 0.5, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-3', 0.5, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-4', 0.5, { scale: '.8', opacity: 0 });
      AnimationScene2('#anim-success-trigger', tl_team_success);
    }

    // our-team founders
    if (document.querySelector('#anim-founders-trigger')) {
      const tl_team_success = new TimelineMax();
      tl_team_success.from('#anim-founders-1', 0.5, { y: '-60%', opacity: 0 });
      tl_team_success.from('#anim-founders-2', 0.5, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-founders-trigger', tl_team_success);
    }

    // our-team developers
    if (document.querySelector('#anim-core-developers-trigger')) {
      const tl_team_developers = new TimelineMax();
      tl_team_developers.from(
        '#anim-core-developers-trigger h3, #anim-core-developers-trigger p',
        0.1,
        { y: '-100%', opacity: 0 }
      );
      tl_team_developers.from('#anim-core-developers-0', 0.1, { scale: '.8', opacity: 0 });
      AnimationScene2('#anim-core-developers-trigger', tl_team_developers);
    }

    if (document.querySelector('.our-team__core-developers-container')) {
      const tl_team_developers_11 = new TimelineMax();
      tl_team_developers_11.from('#anim-core-developers-1', 0.3, { y: '15%', opacity: 0 });
      tl_team_developers_11.from('#anim-core-developers-2', 0.3, { y: '15%', opacity: 0 });
      tl_team_developers_11.from('#anim-core-developers-3', 0.3, { y: '15%', opacity: 0 });
      tl_team_developers_11.from('#anim-core-developers-4', 0.3, { y: '15%', opacity: 0 });

      AnimationScene2('.our-team__core-developers-container', tl_team_developers_11);
    }

    if (document.querySelector('#anim-core-developers-5')) {
      const tl_team_developers_2 = new TimelineMax();
      tl_team_developers_2.from('#anim-core-developers-5', 0.3, { y: '100%', opacity: 0 });
      AnimationScene2('#anim-core-developers-5', tl_team_developers_2);
    }

    // our-team description
    if (window.matchMedia('(max-width: 570px)').matches) {
      if (document.querySelector('#anim-description-trigger-1')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-1', 0.5, {
          x: '-60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-1 ul', 0.5, { y: '120%', opacity: 0 });
        tl_team_description.from('#anim-description-trigger-1 img', 0.5, { opacity: 0 });
        AnimationScene('#anim-description-trigger-1', tl_team_description);
      }
      if (document.querySelector('#anim-description-trigger-2')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-2', 0.5, {
          x: '60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-2 ul', 0.5, { y: '120%', opacity: 0 });
        tl_team_description.from('#anim-description-trigger-2 img', 0.5, { opacity: 0 });
        AnimationScene('#anim-description-trigger-2', tl_team_description);
      }
      if (document.querySelector('#anim-description-trigger-3')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-3', 0.5, {
          x: '-60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-3 ul', 0.5, { y: '120%', opacity: 0 });
        tl_team_description.from('#anim-description-trigger-3 img', 0.5, { opacity: 0 });
        AnimationScene2('#anim-description-trigger-3', tl_team_description);
      }
      if (document.querySelector('#anim-description-trigger-4')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-4', 0.5, {
          x: '-60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-4 ul', 0.5, { y: '120%', opacity: 0 });
        tl_team_description.from('#anim-description-trigger-4 img', 0.5, { opacity: 0 });
        AnimationScene2('#anim-description-trigger-4', tl_team_description);
      }
      if (document.querySelector('#anim-description-trigger-5')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-5', 0.5, {
          x: '60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-5 ul', 0.5, { y: '120%', opacity: 0 });
        tl_team_description.from('#anim-description-trigger-5 img', 0.5, { opacity: 0 });
        AnimationScene('#anim-description-trigger-5', tl_team_description);
      }
    } else {
      if (document.querySelector('#anim-description-trigger-1')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-1', 0.5, {
          x: '-60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-1 img', 0.5, { opacity: 0 }, '-=0.1');
        tl_team_description.from('#anim-description-trigger-1 ul', 0.5, { y: '120%', opacity: 0 });
        AnimationScene('#anim-description-trigger-1', tl_team_description);
      }
      if (document.querySelector('#anim-description-trigger-2')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-2', 0.5, {
          x: '60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-2 img', 0.5, { opacity: 0 }, '-=0.1');
        tl_team_description.from('#anim-description-trigger-2 ul', 0.5, { y: '120%', opacity: 0 });
        AnimationScene2('#anim-description-trigger-2', tl_team_description);
      }
      if (document.querySelector('#anim-description-trigger-3')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-3', 0.5, {
          x: '-60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-3 img', 0.5, { opacity: 0 }, '-=0.1');
        tl_team_description.from('#anim-description-trigger-3 ul', 0.5, { y: '120%', opacity: 0 });
        AnimationScene2('#anim-description-trigger-3', tl_team_description);
      }
      if (document.querySelector('#anim-description-trigger-4')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-4', 0.5, {
          x: '-60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-4 img', 0.5, { opacity: 0 }, '-=0.1');
        tl_team_description.from('#anim-description-trigger-4 ul', 0.5, { y: '120%', opacity: 0 });
        AnimationScene('#anim-description-trigger-4', tl_team_description);
      }
      if (document.querySelector('#anim-description-trigger-5')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('#anim-description-trigger-content-5', 0.5, {
          x: '60%',
          opacity: 0,
        });
        tl_team_description.from('#anim-description-trigger-5 img', 0.5, { opacity: 0 }, '-=0.1');
        tl_team_description.from('#anim-description-trigger-5 ul', 0.5, { y: '120%', opacity: 0 });
        AnimationScene2('#anim-description-trigger-5', tl_team_description);
      }
    }

    // our-team support
    if (document.querySelector('#anim-support-trigger')) {
      const tl_team_support = new TimelineMax();
      tl_team_support.from('#anim-support-1', 0.5, { x: '-60%', opacity: 0 });
      tl_team_support.from('#anim-support-2', 0.5, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-support-trigger', tl_team_support);
    }

    // big-team founders-container
    if (document.querySelector('#anim-founders-container--headline-trigger')) {
      const tl_big_team_headline = new TimelineMax();
      tl_big_team_headline.from('#anim-founders-container-title', 0.5, { y: '-120%', opacity: 0 });
      tl_big_team_headline.from('#anim-founders-container-subtitle', 0.5, {
        y: '-120%',
        opacity: 0,
      });
      AnimationScene2('#anim-founders-container--headline-trigger', tl_big_team_headline);
    }

    if (document.querySelector('#anim-founders-container-1')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from(
        '#anim-founders-container-1',
        0.7,
        { scale: '.85', opacity: 0 },
        1.3
      );
      tl_team_developers_1.from(
        '#anim-founders-container-2',
        0.7,
        { scale: '.85', opacity: 0 },
        1.6
      );
      tl_team_developers_1.from(
        '#anim-founders-container-3',
        0.7,
        { scale: '.85', opacity: 0 },
        1.9
      );
      tl_team_developers_1.from(
        '#anim-founders-container-4',
        0.7,
        { scale: '.85', opacity: 0 },
        2.1
      );
      tl_team_developers_1.from(
        '#anim-founders-container-5',
        0.7,
        { scale: '.85', opacity: 0 },
        2.4
      );
      tl_team_developers_1.from(
        '#anim-founders-container-6',
        0.7,
        { scale: '.85', opacity: 0 },
        2.7
      );
      tl_team_developers_1.from(
        '#anim-founders-container-7',
        0.7,
        { scale: '.85', opacity: 0 },
        3.0
      );
      tl_team_developers_1.from(
        '#anim-founders-container-8',
        0.7,
        { scale: '.85', opacity: 0 },
        3.3
      );
      AnimationScene2('#anim-founders-container-1', tl_team_developers_1);
    }


    // our team footer
    if (document.querySelector('#anim-footer-trigger')) {
      const tl_team_footer = new TimelineMax();
      tl_team_footer.from('#anim-footer-1', 0.5, { y: '-100%', opacity: 0 });
      tl_team_footer.from('#anim-footer-2', 0.5, { y: '-100%', opacity: 0 }, 0.2);
      tl_team_footer.from('#anim-footer-3', 0.7, { scale: 0.8, opacity: 0 }, 1);
      tl_team_footer.from('#anim-footer-4', 0.7, { y: '100%', opacity: 0 }, 1.3);
      tl_team_footer.from('#anim-footer-5', 0.7, { y: '100%', opacity: 0 }, 1.6);
      tl_team_footer.from('#anim-footer-6', 0.7, { y: '100%', opacity: 0 }, 1.9);
      tl_team_footer.from('#anim-footer-7', 0.7, { y: '100%', opacity: 0 }, 2.1);
      AnimationScene('#anim-footer-trigger', tl_team_footer);
    }
  } 
});
