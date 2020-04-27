/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  // hide preloader
  document.querySelector('.preloader').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
  }, 400);

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

  function BitStatCount1(num) {
    const str = String(num);
    let str1 = '';
    let str2 = '';
    if (num > 999999) {
      str1 = `${str.substring(str.length - 6, str.length - 9)},`;
    }
    if (num > 999) {
      str2 = `${str.substring(str.length - 3, str.length - 6)},`;
    }
    const str3 = str.substring(str.length, str.length - 3);

    document.getElementById('bitStatsScore1').innerHTML = `$${str1}${str2}${str3}`;
  }

  function BitStatCount2(num) {
    const str = String(num);
    let str1 = '';
    let str2 = '';
    if (num > 999999) {
      str1 = `${str.substring(str.length - 6, str.length - 9)},`;
    }
    if (num > 999) {
      str2 = `${str.substring(str.length - 3, str.length - 6)}`;
    }
    const str3 = str.substring(str.length, str.length - 3);

    document.getElementById('bitStatsScore2').innerHTML = `${str1} ${str2} ${str3}`;
  }

  function BitStatCount3(num) {
    const str = String(num);
    const str1 = '';
    let str2 = '';
    if (num > 99) {
      str2 = `${str.substring(str.length - 2, str.length - 4)}.`;
    }
    const str3 = str.substring(str.length, str.length - 2);

    document.getElementById('bitStatsScore3').innerHTML = `${str1}${str2}${str3}%`;
  }

  if (window.matchMedia('(max-width: 1100px)').matches) {
    console.log('animation - tablet');

    // home header
    const tl_main_nav_tab = new TimelineMax();
    tl_main_nav_tab.from('.main-nav__logo-link', 0.5, { y: '90%', opacity: 0 });
    tl_main_nav_tab.from('.main-nav__sandwich-button', 0.5, { y: '90%', opacity: 0 }, 0);
    tl_main_nav_tab.from('.main-nav__user-panel', 0.5, { y: '90%', opacity: 0 }, 0);
    tl_main_nav_tab.from('.main-header__headline', 0.5, { y: '20%', opacity: 0 }, 0.5);
    tl_main_nav_tab.from('.main-header__video-block', 0.5, { y: '20%', opacity: 0 }, 0.5);
    tl_main_nav_tab.from('.main-header__description-items', 0.5, { y: '20%', opacity: 0 }, 0.5);
    tl_main_nav_tab.from('.main-header__try-demo-button', 0.5, { y: '80%', opacity: 0 }, 0.5);
    tl_main_nav_tab.from('.best-exchanges', 0.5, { y: '80%', opacity: 0 }, 0.5);
    AnimationScene('.main-header', tl_main_nav_tab);

    // home you-will-get
    const tl_you_will_get_cap_tab = new TimelineMax();
    tl_you_will_get_cap_tab.from('.you-will-get__headline', 0.5, { y: '100%', opacity: 0 });
    tl_you_will_get_cap_tab.from('.you-will-get__capabilities', 0.5, { y: '20%', opacity: 0 });
    AnimationScene('.you-will-get', tl_you_will_get_cap_tab);

    // home you-will-get adv
    const tl_you_will_get__adv_tab = new TimelineMax();
    tl_you_will_get__adv_tab.from('.you-will-get__advantages', 0.5, { y: '15%', opacity: 0 });
    tl_you_will_get__adv_tab.from('.you-will-get__buttons', 0.5, { y: '100%', opacity: 0 });
    AnimationScene('.you-will-get__advantages', tl_you_will_get__adv_tab);

    // home bit-stats
    if (document.querySelector('.bit-stats')) {
      const bitStartCount1 = { val: 0 };
      const bitStartCount2 = { val: 0 };
      const bitStartCount3 = { val: 0 };
      const NewVal1 = parseInt($('.bit-stats-number-1-end').text());
      const NewVal2 = parseInt($('.bit-stats-number-2-end').text());
      const NewVal3 = parseInt($('.bit-stats-number-3-end').text());
      document.getElementById('bitStatsScore1').innerHTML = 0;
      document.getElementById('bitStatsScore2').innerHTML = 0;
      document.getElementById('bitStatsScore3').innerHTML = 0;

      const tl_bit_stats_tab = new TimelineMax();
      tl_bit_stats_tab.from('.bit-stats__wrapper', 0.5, { y: '20%', opacity: 0 });
      tl_bit_stats_tab.to(
        bitStartCount1,
        2,
        {
          val: NewVal1,
          roundProps: 'val',
          onUpdate() {
            BitStatCount1(bitStartCount1.val);
          },
        },
        0.5
      );

      tl_bit_stats_tab.to(
        bitStartCount2,
        2,
        {
          val: NewVal2,
          roundProps: 'val',
          onUpdate() {
            BitStatCount2(bitStartCount2.val);
          },
        },
        0.8
      );
      tl_bit_stats_tab.to(
        bitStartCount3,
        2,
        {
          val: NewVal3,
          roundProps: 'val',
          onUpdate() {
            BitStatCount3(bitStartCount3.val);
          },
        },
        1.2
      );
      AnimationScene('.bit-stats', tl_bit_stats_tab);
    }

    // home how_it_works
    const tl_how_it_works_tab = new TimelineMax();
    tl_how_it_works_tab.from('.how-it-works__wrapper', 0.5, { y: '20%', opacity: 0 });
    AnimationScene('.how-it-works', tl_how_it_works_tab);

    // home our-founders
    const tl_our_founders_tab = new TimelineMax();
    tl_our_founders_tab.from('.our-founders__wrapper', 0.5, { y: '20%', opacity: 0 });
    AnimationScene('.our-founders', tl_our_founders_tab);

    // home our-team
    const tl_our_team_tab = new TimelineMax();
    tl_our_team_tab.from('.our-team__wrapper', 0.5, { y: '20%', opacity: 0 });
    AnimationScene('.our-team', tl_our_team_tab);

    // home bit-media
    const tl_bit_media_tab = new TimelineMax();
    tl_bit_media_tab.from('.bit-media__wrapper', 0.5, { y: '20%', opacity: 0 });
    AnimationScene('.bit-media', tl_bit_media_tab);

    // home we-earn
    const tl_we_earn_tab = new TimelineMax();
    tl_we_earn_tab.from('.we-earn__wrapper', 0.5, { y: '20%', opacity: 0 });
    AnimationScene('.we-earn', tl_we_earn_tab);

    // desktop animation
  } else {
    console.log('animation - desktop');

    // home header
    const tl_main_nav = new TimelineMax();
    tl_main_nav.staggerFrom('.main-nav', 0.4, { y: '50%', opacity: 0 });
    tl_main_nav.staggerFrom('.main-header__flex-container', 0.4, { y: '20%', opacity: 0 });
    tl_main_nav.staggerFrom('.best-exchanges', 0.3, { y: '50%', opacity: 0 });
    AnimationScene('.main-header', tl_main_nav);

    // home you-will-get
    const tl_you_will_get = new TimelineMax();
    tl_you_will_get.from('.you-will-get__headline', 0.4, { y: '-50%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-1', 0.3, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-2', 0.3, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-3', 0.3, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-4', 0.3, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-5', 0.3, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__advantages', 0.7, { x: '-20%', opacity: 0 }, 0);
    tl_you_will_get.from('.you-will-get__buttons', 0.5, { y: '-50%', opacity: 0 });
    AnimationScene('.you-will-get', tl_you_will_get);

    // home bit-stats
    if (document.querySelector('.bit-stats')) {
      const bitStartCount1 = { val: 0 };
      const bitStartCount2 = { val: 0 };
      const bitStartCount3 = { val: 0 };
      const NewVal1 = parseInt($('.bit-stats-number-1-end').text());
      const NewVal2 = parseInt($('.bit-stats-number-2-end').text());
      const NewVal3 = parseInt($('.bit-stats-number-3-end').text());
      document.getElementById('bitStatsScore1').innerHTML = 0;
      document.getElementById('bitStatsScore2').innerHTML = 0;
      document.getElementById('bitStatsScore3').innerHTML = 0;

      const tl_bit_stats = new TimelineMax();
      tl_bit_stats.from('.bit-stats__subtitle', 0.6, { y: '-50%', opacity: 0 });
      tl_bit_stats.from('.bit-stats__headline', 0.6, { y: '-50%', opacity: 0 }, 0);
      tl_bit_stats.from('.bit-stats__animation-order-1', 1.5, { opacity: 0 }, 0);
      tl_bit_stats.from('.bit-stats__animation-order-2', 1.5, { opacity: 0 }, 0.5);
      tl_bit_stats.from('.bit-stats__animation-order-3', 1.5, { opacity: 0 }, 1);
      tl_bit_stats.to(
        bitStartCount1,
        2,
        {
          val: NewVal1,
          roundProps: 'val',
          onUpdate() {
            BitStatCount1(bitStartCount1.val);
          },
        },
        0.5
      );

      tl_bit_stats.to(
        bitStartCount2,
        2,
        {
          val: NewVal2,
          roundProps: 'val',
          onUpdate() {
            BitStatCount2(bitStartCount2.val);
          },
        },
        0.8
      );
      tl_bit_stats.to(
        bitStartCount3,
        2,
        {
          val: NewVal3,
          roundProps: 'val',
          onUpdate() {
            BitStatCount3(bitStartCount3.val);
          },
        },
        1.2
      );
      AnimationScene('.bit-stats', tl_bit_stats);
    }

    // home bit-stats
    const tl_how_it_works = new TimelineMax();
    tl_how_it_works.from('.how-it-works__headline', 0.7, { x: '-30%', opacity: 0 });
    tl_how_it_works.from('.how-it-works__subtitle', 0.7, { x: '-25%', opacity: 0 }, 0);
    tl_how_it_works.from('.how-it-works__animation-order-1', 0.7, { x: '-25%', opacity: 0 }, 0.4);
    tl_how_it_works.from('.how-it-works__animation-order-2', 0.7, { x: '-25%', opacity: 0 }, 0.8);
    tl_how_it_works.from('.how-it-works__animation-order-3', 0.7, { x: '-25%', opacity: 0 }, 1.2);
    tl_how_it_works.from('.how-it-works__buttons', 0.7, { x: '-25%', opacity: 0 }, 1.6);
    tl_how_it_works.from('.how-it-works__decor-line-1', 0.7, { x: '25%', opacity: 0 }, 1.5);
    tl_how_it_works.from('.how-it-works__decor-line-2', 0.7, { x: '20%', opacity: 0 }, 1.8);
    tl_how_it_works.from('.how-it-works__decor-line-3', 0.7, { x: '15%', opacity: 0 }, 2.2);
    tl_how_it_works.from('.how-it-works__decor-line-4', 0.7, { x: '30%', opacity: 0 }, 2.6);
    AnimationScene('.how-it-works', tl_how_it_works);

    // home our-founders
    const tl_our_founders = new TimelineMax();
    tl_our_founders.from('.our-founders__headline', 0.7, { y: '-50%', opacity: 0 });
    tl_our_founders.from('.our-founders__subtitle', 0.7, { y: '-50%', opacity: 0 }, 0);
    AnimationScene('.our-founders', tl_our_founders);

    // home our-team
    const tl_our_team = new TimelineMax();
    tl_our_team.from('.our-team__headline', 0.7, { y: '-50%', opacity: 0 }, 0.2);
    tl_our_team.from('.our-team__subtitle', 0.7, { y: '-50%', opacity: 0 }, 0.2);
    tl_our_team.from('.our-team__animation-order-1', 0.7, { scale: 0.8, opacity: 0 }, 1);
    tl_our_team.from('.our-team__animation-order-2', 0.7, { scale: 0.8, opacity: 0 }, 1.15);
    tl_our_team.from('.our-team__animation-order-3', 0.7, { scale: 0.8, opacity: 0 }, 1.3);
    tl_our_team.from('.our-team__animation-order-4', 0.7, { scale: 0.8, opacity: 0 }, 1.45);
    tl_our_team.from('.our-team__animation-order-5', 0.7, { scale: 0.8, opacity: 0 }, 1.6);
    tl_our_team.from('.our-team__animation-order-6', 0.7, { scale: 0.8, opacity: 0 }, 1.75);
    tl_our_team.from('.our-team__animation-order-7', 0.7, { scale: 0.8, opacity: 0 }, 1.9);
    tl_our_team.from('.our-team__animation-order-8', 0.7, { scale: 0.8, opacity: 0 }, 2.05);
    AnimationScene('.our-team', tl_our_team);

    // home bit-media
    const tl_bit_media = new TimelineMax();
    tl_bit_media.from('.bit-media__headline', 0.6, { y: '-50%', opacity: 0 });
    tl_bit_media.from('.bit-media__subtitle', 0.6, { y: '-50%', opacity: 0 }, 0);
    tl_bit_media.from('.bit-media__flex-block', 0.6, { y: '-10%', opacity: 0 });
    tl_bit_media.from('.bit-media__more-button', 0.6, { opacity: 0 });
    AnimationScene('.bit-media', tl_bit_media);

    // home we_earn
    const tl_we_earn = new TimelineMax();
    tl_we_earn.from('.we-earn__wrapper', 0.6, { y: '-10%', opacity: 0 });
    AnimationScene('.we-earn', tl_we_earn);
  }
});
