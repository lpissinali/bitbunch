import {
  DEFAULT_TOOLTIP_CONTENT,
  VALIDATION_SUCCESS_CLASS,
  HIDE_ELEMENT_CLASS,
  showTooltip,
  closeTooltip,
} from './commonForm';

const editButtonHandler = (elementClass, attribute) => {
  $(`button[data-toggle=${attribute}]`).click(() => {
    if ($(`.${elementClass} input`).is('[readonly]')) {
      $(`.${elementClass} input`).removeAttr('readonly');
      $(`.${elementClass} button[data-toggle=${attribute}]`).addClass(HIDE_ELEMENT_CLASS);
      $(`.${elementClass} button[data-toggle=modal]`).removeClass(HIDE_ELEMENT_CLASS);
      $(`.${elementClass} input`).focus();
    }
  });
};

const saveButtonHandler = (elementClass, modalFormSelector, modalFormElementSelector) => {
  $(`.${elementClass} button[data-toggle=modal`).click(event => {
    if ($(`.${elementClass} input`)[0].value !== '') {
      $(`.${elementClass} input`).addClass(VALIDATION_SUCCESS_CLASS);
      closeTooltip($(`.${elementClass} input`)[0]);
      $(modalFormElementSelector)
        .val($(`.${elementClass} input`)[0].value)
        .change();
      $(modalFormSelector).modal('show');
    } else {
      $(`.${elementClass} input`).removeClass(VALIDATION_SUCCESS_CLASS);
      const tooltipsterContent = DEFAULT_TOOLTIP_CONTENT;
      showTooltip($(`.${elementClass} input`)[0], tooltipsterContent);
    }
  });
};

if (document.querySelector('button[data-toggle=edit-email]')) {
  editButtonHandler('account__form-email', 'edit-email');
}
if (document.querySelector('button[data-toggle=edit-phone]')) {
  editButtonHandler('account__form-phone', 'edit-phone');
}

if (document.querySelector('.account__form-email button[data-toggle=modal')) {
  saveButtonHandler(
    'account__form-email',
    '#modal-change-email',
    '#changeEmailForm #changeEmailNew'
  );
}

if (document.querySelector('.account__form-phone button[data-toggle=modal')) {
  saveButtonHandler(
    'account__form-phone',
    '#modal-change-phone',
    '#changePhoneForm #changePhoneNew'
  );
}
