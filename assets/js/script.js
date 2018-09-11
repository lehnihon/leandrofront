(function($) {
  new WOW().init();
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("menu");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  //Smooth scrolling when click to nav
  $('nav a').click(function (e) {
      e.preventDefault();
      var curLink = $(this);
      var scrollPoint = $(curLink.attr('href')).position().top;
      $('body,html').animate({
          scrollTop: scrollPoint+600
      }, 1000);
  })

  $(window).scroll(function () {
      onScrollHandle();
  });

  function onScrollHandle() {

      //Get current scroll position
      var currentScrollPos = $(document).scrollTop();
      var scrollHeight = $(document).height();

      //Iterate through all node
      $('nav a').each(function () {

          var curLink = $(this);
          var refElem = $(curLink.attr('href'));
          //Compare the value of current position and the every section position in each scroll
          if (refElem.position().top <= currentScrollPos && refElem.position().top + refElem.height() > currentScrollPos) {
              //Remove class active in all nav
              $('nav a').removeClass("active");
              //Add class active
              curLink.addClass("active");
          }
          else {
              curLink.removeClass("active");
          }

      });

      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('nav a').removeClass("active");
        $('.b-link').addClass("active");
      }
  }
})(jQuery);
