function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className == "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
  }

$(document).ready(function() {
    $('.header__navbar-toggle').click(function() {
        $('nav').slideToggle();
    })
})

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}