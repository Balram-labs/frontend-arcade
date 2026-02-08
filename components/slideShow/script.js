const captions = document.getElementsByClassName("caption");
console.log(captions);
let slideNumber = 1;
function currentSlider(n) {
  slideNumber = n;
  slideShower(slideNumber);
  
}

function plus(n) {
  slideNumber += n;
  slideShower(slideNumber);

}

function slideShower(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("num");
  //
  if (n < 1) {
    slideNumber = slides.length;
  }
  if (n > slides.length) {
    slideNumber = 1;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideNumber - 1].style.display = "block";
  dots[slideNumber - 1].classList.add("active");
  captions[slideNumber -1].classList.add("anima");
  
}
setInterval(() => {
  plus(1);
}, 5000);
slideShower(slideNumber);