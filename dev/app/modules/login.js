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
    email: {
      required: true,
      checkEmail: true,
    },
    password: {
      required: true,
      minlength: 8,
      maxlength: 40,
      // passwordStrength: true,
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
    // if (!this.submitData['g-recaptcha-response']) {
    //   this.showFormMessage('Подтвердите, что вы не робот!');
    //   return;
    // }
    // return false;
  },
});
