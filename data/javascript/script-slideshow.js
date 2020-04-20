/* variables */

const Interval = 3000; /* value in miliseconds 1 s = 1000 */

var DisplayedSlide = 0;
var Timer;

/* functions */

function ShowNextSlide()
  {
    var i;
    var x = document.getElementsByClassName("slideshow-slide");
    var y = document.getElementsByClassName("slideshow-pagination-item");
    
    for (i = 0; i < x.length; i++)
	    {
        x[i].style.display = "none";
        y[i].classList.remove("slideshow-pagination-item-active");
      }
    
    DisplayedSlide++;
    
    if (DisplayedSlide > x.length)
		  {
		    DisplayedSlide = 1;
		  }    		  
    
    document.getElementById("test-slide").innerHTML = "DisplayedSlide: " + DisplayedSlide;
    x[DisplayedSlide-1].style.display = "block";
    y[DisplayedSlide-1].classList.add("slideshow-pagination-item-active");
  }

function SetSlide(n)
  {
    clearInterval(Timer);
    DisplayedSlide = n - 1;
    ShowNextSlide();
    Timer = setInterval(ShowNextSlide, Interval);
  }

/* script run */

ShowNextSlide();
Timer = setInterval(ShowNextSlide, Interval);