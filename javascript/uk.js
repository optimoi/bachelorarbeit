window.onload = function(){

  var switcher        = document.getElementById("switch");
  var structureHeader = document.getElementById("structure-header");
  var structureMain   = document.getElementById("structure-main");
  var narrowHeader    = document.getElementById("narrow-header");
  var narrowMain      = document.getElementById("narrow-main");


  var counter = 1;

  switcher.onclick = function () {

  if (counter % 2 !== 1) {
    narrowHeader.style.display = "none";
    narrowMain.style.display = "none";
    structureHeader.style.display = "block";
    structureMain.style.display = "block";
    counter++;
  }
    else {
      narrowHeader.style.display = "block";
      narrowMain.style.display = "block";
      structureHeader.style.display = "none";
      structureMain.style.display = "none";
      counter++;
    }
  }

}
