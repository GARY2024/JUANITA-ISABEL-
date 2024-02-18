"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const SiButton = document.querySelector(".btn--Si");
const NoButton = document.querySelector(".btn--No");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let NoCount = 0;

SiButton.addEventListener("click", handleSiClick);

NoButton.addEventListener("click", function () {
  if (play) {
    NoCount++;
    const imageIndex = Math.min(NoCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeSiButton();
    updateNoButtonText();
    if (NoCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleSiClick() {
  titleElement.innerHTML = "Por favor!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("Si");
}

function resizeSiButton() {
  const computedStyle = window.getComputedStyle(SiButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  SiButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(NoCount) {
  const messages = [
    "No",
    "Estas segura?",
    "Por favor isa",
    "Aver si funciona esta programacion :(",
    "Va ser divertido un lugar elegante",
    " te puse michis y vamos de compras...",
  ];

  const messageIndex = Math.min(NoCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  NoButton.innerHTML = generateMessage(NoCount);
}
