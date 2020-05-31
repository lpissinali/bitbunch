import {
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
  initBootstrapSelect,
  customSelectValidationError,
  customSelectValidationSuccess,
} from './commonForm';

$('#userdataForm').validate({
  // onfocusout: false,
  errorPlacement(error, element) {
    if ($(error).text() === '') return;
    if ($(element)[0].tagName === 'SELECT') {
      customSelectValidationError(element);
    }
    showTooltip(element, $(error).text());
  },
  success(label, element) {
    if ($(element)[0].tagName === 'SELECT') {
      customSelectValidationSuccess(element);
    }
    closeTooltip(element);
  },
  rules: {
    firstname: {
      required: true,
      checkName: true,
    },
    lastname: {
      required: true,
      checkName: true,
    },
    country: {
      required: true,
    },
    phonecode: {
      required: true,
    },
    phonenumber: {
      required: true,
    },
  },
  errorClass: VALIDATION_ERROR_CLASS,
  validClass: VALIDATION_SUCCESS_CLASS,
  submitHandler(form) {
    return false;
  },
});

$.when(getCountryCodes('documents/CountryCodes.json'))
  .done(() => {
    initBootstrapSelect();
  })
  .fail(() => {
    initBootstrapSelect();
  });

function getCountryCodes(url) {
  const d = $.Deferred();
  $.getJSON(url, data => {
    const items = [];
    $.each(data, (key, val) => {
      const optionHtml = `<option 
        country-code="${val.code}"
        country-dial-code="${val.dial_code}"
        data-content="
          <span style='display:flex; justify-content: space-between;'>
            <span>${val.name}</span>
          </span>"
        value="${val.code}"  
        >${val.code}</option>`;
      items.push(optionHtml);
    });
    $('#countrySelector').html(items.join(''));
    d.resolve();
  });
  return d;
}

$('#countrySelector').on('changed.bs.select', (event, clickedIndex, isSelected, previousValue) => {
  if (event.currentTarget.value !== '') {
    const $activeOption = $(event.currentTarget).find(
      `option[country-code="${event.currentTarget.value}"]`
    );
    $('#registerPhonecode').val($activeOption.attr('country-dial-code'));
    $('#registerPhonecode').change();
    $('#registerPhonecode').removeClass(VALIDATION_ERROR_CLASS);
    $('#registerPhonecode').addClass(VALIDATION_SUCCESS_CLASS);
  }
});
