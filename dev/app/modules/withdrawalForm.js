import {
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
} from './commonForm';

$('#withdrawalForm').validate({
  errorPlacement(error, element) {
    if ($(error).text() === '') return;
    showTooltip(element, $(error).text());
  },
  success(label, element) {
    closeTooltip(element);
  },
  rules: {
    amount: {
      required: true,
    },
    wallet: {
      required: true,
    },
  },
  errorClass: VALIDATION_ERROR_CLASS,
  validClass: VALIDATION_SUCCESS_CLASS,
  submitHandler(form) {
    $('#withdrawalAuthAmount').val(
      $(form)
        .find('#withdrawalAmount')
        .val()
    );
    $('#withdrawalAuthWallet').val(
      $(form)
        .find('#withdrawalWallet')
        .val()
    );
    $('#withdrawalAuthAmount, #withdrawalAuthWallet').change();
    $('#modal-change-withdrawal').modal('show');
  },
});
