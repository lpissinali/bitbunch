import '../common/scss/main.scss';

// accordion
import Accordion from '../components/accordion/ds-accordion-gsap';
import { dsAccordion } from '../components/accordion/ds-accordion';
import { upInputLabel } from './modules/commonForm';

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
    toggleAccountNav('fast')
  });

  $(document).click(function (e){
    var clickTarget = $(".account-nav__nav-menu");
		if (clickTarget.is(e.target) && clickTarget.find('.account-nav__menu-list.disabled').length === 1) {
      toggleAccountNav('fast')
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
  $('.account-nav__nav-menu ul li a').each(function () {
      var location = window.location.href;
      var link = this.href;
      if(location == link) {
        $('.account-nav__nav-menu ul li').removeClass('active')
        $(this).parent().addClass('active')
      }
      if($(this).parent().is('.account-nav__user-menu-item.active')){
        toggleAccountNav(0)
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
      impact: 'scroller'
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
  baron({
      root: '.baron__root',
      scroller: '.baron__scroller',
      bar: '.baron__bar',
      scrollingCls: '_scrolling',
      draggingCls: '_dragging',
      direction: 'v'
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
    template += `<div class="choose-select__trigger"><div class="choose-select__trigger-icon"></div><div class="choose-select__trigger-name">${$(this).attr('placeholder')}</div></div>`;
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
    var optionsHeight = 0;

    function optionsOpen(){
      optionsHeight = $('.choose-select__options-wrapper').outerHeight()
      TweenLite.to($('.choose-select__options'), 0.5, {height: optionsHeight, onComplete: optionsOverflow})
    }
    function optionsClose(){
      $('.choose-select__options').removeClass('opened');
      TweenLite.to($('.choose-select__options'), 0.5, {height: 0})
    }
    function optionsOverflow(){
      $('.choose-select__options').addClass('opened');
    }

    $('html').one('click', () => {
      $('.choose-select__trigger').removeClass('opened');
      optionsClose()
    });
    if(!$('.choose-select__trigger').is('.opened')){
      optionsOpen()
    }
    else{
      optionsClose()
    }
    
    $(this).toggleClass('opened');
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
    
    var optionIcon = $(this).parents('.choose-select__wrapper').find('.choose-select__trigger-icon'),
        optionName = $(this).parents('.choose-select__wrapper').find('.choose-select__trigger-name')
    
    function changeOptionData(icon,name){
      optionIcon.html('<img src="'+icon+'" alt="">')
      optionName.text(name)
    }
    
    var optionSelectAnimation = new TimelineMax();
        optionSelectAnimation
            .to([optionIcon,optionName], .3, {alpha: 0})
            .set(optionIcon,{x: -32})
            .set(optionName,{x: 32})
            .to(optionIcon, .5, {x: 0, alpha: 1, onStart: changeOptionData, onStartParams:[$(this).data('logo-white'),$(this).data('title')]})
            .to(optionName, .5, {x: 0, alpha: 1}, '-=0.5');
  });

  $('.choose-select').change(function() {
    setTimeout(() => {
      $('.choose-blur').addClass('_unblur');
      $('.date-select').addClass('active')
    }, 300);
  });
}
if (document.querySelector('.choose-select')) {
  customSelect();
}

// Смена валюты
if (document.querySelector('.statistics')) {
  $('.choose-select').change(function() {
    $('.statistics__item-value .unit').text(this.value)
  });
}
// Пополнение кошелька
if (document.querySelector('.fund-wallet')) {
  $('.choose-select').change(function() {
    $('.fund-wallet__asset').text($(this).find('option:selected').text())
    $('#walletNumber').val($(this).find('option:selected').data('wallet'))
    $('.fund-wallet-qr__code img').attr('src', $(this).find('option:selected').data('qr'))

    var blurElement = {alpha:0,a:6};
    TweenMax.to(blurElement, .5, {alpha:1,a:0, onUpdate:applyBlur});
    function applyBlur(){
        TweenMax.set(['.fund-wallet__bg'], {alpha: blurElement.alpha, webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
    };
    $('.fund-wallet__bg').css('background-image', 'url(' + $(this).find('option:selected').data('background') + ')');
  });
}
// Вывод средств
if (document.querySelector('.make-withdraw')) {
  $('.choose-select').change(function() {
    var blurElement = {alpha:0,a:6};
    TweenMax.to(blurElement, .5, {alpha:1,a:0, onUpdate:applyBlur});
    function applyBlur(){
        TweenMax.set(['.make-withdraw__bg'], {alpha: blurElement.alpha, webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"});
    };
    $('.make-withdraw__bg').css('background-image', 'url(' + $(this).find('option:selected').data('background') + ')');
  });
}

// Datapicker
if (document.querySelector('.trading-statistics__header-time')) {
  $.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 1
  };
  var dateSelect = $('#date-select').datepicker({
    language: 'en',
    inline: true,
    range: true,
    multipleDatesSeparator: ' - ',
    prevHtml: '<svg width="8" height="14" viewBox="0 0 8 14"><path d="M7.6376,2.24716c0.50468,-0.53624 0.47911,-1.38007 -0.05712,-1.88476c-0.53623,-0.50468 -1.38006,-0.47911 -1.88475,0.05712l-5.33333,5.66666c-0.4832,0.5134 -0.4832,1.31424 0,1.82764l5.33333,5.66666c0.50469,0.53623 1.34852,0.5618 1.88475,0.05712c0.53623,-0.50469 0.5618,-1.34852 0.05712,-1.88476l-4.47327,-4.75284v0z" fill="#324ea3" fill-opacity="1"></path></svg>',
    nextHtml: '<svg width="8" height="14" viewBox="0 0 8 14"><path d="M0.3624,2.24716c-0.50468,-0.53624 -0.47911,-1.38007 0.05712,-1.88476c0.53623,-0.50468 1.38006,-0.47911 1.88475,0.05712l5.33333,5.66666c0.4832,0.5134 0.4832,1.31424 0,1.82764l-5.33333,5.66666c-0.50469,0.53623 -1.34852,0.5618 -1.88475,0.05712c-0.53623,-0.50469 -0.5618,-1.34852 -0.05712,-1.88476l4.47327,-4.75284v0z" fill="#324ea3" fill-opacity="1"></path></svg>',
    onSelect(formattedDate, date, inst){
      console.log(formattedDate);
    }
  }).data('datepicker');
  $('.date-select .button-clear').on('click',function(){
    dateSelect.clear()
  })

  var dateSelectHeight = 0;
  function dateSelectOpen(){
    dateSelectHeight = $('.date-select__container').outerHeight()
    TweenLite.to($('.date-select__overflow'), 0.5, {height: dateSelectHeight, onComplete: dateSelectOverflow})
  }
  function dateSelectClose(){
    $('.date-select__overflow').removeClass('opened');
    TweenLite.to($('.date-select__overflow'), 0.5, {height: 0})
  }
  function dateSelectOverflow(){
    $('.date-select__overflow').addClass('opened');
  }

  $('.date-select .date-select__toggle').click(function(){
    $('.date-select__body').append($('.datepicker-inline'))
    if(!$('.date-select__overflow').is('.opened')){
      dateSelectOpen()
    }
    else{
      dateSelectClose()
    }
  })
  $('.date-select .button-cancel').click(function(){
    dateSelect.clear()
    dateSelectClose()
  })

  $('.date-select .button-apply').click(function(){
    // chartInstance.update();
    console.log($('#date-select').val())
    dateSelectClose()
  })
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


// Button remove .table-row
if (document.querySelector('.button-remove')) {
  $('.button-remove').click(function(e){
    e.preventDefault()
    $(this).parents('.table-row').remove()
  })
}

// Security authentication modal headline change
if (document.querySelector('#modal-2fa-verification')) {
  $('#security-authentication_1').change(function(){
    if ( $(this).is(':checked') ) {
      $('#modal-2fa-verification .security-status').text('Enable')
    } else {
      $('#modal-2fa-verification .security-status').text('Disable')
    }
    $('#modal-2fa-verification').modal('show');
    upInputLabel();
  })
}
if (document.querySelector('#modal-google-authenticator')) {
  $('#security-authentication_2').change(function(){
    if ( $(this).is(':checked') ) {
      $('#modal-google-authenticator .security-status').text('Enable')
    } else {
      $('#modal-google-authenticator .security-status').text('Disable')
    }
    $('#modal-google-authenticator').modal('show');
    upInputLabel();
  })
}

// Trading currencies check. Page Settings
if (document.querySelector('.trading-currencies__header-filter')) {
  var currenciesCheckBlock = $('.currencies-check'),
      currenciesAllBlock = $('.currencies-all'),
      countCheck = 0,
      countAll = 0;
  $('input[name=currencies]').each(function(){
    countAll++
    if ( $(this).is(':checked') ) {
      countCheck++
    }
    currenciesChange(countCheck, countAll)
  })
  $('input[name=currencies]').change(function(){
    if ( $(this).is(':checked') ) {
      countCheck++
    } else {
      countCheck--
    }
    currenciesChange(countCheck)
  })
  function currenciesChange(check, all) {
    currenciesCheckBlock.text(check)
    currenciesAllBlock.text(all)
  }
}


// Verification steps
// - upload photos
$('#verificationUploads__form input[type="file"]').on('change', function () {
  var file = this.files,
      uploadedIconBlock = '.verification-level__uploads-area img',
      uploadedIconPath = './images/verification_uploaded.svg';

  if ( !file[0].type.match(/image\/(jpeg|jpg|png|gif)/) ) {
    $(this).val('');
    return false;
  }

  $(this).parent().find(uploadedIconBlock).attr('src',uploadedIconPath);
});

// - next step
// class ".next-step" added to buttons and headline icons to view all steps
$('.next-step').click(function(e){
  e.preventDefault();
  var step = $(this).parents('.verification-level__step').data('verifi-step');
  console.log(step)
  step++;
  $('.verification-level__step.active').removeClass('active');
  $('.verification-level__step[data-verifi-step='+ step +']').addClass('active');
})