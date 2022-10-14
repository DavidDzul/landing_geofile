$(document).ready(function () {

  $("a").on('click', function (event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    center: true,
    navText: [
      "<span class='mdi mdi-left mdi-apple-keyboard-control' style='background-color: #f84f01'></span>",
      "<span class='mdi mdi-right mdi-apple-keyboard-control' style='background-color: #f84f01'></span>"
    ],
    autoplay: false,
    autoplayHoverPause: false,
    stopOnHover: true,
    slideSpeed: 500,
    paginationSpeed: 800,
    rewindSpeed: 1000,
    singleItem: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }

  });

  $(window).on("load", function () {
    $(window).scroll(function () {
      $(".fade").each(function () {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({ 'opacity': '1' }, 900);
        }
      });
    }).scroll();
  });

});




