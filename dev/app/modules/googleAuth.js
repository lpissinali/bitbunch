import {
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
  showNotification,
} from './commonForm';

$('#googleAuthenticatorForm').validate({
  errorPlacement(error, element) {
    if ($(error).text() === '') return;
    showTooltip(element, $(error).text());
  },
  success(label, element) {
    closeTooltip(element);
  },
  rules: {},
  errorClass: VALIDATION_ERROR_CLASS,
  validClass: VALIDATION_SUCCESS_CLASS,
  submitHandler(form) {
    $('#modal-google-authenticator').modal('hide');
    showNotification('Your Google auth authenticatin got enabled successfully.', 3000);
    form.reset();
  },
});
