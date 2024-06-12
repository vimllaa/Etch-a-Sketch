const container = document.getElementById("grid-container");

const sliderElement = document.getElementById("mySlider");
const pixelAmountDisplay = document.getElementById("pixelAmountDisplay");

function createGrid(value) {
  container.innerHTML = "";
  let gridSize = squareTo(value);
  const divSize = `calc(80vh / ${value})`;

  for (let i = 0; i < gridSize; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("col");
    gridDiv.style.width = divSize;
    gridDiv.style.height = divSize;
    container.appendChild(gridDiv);
  }

  const newGridDivs = document.querySelectorAll(".col");
  newGridDivs.forEach((newDiv) => {
    newDiv.addEventListener("mouseover", changeBackgroundColor);
  });
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

let currentSlideValue = sliderElement.value;
pixelAmountDisplay.textContent = currentSlideValue;
createGrid(currentSlideValue);

function squareTo(value) {
  const divAmount = value * value;
  return divAmount;
}

sliderElement.addEventListener("change", function () {
  currentSlideValue = sliderElement.value;
  pixelAmountDisplay.textContent = currentSlideValue;
  console.log("Current Value:", currentSlideValue);
  createGrid(currentSlideValue);
});

sliderElement.addEventListener("change", function () {
  currentSlideValue = sliderElement.value;
  pixelAmountDisplay.textContent = currentSlideValue;
  createGrid(currentSlideValue);
});
