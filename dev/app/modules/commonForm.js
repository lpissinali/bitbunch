export const DEFAULT_TOOLTIP_CONTENT = `This field is obligatory. Please fill it in to continue`;

export const VALIDATION_SUCCESS_CLASS = 'validation-success';
export const VALIDATION_ERROR_CLASS = 'validation-error';
export const TOOLTIPSTER_ANCOR_CLASS = 'tooltip-anchor';
export const ERROR_ICON_CLASS = 'error-icon';
export const HIDE_ELEMENT_CLASS = 'd-none';

export const initTooltip = () => {
  $(`.${TOOLTIPSTER_ANCOR_CLASS}`).each(function() {
    const tooltipsterAncor = this;
    $(this).tooltipster({
      trigger: 'custom',
      onlyOne: false,
      position: 'bottom',
      theme: ['tooltipster-n oir', 'tooltipster-noir-customized'],
      functionPosition(instance, helper, position) {
        const { left, x: anchorX } = tooltipsterAncor.getBoundingClientRect();
        if (position.coord.left === 0) {
          position.coord.left += anchorX + 10;
        } else {
          position.coord.left += position.size.width / 2;
        }
        return position;
      },
      contentAsHTML: true,
    });
  });
};

export const closeTooltip = element => {
  $(element)
    .parents('.form-group')
    .find(`.${ERROR_ICON_CLASS}`)
    .addClass(HIDE_ELEMENT_CLASS);
  $(element)
    .parents('.form-group')
    .find(`.${TOOLTIPSTER_ANCOR_CLASS}`)
    .tooltipster('close');
};

export const showTooltip = (element, errorContent) => {
  $(element)
    .parents('.form-group')
    .find(`.${ERROR_ICON_CLASS}`)
    .removeClass(HIDE_ELEMENT_CLASS);
  $(element)
    .parents('.form-group')
    .find(`.${TOOLTIPSTER_ANCOR_CLASS}`)
    .tooltipster('content', errorContent);
  $(element)
    .parents('.form-group')
    .find(`.${TOOLTIPSTER_ANCOR_CLASS}`)
    .tooltipster('open');
};

export const showNotification = (message, time) => {
  setTimeout(() => {
    $('.notification').html(message);
    $('.notification').addClass('active');
  }, 300);
  setTimeout(() => {
    $('.notification').removeClass('active');
  }, time);
};

$('.form-group input').each(function(index) {
  if ($(this)[0].value !== '') {
    $(this)
      .next()
      .addClass('has-content');
  } else {
    $(this)
      .next()
      .removeClass('has-content');
  }
});

$('input, textarea').on('focusout change', event => {
  if (event.currentTarget.value !== '') {
    $(event.currentTarget)
      .parent()
      .find('.form-group__placeholder')
      .addClass('has-content');
  } else {
    $(event.currentTarget)
      .parent()
      .find('.form-group__placeholder')
      .removeClass('has-content');
  }
});

export const initBootstrapSelect = () => {
  if ($('.selectpicker').length > 0) {
    $('.selectpicker').each(function() {
      $(this).selectpicker({
        dropupAuto: false,
        size: 5,
        liveSearch: true,
        title: ' ',
      });
    });
  }
};

export const customSelectValidationError = element => {
  $(element)
    .parents('.form-group')
    .find('.btn.dropdown-toggle')
    .removeClass(VALIDATION_SUCCESS_CLASS);
  $(element)
    .parents('.form-group')
    .find('.btn.dropdown-toggle')
    .addClass(VALIDATION_ERROR_CLASS);
};

export const customSelectValidationSuccess = element => {
  $(element)
    .parents('.form-group')
    .find('.btn.dropdown-toggle')
    .removeClass(VALIDATION_ERROR_CLASS);
};

$('select').on('changed.bs.select', (event, clickedIndex, isSelected, previousValue) => {
  if (event.currentTarget.value !== '') {
    $(event.currentTarget)
      .parents('.form-group')
      .find('.bootstrap-select-placeholder')
      .addClass('has-content');
    $(event.currentTarget)
      .parents('.form-group')
      .find('.btn.dropdown-toggle')
      .removeClass(VALIDATION_ERROR_CLASS)
      .addClass(VALIDATION_SUCCESS_CLASS);
  } else {
    $(event.currentTarget)
      .parents('.form-group')
      .find('.bootstrap-select-placeholder')
      .removeClass('has-content');
    $(event.currentTarget)
      .parents('.form-group')
      .find('.btn.dropdown-toggle')
      .removeClass(VALIDATION_SUCCESS_CLASS);
  }
  closeTooltip(event.currentTarget);
});

$('select').on('show.bs.select', (event, clickedIndex, isSelected, previousValue) => {
  closeTooltip(event.currentTarget);
});

$(`
  #modal-change-withdrawal, 
  #modal-2fa-verification,
  #modal-google-authenticator,
  #modal-change-email,
  #modal-change-phone`).on('hide.bs.modal show.bs.modal', e => {
  $('body')
    .find('input')
    .each(function(index) {
      $(this).removeClass(VALIDATION_SUCCESS_CLASS);
      $(this).removeClass(VALIDATION_ERROR_CLASS);
      closeTooltip(this);
    });
});

jQuery.extend(jQuery.validator.messages, {
  required: `
    This field is obligatory. Please fill it in to continue.
  `,
});

initTooltip();
