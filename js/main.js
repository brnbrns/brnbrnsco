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

  // Navbar home button
  $('.navbarHome').click(function() {
    $('html, body').animate({
      scrollTop: '0px'
    }, 750);
  });

  // Navbar about button
  $('.navbarAbout').click(function() {
    $('html, body').animate({
      scrollTop: ($('.about').offset().top) - 150
    }, 750);
  });

  // Navbar projects button
  $('.navbarProjects').click(function() {
    $('html, body').animate({
      scrollTop: ($('.projects').offset().top) - 25
    }, 750);
  });

  // Navbar skills button
  $('.navbarSkills').click(function() {
    $('html, body').animate({
      scrollTop: ($('.skills').offset().top) - 25
    }, 750);
  });

  // Navbar projects button
  $('.navbarContact').click(function() {
    $('html, body').animate({
      scrollTop: ($('.contact').offset().top) - 25
    }, 750);
  });
});
