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

const arrowLeft = document.querySelector(".arrow_left > img");
const arrowRight = document.querySelector(".arrow_right > img");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsList = document.querySelector(".dots");

let selectedSlide = 0;

if (!bannerImg || !bannerText || !dotsList) {
  throw new Error(
    "Erreur : Au moins un des éléments suivants est manquant : bannerImg, bannerText, dotsList."
  );
}

const modifyBanner = () => {
  const slide = slides[selectedSlide];
  if (bannerImg instanceof HTMLImageElement) {
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  }
  bannerText.innerHTML = slide.tagLine;

  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, index) => {
    if (index === selectedSlide) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
};

const dots = () => {
  slides.forEach((a, index) => {
    const dotContainer = document.createElement("div");
    dotContainer.classList.add("dot");
    if (index === selectedSlide) {
      dotContainer.classList.add("dot_selected");
    }
    dotsList.appendChild(dotContainer);
  });
};

const arrowBtn = () => {

  if (!arrowLeft || !arrowRight) {
    throw new Error("Erreur: il manque une arrow");
  }

  arrowRight.addEventListener("click", () => {
    if (selectedSlide < slides.length - 1) {
      selectedSlide++;
    } else {
      selectedSlide = 0;
    }
    modifyBanner();
  });
  
  arrowLeft.addEventListener("click", () => {
    if (selectedSlide > 0) {
      selectedSlide--;
    } else {
      selectedSlide = slides.length - 1;
    }
    modifyBanner();
  });
}

arrowBtn()
dots();
modifyBanner();
