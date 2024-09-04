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

    $(".view-works").on("click" ,function(){
        scrolled = scrolled - 300;
        $(".my-work-list").animate({
            scrollTop:  scrolled
        });
    });
})