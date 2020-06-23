window.onload = function(){

  var switcher = document.getElementById("switcher");
  var topbanner = document.getElementById("volle-breite-grau");
  var navi = document.getElementById("volle-breite-blau");
  var navcolor = document.getElementsByClassName("nav-a-color");
  var platzhalter = document.getElementById("platzhalter");
  var counter = 2;

  switcher.onclick = function () {

  if (counter % 2 !== 1) {
    topbanner.style.display = "none";
    navi.style.backgroundColor = "#efefef";
    for (i = 0; i < navcolor.length; i++) {
      navcolor[i].style.color = "#121212";
    }
    counter++;
  }
    else {
      topbanner.style.display = "block";
      navi.style.backgroundColor = "#003E70";
      for (i = 0; i < navcolor.length; i++) {
        navcolor[i].style.color = "#FFFFFF";
      }
      counter++;
    }
  }

}
