/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.our-team-header')) {
    const controller = new ScrollMagic.Controller();

    function AnimationScene(section, tween) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.55,
      })
        .reverse(true)
        .setTween(tween)
        .addTo(controller);
    }

    if (window.matchMedia('(max-width: 570px)').matches) {
      // our-team header
      if (document.querySelector('.our-team-header')) {
        const tl_team_header = new TimelineMax();
        tl_team_header.from('.our-team-header__headline', 0.5, { y: '40%', opacity: 0 }, 0.4);
        tl_team_header.from('.our-team-header__headline-block', 0.5, { y: '40%', opacity: 0 }, 0.4);
        tl_team_header.from('.our-team-header__video-poster', 0.5, { scale: '.8', opacity: 0 }, 0.4);
        tl_team_header.from('.our-team-header__video-bg', 0.5, { scale: '.8', opacity: 0 }, 0.5);
        AnimationScene('.our-team-header', tl_team_header);
      }

      // our-team success
      if (document.querySelector('.our-team__success')) {
        const tl_team_success = new TimelineMax();
        tl_team_success.from('.our-team__success-content', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_success.from('.our-team__success-anim-1', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-5', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-6', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-2', 0.8, { scale: '.5', opacity: 0 }, 1.3);
        tl_team_success.from('.our-team__success-anim-3', 0.8, { scale: '.5', opacity: 0 }, 1.5);
        tl_team_success.from('.our-team__success-anim-4', 0.8, { scale: '.5', opacity: 0 }, 1.7);
        AnimationScene('.our-team__success', tl_team_success);
      }

      // our-team founders
      if (document.querySelector('.our-team__founders')) {
        const tl_team_founders = new TimelineMax();
        tl_team_founders.from('.our-team__founders-content', 0.8, { y: '-40%', opacity: 0 }, 0.5);
        tl_team_founders.from('.our-team__founders-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        AnimationScene('.our-team__founders', tl_team_founders);
      }

      // our-team developers
      if (document.querySelector('.our-team__core-developers')) {
        const tl_team_developers = new TimelineMax();
        tl_team_developers.from('.our-team__core-developers h3, .our-team__core-developers p', 0.8, { y: '-40%', opacity: 0 }, 0.5);
        tl_team_developers.from('.our-team__core-developers-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        tl_team_developers.from('.our-team__core-developers-order-1', 0.7, { y: '100%', opacity: 0 }, 1.5);
        tl_team_developers.from('.our-team__core-developers-order-2', 0.7, { y: '100%', opacity: 0 }, 1.8);
        tl_team_developers.from('.our-team__core-developers-order-3', 0.7, { y: '100%', opacity: 0 }, 2.1);
        tl_team_developers.from('.our-team__core-developers-order-4', 0.7, { y: '100%', opacity: 0 }, 2.4);
        tl_team_developers.from('.our-team__core-developers-order-5', 0.7, { y: '100%', opacity: 0 }, 2.7);
        AnimationScene('.our-team__core-developers', tl_team_developers);
      }

      // our-team description
      if (document.querySelector('.our-team__description-order-1')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-1 span, .our-team__description-order-1 h3, .our-team__description-order-1 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-1 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-1 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-1', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-2')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-2 span, .our-team__description-order-2 h3, .our-team__description-order-2 p', 0.8, { x: '40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-2 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-2 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-2', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-3')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-3 span, .our-team__description-order-3 h3, .our-team__description-order-3 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-3 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-3 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-3', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-4')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-4 span, .our-team__description-order-4 h3, .our-team__description-order-4 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-4 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-4 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-4', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-5')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-5 span, .our-team__description-order-5 h3, .our-team__description-order-5 p', 0.8, { x: '40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-5 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-5 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-5', tl_team_description);
      }

      // our-team support
      if (document.querySelector('.our-team__support')) {
        const tl_team_support = new TimelineMax();
        tl_team_support.from('.our-team__support-content', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_support.from('.our-team__support-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        AnimationScene('.our-team__support', tl_team_support);
      }
      
      // big-team founders-container
      if (document.querySelector('.big-team__founders-container')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__founders-headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.big-team__founders-subtitle', 0.5, { y: '-100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__animation-order-1', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_big_team.from('.big-team__animation-order-2', 0.7, { scale: 0.8, opacity: 0 }, 1.3);
        tl_big_team.from('.big-team__animation-order-3', 0.7, { scale: 0.8, opacity: 0 }, 1.6);
        tl_big_team.from('.big-team__animation-order-4', 0.7, { scale: 0.8, opacity: 0 }, 1.9);
        tl_big_team.from('.big-team__animation-order-5', 0.7, { scale: 0.8, opacity: 0 }, 2.1);
        tl_big_team.from('.big-team__animation-order-6', 0.7, { scale: 0.8, opacity: 0 }, 2.3);
        tl_big_team.from('.big-team__animation-order-7', 0.7, { scale: 0.8, opacity: 0 }, 2.7);
        tl_big_team.from('.big-team__animation-order-8', 0.7, { scale: 0.8, opacity: 0 }, 3);
        AnimationScene('.big-team__founders-container', tl_big_team);
      }
      
      // our team footer
      if (document.querySelector('.our-team__footer-container')) {
        const tl_team_footer = new TimelineMax();
        tl_team_footer.from('.our-team__footer-anim-1', 0.5, { y: '-100%', opacity: 0 });
        tl_team_footer.from('.our-team__footer-anim-2', 0.5, { y: '-100%', opacity: 0 }, 0.2);
        tl_team_footer.from('.our-team__footer-anim-3', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_team_footer.from('.our-team__footer-anim-4', 0.7, { y: '100%', opacity: 0 }, 1.3);
        tl_team_footer.from('.our-team__footer-anim-5', 0.7, { y: '100%', opacity: 0 }, 1.6);
        tl_team_footer.from('.our-team__footer-anim-6', 0.7, { y: '100%', opacity: 0 }, 1.9);
        tl_team_footer.from('.our-team__footer-anim-7', 0.7, { y: '100%', opacity: 0 }, 2.1);
        AnimationScene('.our-team__footer-container', tl_team_footer);
      }

    } else if (window.matchMedia('(max-width: 1000px)').matches) {
      console.log('animation - tablet');

      
      // our-team header
      if (document.querySelector('.our-team-header')) {
        const tl_team_header = new TimelineMax();
        tl_team_header.from('.our-team-header__headline', 0.5, { y: '40%', opacity: 0 }, 0.4);
        tl_team_header.from('.our-team-header__headline-block', 0.5, { y: '40%', opacity: 0 }, 0.4);
        tl_team_header.from('.our-team-header__video-poster', 0.5, { scale: '.8', opacity: 0 }, 0.4);
        tl_team_header.from('.our-team-header__video-bg', 0.5, { scale: '.8', opacity: 0 }, 0.5);
        AnimationScene('.our-team-header', tl_team_header);
      }

      // our-team success
      if (document.querySelector('.our-team__success')) {
        const tl_team_success = new TimelineMax();
        tl_team_success.from('.our-team__success-content', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_success.from('.our-team__success-anim-1', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-5', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-6', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-2', 0.8, { scale: '.5', opacity: 0 }, 1.3);
        tl_team_success.from('.our-team__success-anim-3', 0.8, { scale: '.5', opacity: 0 }, 1.5);
        tl_team_success.from('.our-team__success-anim-4', 0.8, { scale: '.5', opacity: 0 }, 1.7);
        AnimationScene('.our-team__success', tl_team_success);
      }

      // our-team founders
      if (document.querySelector('.our-team__founders')) {
        const tl_team_founders = new TimelineMax();
        tl_team_founders.from('.our-team__founders-content', 0.8, { y: '-40%', opacity: 0 }, 0.5);
        tl_team_founders.from('.our-team__founders-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        AnimationScene('.our-team__founders', tl_team_founders);
      }

      // our-team developers
      if (document.querySelector('.our-team__core-developers')) {
        const tl_team_developers = new TimelineMax();
        tl_team_developers.from('.our-team__core-developers h3, .our-team__core-developers p', 0.8, { y: '-40%', opacity: 0 }, 0.5);
        tl_team_developers.from('.our-team__core-developers-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        tl_team_developers.from('.our-team__core-developers-order-1', 0.7, { y: '100%', opacity: 0 }, 1.5);
        tl_team_developers.from('.our-team__core-developers-order-2', 0.7, { y: '100%', opacity: 0 }, 1.8);
        tl_team_developers.from('.our-team__core-developers-order-3', 0.7, { y: '100%', opacity: 0 }, 2.1);
        tl_team_developers.from('.our-team__core-developers-order-4', 0.7, { y: '100%', opacity: 0 }, 2.4);
        tl_team_developers.from('.our-team__core-developers-order-5', 0.7, { y: '100%', opacity: 0 }, 2.7);
        AnimationScene('.our-team__core-developers', tl_team_developers);
      }

      // our-team description
      if (document.querySelector('.our-team__description-order-1')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-1 span, .our-team__description-order-1 h3, .our-team__description-order-1 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-1 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-1 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-1', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-2')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-2 span, .our-team__description-order-2 h3, .our-team__description-order-2 p', 0.8, { x: '40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-2 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-2 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-2', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-3')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-3 span, .our-team__description-order-3 h3, .our-team__description-order-3 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-3 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-3 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-3', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-4')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-4 span, .our-team__description-order-4 h3, .our-team__description-order-4 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-4 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-4 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-4', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-5')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-5 span, .our-team__description-order-5 h3, .our-team__description-order-5 p', 0.8, { x: '40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-5 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-5 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-5', tl_team_description);
      }

      // our-team support
      if (document.querySelector('.our-team__support')) {
        const tl_team_support = new TimelineMax();
        tl_team_support.from('.our-team__support-content', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_support.from('.our-team__support-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        AnimationScene('.our-team__support', tl_team_support);
      }
      
      // big-team founders-container
      if (document.querySelector('.big-team__founders-container')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__founders-headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.big-team__founders-subtitle', 0.5, { y: '-100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__animation-order-1', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_big_team.from('.big-team__animation-order-2', 0.7, { scale: 0.8, opacity: 0 }, 1.3);
        tl_big_team.from('.big-team__animation-order-3', 0.7, { scale: 0.8, opacity: 0 }, 1.6);
        tl_big_team.from('.big-team__animation-order-4', 0.7, { scale: 0.8, opacity: 0 }, 1.9);
        tl_big_team.from('.big-team__animation-order-5', 0.7, { scale: 0.8, opacity: 0 }, 2.1);
        tl_big_team.from('.big-team__animation-order-6', 0.7, { scale: 0.8, opacity: 0 }, 2.3);
        tl_big_team.from('.big-team__animation-order-7', 0.7, { scale: 0.8, opacity: 0 }, 2.7);
        tl_big_team.from('.big-team__animation-order-8', 0.7, { scale: 0.8, opacity: 0 }, 3);
        AnimationScene('.big-team__founders-container', tl_big_team);
      }
      
      // our team footer
      if (document.querySelector('.our-team__footer-container')) {
        const tl_team_footer = new TimelineMax();
        tl_team_footer.from('.our-team__footer-anim-1', 0.5, { y: '-100%', opacity: 0 });
        tl_team_footer.from('.our-team__footer-anim-2', 0.5, { y: '-100%', opacity: 0 }, 0.2);
        tl_team_footer.from('.our-team__footer-anim-3', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_team_footer.from('.our-team__footer-anim-4', 0.7, { y: '100%', opacity: 0 }, 1.3);
        tl_team_footer.from('.our-team__footer-anim-5', 0.7, { y: '100%', opacity: 0 }, 1.6);
        tl_team_footer.from('.our-team__footer-anim-6', 0.7, { y: '100%', opacity: 0 }, 1.9);
        tl_team_footer.from('.our-team__footer-anim-7', 0.7, { y: '100%', opacity: 0 }, 2.1);
        AnimationScene('.our-team__footer-container', tl_team_footer);
      }


      // desktop animation
    } else {
      console.log('animation - desktop');

      // our-team header
      if (document.querySelector('.our-team-header')) {
        const tl_team_header = new TimelineMax();
        tl_team_header.from('.our-team-header__headline-block', 0.5, { y: '40%', opacity: 0 }, 0.4);
        tl_team_header.from('.our-team-header__video-poster', 0.5, { scale: '.8', opacity: 0 }, 0.4);
        tl_team_header.from('.our-team-header__video-bg', 0.5, { scale: '.8', opacity: 0 }, 0.5);
        AnimationScene('.our-team-header', tl_team_header);
      }

      // our-team success
      if (document.querySelector('.our-team__success')) {
        const tl_team_success = new TimelineMax();
        tl_team_success.from('.our-team__success-content', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_success.from('.our-team__success-anim-1', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-5', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-6', 0.8, { scale: '.8', opacity: 0 }, 0.7);
        tl_team_success.from('.our-team__success-anim-2', 0.8, { scale: '.5', opacity: 0 }, 1.3);
        tl_team_success.from('.our-team__success-anim-3', 0.8, { scale: '.5', opacity: 0 }, 1.5);
        tl_team_success.from('.our-team__success-anim-4', 0.8, { scale: '.5', opacity: 0 }, 1.7);
        AnimationScene('.our-team__success', tl_team_success);
      }

      // our-team founders
      if (document.querySelector('.our-team__founders')) {
        const tl_team_founders = new TimelineMax();
        tl_team_founders.from('.our-team__founders-content', 0.8, { y: '-40%', opacity: 0 }, 0.5);
        tl_team_founders.from('.our-team__founders-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        AnimationScene('.our-team__founders', tl_team_founders);
      }

      // our-team developers
      if (document.querySelector('.our-team__core-developers')) {
        const tl_team_developers = new TimelineMax();
        tl_team_developers.from('.our-team__core-developers h3, .our-team__core-developers p', 0.8, { y: '-40%', opacity: 0 }, 0.5);
        tl_team_developers.from('.our-team__core-developers-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        tl_team_developers.from('.our-team__core-developers-order-1', 0.7, { y: '100%', opacity: 0 }, 1.5);
        tl_team_developers.from('.our-team__core-developers-order-2', 0.7, { y: '100%', opacity: 0 }, 1.8);
        tl_team_developers.from('.our-team__core-developers-order-3', 0.7, { y: '100%', opacity: 0 }, 2.1);
        tl_team_developers.from('.our-team__core-developers-order-4', 0.7, { y: '100%', opacity: 0 }, 2.4);
        tl_team_developers.from('.our-team__core-developers-order-5', 0.7, { y: '100%', opacity: 0 }, 2.7);
        AnimationScene('.our-team__core-developers', tl_team_developers);
      }

      // our-team description
      if (document.querySelector('.our-team__description-order-1')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-1 span, .our-team__description-order-1 h3, .our-team__description-order-1 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-1 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-1 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-1', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-2')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-2 span, .our-team__description-order-2 h3, .our-team__description-order-2 p', 0.8, { x: '40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-2 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-2 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-2', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-3')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-3 span, .our-team__description-order-3 h3, .our-team__description-order-3 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-3 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-3 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-3', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-4')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-4 span, .our-team__description-order-4 h3, .our-team__description-order-4 p', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-4 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-4 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-4', tl_team_description);
      }
      if (document.querySelector('.our-team__description-order-5')) {
        const tl_team_description = new TimelineMax();
        tl_team_description.from('.our-team__description-order-5 span, .our-team__description-order-5 h3, .our-team__description-order-5 p', 0.8, { x: '40%', opacity: 0 }, 0.5);
        tl_team_description.from('.our-team__description-order-5 img', 1, { opacity: 0 }, 0.75);
        tl_team_description.from('.our-team__description-order-5 ul', 0.8, {  y: '100%', opacity: 0 }, 1);
        AnimationScene('.our-team__description-order-5', tl_team_description);
      }

      // our-team support
      if (document.querySelector('.our-team__support')) {
        const tl_team_support = new TimelineMax();
        tl_team_support.from('.our-team__support-content', 0.8, { x: '-40%', opacity: 0 }, 0.5);
        tl_team_support.from('.our-team__support-media', 0.8, { scale: ".8", opacity: 0 }, 0.9);
        AnimationScene('.our-team__support', tl_team_support);
      }
      
      // big-team founders-container
      if (document.querySelector('.big-team__founders-container')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__founders-headline', 0.5, { y: '-100%', opacity: 0 });
        tl_big_team.from('.big-team__founders-subtitle', 0.5, { y: '-100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__animation-order-1', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_big_team.from('.big-team__animation-order-2', 0.7, { scale: 0.8, opacity: 0 }, 1.3);
        tl_big_team.from('.big-team__animation-order-3', 0.7, { scale: 0.8, opacity: 0 }, 1.6);
        tl_big_team.from('.big-team__animation-order-4', 0.7, { scale: 0.8, opacity: 0 }, 1.9);
        tl_big_team.from('.big-team__animation-order-5', 0.7, { scale: 0.8, opacity: 0 }, 2.1);
        tl_big_team.from('.big-team__animation-order-6', 0.7, { scale: 0.8, opacity: 0 }, 2.3);
        tl_big_team.from('.big-team__animation-order-7', 0.7, { scale: 0.8, opacity: 0 }, 2.7);
        tl_big_team.from('.big-team__animation-order-8', 0.7, { scale: 0.8, opacity: 0 }, 3);
        AnimationScene('.big-team__founders-container', tl_big_team);
      }
      
      // our team footer
      if (document.querySelector('.our-team__footer-container')) {
        const tl_team_footer = new TimelineMax();
        tl_team_footer.from('.our-team__footer-anim-1', 0.5, { y: '-100%', opacity: 0 });
        tl_team_footer.from('.our-team__footer-anim-2', 0.5, { y: '-100%', opacity: 0 }, 0.2);
        tl_team_footer.from('.our-team__footer-anim-3', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_team_footer.from('.our-team__footer-anim-4', 0.7, { y: '100%', opacity: 0 }, 1.3);
        tl_team_footer.from('.our-team__footer-anim-5', 0.7, { y: '100%', opacity: 0 }, 1.6);
        tl_team_footer.from('.our-team__footer-anim-6', 0.7, { y: '100%', opacity: 0 }, 1.9);
        tl_team_footer.from('.our-team__footer-anim-7', 0.7, { y: '100%', opacity: 0 }, 2.1);
        AnimationScene('.our-team__footer-container', tl_team_footer);
      }
    }
  }
});
