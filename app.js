$(document).ready(function() {
    'use strict';

    //copyright year
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('date').innerHTML = year;

    //mobile menu nav
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('open');
        $('.sticky-top').toggleClass('mobileNav');
    });

    $(window).scroll(function() {
        var x = $(window).scrollTop();
        if (x >= 200 && x <= 800) {
            $('#lines > div').addClass('full');
        } else {
            $('#lines > div').removeClass('full');
        }
    });


});
