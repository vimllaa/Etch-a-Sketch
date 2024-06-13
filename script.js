const container = document.getElementById("grid-container");
const body = document.querySelector("body");

const sliderElement = document.getElementById("mySlider");
const pixelAmountDisplay = document.getElementById("pixelAmountDisplay");
const resetButton = document.querySelector("button");

let isMouseDown = false;

function createGrid(value) {
  container.innerHTML = "";
  let gridSize = squareTo(value);
  const divSize = `calc(70vh / ${value})`;

  for (let i = 0; i < gridSize; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("col");
    gridDiv.style.width = divSize;
    gridDiv.style.height = divSize;
    container.appendChild(gridDiv);
  }

  const newGridDivs = document.querySelectorAll(".col");
  newGridDivs.forEach((newDiv) => {
    newDiv.addEventListener("mousedown", changeBackgroundColor);
    newDiv.addEventListener("mouseover", function (event) {
      if (isMouseDown) {
        changeBackgroundColor(event);
      }
    });
  });

  document.addEventListener("mouseup", function () {
    isMouseDown = false;
  });
}

resetButton.addEventListener("click", function () {
  initializeGrid();
});

function initializeGrid() {
  let currentSlideValue = sliderElement.value;
  pixelAmountDisplay.textContent = currentSlideValue;
  createGrid(currentSlideValue);
}

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor(event) {
  event.target.style.backgroundColor = getRandomRgbColor();
}

function squareTo(value) {
  const divAmount = value * value;
  return divAmount;
}

sliderElement.addEventListener("change", function () {
  currentSlideValue = sliderElement.value;
  pixelAmountDisplay.textContent = currentSlideValue;
  createGrid(currentSlideValue);
});

container.addEventListener("mousedown", function () {
  isMouseDown = true;
});

initializeGrid();

function setBackgroundPixels() {
  for (let i = 0; i < 400; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("col");

    body.appendChild(gridDiv);
  }
}
setBackgroundPixels();
