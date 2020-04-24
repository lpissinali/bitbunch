/* eslint-disable func-names */
/**
 * @module registerForm
 * @author donrus
 * @description validation and form submit
 */
(function($) {
  $("#userdataForm").validate({
    errorPlacement(error, element) {
      if($(error).text() == '') {
        return
      }
      var tooltipsterContent = `
        <p class="tooltipster-content__caption">This field is obligatory</p>
        <p class="tooltipster-content__description">Please fill it in to continue</p>
      `;
      $(element).removeClass('validation-success');
      $(element).next().next('.error-icon').removeClass('d-none');
      $(element).next().next('.error-icon').tooltipster("content", tooltipsterContent);
      $(element).next().next('.error-icon').tooltipster("open");
      //validation for select
      if ($(element)[0].tagName == 'SELECT') {
        $(element).parents('.form-group').find('.error-icon').removeClass('d-none');
        $(element).parents('.form-group').find('.error-icon').tooltipster("content", tooltipsterContent);
        $(element).parents('.form-group').find('.error-icon').tooltipster("open");
      }
    },
    success(label, element) {
      $(element).next().next('.error-icon').addClass('d-none');
      $(element).next().next('.error-icon').tooltipster("close");
      $(element).addClass('validation-success');
    },
    rules: {
      country: {
        required: true
      },
    },
    errorClass: "validation-error",
    submitHandler(form) { return false;}
  });

  // initialize tooltipster on text input elements
  $('#userdataForm .error-icon').tooltipster({
    trigger: 'custom',
    onlyOne: false,
    position: 'top',
    theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
    functionPosition: function(instance, helper, position){
      if(window.innerWidth < 460) {
        position.coord.left += 45;
      }
      if(window.innerWidth < 770) {
        position.coord.left -= 60;
      }
      else if(window.innerWidth < 1030) {
        position.coord.left -= 43;
      }
      else if(window.innerWidth < 1300) {
        position.coord.left -= 53;
      }       
      else if(window.innerWidth < 1370) {
        position.coord.left -= 56;
      } 
      else {
        position.coord.left -= 60;
      }
      
      return position;
    },
    contentAsHTML: true,
  });

  $(".form-group input").on("focusout", event => {
    if (event.currentTarget.value !== "") {
      $(event.currentTarget).next().addClass("has-content");
    } else {
      $(event.currentTarget).next().removeClass("has-content");
      //$(event.currentTarget).next().removeClass("focused");
    }
  });

  $.when(getCountryCodes('documents/CountryCodes.json'))
  .done(function () {
    initBootstrapSelect();
  })
  .fail(function (){
    initBootstrapSelect();  
  });

})(jQuery);


function getCountryCodes(url) {
  const d = $.Deferred();
  $.getJSON( url, function( data ) {

    var items = [];
    $.each( data, function( key, val ) {
      var optionHtml =         `<option 
        country-code="${val.code}"
        country-dial-code="${val.dial_code}"
        data-content="
          <span style='display:flex; justify-content: space-between;'>
            <span>${val.name}</span>
            <span>${val.dial_code}</span>
          </span>"
        value="${val.code}"  
        >${val.code}</option>`;
      items.push( optionHtml );
    });
    $('#countrySelector').html(items.join( "" ));
    d.resolve();
  });
  return d;
}


function initBootstrapSelect() {
  //custom selects
  $.fn.selectpicker.Constructor.DEFAULTS.dropupAuto = false;
  if ($('select').length > 0) {
    $('select').each(function () {
      $(this).selectpicker({
        dropupAuto: false,
        size: 5,
        liveSearch: true,
        title: ' '
      });
    });
  }
  $('#countrySelector').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    if (event.currentTarget.value !== "") {
      $('.bootstrap-select-placeholder').addClass("has-content");
      var $activeOption = $(event.currentTarget).find(`option[country-code="${event.currentTarget.value}"]`);
      $('#registerPhonecode').val($activeOption.attr('country-dial-code'));
      $('#registerPhonecode').next().addClass("has-content");
    } else {
      $('.bootstrap-select-placeholder').removeClass("has-content");
    } 
    $(event.currentTarget).parents('.form-group').find('.error-icon').addClass('d-none');
    $(event.currentTarget).parents('.form-group').find('.error-icon').tooltipster("close");
  });
}
