function countdown() {          //defines the countdown function
    var hours = document.getElementById("hours").value;

function tick() {
    hours = hours - 1;
    timer.innerHTML = hours;
    setTimeout(tick, 1000);
if(hours == -1) {
    alert("Time's up!");
}
        }
   tick();


}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {            //defines the next/previous controls
  showSlides(slideIndex += n);
}

function currentSlide(n) {          //defines the thumbnail image controls
  showSlides(slideIndex = n);
}

function showSlides(n) {                //defines the function to show the slides
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}