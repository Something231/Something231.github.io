const input = document.querySelector('input[type="text"]');
input.addEventListener('input', () => {
  document.body.style.backgroundColor = 'pink';
});
const triangle = document.getElementById('triangle');
document.addEventListener('mousemove', (e) => {
  triangle.style.left = e.pageX + 'px';
  triangle.style.top = e.pageY + 'px';
});