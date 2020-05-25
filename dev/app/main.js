import '../common/scss/main.scss';

// accordion
import Accordion from '../components/accordion/ds-accordion-gsap';
import { dsAccordion } from '../components/accordion/ds-accordion';

require('./polyfills/polyfills');
require('./libs/bootstrap-select/bootstrap-select.min.js');
require('./modules/validators');
require('./modules/register');
require('./modules/userdata');
require('./modules/login');
require('./modules/restore');
require('./modules/forgot');
require('./modules/contact');
require('./modules/masks');
require('./modules/withdrawalForm');
require('./modules/withdrawalAuthForm');
require('./modules/changePhone');
require('./modules/changeEmail');
require('./modules/2FAVerify');
require('./modules/googleAuth');
require('./modules/verification');
require('./modules/accountForm');
require('./modules/security');
require('./modules/commonForm');
require('./cookies');

// аккордион faq
const faqAccordion = new Accordion({});

const careerAccordion = new dsAccordion({
  mainContainer: '.career__accordion',
  dropdownBlock: '.career__acd-dropdown',
});

// анимация
require('./page-home-anim');
require('./page-blog-anim');
require('./page-team-anim');
require('./page-contact-anim');
require('./page-career-anim');
require('./page-faq-anim');
require('./page-hiw-anim');
require('./page-login-anim');
require('./page-register-anim');

// menu
if (document.querySelector('.main-nav__sandwich-button')) {
  $('.main-nav__sandwich-button').click(() => {
    $('.main-nav__nav-menu').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  });

  $('.main-nav__close-button').click(() => {
    $('.main-nav__nav-menu').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  });

  $('.main-nav__menu-link').click(() => {
    $('.main-nav__nav-menu').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  });
}

// our team slider
if (document.querySelector('.our-team__flex-container')) {
  $('.our-team__flex-container').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 570,
        settings: 'slick',
      },
    ],
  });
}

// bit media slider
if (document.querySelector('.bit-media__flex-block')) {
  $('.bit-media__flex-block').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 570,
        settings: 'slick',
      },
    ],
  });
}

// our team slider
if (document.querySelector('.big-team__founders-container')) {
  $('.big-team__founders-container').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 570,
        settings: 'slick',
      },
    ],
  });
}

// investors slider
if (document.querySelector('.big-team__investors-container')) {
  $('.big-team__investors-container').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    variableWidth: true,
  });
}

// advisors slider
if (document.querySelector('.big-team__advisors-container')) {
  $('.big-team__advisors-container').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    variableWidth: true,
  });
}

// profits slider
if (document.querySelector('.profits__slider-container')) {
  $('.profits__slider-wrapper').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    variableWidth: true,
  });

  $('.profits__slider-wrapper').on('afterChange', (event, slick, currentSlide, nextSlide) => {
    if ((currentSlide = !0)) {
      $('.profits__slider-dot-right').addClass('none');
    }
  });

  $('.profits__wrapper .slick-next ').html('Next Step');
}

$(window).on('resize orientationchange', () => {
  $('.our-team__flex-container').slick('resize');
  $('.bit-media__flex-block').slick('resize');
  $('.big-team__founders-container').slick('resize');
  $('.big-team__investors-container').slick('resize');
  $('.big-team__advisors-container').slick('resize');
});

// account user menu
function toggleAccountNav(dur) {
  if ($(window).width() <= 1000) {
    $('.account-nav__user-controls').slideToggle(dur);
  }
  $('.account-nav__menu-list').toggleClass('disabled');
  $('.account-nav__user').toggleClass('enabled');
  $('.account-nav__user-menu-list').slideToggle(dur);
}
if (document.querySelector('.toggle__user-menu')) {
  $('.toggle__user-menu').click(() => {
    toggleAccountNav('fast');
  });

  $('.account-nav__user-menu-close').click(() => {
    toggleAccountNav('fast');
  });

  $(document).click(e => {
    const clickTarget = $('.account-nav__nav-menu');
    if (
      clickTarget.is(e.target)
      && clickTarget.find('.account-nav__menu-list.disabled').length === 1
    ) {
      toggleAccountNav('fast');
    }
  });
}

// account user mobile menu
if (document.querySelector('.account-nav__sandwich-button')) {
  $('.account-nav__sandwich-button').click(() => {
    $('.account-nav__nav-menu').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  });

  $('.account-nav__close-button').click(() => {
    $('.account-nav__nav-menu').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  });
}

// активный пункт меню
if (document.querySelector('.account-nav__nav-menu')) {
  $('.account-nav__nav-menu ul li a').each(function() {
    const location = window.location.href;
    const link = this.href;
    if (location == link) {
      $('.account-nav__nav-menu ul li').removeClass('active');
      $(this)
        .parent()
        .addClass('active');
    }
    if (
      $(this)
        .parent()
        .is('.account-nav__user-menu-item.active')
    ) {
      toggleAccountNav(0);
    }
  });
}

// range
if (document.querySelector('.calculation__button-cur.bitcoin')) {
  document.querySelector('.calculation__button-cur.bitcoin').addEventListener('click', () => {
    $('.calculation__button-cur').removeClass('active');
    $('.calculation__button-cur.bitcoin').addClass('active');
    $('.calculation__currency-block').removeClass('active');
    $('.calculation__currency-btc-block').addClass('active');
    $('.calculation__result-sum').html($('.calculation__btc-range').val());
    $('.calculation__result-units').html(' BTC');
    $('.calculation__result-your-profile-units').html(' BTC');
  });
}

if (document.querySelector('.calculation__button-cur.dollar')) {
  document.querySelector('.calculation__button-cur.dollar').addEventListener('click', () => {
    $('.calculation__button-cur').removeClass('active');
    $('.calculation__button-cur.dollar').addClass('active');
    $('.calculation__currency-block').removeClass('active');
    $('.calculation__currency-etc-block').addClass('active');
    $('.calculation__result-sum').html($('.calculation__etc-range').val());
    $('.calculation__result-units').html(' ETH');
    $('.calculation__result-your-profile-units').html(' ETH');
  });
}

if (document.querySelector('.calculation__button-cur.bitcoin')) {
  document.querySelector('.calculation__button-cur.euro').addEventListener('click', () => {
    $('.calculation__button-cur').removeClass('active');
    $('.calculation__button-cur.euro').addClass('active');
    $('.calculation__currency-block').removeClass('active');
    $('.calculation__currency-usdt-block').addClass('active');
    $('.calculation__result-sum').html($('.calculation__usdt-range').val());
    $('.calculation__result-units').html(' USDT');
    $('.calculation__result-your-profile-units').html(' USDT');
  });
}

// range
if (document.querySelector('.calculation__btc-range')) {
  $('.calculation__btc-range').on('change mousemove', function() {
    $('.calculation__btc-value').html($(this).val());
    $('.calculation__result-sum').html($(this).val());
  });
  $('.calculation__btc-value').html($('.calculation__btc-range').val());
}

if (document.querySelector('.calculation__etc-range')) {
  $('.calculation__etc-range').on('change mousemove', function() {
    $('.calculation__etc-value').html($(this).val());
    $('.calculation__result-sum').html($(this).val());
  });
  $('.calculation__etc-value').html($('.calculation__etc-range').val());
}

if (document.querySelector('.calculation__usdt-range')) {
  $('.calculation__usdt-range').on('change mousemove', function() {
    $('.calculation__usdt-value').html($(this).val());
    $('.calculation__result-sum').html($(this).val());
  });
  $('.calculation__usdt-value').html($('.calculation__usdt-range').val());
}

if (document.querySelector('.calculation__mount-range')) {
  $('.calculation__mount-range').on('change mousemove', function() {
    $('.calculation__mount-value').html($(this).val());
    $('.calculation__result-mount').html($(this).val());
  });
  $('.calculation__mount-value').html($('.calculation__mount-range').val());
  $('.calculation__result-mount').html($('.calculation__mount-range').val());
}

// custom range
if (document.querySelector('.calculation__range')) {
  $('.calculation__range').each(function(i, range) {
    const valueMin = $(this).attr('min');
    const valueMax = $(this).attr('max');
    const valueStep = $(this).attr('step');
    $(range).ionRangeSlider({
      skin: 'big',
      type: 'single',
      min: valueMin,
      max: valueMax,
      step: valueStep,
      hide_min_max: true,
      hide_from_to: false,
    });
  });
}

// Choosing coin play/pause button
if (document.querySelector('.choosing-coin__controls-toggle')) {
  $('.choosing-coin__controls-toggle').click(function() {
    $(this).toggleClass('active');
  });
}

// Trading history table scrollbar
if (document.querySelector('.trading-history__table-overflow')) {
  baron({
    root: '.horiz__clipper',
    scroller: '.horiz__scroller',
    bar: '.horiz__bar',
    scrollingCls: '_scrolling',
    draggingCls: '_dragging',
    direction: 'h',
    impact: 'scroller',
  });
}

// // Modal notification
window.onload = function() {
  $('.notification').addClass('init');
};
// if (document.querySelector('.modal__notification')) {
//   $('.modal__notification [type=submit]').click(e => {
//     e.preventDefault(); // Отмена отправки для показа анимации
//     $('.notification').addClass('active');
//   });

//   $('.modal__notification .modal__close').click(() => {
//     $('.notification').removeClass('active');
//   });
// }

// Trading history table scrollbar
if (document.querySelector('.trading-currencies__list')) {
  baron({
    root: '.baron__root',
    scroller: '.baron__scroller',
    bar: '.baron__bar',
    scrollingCls: '_scrolling',
    draggingCls: '_dragging',
    direction: 'v',
  });
}

// Trading history table scrollbar
if (document.querySelector('.daily-trades__range-input')) {
  $('.daily-trades__range-input').each(function() {
    const valueMin = $(this).attr('min');
    const valueMax = $(this).attr('max');
    const valueStep = $(this).attr('step');
    $('.daily-trades__range-input').ionRangeSlider({
      skin: 'big',
      type: 'single',
      min: valueMin,
      max: valueMax,
      step: valueStep,
      hide_min_max: true,
      hide_from_to: false,
    });
  });
}

// Custom select (orange)
function customSelect() {
  $('.choose-select').each(function() {
    if ($(this).hasClass('init')) return false;
    const classes = $(this).attr('class');
    const id = $(this).attr('id');
    const name = $(this).attr('name');

    let template = `<div class="${classes}">`;
    template += `<div class="choose-select__trigger"><div class="choose-select__trigger-icon"></div><div class="choose-select__trigger-name">${$(
      this
    ).attr('placeholder')}</div></div>`;
    template += '<div class="choose-select__options"><div class="choose-select__options-wrapper">';
    $(this)
      .find('option')
      .each(function() {
        const optTitle = $(this).text();
        const optAbbr = $(this).val();
        const optBalance = $(this).data('balance');
        const optProfit = $(this).data('profit');
        const optProfitStyle = $(this).data('profit-style');
        const optLogoColor = $(this).data('logo-color');
        const optLogoWhite = $(this).data('logo-white');

        let optProfitCaret = '';
        if (optProfitStyle === 'success') {
          optProfitCaret = './images/caret-up.svg';
        }
        if (optProfitStyle === 'danger') {
          optProfitCaret = './images/caret-down.svg';
        }

        template += `<div class="choose-select__option ${$(this).attr(
          'class'
        )}" data-value="${optAbbr}"  data-title="${optTitle}" data-logo-white="${optLogoWhite}">`;
        template += `<div class="table-data table-col_assets"><img src="${optLogoColor}" alt=""><span><b>${optTitle}</b> (${optAbbr})</span></div>`;
        template += `<div class="table-data table-col_balance"><span>${optBalance} ${optAbbr}</span></div>`;
        template += `<div class="table-data table-col_profit"><img src="${optProfitCaret}" alt=""><span class="color_${optProfitStyle}">${optProfit}</span></div>`;
        template += '</div>';
      });
    template += '</div></div></div>';

    $(this).wrap('<div class="choose-select__wrapper"></div>');
    $(this)
      .hide()
      .addClass('init');
    $(this).after(template);
  });

  $('.choose-select__trigger').on('click', function() {
    $(this).addClass('active');
    let optionsHeight = 0;

    function optionsOpen() {
      optionsHeight = $('.choose-select__options-wrapper').outerHeight();
      TweenLite.to($('.choose-select__options'), 0.3, {
        height: optionsHeight,
        onComplete: optionsOverflow,
      });
    }
    function optionsClose() {
      $('.choose-select__trigger')
        .removeClass('active')
        .removeClass('opened');
      $('.choose-select__options').removeClass('opened');
      TweenLite.to($('.choose-select__options'), 0.3, { height: 0 });
    }
    function optionsOverflow() {
      $('.choose-select__trigger').addClass('opened');
      $('.choose-select__options').addClass('opened');
    }

    $('html').one('click', () => {
      $('.choose-select__trigger')
        .removeClass('active')
        .removeClass('opened');
      optionsClose();
    });
    if (!$('.choose-select__trigger').is('.opened')) {
      optionsOpen();
    } else {
      optionsClose();
    }

    event.stopPropagation();
  });

  $('.choose-select__option').on('click', function() {
    $(this)
      .parents('.choose-select__wrapper')
      .find('select')
      .val($(this).data('value'))
      .trigger('change');
    $(this)
      .parents('.choose-select__options')
      .find('.choose-select__option')
      .removeClass('selection');
    $(this).addClass('selection');

    const optionIcon = $(this)
      .parents('.choose-select__wrapper')
      .find('.choose-select__trigger-icon');
    const optionName = $(this)
      .parents('.choose-select__wrapper')
      .find('.choose-select__trigger-name');

    function changeOptionData(icon, name) {
      optionIcon.html(`<img src="${icon}" alt="">`).addClass('notempty');
      optionName.text(name);
    }

    const optionSelectAnimation = new TimelineMax();
    optionSelectAnimation
      .to([optionIcon, optionName], 0.3, { alpha: 0 })
      .set(optionIcon, { x: -32 })
      .set(optionName, { x: 32 })
      .to(optionIcon, 0.5, {
        x: 0,
        alpha: 1,
        onStart: changeOptionData,
        onStartParams: [$(this).data('logo-white'), $(this).data('title')],
      })
      .to(optionName, 0.5, { x: 0, alpha: 1 }, '-=0.5');
  });

  $('.choose-select').change(() => {
    setTimeout(() => {
      $('.choose-blur').addClass('_unblur');
      $('.date-select').addClass('active');
    }, 300);
  });
}
if (document.querySelector('.choose-select')) {
  customSelect();
}

// Смена валюты
if (document.querySelector('.statistics')) {
  $('.choose-select').change(function() {
    $('.statistics__item-value .unit').text(this.value);
  });
}
// Пополнение кошелька
if (document.querySelector('.fund-wallet')) {
  $('.choose-select').change(function() {
    $('.fund-wallet__asset').text(
      $(this)
        .find('option:selected')
        .text()
    );
    $('#walletNumber').val(
      $(this)
        .find('option:selected')
        .data('wallet')
    );

    const blockBg = $('.fund-wallet__bg');
    const blockQr = $('.fund-wallet-qr__code img');
    const newBg = $(this)
      .find('option:selected')
      .data('background');
    const newQr = $(this)
      .find('option:selected')
      .data('qr');

    const changeImageAnimation = new TimelineMax();
    changeImageAnimation
      .to([blockBg, blockQr], 0.3, {
        alpha: 0,
        onComplete: image,
        onCompleteParams: [newBg, newQr],
      })
      .to([blockBg, blockQr], 0.5, { alpha: 1 });

    function image(bg, qr) {
      blockBg.css('background-image', `url(${bg})`);
      blockQr.attr('src', qr);
    }
  });
}
// Вывод средств
if (document.querySelector('.make-withdraw')) {
  $('.choose-select').change(function() {
    const blockBg = $('.make-withdraw__bg');
    const newBg = $(this)
      .find('option:selected')
      .data('background');

    const changeImageAnimation = new TimelineMax();
    changeImageAnimation
      .to([blockBg], 0.3, { alpha: 0, onComplete: image, onCompleteParams: [newBg] })
      .to([blockBg], 0.5, { alpha: 1 });

    function image(bg, qr) {
      blockBg.css('background-image', `url(${bg})`);
    }
  });
}

// Datapicker
if (document.querySelector('.trading-statistics__header-time')) {
  $('#date-select')
    .on('focus', function() {
      $(this).val('');
    })
    .on('keyup', function() {
      const $this = $(this);
      let mydate = $this.val();
      mydate = mydate.replace(/\D|\s/, '');
      mydate = mydate.replace(/^(00)(.*)?/, '01$2');
      mydate = mydate.replace(/^([0-9]{2})(00)(.*)?/, '$101');
      mydate = mydate.replace(/^([3-9])([2-9])(.*)?/, '2$2');
      mydate = mydate.replace(/^(3[01])(02)(.*)?/, '29$2');
      mydate = mydate.replace(/^([0-9]{2})([2-9]|1[3-9])(.*)?/, '$112');
      mydate = mydate.replace(/^([0-9]{2})([0-9]{2})([0-9].*?)/, '$1/$2/$3');
      mydate = mydate.replace(/^([0-9]{2})([0-9])/, '$1/$2');
      // ano bissexto
      const day = mydate.substr(0, 2) || '01';
      const month = mydate.substr(3, 2) || '01';
      const year = mydate.substr(6, 4);
      if (
        year.length == 4
        && day == '29'
        && month == '02'
        && (year % 4 != 0 || (year.substr(2, 2) == '00' && year % 400 != 0))
      ) {
        mydate = mydate.replace(/^29/, '28');
      }
      mydate = mydate.substr(0, 10);
      $this.val(mydate);
    });
  $.fn.datepicker.language.en = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthsShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 1,
  };
  const dateSelect = $('#date-select')
    .datepicker({
      language: 'en',
      inline: true,
      range: true,
      toggleSelected: false,
      multipleDatesSeparator: ' - ',
      prevHtml:
        '<svg width="8" height="14" viewBox="0 0 8 14"><path d="M7.6376,2.24716c0.50468,-0.53624 0.47911,-1.38007 -0.05712,-1.88476c-0.53623,-0.50468 -1.38006,-0.47911 -1.88475,0.05712l-5.33333,5.66666c-0.4832,0.5134 -0.4832,1.31424 0,1.82764l5.33333,5.66666c0.50469,0.53623 1.34852,0.5618 1.88475,0.05712c0.53623,-0.50469 0.5618,-1.34852 0.05712,-1.88476l-4.47327,-4.75284v0z" fill="#324ea3" fill-opacity="1"></path></svg>',
      nextHtml:
        '<svg width="8" height="14" viewBox="0 0 8 14"><path d="M0.3624,2.24716c-0.50468,-0.53624 -0.47911,-1.38007 0.05712,-1.88476c0.53623,-0.50468 1.38006,-0.47911 1.88475,0.05712l5.33333,5.66666c0.4832,0.5134 0.4832,1.31424 0,1.82764l-5.33333,5.66666c-0.50469,0.53623 -1.34852,0.5618 -1.88475,0.05712c-0.53623,-0.50469 -0.5618,-1.34852 -0.05712,-1.88476l4.47327,-4.75284v0z" fill="#324ea3" fill-opacity="1"></path></svg>',
      onSelect(formattedDate, date, inst) {
        console.log(formattedDate);
      },
    })
    .data('datepicker');
  $('.date-select .button-clear').on('click', () => {
    dateSelect.clear();
  });

  let dateSelectHeight = 0;
  function dateSelectOpen() {
    dateSelectHeight = $('.date-select__container').outerHeight();
    TweenLite.to($('.date-select__overflow'), 0.5, {
      height: dateSelectHeight,
      onComplete: dateSelectOverflow,
    });
  }
  function dateSelectClose() {
    $('.date-select__overflow').removeClass('opened');
    TweenLite.to($('.date-select__overflow'), 0.5, { height: 0 });
  }
  function dateSelectOverflow() {
    $('.date-select__overflow').addClass('opened');
  }

  $('.date-select .date-select__toggle').click(() => {
    $('.date-select__body').append($('.datepicker-inline'));
    if (!$('.date-select__overflow').is('.opened')) {
      dateSelectOpen();
    } else {
      dateSelectClose();
    }
  });
  $('.date-select .button-cancel').click(() => {
    dateSelect.clear();
    dateSelectClose();
  });

  $('.date-select .button-apply').click(() => {
    // chartInstance.update();
    console.log($('#date-select').val());
    dateSelectClose();
  });
}

// Chart
if (document.querySelector('.chart__canvas')) {
  const chart = document.getElementById('chart').getContext('2d');
  const gradient = chart.createLinearGradient(0, 0, 0, 190);

  chart.height = 195;

  gradient.addColorStop(0, 'rgba(50, 78, 163, 0.8)');
  gradient.addColorStop(0.7, 'rgba(50, 78, 163, 0)');

  const gradientStroke = chart.createLinearGradient(500, 0, 100, 0);
  gradientStroke.addColorStop(0, '#5e83ce');
  gradientStroke.addColorStop(1, '#3350a4');

  const data = {
    labels: [
      '01.10',
      '01.11',
      '01.12',
      '01.01',
      '01.02',
      '01.03',
      '01.04',
      '01.05',
      '01.06',
      '01.07',
      '01.08',
      '01.09',
      '01.10',
      '01.11',
    ],
    datasets: [
      {
        backgroundColor: gradient,

        pointRadius: 4,
        pointHoverRadius: 4,

        pointBackgroundColor: '#ffffff',
        pointHoverBackgroundColor: '#ffffff',

        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,

        pointBorderColor: '#324ea3',
        pointHoverBorderColor: '#fa8f68',

        borderWidth: 3,
        borderColor: gradientStroke,
        zeroLineWidth: 5,
        zeroLineColor: '#324ea3',
        data: [
          '2.845499',
          '0.273148',
          '1.290303',
          '2.600669',
          '0.130170',
          '2.360288',
          '0.661394',
          '1.626080',
          '1.402495',
          '1.027675',
          '2.760880',
          '2.416924',
          '1.699511',
          '1.534568',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
            color: 'rgba(50, 78, 163, 0.1)',
            lineWidth: 1,
            zeroLineColor: '#324ea3',
            zeroLineWidth: 2,
          },
          ticks: {
            padding: 8,
            fontFamily: '\'SarabunRegular\', arial, sans-serif',
            fontSize: 10,
            fontColor: 'rgba(67, 66, 95, 0.5)',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
            color: 'rgba(50, 78, 163, 0.1)',
            lineWidth: 1,
            zeroLineColor: '#324ea3',
            zeroLineWidth: 2,
          },
          ticks: {
            padding: 10,
            fontFamily: '\'SarabunRegular\', arial, sans-serif',
            fontSize: 10,
            fontColor: 'rgba(67, 66, 95, 0.5)',
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0.7,
      },
    },
    legend: {
      display: false,
    },
    point: {
      backgroundColor: 'red',
    },
    tooltips: {
      position: 'average',
      titleFontFamily: '\'SarabunRegular\', arial, sans-serif',
      titleFontSize: 10,
      titleFontStyle: 'normal',
      titleFontColor: 'rgba(255,255,255,0.8)',
      titleAlign: 'center',
      titleMarginBottom: 2,
      bodyFontFamily: '\'SarabunSemiBold\', arial, sans-serif',
      bodyFontStyle: '600',
      bodyAlign: 'center',
      backgroundColor: 'rgb(50, 78, 163)',
      caretSize: 5,
      caretPadding: 8,
      cornerRadius: 5,
      xPadding: 10,
      yPadding: 5,
      displayColors: false,
      callbacks: {
        label(tooltipItem, data) {
          let label = data.datasets[tooltipItem.datasetIndex].label || '';
          label += tooltipItem.yLabel;
          return label;
        },
      },
    },
  };

  const chartInstance = new Chart(chart, {
    type: 'line',
    data,
    options,
  });

  let chartJson;
  getChartDatas('documents/chartDatas.json');

  function getChartDatas(url) {
    $.getJSON(url, data => {
      chartJson = data;
    });
  }

  $('.chart__control-button').click(function() {
    $('.chart__control-button.active').removeClass('active');
    $(this).addClass('active');
    if ($(this).data('chart') === 'balance') {
      // console.log(chartJson[0].currency)
      chartInstance.data.datasets[0].data = chartJson[0].dataset[0].datas;
      chartInstance.data.labels = chartJson[0].dataset[0].labels;

      chartInstance.options.tooltips.callbacks.label = function(tooltipItem, data) {
        let label = data.datasets[tooltipItem.datasetIndex].label || '';
        label += `${tooltipItem.yLabel} ${chartJson[0].currency}`;
        return label;
      };
    }
    if ($(this).data('chart') === 'profit') {
      // console.log(chartJson[1].currency)
      chartInstance.data.datasets[0].data = chartJson[1].dataset[0].datas;
      chartInstance.data.labels = chartJson[1].dataset[0].labels;

      chartInstance.options.tooltips.callbacks.label = function(tooltipItem, data) {
        let label = data.datasets[tooltipItem.datasetIndex].label || '';
        label += `${tooltipItem.yLabel} ${chartJson[1].currency}`;
        return label;
      };
    }
    if ($(this).data('chart') === 'trades') {
      // console.log(chartJson[2].currency)
      chartInstance.data.datasets[0].data = chartJson[2].dataset[0].datas;
      chartInstance.data.labels = chartJson[2].dataset[0].labels;

      chartInstance.options.tooltips.callbacks.label = function(tooltipItem, data) {
        let label = data.datasets[tooltipItem.datasetIndex].label || '';
        label += `${tooltipItem.yLabel} ${chartJson[2].currency}`;
        return label;
      };
    }
    chartInstance.update();
  });
}

// Copy wallet number
if (document.querySelector('.button-copy')) {
  $('.button-copy').click(() => {
    // Копирование
    const copyNumber = document.getElementById('walletNumber');
    copyNumber.select();
    copyNumber.setSelectionRange(0, 99999);
    document.execCommand('copy');
    copyNumber.setSelectionRange(0, 0);

    // Уведомление
    $('.notification').addClass('active');
    setTimeout(() => {
      $('.notification').removeClass('active');
    }, 1500);
  });
}

// Center ellipsis text
function truncate(str, max, sep) {
  max = max || 10;

  const len = str.length;
  if (len > max) {
    sep = sep || '...';

    const seplen = sep.length;

    if (seplen > max) {
      return str.substr(len - max);
    }

    const n = -0.5 * (max - len - seplen);

    const center = len / 2;

    const front = str.substr(0, center - n);
    const back = str.substr(len - center + n);

    return front + sep + back;
  }

  return str;
}
if (document.querySelector('.ellipsis')) {
  $('span.ellipsis').each(function() {
    const textEllipsis = $(this).text();
    $(this).text(truncate(textEllipsis, 22, '........'));
  });
}

// Security password
if (document.querySelector('button[data-toggle=edit-form]')) {
  $('button[data-toggle=edit-form]').click(() => {
    if ($('.security-password__form input').is('[readonly]')) {
      $('.security-password__form input').removeAttr('readonly');
      $('#securityPasswordCurrent').focus();
    }
  });
}

// Button remove .table-row
if (document.querySelector('.button-remove')) {
  $('.button-remove').click(function(e) {
    e.preventDefault();
    $(this)
      .parents('.table-row')
      .remove();
  });
}

// Security authentication modal headline change
if (document.querySelector('#modal-2fa-verification')) {
  $('#security-authentication_1').change(function() {
    if ($(this).is(':checked')) {
      $('#modal-2fa-verification .security-status').text('Enable');
    } else {
      $('#modal-2fa-verification .security-status').text('Disable');
    }
    $('#modal-2fa-verification').modal('show');
  });
}
if (document.querySelector('#modal-google-authenticator')) {
  $('#security-authentication_2').change(function() {
    if ($(this).is(':checked')) {
      $('#modal-google-authenticator .security-status').text('Enable');
    } else {
      $('#modal-google-authenticator .security-status').text('Disable');
    }
    $('#modal-google-authenticator').modal('show');
  });
}

// Trading currencies check. Page Settings
if (document.querySelector('.trading-currencies__header-filter')) {
  const currenciesCheckBlock = $('.currencies-check');
  const currenciesAllBlock = $('.currencies-all');
  let countCheck = 0;
  let countAll = 0;
  $('input[name=currencies]').each(function() {
    countAll++;
    if ($(this).is(':checked')) {
      countCheck++;
    }
    currenciesChange(countCheck, countAll);
  });
  $('input[name=currencies]').change(function() {
    if ($(this).is(':checked')) {
      countCheck++;
    } else {
      countCheck--;
    }
    currenciesChange(countCheck);
  });
  function currenciesChange(check, all) {
    currenciesCheckBlock.text(check);
    currenciesAllBlock.text(all);
  }
}

// Verification steps
// - upload photos
$('#verificationUploads__form input[type="file"]').on('change', function() {
  const file = this.files;
  const uploadedIconBlock = '.verification-level__uploads-area img';
  const uploadedIconPath = './images/verification_uploaded.svg';

  if (!file[0].type.match(/image\/(jpeg|jpg|png|gif)/)) {
    $(this).val('');
    return false;
  }

  $(this)
    .parent()
    .find(uploadedIconBlock)
    .attr('src', uploadedIconPath);
});

// - next step
// class ".next-step" added to buttons and headline icons to view all steps
$('.next-step').click(function(e) {
  e.preventDefault();
  let step = $(this)
    .parents('.verification-level__step')
    .data('verifi-step');
  console.log(step);
  step++;
  $('.verification-level__step.active').removeClass('active');
  $(`.verification-level__step[data-verifi-step=${step}]`).addClass('active');
});
