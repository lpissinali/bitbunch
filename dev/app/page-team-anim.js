/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.our-team-header')) {
    const controller = new ScrollMagic.Controller();

    function AnimationScene(section, tween, durationTime) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.55,
        duration: durationTime,
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
      tl_team_header.from('.our-team-header__video-bg', 0.5, { scale: '.8', opacity: 0 }, 0.5);
      AnimationScene('.our-team-header', tl_team_header);
    }

    // our-team success
    if (document.querySelector('#anim-success-trigger')) {
      const tl_team_success = new TimelineMax();
      tl_team_success.from('#anim-success-1', 0.8, { x: '-40%', opacity: 0 });
      tl_team_success.from('#anim-success-2', 0.8, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-6', 0.8, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-7', 0.8, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-3', 0.8, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-4', 0.8, { scale: '.8', opacity: 0 });
      tl_team_success.from('#anim-success-5', 0.8, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-success-trigger', tl_team_success, 500);
    }

    // our-team founders
    if (document.querySelector('#anim-founders-trigger')) {
      const tl_team_success = new TimelineMax();
      tl_team_success.from('#anim-founders-1', 0.8, { y: '-40%', opacity: 0 });
      tl_team_success.from('#anim-founders-2', 0.8, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-founders-trigger', tl_team_success, 500);
    }

    // our-team developers
    if (document.querySelector('#anim-core-developers-trigger')) {
      const tl_team_developers = new TimelineMax();
      tl_team_developers.from(
        '#anim-core-developers-trigger h3, #anim-core-developers-trigger p',
        0.8,
        { y: '-40%', opacity: 0 }
      );
      tl_team_developers.from('#anim-core-developers-0', 0.8, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-core-developers-trigger', tl_team_developers, 500);
    }

    if (document.querySelector('#anim-core-developers-1')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-core-developers-1', 0.8, { y: '50%', opacity: 0 });
      AnimationScene('#anim-core-developers-1', tl_team_developers_1, 150);
    }

    if (document.querySelector('#anim-core-developers-2')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-core-developers-2', 0.8, { y: '50%', opacity: 0 });
      AnimationScene('#anim-core-developers-2', tl_team_developers_1, 200);
    }

    if (document.querySelector('#anim-core-developers-3')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-core-developers-3', 0.8, { y: '50%', opacity: 0 });
      AnimationScene('#anim-core-developers-3', tl_team_developers_1, 250);
    }

    if (document.querySelector('#anim-core-developers-4')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-core-developers-4', 0.8, { y: '50%', opacity: 0 });
      AnimationScene('#anim-core-developers-4', tl_team_developers_1, 300);
    }

    if (document.querySelector('#anim-core-developers-5')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-core-developers-5', 0.3, { y: '50%', opacity: 0 });
      AnimationScene('#anim-core-developers-5', tl_team_developers_1, 0);
    }

    // our-team description
    if (document.querySelector('#anim-description-trigger-1')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from(
        '#anim-description-trigger-1 span, #anim-description-trigger-1 h3, #anim-description-trigger-1 p',
        0.8,
        { x: '-40%', opacity: 0 }
      );
      tl_team_description.from('#anim-description-trigger-1 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-1 ul', 0.8, { y: '100%', opacity: 0 });
      AnimationScene('#anim-description-trigger-1', tl_team_description, 500);
    }
    if (document.querySelector('#anim-description-trigger-2')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from(
        '#anim-description-trigger-2 span, #anim-description-trigger-2 h3, #anim-description-trigger-2 p',
        0.8,
        { x: '40%', opacity: 0 }
      );
      tl_team_description.from('#anim-description-trigger-2 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-2 ul', 0.8, { y: '100%', opacity: 0 });
      AnimationScene('#anim-description-trigger-2', tl_team_description, 500);
    }
    if (document.querySelector('#anim-description-trigger-3')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from(
        '#anim-description-trigger-3 span, #anim-description-trigger-3 h3, #anim-description-trigger-3 p',
        0.8,
        { x: '-40%', opacity: 0 }
      );
      tl_team_description.from('#anim-description-trigger-3 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-3 ul', 0.8, { y: '100%', opacity: 0 });
      AnimationScene('#anim-description-trigger-3', tl_team_description, 500);
    }
    if (document.querySelector('#anim-description-trigger-4')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from(
        '#anim-description-trigger-4 span, #anim-description-trigger-4 h3, #anim-description-trigger-4 p',
        0.8,
        { x: '-40%', opacity: 0 }
      );
      tl_team_description.from('#anim-description-trigger-4 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-4 ul', 0.8, { y: '100%', opacity: 0 });
      AnimationScene('#anim-description-trigger-4', tl_team_description, 500);
    }
    if (document.querySelector('#anim-description-trigger-5')) {
      const tl_team_description = new TimelineMax();
      tl_team_description.from(
        '#anim-description-trigger-5 span, #anim-description-trigger-5 h3, #anim-description-trigger-5 p',
        0.8,
        { x: '40%', opacity: 0 }
      );
      tl_team_description.from('#anim-description-trigger-5 img', 1, { opacity: 0 });
      tl_team_description.from('#anim-description-trigger-5 ul', 0.8, { y: '100%', opacity: 0 });
      AnimationScene('#anim-description-trigger-5', tl_team_description, 500);
    }

    // our-team support
    if (document.querySelector('#anim-support-trigger')) {
      const tl_team_support = new TimelineMax();
      tl_team_support.from('#anim-support-1', 0.8, { x: '-40%', opacity: 0 });
      tl_team_support.from('#anim-support-2', 0.8, { scale: '.8', opacity: 0 });
      AnimationScene('#anim-support-trigger', tl_team_support, 250);
    }

    // big-team founders-container
    if (document.querySelector('#anim-founders-container--headline-trigger')) {
      const tl_big_team_headline = new TimelineMax();
      tl_big_team_headline.from('#anim-founders-container-title', 0.7, { y: '-100%', opacity: 0 });
      tl_big_team_headline.from('#anim-founders-container-subtitle', 0.7, {
        y: '-100%',
        opacity: 0,
      });
      AnimationScene('#anim-founders-container--headline-trigger', tl_big_team_headline, 100);
    }


    if (document.querySelector('#anim-founders-container-1')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-founders-container-1', 0.8, { y: '50%', opacity: 0 });
      AnimationScene('#anim-founders-container-1', tl_team_developers_1, 150);
    }

    if (document.querySelector('#anim-founders-container-2')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-founders-container-2', 0.8, { y: '50%', opacity: 0 });
      AnimationScene('#anim-founders-container-2', tl_team_developers_1, 200);
    }

    if (document.querySelector('#anim-founders-container-3')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-founders-container-3', 0.8, { y: '50%', opacity: 0 });
      AnimationScene('#anim-founders-container-3', tl_team_developers_1, 250);
    }

    if (document.querySelector('#anim-founders-container-4')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-founders-container-4', 0.8, { y: '50%', opacity: 0 });
      AnimationScene('#anim-founders-container-4', tl_team_developers_1, 300);
    }

    if (document.querySelector('#anim-founders-container-5')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-founders-container-5', 0.3, { y: '50%', opacity: 0 });
      AnimationScene('#anim-founders-container-5', tl_team_developers_1, 150);
    }

    if (document.querySelector('#anim-founders-container-6')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-founders-container-6', 0.3, { y: '50%', opacity: 0 });
      AnimationScene('#anim-founders-container-6', tl_team_developers_1, 200);
    }

    if (document.querySelector('#anim-founders-container-7')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-founders-container-7', 0.3, { y: '50%', opacity: 0 });
      AnimationScene('#anim-founders-container-7', tl_team_developers_1, 250);
    }

    if (document.querySelector('#anim-founders-container-8')) {
      const tl_team_developers_1 = new TimelineMax();
      tl_team_developers_1.from('#anim-founders-container-8', 0.3, { y: '50%', opacity: 0 });
      AnimationScene('#anim-founders-container-8', tl_team_developers_1, 300);
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
      AnimationScene('#anim-footer-trigger', tl_team_footer, 500);
    }
  }
});
