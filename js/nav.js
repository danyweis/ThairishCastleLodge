var navSlide = function() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.navMenu');
  var navLinks = document.querySelectorAll('.navMenu div');

  // Toggle Nav
  burger.addEventListener('click', function() {
    nav.classList.toggle('navActive');

    //Animation for Links
    navLinks.forEach(function(link, index) {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards " + (index / 7 + 0.5) + "s";
      }
    });
    //Burger X
    burger.classList.toggle('toggle');
  });
};

navSlide();