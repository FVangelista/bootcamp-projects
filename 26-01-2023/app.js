const bodyEl = document.querySelector('body');
const timerContainer = document.createElement('div');
timerContainer.classList.add('timer-container');
bodyEl.appendChild(timerContainer);

const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = 'stop'.toLocaleUpperCase();

bodyEl.appendChild(btn);

let timer = 10;
timerContainer.textContent = timer;

btn.addEventListener('click', () => {
  clearInterval(timeOut);
  timerContainer.classList.add('hide');
  bodyEl.style.backgroundColor = '#000';
  bodyEl.style.color = '#c5c5c5';
  btn.style.backgroundColor = '#c5c5c5';
  btn.style.color = '#000';
});

const timeOut = setInterval(() => {
  timer--;
  console.log(timer);
  if (timer === 0) {
    clearInterval(timeOut);
    timerContainer.classList.add('hide');
    bodyEl.style.backgroundColor = '#000';
    bodyEl.style.color = '#c5c5c5';
  } else {
    timerContainer.textContent = timer;
  }
}, 1000);
