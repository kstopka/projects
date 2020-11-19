const slider = [
  {
    img: "./images/img1.jpg",
  },
  {
    img: "./images/img2.jpg",
  },
  {
    img: "./images/img3.jpg",
  },
];
const img = document.querySelector(`.slider img`);
const previousSlide = document.querySelector(`.slider .previous`);
const nextSlide = document.querySelector(`.slider .next`);
let activeSlide = 0;
const time = 5000;

const changeSlide = () => {
  activeSlide++;
  if (activeSlide === slider.length) {
    activeSlide = 0;
  }

  img.src = slider[activeSlide].img;
};
let indexInterval = setInterval(changeSlide, time);

previousSlide.addEventListener(`click`, () => {
  clearInterval(indexInterval);
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slider.length - 1;
  }
  img.src = slider[activeSlide].img;

  indexInterval = setInterval(changeSlide, time);
});

nextSlide.addEventListener(`click`, () => {
  clearInterval(indexInterval);
  activeSlide++;

  if (activeSlide === slider.length) {
    activeSlide = 0;
  }

  img.src = slider[activeSlide].img;
  indexInterval = setInterval(changeSlide, time);
});
