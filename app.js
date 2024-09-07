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


    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            document.getElementById("ajax-load").innerHTML = this.responseText;
        }
        xhttp.open("GET", "https://www.w3schools.com/ajax_info.txt");
        xhttp.send();
    }
})