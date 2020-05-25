var moment = require('moment'); // require
(function($) {
  $.validator.addMethod(
    'checkEmail',
    function(value, element) {
      const re = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
      return this.optional(element) || re.test(String(value).toLowerCase());
    },
    'incorrect email'
  );
  $.validator.addMethod(
    'passwordStrength',
    function(value, element) {
      return /^[A-Za-z0-9.,:;|/+=`'"~!@#$%^&*(){}-]*$/.test(value) // consists of only these
                &&
                /[A-Za-z]/.test(value) // has a letter
                &&
                /[.,:;|/+=`'"~!@#$%^&*(){}-]/.test(value) // has a spec char
                &&
                /\d/.test(value); // has a digit
    },
    'Please use at least 8 digits, <br> a number and a symbol'
  );
  $.validator.addMethod(
    'ageEighteen',
    function(value, element) {
      var datePart = value.split('.');
      var eighteenYearsAgo = moment().subtract(18, "years");
      var birthday = moment(datePart[2] + datePart[1] + datePart[0]);
      if (!birthday.isValid()) {
          return false;    
      }
      else if (eighteenYearsAgo.isAfter(birthday)) {
          return true;   
      }
      else {
          return false;  
      }
    },
    'You must be 18 years or older'
  );  
  $.validator.addMethod(
    'tooOld',
    function(value, element) {
      var datePart = value.split('.');
      var tooOld = moment().subtract(100, "years");
      var birthday = moment(datePart[2] + datePart[1] + datePart[0]);
      if (!birthday.isValid()) {
          return false;    
      }
      else if (!tooOld.isAfter(birthday)) {
          return true;   
      }
      else {
          return false;  
      }
    },
    'You must be under 100 years old'
  );  
}(jQuery));
