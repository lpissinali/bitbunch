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

// аккордион faq
const faqAccordion = new Accordion({});

const careerAccordion = new dsAccordion({
  mainContainer: '.career__accordion',
  dropdownBlock: '.career__acd-dropdown',
});

// анимация
require('./page-home-anim');
require('./page-pressroom-anim');
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
if (document.querySelector('.toggle__user-menu')) {
  $('.toggle__user-menu').click(() => {
    if ($(window).width() <= 1000) {
      $('.account-nav__user-controls').slideToggle();
    }
    $('.account-nav__menu-list').toggleClass('disabled');
    $('.account-nav__user').toggleClass('enabled');
    $('.account-nav__user-menu-list').slideToggle();
  });

  $('.account-nav__user-menu-close').click(() => {
    if ($(window).width() <= 1000) {
      $('.account-nav__user-controls').slideToggle();
    }
    $('.account-nav__menu-list').toggleClass('disabled');
    $('.account-nav__user').toggleClass('enabled');
    $('.account-nav__user-menu-list').slideToggle();
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
  $('.trading-history__table-overflow').mCustomScrollbar({
    axis: 'x',
    theme: 'dark',
  });
}

// // Modal notification
window.onload = function() {
  $('.notification').addClass('init')
}
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
  $('.trading-currencies__list').mCustomScrollbar({
    axis: 'y',
    theme: 'minimal-dark',
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
    template += `<span class="choose-select__trigger">${$(this).attr('placeholder')}</span>`;
    template += '<div class="choose-select__options">';
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
    template += '</div></div>';

    $(this).wrap('<div class="choose-select__wrapper"></div>');
    $(this)
      .hide()
      .addClass('init');
    $(this).after(template);
  });

  $('.choose-select__trigger').on('click', function() {
    $('html').one('click', () => {
      $('.choose-select').removeClass('opened');
    });
    $(this)
      .parents('.choose-select')
      .toggleClass('opened');
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
    $(this)
      .parents('.choose-select')
      .removeClass('opened');
    const template = `<img src="${$(this).data('logo-white')}" alt="">${$(this).data('title')}`;
    $(this)
      .parents('.choose-select')
      .find('.choose-select__trigger')
      .html(template);
  });

  $('.choose-select').change(function() {
    setTimeout(() => {
      $('.choose-blur').addClass('_unblur');
    }, 300);
    console.log(this.value);
  });
}
if (document.querySelector('.choose-select')) {
  customSelect();
}

// Chart
if (document.querySelector('.chart__canvas')) {
  var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 190);
  
    chart.height = 195;

  gradient.addColorStop(0, 'rgba(50, 78, 163, 0.8)');
  gradient.addColorStop(0.7, 'rgba(50, 78, 163, 0)');

  var gradientStroke = chart.createLinearGradient(500, 0, 100, 0);
  gradientStroke.addColorStop(0, '#5e83ce');
  gradientStroke.addColorStop(1, '#3350a4');

  var data  = {
      labels: [ '01.10', '01.11', '01.12', '01.01', '01.02', '01.03', '01.04', '01.05', '01.06', '01.07', '01.08', '01.09', '01.10', '01.11'],
      datasets: [{
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
        data: ['2.845499','0.273148','1.290303','2.600669','0.130170','2.360288','0.661394','1.626080','1.402495','1.027675','2.760880','2.416924','1.699511','1.534568']
      }]
  };


  var options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      easing: 'easeInOutQuad',
      duration: 520
    },
    scales: {
      xAxes: [{
        gridLines: {
          tickMarkLength: 0,
          color: 'rgba(50, 78, 163, 0.1)',
          lineWidth: 1,
          zeroLineColor: '#324ea3',
          zeroLineWidth: 2
        },
        ticks: {
          padding: 8,
          fontFamily: "'SarabunRegular', arial, sans-serif",
          fontSize: 10,
          fontColor: "rgba(67, 66, 95, 0.5)",
        }
      }],
      yAxes: [{
        gridLines: {
          tickMarkLength: 0,
          color: 'rgba(50, 78, 163, 0.1)',
          lineWidth: 1,
          zeroLineColor: '#324ea3',
          zeroLineWidth: 2
        },
        ticks: {
          padding: 10,
          fontFamily: "'SarabunRegular', arial, sans-serif",
          fontSize: 10,
          fontColor: "rgba(67, 66, 95, 0.5)",
        }
      }]
    },
    elements: {
      line: {
        tension: 0.7
      }
    },
    legend: {
      display: false
    },
    point: {
      backgroundColor: 'red'
    },
    tooltips: {
      position: 'average',
      titleFontFamily: "'SarabunRegular', arial, sans-serif",
      titleFontSize: 10,
      titleFontStyle: 'normal',
      titleFontColor: 'rgba(255,255,255,0.8)',
      titleAlign: 'center',
      titleMarginBottom: 2,
      bodyFontFamily: "'SarabunSemiBold', arial, sans-serif",
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
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          label += tooltipItem.yLabel;
          return label;
        }
      }
    }
  };

  var chartInstance = new Chart(chart, {
      type: 'line',
      data: data,
      options: options
  });

  var chartJson;
  getChartDatas('documents/chartDatas.json')
  
  function getChartDatas(url) {
    $.getJSON( url, function( data ) {
      chartJson = data;
    });
  }
  
  $('.chart__control-button').click(function(){
    $('.chart__control-button.active').removeClass('active')
    $(this).addClass('active')
    if($(this).data('chart') === 'balance'){
      // console.log(chartJson[0].currency)
      chartInstance.data.datasets[0].data = chartJson[0].dataset[0].datas;
      chartInstance.data.labels = chartJson[0].dataset[0].labels;

      chartInstance.options.tooltips.callbacks.label = function(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';
        label += tooltipItem.yLabel + ' ' + chartJson[0].currency;
        return label;
      }
    }
    if($(this).data('chart') === 'profit'){
      // console.log(chartJson[1].currency)
      chartInstance.data.datasets[0].data = chartJson[1].dataset[0].datas;
      chartInstance.data.labels = chartJson[1].dataset[0].labels;

      chartInstance.options.tooltips.callbacks.label = function(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';
        label += tooltipItem.yLabel + ' ' + chartJson[1].currency;
        return label;
      }
    }
    if($(this).data('chart') === 'trades'){
      // console.log(chartJson[2].currency)
      chartInstance.data.datasets[0].data = chartJson[2].dataset[0].datas;
      chartInstance.data.labels = chartJson[2].dataset[0].labels;

      chartInstance.options.tooltips.callbacks.label = function(tooltipItem, data) {
        var label = data.datasets[tooltipItem.datasetIndex].label || '';
        label += tooltipItem.yLabel + ' ' + chartJson[2].currency;
        return label;
      }
    }
    chartInstance.update();
  })
}

// Copy wallet number
if (document.querySelector('.button-copy')) {
  $('.button-copy').click(() => {
    // Копирование
    var copyNumber = document.getElementById("walletNumber");
    copyNumber.select();
    copyNumber.setSelectionRange(0, 99999);
    document.execCommand("copy");

    // Уведомление
    $('.notification').addClass('active');
    setTimeout(function(){
      $('.notification').removeClass('active');
    },1500)
  })
}

// Center ellipsis text
function truncate( str, max, sep ) {

  max = max || 10;

  var len = str.length;
  if(len > max){

      sep = sep || "...";

      var seplen = sep.length;

      if(seplen > max) {
          return str.substr(len - max);
      }

      var n = -0.5 * (max - len - seplen);

      var center = len/2;

      var front = str.substr(0, center - n);
      var back = str.substr(len - center + n);

      return front + sep + back;

  }

  return str;
}
if (document.querySelector('.ellipsis')) {
  $('span.ellipsis').each(function(){
    var textEllipsis = $(this).text();
    $(this).text(truncate(textEllipsis, 22, "........"))
  })
}


// Security password
if (document.querySelector('button[data-toggle=edit-form]')) {
  $('button[data-toggle=edit-form]').click(function(){
    if($('.security-password__form input').is('[readonly]')){
      $('.security-password__form input').removeAttr('readonly')
      $('#securityPasswordCurrent').focus()
    }
    else{
      $('.security-password__form input').attr('readonly','')
    }
  })
}
