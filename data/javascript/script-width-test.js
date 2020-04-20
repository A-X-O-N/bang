function DisplayWindowWidth()
  {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    
    document.getElementById("test-width").innerHTML = "Width: " + w;
  }

window.addEventListener("resize", DisplayWindowWidth);

DisplayWindowWidth();