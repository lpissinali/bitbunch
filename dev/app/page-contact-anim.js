/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.contact-header')) {
    const controller = new ScrollMagic.Controller();

    function AnimationScene(section, tween) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.70,
      })
        .reverse(false)
        .setTween(tween)
        .addTo(controller);
    }

    if (window.matchMedia('(max-width: 1000px)').matches) {
      console.log('animation - tablet');

      // contact header
      if (document.querySelector('.contact-header')) {
        const tl_contact_header = new TimelineMax();
        tl_contact_header.from('.contact-header__headline-block', 0.5, { y: '70%', opacity: 0 });
        tl_contact_header.from('.address__form', 0.5, { y: '25%', opacity: 0 }, 0.2);
        tl_contact_header.from('.address__headline', 0.5, { y: '100%', opacity: 0 });
        tl_contact_header.from('.address__subtitle', 0.5, { y: '150%', opacity: 0 }, 0.7);
        tl_contact_header.from('.address__map-block', 0.5, { y: '10%', opacity: 0 }, 0.8);
        tl_contact_header.from('.address__address-block', 0.5, { y: '10%', opacity: 0 }, 0.8);
        AnimationScene('.contact-header', tl_contact_header);
      }

      // desktop animation
    } else {
      console.log('animation - desktop');

      // contact header
      if (document.querySelector('.contact-header')) {
        const tl_contact_header = new TimelineMax();
        tl_contact_header.from('.contact-header__headline-block', 0.5, { y: '70%', opacity: 0 });
        tl_contact_header.from('.address__form', 0.5, { y: '25%', opacity: 0 }, 0.2);
        AnimationScene('.contact-header', tl_contact_header);
      }

      // address header
      if (document.querySelector('.address')) {
        const tl_contact_address = new TimelineMax();
        tl_contact_address.from('.address__headline', 0.5, { x: '-10%', opacity: 0 });
        tl_contact_address.from('.address__subtitle', 0.5, { x: '-10%', opacity: 0 }, 0.2);
        tl_contact_address.from('.address__map-block', 0.5, { y: '10%', opacity: 0 }, 0.5);
        tl_contact_address.from('.address__address-block', 0.5, { y: '10%', opacity: 0 }, 0.7);
        AnimationScene('.address__headline', tl_contact_address);
      }
    }
  }
});
