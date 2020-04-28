/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.help-center-header')) {
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

    function AnimationScene1(section, tween) {
      const rem = 50;
      const el = document.querySelector('body');
      const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
      const fontSize = parseFloat(style);
      const height = rem * fontSize;
      console.log(height);
      const scene1 = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.55,
        duration: height,
      })
        .setTween(tween)
        .addTo(controller);
    }

    if (window.matchMedia('(max-width: 1100px)').matches) {
      console.log('animation - tablet');

      // help-center header
      if (document.querySelector('.help-center-header')) {
        const tl_help_center_header = new TimelineMax();
        tl_help_center_header.from('.help-center-header__headline-block', 0.5, {
          y: '50%',
          opacity: 0,
        });
        tl_help_center_header.from(
          '.help-center-header__decor',
          0.5,
          {
            y: '25%',
            opacity: 0,
          },
          0.3
        );
        AnimationScene('.help-center-header', tl_help_center_header);
      }

      // answer_block
      if (document.querySelector('.faq__answer-block')) {
        const tl_answer_block = new TimelineMax();
        tl_answer_block.from('.faq__answer-block', 0.8, { y: '7%', opacity: 0 });
        AnimationScene('.faq__answer-block', tl_answer_block);
      }

      // headline-block
      if (document.querySelector('.faq__headline-block')) {
        const tl_headline_block = new TimelineMax();
        tl_headline_block.from('.faq__headline-block', 0.8, { y: '7%', opacity: 0 });
        AnimationScene('.faq__headline-block', tl_headline_block);
      }

      // desktop animation
    } else {
      console.log('animation - desktop');

      // help-center header
      if (document.querySelector('.help-center-header')) {
        const tl_help_center_header = new TimelineMax();
        tl_help_center_header.from('.help-center-header__headline-block', 0.5, {
          y: '50%',
          opacity: 0,
        });
        tl_help_center_header.from(
          '.help-center-header__decor',
          0.5,
          {
            y: '25%',
            opacity: 0,
          },
          0.3
        );
        AnimationScene('.help-center-header', tl_help_center_header);
      }

      // faq header
      if (document.querySelector('.faq')) {
        const tl_faq_section = new TimelineMax();
        tl_faq_section.from('.faq__answer-block', 0.8, { y: '10%', opacity: 0 });
        tl_faq_section.from('.faq__anim-order-1', 0.8, { y: '30%', opacity: 0 });
        tl_faq_section.from('.faq__anim-order-2', 0.8, { y: '30%', opacity: 0 });
        tl_faq_section.from('.faq__anim-order-3', 0.8, { y: '30%', opacity: 0 });
        tl_faq_section.from('.faq__anim-order-4', 0.8, { y: '30%', opacity: 0 });
        tl_faq_section.from('.faq__anim-order-5', 0.8, { y: '100%', opacity: 0 });
        tl_faq_section.from('.faq__anim-order-6', 0.8, { y: '30%', opacity: 0 });
        AnimationScene1('.faq', tl_faq_section);
      }
    }
  }
});
