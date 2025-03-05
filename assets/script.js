// Données des slides (déjà fournies)
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsList = document.querySelector(".dots");

let selectedSlide = 0;

const modifyBanner = () => {
  const slide = slides[selectedSlide];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  bannerText.innerHTML = slide.tagLine;
};

const dots = () => {
  slides.forEach((a, index) => {
    const dotContainer = document.createElement("div");
    dotContainer.classList.add("dot");
    dotsList.appendChild(dotContainer);
  });
};

const right = document
  .querySelector(".arrow_right > img")
  .addEventListener("click", () => {
    if (selectedSlide < slides.length - 1) {
      selectedSlide++;
    } else {
      selectedSlide = 0;
    }
    modifyBanner();
  });

const left = document
  .querySelector(".arrow_left > img")
  .addEventListener("click", () => {
    if (selectedSlide > 0) {
      selectedSlide--;
    } else {
      selectedSlide = slides.length - 1;
    }
    modifyBanner();
  });

dots();
modifyBanner();
