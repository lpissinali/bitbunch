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
        .reverse(true)
        .setTween(tween)
        .addTo(controller);
    }

    // our-team header
    if (document.querySelector('.our-team-header')) {
      const tl_team_header = new TimelineMax();
      tl_team_header.from(
        '.our-team-header__headline-block, .our-team-header__headline',
        0.5,
        { y: '40%', opacity: 0 },
        0.4
      );
      tl_team_header.from('.our-team-header__video-poster', 0.5, { scale: '.8', opacity: 0 }, 0.4);
      tl_team_header.from('.our-team-header__video-bg', 0.5, { scale: '.8', opacity: 0 }, 0.6);
      AnimationScene('.our-team-header', tl_team_header);
    }

    // our-team success

    if (window.matchMedia('(max-width: 1920px)').matches) {
      if (document.querySelector('#anim-success-trigger')) {
        const tl_team_success = new TimelineMax();
        tl_team_success.from('#anim-success-1', 2.2, { x: '-100%', opacity: 0 });
        tl_team_success.from('#anim-success-5, #anim-success-6', 0.8, {
          scale: '.8',
          opacity: 0,
        });
        tl_team_success.from('#anim-success-2', 0.8, { scale: '.8', opacity: 0 });
        tl_team_success.from('#anim-success-3', 0.8, { scale: '.8', opacity: 0 });
        tl_team_success.from('#anim-success-4', 0.8, { scale: '.8', opacity: 0 });
        AnimationScene('#anim-success-trigger', tl_team_success, '65%');
      }
    } else {
      const tl_team_success = new TimelineMax();
      tl_team_success.from('#anim-success-1', 1.2, { x: '-100%', opacity: 0 });
      tl_team_success.from('#anim-success-5, #anim-success-6', 0.5, {
        scale: '.8',
        opacity: 0,
      });
      tl_team_success.from('#anim-success-2', 0.5, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-3', 0.5, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-4', 0.5, { scale: '.8', opacity: 0 });
      AnimationScene('.our-team-header', tl_team_success);
    }

    // our-team founders
    if (document.querySelector('#anim-founders-trigger')) {
      const tl_team_success = new TimelineMax();
      tl_team_success.from('#anim-founders-1', 1, { y: '-60%', opacity: 0 });
      tl_team_success.from('#anim-founders-2', 0.8, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-founders-trigger', tl_team_success, '50%');
    }

    // our-team developers
    if (document.querySelector('#anim-core-developers-trigger')) {
      const tl_team_developers = new TimelineMax();
      tl_team_developers.from(
        '#anim-core-developers-trigger h3, #anim-core-developers-trigger p',
        0.8,
        { y: '-100%', opacity: 0 }
      );
      tl_team_developers.from('#anim-core-developers-0', 0.8, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-core-developers-trigger', tl_team_developers, '50%');
    }

    if (document.querySelector('.our-team__core-developers-container')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-core-developers-1', 0.7, { y: '15%', opacity: 0 }, 1.3);
      tl_team_developers_1.from('#anim-core-developers-2', 0.7, { y: '15%', opacity: 0 }, 1.8);
      tl_team_developers_1.from('#anim-core-developers-3', 0.7, { y: '15%', opacity: 0 }, 2.3);
      tl_team_developers_1.from('#anim-core-developers-4', 0.7, { y: '15%', opacity: 0 }, 2.8);

      AnimationScene('.our-team__core-developers-container', tl_team_developers_1, '25%');
    }

    if (document.querySelector('#anim-core-developers-5')) {
      const tl_team_developers_2 = new TimelineMax();
      tl_team_developers_2.from('#anim-core-developers-5', 0.5, { y: '100%', opacity: 0 });
      AnimationScene('#anim-core-developers-5', tl_team_developers_2, '10%', '-250px');
    }

    // our-team description
    if (document.querySelector('#anim-description-trigger-1')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from('#anim-description-trigger-content-1', 1, { x: '-60%', opacity: 0 });
      tl_team_description.from('#anim-description-trigger-1 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-1 ul', 1, { y: '120%', opacity: 0 });
      AnimationScene('#anim-description-trigger-1', tl_team_description, '50%');
    }
    if (document.querySelector('#anim-description-trigger-2')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from('#anim-description-trigger-content-2', 1, { x: '60%', opacity: 0 });
      tl_team_description.from('#anim-description-trigger-2 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-2 ul', 1, { y: '120%', opacity: 0 });
      AnimationScene('#anim-description-trigger-2', tl_team_description, '50%');
    }
    if (document.querySelector('#anim-description-trigger-3')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from('#anim-description-trigger-content-3', 1, { x: '-60%', opacity: 0 });
      tl_team_description.from('#anim-description-trigger-3 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-3 ul', 1, { y: '120%', opacity: 0 });
      AnimationScene('#anim-description-trigger-3', tl_team_description, '50%');
    }
    if (document.querySelector('#anim-description-trigger-4')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from('#anim-description-trigger-content-4', 1, { x: '-60%', opacity: 0 });
      tl_team_description.from('#anim-description-trigger-4 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-4 ul', 1, { y: '120%', opacity: 0 });
      AnimationScene('#anim-description-trigger-4', tl_team_description, '50%');
    }
    if (document.querySelector('#anim-description-trigger-5')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from('#anim-description-trigger-content-5', 1, { x: '60%', opacity: 0 });
      tl_team_description.from('#anim-description-trigger-5 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-5 ul', 1, { y: '120%', opacity: 0 });
      AnimationScene('#anim-description-trigger-5', tl_team_description, '50%');
    }

    // our-team support
    if (document.querySelector('#anim-support-trigger')) {
      const tl_team_support = new TimelineMax();
      tl_team_support.from('#anim-support-1', 1, { x: '-60%', opacity: 0 });
      tl_team_support.from('#anim-support-2', 0.8, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-support-trigger', tl_team_support, '50%');
    }

    // big-team founders-container
    if (document.querySelector('#anim-founders-container--headline-trigger')) {
      const tl_big_team_headline = new TimelineMax();
      tl_big_team_headline.from('#anim-founders-container-title', 1, { y: '-120%', opacity: 0 });
      tl_big_team_headline.from('#anim-founders-container-subtitle', 1, {
        y: '-120%',
        opacity: 0,
      });
      AnimationScene('#anim-founders-container--headline-trigger', tl_big_team_headline, '50%');
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
      AnimationScene('#anim-founders-container-1', tl_team_developers_1, '50%');
    }

    if (document.querySelector('#anim-founders-container-2')) {
      const tl_team_developers_2 = new TimelineMax();
      tl_team_developers_2.from(
        '#anim-founders-container-5',
        0.7,
        { scale: '.85', opacity: 0 },
        1.3
      );
      tl_team_developers_2.from(
        '#anim-founders-container-6',
        0.7,
        { scale: '.85', opacity: 0 },
        1.6
      );
      tl_team_developers_2.from(
        '#anim-founders-container-7',
        0.7,
        { scale: '.85', opacity: 0 },
        1.9
      );
      tl_team_developers_2.from(
        '#anim-founders-container-8',
        0.7,
        { scale: '.85', opacity: 0 },
        2.1
      );
      AnimationScene('#anim-founders-container-2', tl_team_developers_2, '100%');
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
      AnimationScene('#anim-footer-trigger', tl_team_footer, '35%');
    }
  }
});
