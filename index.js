const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

const DELAY = 1000;
let intervalId = null;

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
  startBtn.setAttribute('disabled', 'disabled');
  
  intervalId = setInterval(() => {
    body.style.background = colors[randomIntegerFromInterval(0, colors.length)];
  }, DELAY);
};

function onClickStop() {
  startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
};
