$(document).on('click', '.body-container-wrapper a[href^="#"]', (function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 700);
}));

$(document).ready((function() {
  $(window).scroll((function() {
      $(this).scrollTop() > 0 ? $(".header-container-wrapper").addClass("custhdr") : $(".header-container-wrapper").removeClass("custhdr");
  }));
}));