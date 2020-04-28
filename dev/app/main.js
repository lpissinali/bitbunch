import '../common/scss/main.scss';

// accordion
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
const faqAccordion = new dsAccordion({});

const careerAccordion = new dsAccordion({
  mainContainer: '.career__accordion',
  dropdownBlock: '.career__acd-dropdown',
});

// анимация
require('./page-home-anim');
require('./page-pressroom-anim');
require('./page-team-anim');
require('./page-contact-anim');

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
  $('.profits__slider-container').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    variableWidth: true,
  });
}

$(window).on('resize orientationchange', () => {
  $('.our-team__flex-container').slick('resize');
  $('.bit-media__flex-block').slick('resize');
  $('.big-team__founders-container').slick('resize');
  $('.big-team__investors-container').slick('resize');
  $('.big-team__advisors-container').slick('resize');
});

// range
if (document.querySelector('.calculation__currency-range')) {
  $('.calculation__currency-range').on('change mousemove', function() {
    $('.calculation__currency-value').html($(this).val());
  });
  $('.calculation__currency-value').html($('.calculation__currency-range').val());
}

if (document.querySelector('.calculation__mount-range')) {
  $('.calculation__mount-range').on('change mousemove', function() {
    $('.calculation__mount-value').html($(this).val());
  });
  $('.calculation__mount-value').html($('.calculation__mount-range').val());
}
