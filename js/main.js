/**************
* Brian Burns *
*   main.js   *
* brnbrns.co  *
**************/

$(document).ready(function() {
  // Scroll down to About on arrow click
  $('.downarrow').click(function() {
    $('html, body').animate({
      scrollTop: ($('.about').offset().top) - 150
    }, 750);
  });

  // Persistent navbar when scrolling down the page
  $(window).on('scroll', function() {
    var yScrollPos = window.pageYOffset;
    var scrollPosTest = 150;

    if (yScrollPos > scrollPosTest) {
      $('.navbar').fadeIn();
    } else {
      $('.navbar').fadeOut();
    }
  });
});
