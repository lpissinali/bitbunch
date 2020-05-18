import {
  VALIDATION_SUCCESS_CLASS,
  VALIDATION_ERROR_CLASS,
  showTooltip,
  closeTooltip,
  initBootstrapSelect,
  customSelectValidationError,
  customSelectValidationSuccess,
} from './commonForm';

$('#verificationForm').validate({
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
    date: {
      required: true,
      ageEighteen: true,
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
        value="${val.code}"  
        >${val.name}</option>`;
      items.push(optionHtml);
    });
    $('#verificationCountry').html(items.join(''));
    d.resolve();
  });
  return d;
}

// /* eslint-disable func-names */
// /**
//  * @module registerForm
//  * @author donrus
//  * @description validation and form submit
//  */
// (function($) {
//   $("#verificationForm").validate({
//     errorPlacement(error, element) {
//       if($(error).text() == '') {
//         return
//       }
//       if (element.attr('id') === 'verificationDate'){
//         var tooltipsterContent = `
//         <p class="tooltipster-content__caption">Error</p>
//         <p class="tooltipster-content__description">${$(error).html()}</p>
//       `;
//       }
//       else {
//         var tooltipsterContent = `
//           <p class="tooltipster-content__caption">This field is obligatory</p>
//           <p class="tooltipster-content__description">Please fill it in to continue</p>
//         `;
//       }
//       $(element).removeClass('validation-success');
//       $(element).next().next('.error-icon').removeClass('d-none');
//       $(element).next().next('.error-icon').tooltipster("content", tooltipsterContent);
//       $(element).next().next('.error-icon').tooltipster("open");
//       //validation for select
//       if ($(element)[0].tagName == 'SELECT') {
//         $(element).parents('.form-group').find('.error-icon').removeClass('d-none');
//         $(element).parents('.form-group').find('.error-icon').tooltipster("content", tooltipsterContent);
//         $(element).parents('.form-group').find('.error-icon').tooltipster("open");
//       }
//     },
//     success(label, element) {
//       $(element).next().next('.error-icon').addClass('d-none');
//       $(element).next().next('.error-icon').tooltipster("close");
//       $(element).addClass('validation-success');
//     },
//     rules: {
//       date: {
//         required: true,
//         ageEighteen: true,
//       }
//     },
//     errorClass: "validation-error",
//     submitHandler(form) { return false;}
//   });

//   $("#verificationForm input").on("focusout", event => {
//     if (event.currentTarget.value !== "") {
//       $(event.currentTarget).next().addClass("has-content");
//     } else {
//       $(event.currentTarget).next().removeClass("has-content");
//     }
//   });

//   $.when(getCountryCodes('documents/CountryCodes.json'))
//   .done(function () {
//     initBootstrapSelect();
//   })
//   .fail(function (){
//     initBootstrapSelect();
//   });

// })(jQuery);

// $('#verificationSex, #verificationCountry, #verificationOccupation, #verificationSource').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
//   if (event.currentTarget.value !== "") {
//     $(this).parents('.form-group').find('.bootstrap-select-placeholder').addClass("has-content");
//   } else {
//     $(this).parents('.form-group').find('.bootstrap-select-placeholder').removeClass("has-content");
//   }
//   $(event.currentTarget).parents('.form-group').find('.error-icon').addClass('d-none');
//   $(event.currentTarget).parents('.form-group').find('.error-icon').tooltipster("close");
// });

// function getCountryCodes(url) {
//   const d = $.Deferred();
//   $.getJSON( url, function( data ) {

//     var items = [];
//     $.each( data, function( key, val ) {
//       var optionHtml =         `<option
//         value="${val.code}"
//         >${val.name}</option>`;
//       items.push( optionHtml );
//     });
//     $('#verificationCountry').html(items.join( "" ));
//     d.resolve();
//   });
//   return d;
// }

// function initBootstrapSelect() {
//   if ($('#verificationCountry').length > 0) {
//     $('#verificationCountry').each(function () {
//       $(this).selectpicker({
//         dropupAuto: false,
//         size: 5,
//         liveSearch: true,
//         title: ' '
//       });
//     });
//   }
// }
