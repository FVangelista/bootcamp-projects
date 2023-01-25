// AUX

const gEL = (el) => document.querySelector(el);
const cEL = (el) => document.createElement(el);

// Project

const GET = async (endpoint, curr) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&order=market_cap_desc&per_page=${endpoint}&page=1&sparkline=false`
  );
  const data = await res.json();
  return data;
};

GET(12, 'eur').then((coins) => {
  coins.forEach((coin) => {
    displayDash(coin);
  });
});

const wrapper = document.querySelector('.wrapper');
const nameWrapper = document.querySelector('.names-container');

const displayDash = (data) => {
  const name = cEL('p');
  name.classList.add('name');
  const price = cEL('span');
  price.classList.add('price');

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

  name.textContent = data.name;

  price.textContent = ` EUR (${data.current_price.toFixed(2)})`;

  if (data.high_24h < 1 && data.low_24h < 1) {
    green.style.width = `${data.high_24h * 50}%`;
    red.style.width = `${data.low_24h * 50}%`;
  } else if (data.high_24h > 10000 && data.low_24h > 10000) {
    green.style.width = `${data.high_24h / 500}%`;
    red.style.width = `${data.low_24h / 500}%`;
  } else if (
    data.high_24h > 1000 &&
    data.high_24h < 10000 &&
    data.low_24h > 1000 &&
    data.low_24h < 10000
  ) {
    green.style.width = `${data.high_24h / 50}%`;
    red.style.width = `${data.low_24h / 50}%`;
  } else {
    green.style.width = `${data.high_24h / 5}%`;
    red.style.width = `${data.low_24h / 5}%`;
  }

  highs.textContent = data.high_24h;
  lows.textContent = data.low_24h;

  nameWrapper.appendChild(name);
  name.appendChild(price);
  wrapper.appendChild(canddles);
  canddles.appendChild(green);
  canddles.appendChild(red);
  green.appendChild(highs);
  red.appendChild(lows);
};
