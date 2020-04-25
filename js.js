window.onload = function(){

var slideIndex = 0;
var slideIndex1 = 0;

showSlides1();
showSlides();



function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
   dots[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}

function showSlides1() {
  var i1;
  var slides1 = document.getElementsByClassName("mySlides1");


  for (i1 = 0; i1 < slides1.length; i1++) {
    slides1[i1].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {
    slideIndex1 = 1
  }
  slides1[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 5000); // Change image every 2 seconds
}



  var switcher = document.getElementById("switcher");
  var banner = document.getElementById("werbebanner-top");
  var banner2 = document.getElementById("werbebanner-top2");
  var counter = 2;
  switcher.onclick = function () {

  var switchelements = document.getElementsByClassName("switch");


  if (counter % 2 !== 1) {
    hideSlider();
    banner.style.display = "block";
    banner2.style.display = "block";
    counter++;
  }
    else {
      showSlider();
      counter++;
      banner.style.display = "none"
      banner2.style.display = "none"

    }
function hideSlider() {
    for (i = 0; i < switchelements.length; i++) {
      switchelements[i].style.display = "none";

    }

  }

function showSlider() {
    for (i = 0; i < switchelements.length; i++) {
        switchelements[i].style.display = "block";

      }

    }
  }
}
