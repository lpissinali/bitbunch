/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  if (document.querySelector('.our-team-header')) {
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

    if (window.matchMedia('(max-width: 570px)').matches) {
      // our-team header
      if (document.querySelector('.our-team-header')) {
        const tl_our_team_header = new TimelineMax();
        tl_our_team_header.from('.our-team-header__headline-block', 0.5, { y: '70%', opacity: 0 });
        AnimationScene('.our-team-header', tl_our_team_header);
      }

      // big-team header
      if (document.querySelector('.big-team')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__founders-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__founders-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__founders-container', 0.5, { y: '20%', opacity: 0 }, 0.5);
        AnimationScene('.big-team', tl_big_team);
      }

      // investors
      if (document.querySelector('.big-team__investors-headline')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__investors-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__investors-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__investors-container', 0.5, { y: '20%', opacity: 0 }, 0.5);
        AnimationScene('.big-team__investors-headline', tl_big_team);
      }

      // big-team header
      if (document.querySelector('.big-team__advisors-headline')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__advisors-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__advisors-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__advisors-container', 0.5, { y: '20%', opacity: 0 }, 0.5);
        AnimationScene('.big-team__advisors-headline', tl_big_team);
      }
    } else if (window.matchMedia('(max-width: 1000px)').matches) {
      console.log('animation - tablet');

      // our-team header
      if (document.querySelector('.our-team-header')) {
        const tl_our_team_header = new TimelineMax();
        tl_our_team_header.from('.our-team-header__headline-block', 0.5, { y: '70%', opacity: 0 });
        tl_our_team_header.from('.our-team-header__decor', 0.5, { y: '25%', opacity: 0 }, 0.2);
        AnimationScene('.our-team-header', tl_our_team_header);
      }

      // big-team header
      if (document.querySelector('.big-team')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__founders-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__founders-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__animation-order-1', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_big_team.from('.big-team__animation-order-2', 0.7, { scale: 0.8, opacity: 0 }, 1.15);
        tl_big_team.from('.big-team__animation-order-3', 0.7, { scale: 0.8, opacity: 0 }, 1.3);
        tl_big_team.from('.big-team__animation-order-4', 0.7, { scale: 0.8, opacity: 0 }, 1.45);
        tl_big_team.from('.big-team__animation-order-5', 0.7, { scale: 0.8, opacity: 0 }, 1.6);
        tl_big_team.from('.big-team__animation-order-6', 0.7, { scale: 0.8, opacity: 0 }, 1.75);
        tl_big_team.from('.big-team__animation-order-7', 0.7, { scale: 0.8, opacity: 0 }, 1.9);
        tl_big_team.from('.big-team__animation-order-8', 0.7, { scale: 0.8, opacity: 0 }, 2.05);
        AnimationScene('.big-team', tl_big_team);
      }

      // investors
      if (document.querySelector('.big-team__investors-headline')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__investors-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__investors-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__investors-container', 0.5, { y: '20%', opacity: 0 }, 0.5);
        AnimationScene('.big-team__investors-headline', tl_big_team);
      }

      // big-team header
      if (document.querySelector('.big-team__advisors-headline')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__advisors-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__advisors-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__advisors-container', 0.5, { y: '20%', opacity: 0 }, 0.5);
        AnimationScene('.big-team__advisors-headline', tl_big_team);
      }

      // desktop animation
    } else {
      console.log('animation - desktop');

      // our-team header
      if (document.querySelector('.our-team-header')) {
        const tl_our_team_header = new TimelineMax();
        tl_our_team_header.from('.our-team-header__headline-block', 0.5, { y: '40%', opacity: 0 });
        tl_our_team_header.from('.our-team-header__decor', 0.5, { y: '20%', opacity: 0 }, 0.2);
        AnimationScene('.our-team-header', tl_our_team_header);
      }

      // big-team header
      if (document.querySelector('.big-team')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__founders-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__founders-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__animation-order-1', 0.7, { scale: 0.8, opacity: 0 }, 1);
        tl_big_team.from('.big-team__animation-order-2', 0.7, { scale: 0.8, opacity: 0 }, 1.15);
        tl_big_team.from('.big-team__animation-order-3', 0.7, { scale: 0.8, opacity: 0 }, 1.3);
        tl_big_team.from('.big-team__animation-order-4', 0.7, { scale: 0.8, opacity: 0 }, 1.45);
        tl_big_team.from('.big-team__animation-order-5', 0.7, { scale: 0.8, opacity: 0 }, 1.6);
        tl_big_team.from('.big-team__animation-order-6', 0.7, { scale: 0.8, opacity: 0 }, 1.75);
        tl_big_team.from('.big-team__animation-order-7', 0.7, { scale: 0.8, opacity: 0 }, 1.9);
        tl_big_team.from('.big-team__animation-order-8', 0.7, { scale: 0.8, opacity: 0 }, 2.05);
        AnimationScene('.big-team', tl_big_team);
      }

      // investors
      if (document.querySelector('.big-team__investors-headline')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__investors-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__investors-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__investors-container', 0.5, { y: '20%', opacity: 0 }, 0.5);
        AnimationScene('.big-team__investors-headline', tl_big_team);
      }

      // big-team header
      if (document.querySelector('.big-team__advisors-headline')) {
        const tl_big_team = new TimelineMax();
        tl_big_team.from('.big-team__advisors-headline', 0.5, { y: '100%', opacity: 0 });
        tl_big_team.from('.big-team__advisors-subtitle', 0.5, { y: '100%', opacity: 0 }, 0.2);
        tl_big_team.from('.big-team__advisors-container', 0.5, { y: '20%', opacity: 0 }, 0.5);
        AnimationScene('.big-team__advisors-headline', tl_big_team);
      }
    }
  }
});
