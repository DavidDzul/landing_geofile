$(document).ready(function(){
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
  stopOnHover : true,
  slideSpeed : 500,
  paginationSpeed : 800,
  rewindSpeed : 1000,
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




});




