$(document).ready(function() {

    //mobile menu nav
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('open');
        $('.sticky-top').toggleClass('mobileNav');
    });

    //copyright year
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('date').innerHTML = year;

    var counterContainer = document.querySelector(".user-count");
    var visitCount = localStorage.getItem("page_view");

    // Check if page_view entry is present
    if (visitCount) {
      visitCount = Number(visitCount) + 1;
      localStorage.setItem("page_view", visitCount);
    } else {
      visitCount = 1;
      localStorage.setItem("page_view", 1);
    }
    counterContainer.innerHTML = visitCount;

})