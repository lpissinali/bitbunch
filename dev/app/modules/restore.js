import {
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
} from './commonForm';

$('#restoreForm').validate({
  errorPlacement(error, element) {
    if ($(error).text() === '') return;
    showTooltip(element, $(error).text());
  },
  success(label, element) {
    closeTooltip(element);
  },
  rules: {
    newPassword: {
      minlength: 8,
      maxlength: 40,
      passwordStrength: true,
    },
    repeatPassword: {
      minlength: 8,
      maxlength: 40,
      passwordStrength: true,
      equalTo: '#restoreNewPassword',
    },
  },
  errorClass: VALIDATION_ERROR_CLASS,
  validClass: VALIDATION_SUCCESS_CLASS,
  submitHandler(form) {
    return false;
  },
});
