var TopWrapp = document.getElementById("top-head-wrapper");
var TopNav = document.getElementById("top-nav-background");
var TopLine = document.getElementById("top-head-line");
var TopDeco = document.getElementById("top-head-decoration");
var MenuLogo = document.getElementById("logo-white");
var MenuNumber = document.getElementById("menu-number");

var Treshold = 0;

window.onscroll = function()
  {
    Treshold = TopWrapp.offsetHeight + TopLine.offsetHeight;
    
    MakeMenuStick();
    
    document.getElementById("test-scroll").innerHTML = "Stick treshold: " + Treshold;
  };

function MakeMenuStick()
  {
    if (window.pageYOffset >= Treshold)
      {
        /* sticky menu */
        
        TopNav.classList.add("top-nav-background-sticky");
        TopDeco.classList.add("top-head-decoration-sticky");
        
        MenuLogo.classList.remove("logo-white-not-sticky");
        MenuNumber.classList.remove("menu-number-not-sticky");
        
      }
    else
      {
        /* not sticky menu */
        
        TopNav.classList.remove("top-nav-background-sticky");
        TopDeco.classList.remove("top-head-decoration-sticky");
        
        MenuLogo.classList.add("logo-white-not-sticky");
        MenuNumber.classList.add("menu-number-not-sticky"); /* this works if class does NOT override id property values */
      }
  }