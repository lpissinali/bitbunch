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
    if (currentSlide === 1) {
      $('.profits__slider-dot-right').addClass('none');
      $('.profits__slider-dot-left').removeClass('none');
    } else if (currentSlide === 0) {
      $('.profits__slider-dot-left').addClass('none');
      $('.profits__slider-dot-right').removeClass('none');
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
    if ($(window).width() <= 1000){
      $('.account-nav__user-controls').slideToggle();
    }
    $('.account-nav__menu-list').toggleClass('disabled');
    $('.account-nav__user').toggleClass('enabled');
    $('.account-nav__user-menu-list').slideToggle();
  });

  $('.account-nav__user-menu-close').click(() => {
    if ($(window).width() <= 1000){
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

// Choosing coin play/pause button
if (document.querySelector('.choosing-coin__controls-toggle')) {
  $('.choosing-coin__controls-toggle').click(function(){
    $(this).toggleClass('active');
  });
}

// Trading history table scrollbar
if (document.querySelector('.trading-history__table-overflow')) {
  $(".trading-history__table-overflow").mCustomScrollbar({
    axis:"x",
    theme:"dark"
  });
}

// Modal notification
if (document.querySelector('.modal__notification')) {
  $('.modal__notification [type=submit]').click(function(e){
    e.preventDefault(); // Отмена отправки для показа анимации
    $('.notification').addClass('active');
  });

  $('.modal__notification .modal__close').click(function(){
    $('.notification').removeClass('active');
  })
}