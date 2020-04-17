import '../common/scss/main.scss';

require('./polyfills/polyfills');
require('./modules/validators');
require('./modules/register');

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
