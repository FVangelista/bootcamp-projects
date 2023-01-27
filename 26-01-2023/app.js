const bodyEl = document.querySelector('body');
const inputTime = document.createElement('input');

inputTime.classList.add('input-time');
inputTime.setAttribute('placeholder', '1s - 60s');

bodyEl.appendChild(inputTime);

const sub = document.querySelector('.sub');
const timerContainer = document.createElement('div');
timerContainer.classList.add('timer-container');
bodyEl.appendChild(timerContainer);

const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = 'start'.toLocaleUpperCase();

bodyEl.appendChild(btn);

// console.log(toNumber());

let timer = Number(inputTime.value);
let count = false;
let timeOut;

timerContainer.textContent = timer;

btn.addEventListener('click', () => {
  // Updating timer
  timer = Number(inputTime.value);
  console.log(timer);

  if (count) {
    settings();
  } else {
    count = true;
    // Set interval
    setTime();
  }
});

// Timer function

function setTime() {
  timeOut = setInterval(() => {
    console.log(timer);
    if (timer <= 0) {
      settings();
    } else if (inputTime.value > 60) {
      settings();
      alert('Please set a value from 1s to 60s');
    } else {
      count = true;
      setLightMode();
      timerContainer.textContent = timer;
      timer--;
    }

    if (!Number(timer)) {
      settings();
      console.log(timer);
    }
  }, 1000);
}

// Settings for the setTime function
function settings() {
  count = false;
  clearInterval(timeOut);
  setDarkMode();
}

// Style Functions

function setDarkMode() {
  timerContainer.classList.add('hide');
  inputTime.classList.remove('hide');
  inputTime.style.backgroundColor = '#c5c5c5';
  inputTime.style.color = '#000';
  bodyEl.style.backgroundColor = '#000';
  bodyEl.style.color = '#c5c5c5';
  btn.style.backgroundColor = '#c5c5c5';
  btn.textContent = 'start'.toUpperCase();
  btn.style.color = '#000';
  sub.style.color = '#fff';
}

function setLightMode() {
  timerContainer.classList.remove('hide');
  inputTime.classList.add('hide');
  bodyEl.style.backgroundColor = '#c5c5c5';
  bodyEl.style.color = '#000';
  btn.style.backgroundColor = '#000';
  btn.textContent = 'stop'.toUpperCase();
  btn.style.color = '#c5c5c5';
  sub.style.color = '#fff';
}

// if input is empty returns NaN
