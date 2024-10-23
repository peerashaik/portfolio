$(document).ready(function() {
    'use strict';

    //url re-wrtite
    var url = window.location.href;
    url = url.split('.html')[0];
    //url = url.substring(0, url.lastIndexOf("."));
    window.history.replaceState( null, null, url );

    //copyright year
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('date').innerHTML = year;

    //mobile menu nav
    $('.navbar-toggler').click(function() {
        $(this).toggleClass('open');
        $('.navbar').toggleClass('mobileNav');

        if($(this).hasClass('open')) {
            $('.menu').addClass('');
        } else {
            $('.menu').removeClass('slideout');
        }
    });

    //right click disbaled
    document.addEventListener('contextmenu', event => event.preventDefault());

    window.addEventListener('scroll', e => {
        //scrolling lines
        // var scrolLine = $(window).scrollTop();

        // if (scrolLine >= 250 && scrolLine <= 450) {
        //     $('#lines > div').addClass('full');
        // } else {
        //     $('#lines > div').removeClass('full');
        // }

        //smooth back to top
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

//site visitor counter
var counterContainer = document.querySelector(".website-counter");
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
