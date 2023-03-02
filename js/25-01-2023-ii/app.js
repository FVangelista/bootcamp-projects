import GET from './api.js';
import { gEL, cEL } from './utils.js';

// Project

GET('eur').then((coins) => {
  coins.forEach((coin) => {
    displayDash(coin);
  });
});

const wrapper = gEL('.wrapper');
const nContainer = gEL('.n-container');

const displayDash = (data) => {
  const { current_price: price, high_24h: high, low_24h: low, image } = data;

  const infoContainer = cEL('div');
  infoContainer.classList.add('info');
  const pText = cEL('span');
  pText.classList.add('price');

  const canddles = cEL('div');
  canddles.classList.add('canddles-wrapper');
  const green = cEL('div');
  green.classList.add('green');
  const red = cEL('div');
  red.classList.add('red');
  const highs = cEL('span');
  highs.classList.add('highs-price');
  const lows = cEL('span');
  lows.classList.add('lows-price');
  const img = cEL('img');
  img.classList.add('logo-coin');
  img.setAttribute('src', image);

  pText.textContent = ` EUR (${price.toFixed(2)})`;

  scaleValues(high, green);
  scaleValues(low, red);

  highs.textContent = high;
  lows.textContent = low;

  nContainer.appendChild(infoContainer);
  infoContainer.appendChild(img);
  infoContainer.appendChild(pText);
  wrapper.appendChild(canddles);
  canddles.appendChild(green);
  canddles.appendChild(red);
  green.appendChild(highs);
  red.appendChild(lows);
};

// Scale values function

const scaleValues = (x, color) => {
  if (x > 10000) {
    color.style.width = `${x / 500}%`;
  } else if (x > 1000 && x < 10000) {
    color.style.width = `${x / 50}%`;
  } else if (x > 100 && x < 1000) {
    color.style.width = `${x / 10}%`;
  } else if (x < 100 && x > 10) {
    color.style.width = `${x / 2}%`;
  } else {
    color.style.width = `${x}%`;
  }
};
