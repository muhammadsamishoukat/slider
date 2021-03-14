var slides = document.getElementsByClassName("slides") ;
var ul = document.getElementById("dots");
var li = ul.getElementsByTagName("li");
var totalSlides = slides.length;
var i;
var index = 0 ;
console.log(li);
document.getElementById("nxt").addEventListener("click",function () {
    index += 1;
      goslides();  

});

document.getElementById("prev").addEventListener("click",function () {
    index -= 1;
      goslides();  

});

function goslides() {
    if (index > totalSlides - 1) {
        index = 0;
    }

    if (index < 0) {
        index = totalSlides - 1;
    }
   for (let i = 0; i < totalSlides; i++) {
      slides[i].classList.remove("active"); 
      li[i].classList.remove("active");      

   }
   slides[index].classList.add("active");
   li[index].classList.add("active");  

}

