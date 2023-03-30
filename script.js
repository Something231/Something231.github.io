const input = document.getElementById('text-input');
let previousColor = 'white';

input.addEventListener('input', (e) => {
  const currentColor = getRandomColor();
  document.body.style.backgroundColor = currentColor;
  previousColor = currentColor;
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    document.body.style.backgroundColor = previousColor;
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const fontSizeInput = document.getElementById('font-size');
const text = document.getElementById('text');

fontSizeInput.addEventListener('input', (e) => {
  const fontSize = e.target.value + 'px';
  text.style.fontSize = fontSize;
});