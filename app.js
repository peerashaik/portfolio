$(document).ready(function() {
    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if(scroll >= 100) {
    //         $('.navbar').addClass('sticky-top');
    //     } else {
    //         $('.navbar').removeClass('sticky-top');
    //     }
    // });

    $('.navbar-toggler').click(function(){
        $(this).toggleClass('open');
        $('.sticky-top').toggleClass('mobileNav');
    });

    //copyright year change
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('date').innerHTML = year;
})