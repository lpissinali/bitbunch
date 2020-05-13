(function($) {
  // initialize tooltipster on text input elements
  $('.your-account__form .error-icon').tooltipster({
    trigger: 'custom',
    onlyOne: false,
    position: 'top',
    theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
    functionPosition: function(instance, helper, position){
      if(window.innerWidth < 460) {
        position.coord.left += 45;
      }
      if(window.innerWidth < 770) {
        position.coord.left -= 60;
      }
      else if(window.innerWidth < 1030) {
        position.coord.left -= 43;
      }
      else if(window.innerWidth < 1300) {
        position.coord.left -= 53;
      }       
      else if(window.innerWidth < 1370) {
        position.coord.left -= 56;
      } 
      else {
        position.coord.left -= 60;
      }
      
      return position;
    },
    contentAsHTML: true,
  });

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

  if (document.querySelector('.account__form-email button[data-toggle=modal')) {

    $('.account__form-email button[data-toggle=modal').click(function(event){
      $('.account__form-phone input').next().next('.error-icon').addClass('d-none');
      $('.account__form-phone input').next().next('.error-icon').tooltipster("close");
      if($('.account__form-email input')[0].value !== '') {
        $('.account__form-email input').next().next('.error-icon').addClass('d-none');
        $('.account__form-email input').next().next('.error-icon').tooltipster("close");
        $('#changeEmailForm #changeEmailNew').val($('.account__form-email input')[0].value);
        $('#modal-change-email').modal('show');
      }
      else {
        let tooltipsterContent = `
          <p class="tooltipster-content__caption">This field is obligatory</p>
          <p class="tooltipster-content__description">Please fill it in to continue</p>
        `;
        $('.account__form-email input').removeClass('validation-success');
        $('.account__form-email input').next().next('.error-icon').removeClass('d-none');
        $('.account__form-email input').next().next('.error-icon').tooltipster("content", tooltipsterContent);
        $('.account__form-email input').next().next('.error-icon').tooltipster("open");        
      }
    })
  }

  if (document.querySelector('.account__form-phone button[data-toggle=modal')) {
    $('.account__form-phone button[data-toggle=modal').click(function(event){
      $('.account__form-email input').next().next('.error-icon').addClass('d-none');
      $('.account__form-email input').next().next('.error-icon').tooltipster("close");
      if($('.account__form-phone input')[0].value !== ''){
        $('.account__form-phone input').next().next('.error-icon').addClass('d-none');
        $('.account__form-phone input').next().next('.error-icon').tooltipster("close");
        $('#changePhoneForm #changePhoneNew').val($('.account__form-phone input')[0].value);
        $('#modal-change-phone').modal('show');
      }
      else {
        let tooltipsterContent = `
          <p class="tooltipster-content__caption">This field is obligatory</p>
          <p class="tooltipster-content__description">Please fill it in to continue</p>
        `;
        $('.account__form-phone input').removeClass('validation-success');
        $('.account__form-phone input').next().next('.error-icon').removeClass('d-none');
        $('.account__form-phone input').next().next('.error-icon').tooltipster("content", tooltipsterContent);
        $('.account__form-phone input').next().next('.error-icon').tooltipster("open");        
      }
    })
  }

  $('#modal-change-email').on('hide.bs.modal', function (e) {
    $('#changeEmailForm #changeEmailPassword').next().next('.error-icon').tooltipster("close");
  });

  $('#modal-change-phone').on('hide.bs.modal', function (e) {
    $('#changePhoneForm #changePhonePassword').next().next('.error-icon').tooltipster("close");
  })

})(jQuery);