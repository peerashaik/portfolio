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
        alert(123);
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            document.getElementById("ajax-load").innerHTML = this.responseText;
        }
        xhttp.open("GET", "https://peerashaik.github.io/ui/shaiks-ajax.txt");
        xhttp.send();
    }
})