window.onload = function(){

  var switcher = document.getElementById("switcher");
  var topbanner = document.getElementById("volle-breite-grau");
  var platzhalter = document.getElementById("platzhalter");
  var counter = 2;

  switcher.onclick = function () {

  if (counter % 2 !== 1) {
    topbanner.style.display = "none";
    platzhalter.style.display = "block";
    counter++;
  }
    else {
      topbanner.style.display = "block"
      platzhalter.style.display = "none"
      counter++;
    }
  }

}
