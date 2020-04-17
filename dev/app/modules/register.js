/* eslint-disable func-names */
/**
 * @module registerForm
 * @author donrus
 * @description validation and form submit
 */
(function($) {
  $("#registerForm").validate({
    errorPlacement(error, element) {
      if($(error).text() == '') {
        return
      }
      $(element).next().next('.error-icon').removeClass('d-none');
      $(element).next().next('.error-icon').tooltipster("content", $(error).text());
      $(element).next().next('.error-icon').tooltipster("open");
    },
    success(label, element) {
      $(element).next().next('.error-icon').addClass('d-none');
      $(element).next().next('.error-icon').tooltipster("close");
    },
    rules: {
      username: {
        required: true
      },
      email: {
        required: true
      },
      password: {
        required: true
      }
    },
    errorClass: "validation-error",
    submitHandler(form) { return false;}
  });

  // initialize tooltipster on text input elements
  $('#registerForm .error-icon').tooltipster({
    trigger: 'custom',
    onlyOne: false,
    position: 'top',
    theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
  });

  $(".form-group input").on("focusout", event => {
    if (event.currentTarget.value !== "") {
      $(event.currentTarget).next().addClass("has-content");
    } else {
      $(event.currentTarget).next().removeClass("has-content");
    }
  });
})(jQuery);
