// cookies bar
function showCookiesBar() {
  console.log('1111111111111111111111');
  $('.cookies-bar').addClass('block');
  setTimeout(() => {
    $('.cookies-bar').addClass('up');
  }, 200);
}

function hideCookiesBar() {
  $('.cookies-bar').removeClass('up');
  setTimeout(() => {
    $('.cookies-bar').removeClass('block');
  }, 500);
}

if (document.querySelector('.cookies-bar')) {
  if (!localStorage.getItem('cookiesBar')) {
    let cookieBarEnabled = true;
    $(window).scroll(() => {
      if ($(window).scrollTop() > 100 && cookieBarEnabled === true) {
        showCookiesBar();
      }
    });

    $('.cookies-bar__close-button').click(() => {
      hideCookiesBar();
      cookieBarEnabled = false;
      localStorage.setItem('cookiesBar', 'closed');
    });
  }
}
