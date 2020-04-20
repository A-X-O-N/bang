var IconOn = document.getElementById("menu-icon-on");
var IconOff = document.getElementById("menu-icon-off");
var Menu = document.getElementById("top-nav-links");

function ShowMobileMenu()
  {
    IconOn.classList.remove("top-nav-links-on");
    IconOn.classList.add("top-nav-links-off");
    
    IconOff.classList.remove("top-nav-links-off");
    IconOff.classList.add("top-nav-links-on");
    
    Menu.classList.remove("top-nav-links-off");
    Menu.classList.add("top-nav-links-on");
  }

function HideMobileMenu()
  {
    IconOff.classList.remove("top-nav-links-on");
    IconOff.classList.add("top-nav-links-off");
    
    IconOn.classList.remove("top-nav-links-off");
    IconOn.classList.add("top-nav-links-on");
    
    Menu.classList.remove("top-nav-links-on");
    Menu.classList.add("top-nav-links-off");
  }