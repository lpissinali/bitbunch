$(".form-group input").each( function(index) {
  if ($(this)[0].value !== "") {
    $(this).next().addClass("has-content");
  } else {
    $(this).next().removeClass("has-content");
  }
});