const color1 = document.getElementById('color1');
const body = document.querySelector('body');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');
const generateBtn = document.getElementById('generate');
const refreshBtn = document.getElementById('refresh');
const output = document.querySelector('.output');
const cssOutput = document.getElementById('css-output');
const copyBtn = document.getElementById('copy');

function generateGradient() {
  const gradient = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
  body.style.background = gradient;
  output.style.background = gradient;
  cssOutput.value = `background-image: ${gradient};`;
}

generateBtn.addEventListener('click', generateGradient);

refreshBtn.addEventListener('click', function() {
  color1.value = '#CD58D5';
  color2.value = '#5747D1';
  direction.value = 'to right';
  cssOutput.value = ' ';
  output.style.background = 'lightblue';
  body.style.background = 'lightblue';
//   generateGradient();
});

copyBtn.addEventListener('click', function() {
  cssOutput.select();
  cssOutput.setSelectionRange(0, 99999);
  document.execCommand('copy');
});