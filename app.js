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

    function userCounter() {
        var counter = document.getElementById("user-count");
        var count = 0;
        count = parseInt(counter.innerHTML);
        count = count + 1;
        counter.innerHTML = count;
    }
    window.onload = userCounter;
})