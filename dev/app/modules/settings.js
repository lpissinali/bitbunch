(function($) {
  if ($('.trading-currencies__list').length){
    $('.trading-currencies__header-filter > span').html(
      $('.trading-currencies__list .currencies__item').length
    );
  }
})(jQuery);