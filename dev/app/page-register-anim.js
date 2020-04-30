/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.register-header')) {
    const controller = new ScrollMagic.Controller();

    function AnimationScene(section, tween) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.8,
      })
        .reverse(false)
        .setTween(tween)
        .addTo(controller);
    }

    if (window.matchMedia('(max-width: 1000px)').matches) {
      console.log('animation - tablet');

      // contact header
      if (document.querySelector('.protection-section')) {
        const tl_protection = new TimelineMax();
        tl_protection.from('.protection-section', 0.5, { y: '20%', opacity: 0 });
       
        AnimationScene('.protection-section', tl_protection);
      }
      
      // desktop animation
    } else {
      console.log('animation - desktop');
        const tl_protection = new TimelineMax();
        tl_protection.from('.protection-section', 0.5, { y: '20%', opacity: 0 });

        AnimationScene('.protection-section', tl_protection);
      }
    }
  }
);
