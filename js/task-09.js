function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBgColor() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector('.color').textContent = color;
};

const btn = document.querySelector('.change-color');
addEventListener('click', changeBgColor);
