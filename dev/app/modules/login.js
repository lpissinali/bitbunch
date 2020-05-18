import {
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
} from './commonForm';

$('#loginForm').validate({
  errorPlacement(error, element) {
    if ($(error).text() === '') return;
    showTooltip(element, $(error).text());
  },
  success(label, element) {
    closeTooltip(element);
  },
  rules: {
    password: {
      required: true,
    },
  },
  messages: {
    password: {
      required: 'Please try again. Wrong email or password.',
    },
  },
  errorClass: VALIDATION_ERROR_CLASS,
  validClass: VALIDATION_SUCCESS_CLASS,
  submitHandler(form) {
    return false;
  },
});
