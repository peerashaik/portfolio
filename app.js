$(document).ready(function() {
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('open');
        $('.sticky-top').toggleClass('mobileNav');
    });

    //copyright year
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('date').innerHTML = year;
})