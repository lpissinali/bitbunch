import {
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
} from './commonForm';

$('#forgotForm').validate({
  errorPlacement(error, element) {
    if ($(error).text() === '') return;
    showTooltip(element, $(error).text());
  },
  success(label, element) {
    closeTooltip(element);
  },
  rules: {
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
