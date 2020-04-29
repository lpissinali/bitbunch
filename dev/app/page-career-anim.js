/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.career-header')) {
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

    if (window.matchMedia('(max-width: 1000px)').matches) {
      console.log('animation - tablet');

      // our-team header
      if (document.querySelector('.career-header')) {
        const tl_career_header = new TimelineMax();
        tl_career_header.from('.career-header__headline-block', 0.5, { y: '50%', opacity: 0 });
        AnimationScene('.career-header', tl_career_header);
      }

      // our-team header
      if (document.querySelector('.career')) {
        const tl_career_block = new TimelineMax();
        tl_career_block.from('.career__accordion-container', 0.5, { y: '10%', opacity: 0 });
        tl_career_block.from('.career__bottom-descr', 0.5, { y: '100%', opacity: 0 });
        AnimationScene('.career', tl_career_block);
      }

      // desktop animation
    } else {
      console.log('animation - desktop');

      // our-team header
      if (document.querySelector('.career-header')) {
        const tl_career_header = new TimelineMax();
        tl_career_header.from('.career-header__headline-block', 0.5, { y: '50%', opacity: 0 });
        AnimationScene('.career-header', tl_career_header);
      }

      // our-team header
      if (document.querySelector('.career')) {
        const tl_career_block = new TimelineMax();
        tl_career_block.from('.career__accordion-container', 0.5, { y: '10%', opacity: 0 });
        tl_career_block.from('.career__bottom-descr', 0.5, { y: '100%', opacity: 0 });

        AnimationScene('.career', tl_career_block);
      }
    }
  }
});
