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
});