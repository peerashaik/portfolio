window.addEventListener('load', function() {
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

    //right click disbaled
    document.addEventListener('contextmenu', event => event.preventDefault());

    window.addEventListener('scroll', e => {
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

// $(document).ready(function() {
//     $('.navbar-toggler').click(function() {
//         $('.menu-btn').toggleClass('open');
//         $('.navbar-collapse').toggleClass('open');
//     });

//     $('.navbar-nav .nav-link').click(function() {
//         $('.menu-btn').removeClass('open');
//         $('.navbar-collapse').removeClass('open');
//     });
// });

//site visitor counter
// var counterContainer = document.querySelector(".website-counter");
// var visitCount = localStorage.getItem("page_view");

// // Check if page_view entry is present
// if (visitCount) {
//     visitCount = Number(visitCount) + 1;
//     localStorage.setItem("page_view", visitCount);
// } else {
//     visitCount = 1;
//     localStorage.setItem("page_view", 1);
// }

// counterContainer.innerHTML = visitCount;
