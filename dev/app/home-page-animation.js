/* eslint-disable no-inner-declarations */
$(document).ready(() => {
  // hide preloader
  document.querySelector('.preloader').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
  }, 400);

  if (window.matchMedia('(max-width: 1100px)').matches) {
    console.log('animation - off');
  } else {
    console.log('animation - on');
    const controller = new ScrollMagic.Controller();

    function AnimationScene(section, tween) {
      const scene = new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.5,
      })
        .reverse(false)
        // .addIndicators({
        //   colorTrigger: 'white',
        //   colorStart: 'white',
        //   colorEnd: 'white',
        //   indent: 5,
        // })
        .setTween(tween)
        .addTo(controller);
    }

    // home header
    const tl_main_nav = new TimelineMax();
    tl_main_nav.staggerFrom('.main-nav', 0.4, { y: '50%', opacity: 0 });
    tl_main_nav.staggerFrom('.main-header__flex-container', 0.4, { y: '20%', opacity: 0 });
    tl_main_nav.staggerFrom('.best-exchanges', 0.3, { y: '50%', opacity: 0 });
    AnimationScene('.main-header', tl_main_nav);

    // home you-will-get
    const tl_you_will_get = new TimelineMax();
    tl_you_will_get.from('.you-will-get__headline', 0.4, { y: '-50%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-1', 0.4, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-2', 0.4, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-3', 0.4, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-4', 0.4, { x: '20%', opacity: 0 });
    tl_you_will_get.from('.you-will-get__animation-order-5', 0.4, { x: '20%', opacity: 0 });
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

      const aaa = String(NewVal1);

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

      const tl_bit_stats = new TimelineMax();
      tl_bit_stats.from('.bit-stats__subtitle', 0.6, { y: '-50%', opacity: 0 });
      tl_bit_stats.from('.bit-stats__headline', 0.6, { y: '-50%', opacity: 0 }, 0);
      tl_bit_stats.from('.bit-stats__animation-order-1', 1.5, { opacity: 0 }, 0);
      tl_bit_stats.from('.bit-stats__animation-order-2', 1.5, { opacity: 0 }, 0.5);
      tl_bit_stats.from('.bit-stats__animation-order-3', 1.5, { opacity: 0 }, 1);
      tl_bit_stats.to(
        bitStartCount1,
        2.5,
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
        2.5,
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
        2.5,
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
    tl_how_it_works.from('.how-it-works__animation-order-1', 0.9, { x: '-25%', opacity: 0 }, 0.4);
    tl_how_it_works.from('.how-it-works__animation-order-2', 0.9, { x: '-25%', opacity: 0 }, 0.8);
    tl_how_it_works.from('.how-it-works__animation-order-3', 0.9, { x: '-25%', opacity: 0 }, 1.2);
    tl_how_it_works.from('.how-it-works__buttons', 0.9, { x: '-25%', opacity: 0 }, 1.6);
    tl_how_it_works.from('.how-it-works__decor-line-1', 0.9, { x: '25%', opacity: 0 }, 1.5);
    tl_how_it_works.from('.how-it-works__decor-line-2', 0.9, { x: '20%', opacity: 0 }, 1.8);
    tl_how_it_works.from('.how-it-works__decor-line-3', 0.9, { x: '15%', opacity: 0 }, 2.2);
    tl_how_it_works.from('.how-it-works__decor-line-4', 0.9, { x: '30%', opacity: 0 }, 2.6);
    AnimationScene('.how-it-works', tl_how_it_works);

    // home our-founders
    const tl_our_founders = new TimelineMax();
    tl_our_founders.from('.our-founders__headline', 0.7, { y: '-50%', opacity: 0 });
    tl_our_founders.from('.our-founders__subtitle', 0.7, { y: '-50%', opacity: 0 }, 0);
    AnimationScene('.our-founders', tl_our_founders);

    // home our-founders
    const tl_our_team = new TimelineMax();
    tl_our_team.from('.our-team__headline', 0.7, { y: '-50%', opacity: 0 });
    tl_our_team.from('.our-team__subtitle', 0.7, { y: '-50%', opacity: 0 }, 0);
    tl_our_team.from('.our-team__animation-order-1', 0.9, { scale: 0.8, opacity: 0 }, 1);
    tl_our_team.from('.our-team__animation-order-2', 0.9, { scale: 0.8, opacity: 0 }, 1.2);
    tl_our_team.from('.our-team__animation-order-3', 0.9, { scale: 0.8, opacity: 0 }, 1.4);
    tl_our_team.from('.our-team__animation-order-4', 0.9, { scale: 0.8, opacity: 0 }, 1.6);
    tl_our_team.from('.our-team__animation-order-5', 0.9, { scale: 0.8, opacity: 0 }, 1.8);
    tl_our_team.from('.our-team__animation-order-6', 0.9, { scale: 0.8, opacity: 0 }, 2);
    tl_our_team.from('.our-team__animation-order-7', 0.9, { scale: 0.8, opacity: 0 }, 2.2);
    tl_our_team.from('.our-team__animation-order-8', 0.9, { scale: 0.8, opacity: 0 }, 2.4);
    AnimationScene('.our-team', tl_our_team);

    // home bit-media
    const tl_bit_media = new TimelineMax();
    tl_bit_media.from('.bit-media__headline', 0.7, { y: '-50%', opacity: 0 });
    tl_bit_media.from('.bit-media__subtitle', 0.7, { y: '-50%', opacity: 0 }, 0);
    tl_bit_media.from('.bit-media__flex-block', 0.7, { y: '-10%', opacity: 0 });
    tl_bit_media.from('.bit-media__more-button', 0.7, { opacity: 0 });
    AnimationScene('.bit-media', tl_bit_media);

    // home bit-media
    const tl_we_earn = new TimelineMax();
    tl_we_earn.from('.we-earn__wrapper', 0.7, { y: '-10%', opacity: 0 });
    AnimationScene('.we-earn', tl_we_earn);
  }
});
