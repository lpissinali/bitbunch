(function($) {
  if (document.querySelector('button[data-toggle=edit-email]')) {
    $('button[data-toggle=edit-email]').click(function(){
      if($('.account__form-email input').is('[readonly]')){
        $('.account__form-email input').removeAttr('readonly');
        $('.account__form-email button[data-toggle=edit-email]').addClass('d-none');
        $('.account__form-email button[data-toggle=modal]').removeClass('d-none');
        $('#accountEmail').focus();
      }
    })
  }
  if (document.querySelector('button[data-toggle=edit-phone]')) {
    $('button[data-toggle=edit-phone]').click(function(){
      if($('.account__form-phone input').is('[readonly]')){
        $('.account__form-phone input').removeAttr('readonly');
        $('.account__form-phone button[data-toggle=edit-phone]').addClass('d-none');
        $('.account__form-phone button[data-toggle=modal]').removeClass('d-none');
        $('#accountPhone').focus();
      }
    })
  }
})(jQuery);