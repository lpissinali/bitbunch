/* eslint-disable func-names */
/**
 * @module registerForm
 * @author donrus
 * @description validation and form submit
 */
(function($) {
  $("#register").validate({
    errorClass: "validation-error",
    errorElement: "span",
    submitHandler(form) {}
  });
  $(".form-group input").on("focusout", event => {
    if (this.value !== "") {
      var $placeholder = $(this).nextAll(".form-group__placeholder");
      $placeholder.addClass("has-content");
    } else {
      $(this)
        .next()
        .removeClass("has-content");
    }
  });
})(jQuery);
