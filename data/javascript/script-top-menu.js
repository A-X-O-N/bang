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
        
        /*TopLine.style.marginBottom = "50px";*/ /* working firefox; NOT WORKING chrome, ms edge */
        TopLine.classList.add("top-head-line-sticky"); /* working firefox; NOT WORKING chrome, ms edge */
        document.getElementById("test-scroll2").innerHTML = "Stick margin: " + TopNav.offsetHeight;
        
        TopNav.classList.add("top-nav-background-sticky");
        TopDeco.classList.add("top-head-decoration-sticky");
        
        MenuLogo.classList.remove("logo-white-not-sticky");
        MenuNumber.classList.remove("menu-number-not-sticky");
        
      }
    else
      {
        /* not sticky menu */
        
        /*TopLine.style.marginBottom = "0px";*/ /* working firefox, chrome, ms edge */
        TopLine.classList.remove("top-head-line-sticky"); /* working firefox, chrome, ms edge */
        document.getElementById("test-scroll2").innerHTML = "Stick margin: " + TopLine.style.marginBottom;
        
        TopNav.classList.remove("top-nav-background-sticky");
        TopDeco.classList.remove("top-head-decoration-sticky");
        
        MenuLogo.classList.add("logo-white-not-sticky");
        MenuNumber.classList.add("menu-number-not-sticky"); /* asi by se nemelo delat pokud je okno uzke ale zatim to funguje, popripade udelat menu javascriptem, 4 stavy a kontrolovat pri scrolovani a pri zmene sirky okna. Nebo zmenit sticky classy v media pro 900px*/
      }
  }