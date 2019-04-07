/**************
* Brian Burns *
*   main.js   *
* brnbrns.co  *
**************/

var URL = 'https://x6nqykeske.execute-api.us-east-1.amazonaws.com/production/contact-me';

$(document).ready(function() {
  // Redirect http
  if (location.protocol == 'http:') {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }

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
  
  $('#submitBtn').click(function(e) {
    e.preventDefault();
	
	var name = $('#name').val();
	var email = $('#email').val();
	var message = $('#message').val();
	
	if (!name || !email || !message) {
	  alert('Please fill out all fields');
	  return;
	}
	
	var reEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reEmail.test(email)) {
	  alert ('Please enter a valid email address');
      return;
    }
	
	var req = {
	  name: name,
	  email: email,
	  message: message
	};
	
	$.ajax({
      type: "POST",
      url : URL,
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(req),
      success: function () {
        alert("Thank you for your message!");
        $('#contactForm').reset();
      }, error: function () {
        alert("Something went wrong. Please try to send your message again later, or contact me by email directly.");
      }
	});
  });
});
