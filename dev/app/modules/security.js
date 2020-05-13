/* eslint-disable func-names */
/**
 * @module restoreForm
 * @author donrus
 * @description validation and form submit
 */
(function($) {
  $("#securityPasswordForm").validate({
    errorPlacement(error, element) {
      if($(error).text() == '') {
        return
      }
      var tooltipsterContent = `
      <p class="tooltipster-content__caption">Error</p>
      <p class="tooltipster-content__description">${$(error).html()}</p>
      `;
      $(element).removeClass('validation-success');
      $(element).next().next('.error-icon').removeClass('d-none');
      $(element).next().next('.error-icon').tooltipster("content", tooltipsterContent);
      $(element).next().next('.error-icon').tooltipster("open");
    },
    success(label, element) {
      $(element).next().next('.error-icon').addClass('d-none');
      $(element).next().next('.error-icon').tooltipster("close");
    },
    rules: {
      'password-current': {
        required: true,
        minlength: 8,
        maxlength: 40,
        passwordStrength: true
      },
      'password-new': {
        required: true,
        minlength: 8,
        maxlength: 40,
        passwordStrength: true
      },
      'password-confirm': {
        minlength: 8,
        maxlength: 40,
        passwordStrength: true,
        equalTo: "#securityPasswordNew"
      }
    },
    errorClass: "validation-error",
    submitHandler(form) { 
      setTimeout(()=>{
        $('.notification').html('Your password got changed successfully.');
        $('.notification').addClass('active');
      }, 300);
      
      setTimeout(()=>{
        $('.notification').removeClass('active');
      }, 3000);
    }
  });

  // initialize tooltipster on text input elements
  $('#securityPasswordForm .error-icon').tooltipster({
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

  $(".form-group input").on("focusout", event => {
    if (event.currentTarget.value !== "") {
      $(event.currentTarget).next().addClass("has-content");
    } else {
      $(event.currentTarget).next().removeClass("has-content");
    }
  });
})(jQuery);
