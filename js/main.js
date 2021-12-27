import {printError,printResult} from './printResult.js';
import getDateDiff              from './getDateDiff.js';
import {substractTime}          from './substractTime.js';
import { openClose }            from './openClose.js';


const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const firstDate = formData.get('firstDate');
  const secondDate = formData.get('secondDate');

  if (!firstDate || !secondDate) {
    printError('Ooopps - введите дату')
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate);

    printResult(dateDiff);
  }
};

// ****************TIMER******************

export const timerInput = document.getElementById('time-input');
export const timeBlock = document.querySelector('.time');
let interval;

timeBlock.innerHTML = '';

document.getElementById('start').addEventListener('click', () => {
  if (timerInput.value < 0) {
    timeBlock.innerHTML = '';
    timerInput.value = 0;
  }
  timeBlock.innerHTML = timerInput.value
  clearInterval(interval)
  interval = setInterval(substractTime, 1000);
 
});

document.getElementById('stop').addEventListener('click', () => {clearInterval(interval)});

document.getElementById('reset').addEventListener('click', () => {
  timeBlock.innerHTML = '';
  timerInput.value = '';
});

openClose();

const sound = new Howl({
  src: [
    'https://assets.codepen.io/21542/howler-push.mp3',
  ]
});
