const container = document.getElementById("grid-container");

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor(event) {
  event.target.style.backgroundColor = getRandomRgbColor();
}

for (let i = 0; i < 256; i++) {
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("col");
  container.appendChild(gridDiv);
}

const gridDivs = document.querySelectorAll(".col");
gridDivs.forEach((div) => {
  div.addEventListener("mouseover", changeBackgroundColor);
});
