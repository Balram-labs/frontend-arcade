const captions = document.getElementsByClassName("caption");

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
  captions[slideNumber - 1].classList.add("anima");
}
const slideInterval = setInterval(() => {
  plus(1);
}, 6000);
slideShower(slideNumber);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    slideNumber += 1;
  }
  if (e.key === "ArrowLeft") {
    slideNumber -= 1; 
  }
 slideShower(slideNumber);
});
