/* eslint-disable func-names */
/**
 * @module registerForm
 * @author donrus
 * @description validation and form submit
 */
(function($) {
  $("#verificationForm").validate({
    errorPlacement(error, element) {
      if($(error).text() == '') {
        return
      }
      if (element.attr('id') === 'verificationDate'){
        var tooltipsterContent = `
        <p class="tooltipster-content__caption">Error</p>
        <p class="tooltipster-content__description">${$(error).html()}</p>
      `;
      }
      else {
        var tooltipsterContent = `
          <p class="tooltipster-content__caption">This field is obligatory</p>
          <p class="tooltipster-content__description">Please fill it in to continue</p>
        `;        
      }
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
      date: {
        required: true,
        ageEighteen: true,
      }
    },
    errorClass: "validation-error",
    submitHandler(form) { return false;}
  });

  // initialize tooltipster on text input elements
  $('#verificationForm .error-icon').tooltipster({
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

  $("#verificationForm input").on("focusout", event => {
    if (event.currentTarget.value !== "") {
      $(event.currentTarget).next().addClass("has-content");
    } else {
      $(event.currentTarget).next().removeClass("has-content");
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

$('#verificationSex, #verificationCountry, #verificationOccupation, #verificationSource').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
  if (event.currentTarget.value !== "") {
    $(this).parents('.form-group').find('.bootstrap-select-placeholder').addClass("has-content");
  } else {
    $(this).parents('.form-group').find('.bootstrap-select-placeholder').removeClass("has-content");
  } 
  $(event.currentTarget).parents('.form-group').find('.error-icon').addClass('d-none');
  $(event.currentTarget).parents('.form-group').find('.error-icon').tooltipster("close");
});

function getCountryCodes(url) {
  const d = $.Deferred();
  $.getJSON( url, function( data ) {

    var items = [];
    $.each( data, function( key, val ) {
      var optionHtml =         `<option 
        value="${val.code}"  
        >${val.name}</option>`;
      items.push( optionHtml );
    });
    $('#verificationCountry').html(items.join( "" ));
    d.resolve();
  });
  return d;
}


function initBootstrapSelect() {
  if ($('#verificationCountry').length > 0) {
    $('#verificationCountry').each(function () {
      $(this).selectpicker({
        dropupAuto: false,
        size: 5,
        liveSearch: true,
        title: ' '
      });
    });
  }
}
