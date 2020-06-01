import {
  DEFAULT_TOOLTIP_CONTENT,
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
} from './commonForm';

$('#contactForm').validate({
  // onfocusout: false,
  errorPlacement(error, element) {
    if ($(error).text() === '') return;
    showTooltip(element, $(error).text());
  },
  success(label, element) {
    closeTooltip(element);
  },
  rules: {
    name: {
      required: true,
      checkName: true,
    },
    email: {
      required: true,
      checkEmail: true,
    },
    password: {
      required: true,
      minlength: 8,
      maxlength: 40,
    },
  },
  errorClass: VALIDATION_ERROR_CLASS,
  validClass: VALIDATION_SUCCESS_CLASS,
  submitHandler(form) {
    return false;
  },
});
