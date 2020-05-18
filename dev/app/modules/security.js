import {
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
  showNotification,
} from './commonForm';

$('#securityPasswordForm').validate({
  errorPlacement(error, element) {
    if ($(error).text() === '') return;
    showTooltip(element, $(error).text());
  },
  success(label, element) {
    closeTooltip(element);
  },
  rules: {
    'password-current': {
      required: true,
      minlength: 8,
      maxlength: 40,
      passwordStrength: true,
    },
    'password-new': {
      required: true,
      minlength: 8,
      maxlength: 40,
      passwordStrength: true,
    },
    'password-confirm': {
      minlength: 8,
      maxlength: 40,
      passwordStrength: true,
      equalTo: '#securityPasswordNew',
    },
  },
  errorClass: VALIDATION_ERROR_CLASS,
  validClass: VALIDATION_SUCCESS_CLASS,
  submitHandler(form) {
    $('.security-password__form input').attr('readonly','')
    showNotification('Your password got changed successfully.', 3000);
    form.reset();
  },
});
