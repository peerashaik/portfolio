window.addEventListener('load', function() {
  "use strict";

  //copyright year
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById('date').innerHTML = year;

  //right click disbaled
  document.addEventListener('contextmenu', event => event.preventDefault());
  
  //smooth back to top
  window.addEventListener('scroll', e => {
    const btnScrollToTop = document.querySelector(".back-to-top");
    btnScrollToTop.addEventListener("click", e => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
    btnScrollToTop.style.display = window.scrollY > 20 ? 'inline-block' : 'none';
  });

});

$(document).ready(function() {
  $('.nav-link').click(function() {
      $('.navToggle input').prop('checked', false);
    });
});