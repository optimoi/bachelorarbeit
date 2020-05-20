window.onload = function(){

  var switchbutton1 = document.getElementById("scrollbar-button-1");
  var switchbutton2 = document.getElementById("scrollbar-button-2");
  var scrollbar1 = document.getElementById("scrollbar-1");
  var scrollbar2 = document.getElementById("scrollbar-2");

  switchbutton2.onclick = function () {


    scrollbar1.style.display = "none";
    scrollbar2.style.display = "block";
    switchbutton1.style.backgroundColor = "#FFFFFF";
    switchbutton1.style.color = "#333333";
    switchbutton2.style.backgroundColor = "#1163A6";
    switchbutton2.style.color = "#FFFFFF";

  }

    switchbutton1.onclick = function () {
    scrollbar2.style.display = "none";
    scrollbar1.style.display = "block";
    switchbutton2.style.backgroundColor = "#FFFFFF";
    switchbutton2.style.color = "#333333";
    switchbutton1.style.backgroundColor = "#1163A6";
    switchbutton1.style.color = "#FFFFFF";

    }
  
}
