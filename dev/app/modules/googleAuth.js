(function($) {
  $("#googleAuthenticatorForm").validate({
    focusCleanup: true,
    errorPlacement(error, element) {
      if($(error).text() == '') {
        return
      }
      var tooltipsterContent = `
        <p class="tooltipster-content__caption">This field is obligatory</p>
        <p class="tooltipster-content__description">Please fill it in to continue</p>
      `;
      $(element).removeClass('validation-success');
      $(element).next().next('.error-icon').removeClass('d-none');
      $(element).next().next('.error-icon').tooltipster("content", tooltipsterContent);
      $(element).next().next('.error-icon').tooltipster("open");
    },
    success(label, element) {
      $(element).next().next('.error-icon').addClass('d-none');
      $(element).next().next('.error-icon').tooltipster("close");
      $(element).addClass('validation-success');
    },
    rules: {
      
    },
    errorClass: "validation-error",
    submitHandler(form) { 
      $('#modal-google-authenticator').modal('hide');
      setTimeout(()=>{
        $('.notification').addClass('active');
      }, 300);
      
      setTimeout(()=>{
        $('.notification').removeClass('active');
      }, 3000);
      form.reset();
    }
  });

  // initialize tooltipster on text input elements
  $('#googleAuthenticatorForm .error-icon').tooltipster({
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

  $("#googleAuthenticatorForm input").each(function() {
    if ($(this)[0].value !== "") {
      $(this).addClass('validation-success');
    }
  });

  $("#googleAuthenticatorForm input").on("focusout", event => {
    if (event.currentTarget.value !== "") {
      $(event.currentTarget).next().addClass("has-content");
    } else {
      $(event.currentTarget).next().removeClass("has-content");
    }
  });
})(jQuery);
