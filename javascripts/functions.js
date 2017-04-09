/* Navbar Transitions*/
$(window).scroll(function() {
  if ($(document).scrollTop() > $(window).height()-35) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

/* Smooth Scrolling */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Main Container BG transition */
(function() {
    var imgId = 0;
    var numOfImages = 4; // Change this to the number of background images
    window.setInterval(function() {
        $('#carousel-item' + imgId).addClass('fade');
        imgId = (imgId+1) % numOfImages;
        $('#carousel-item' + imgId).removeClass('fade');
    }, 10 * 1000);
})();

$(document).ready(function() {
  /* Lazy Load */
  $('.img-item').lazyLoadXT();
  /* Mobile Nav-bar */
  $('#expand-btn').click(function() {
    if($('nav').hasClass('expand')) {
      $('nav').removeClass('expand');
    } else {
      $('nav').addClass('expand');
    }
  });
  $('#photo-link').click(function() {
    if($('nav').hasClass('expand')) {
      $('nav').removeClass('expand');
    }
  });
  $('#webdev-link').click(function() {
    if($('nav').hasClass('expand')) {
      $('nav').removeClass('expand');
    }
  });
  $('#gd-link').click(function() {
    if($('nav').hasClass('expand')) {
      $('nav').removeClass('expand');
    }
  });
  /* Other Mobile */
  if($(window).width() > 1099) {
    for(var i = 0; i < 4; i++) {
      $('#carousel-item' + i).css('left', '');
    }
  }
});
