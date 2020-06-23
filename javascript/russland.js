window.onload = function(){

  var switcher = document.getElementById("switch");
  var topbanner = document.getElementById("banner-top");
  var ads = document.getElementsByClassName("ad");

  var counter = 2;

  switcher.onclick = function () {

  if (counter % 2 !== 1) {
    topbanner.style.display = "none";
    for (i = 0; i < ads.length; i++) {
      ads[i].style.opacity= "0";
    }
    counter++;
  }
    else {
      topbanner.style.display = "block";
      for (i = 0; i < ads.length; i++) {
        ads[i].style.opacity = "1";
      }
      counter++;
    }
  }

}
