// AUX functions

const gEl = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`Such element ${selection} does not exist.`);
  }
};

const cEl = (element) => document.createElement(element);

// Current Date

let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let currentDate = new Date();
let time =
  currentDate.getHours() +
  '.' +
  currentDate.getMinutes() +
  '.' +
  currentDate.getSeconds();
let day = weekday[currentDate.getDay()];

// light / dark mode

const bodyEl = gEl('body');
const upperNav = gEl('.upperNav');
const logo = gEl('.logo');
const logoInner = gEl('.logo-inner');
const logoWrapper = gEl('.logo');
const selection = gEl('.city-selection');
const search = gEl('.search-input');
const heroText = gEl('.hero-info');
const footer = gEl('.footer');

function lightMode() {
  bodyEl.style.backgroundColor = '#fccb4625';
  logo.style.color = '#619B8A';
  upperNav.style.backgroundColor = '#619B8A';

  selection.style.border = '1px solid #619B8A';
  selection.style.color = '#619B8A';

  search.style.border = '1px solid #619B8A';
  search.style.color = '#619B8A';
  search.classList.add('custom');

  heroText.style.color = '#619B8A';

  footer.style.backgroundColor = '#619B8A';

  const logoImg = cEl('img');
  logoImg.classList.add('logo-img');
  logoImg.src = './imgs/3.svg';

  logoWrapper.appendChild(logoImg);
}

function darkMode() {
  bodyEl.style.backgroundColor = '#252525';

  logo.style.color = '#144552';
  upperNav.style.backgroundColor = '#144552';

  logoInner.style.color = '#006466';

  heroText.style.color = '#006466';

  footer.style.backgroundColor = '#144552';

  const logoImg = cEl('img');
  logoImg.classList.add('logo-img');
  logoImg.src = './imgs/2.svg';

  logoWrapper.appendChild(logoImg);
}

// Constructor functions

const cardsWrapper = gEl('.cards-wrapper');

const displayData = (data) => {
  data.forEach((item) => {
    // elements
    const card = cEl('div');
    card.classList.add('card');
    const prov = cEl('h3');
    prov.classList.add('province');
    prov.textContent = item.name;
    const nowTemp = cEl('h2');
    nowTemp.classList.add('now');
    nowTemp.textContent = `${Math.round(item.main.temp)}°`;
    const maxMin = cEl('div');
    maxMin.classList.add('maxMin');
    const max = cEl('p');
    max.classList.add('text');
    const min = cEl('p');
    min.classList.add('text');
    const addInfo = cEl('div');
    addInfo.classList.add('addInfo');
    const weekDay = cEl('p');
    weekDay.classList.add('text');
    weekDay.textContent = day;
    const icon = cEl('i');
    icon.classList.add('icon');

    // content

    if (item.weather[0].main === 'Mist') {
      icon.classList.add('fa-solid');
      icon.classList.add('fa-smog');
      icon.classList.add('fa-2x');
      icon.classList.add('icon');
    } else if (item.weather[0].main === 'Clouds') {
      icon.classList.add('fa-solid');
      icon.classList.add('fa-cloud');
      icon.classList.add('fa-2x');
      icon.classList.add('icon');
    } else if (item.weather[0].main === 'Clear') {
      icon.classList.add('fa-solid');
      icon.classList.add('fa-sun');
      icon.classList.add('fa-2x');
      icon.classList.add('icon');
    } else if (item.weather[0].main === 'Snow') {
      icon.classList.add('fa-solid');
      icon.classList.add('fa-snowflake');
      icon.classList.add('fa-2x');
      icon.classList.add('icon');
    } else {
      icon.classList.add('fa-solid');
      icon.classList.add('fa-cloud-rain');
      icon.classList.add('fa-2x');
      icon.classList.add('icon');
    }

    max.textContent = `max: ${Math.round(item.main.temp_max)}°`;
    min.textContent = `min: ${Math.round(item.main.temp_min)}°`;

    if (
      prov.textContent.includes('Province of ') ||
      prov.textContent.includes('Provincia di ')
    ) {
      prov.textContent = prov.textContent.slice(12);
    }

    if (time > '06' && time < '18') {
      card.style.backgroundImage = `linear-gradient(rgba(125, 125, 125, 0.1), rgba(125, 125, 125, 0.1)),${'url(./imgs/4.svg)'}`;
      lightMode();
    } else {
      card.style.backgroundImage = `linear-gradient(rgba(125, 125, 125, 0.1), rgba(125, 125, 125, 0.1)),${'url(./imgs/5.svg)'}`;
      darkMode();
    }

    // append

    cardsWrapper.appendChild(card);
    card.appendChild(prov);
    card.appendChild(nowTemp);
    card.appendChild(maxMin);
    maxMin.appendChild(max);
    maxMin.appendChild(min);
    card.appendChild(addInfo);
    addInfo.appendChild(weekDay);
    addInfo.appendChild(icon);
  });
};

function notFound() {
  const mess = cEl('div');
  mess.classList.add('text-1');
  mess.classList.add('error');

  mess.textContent =
    'Sorry, the city you are looking for is not located in Piedmont or it does not exist.';

  cardsWrapper.appendChild(mess);
}

function errorMessage() {
  const mess = cEl('div');
  mess.classList.add('text-1');
  mess.classList.add('error');

  mess.textContent =
    'You must insert at least three characters for a proper research';

  cardsWrapper.appendChild(mess);
}

// Exports

export { gEl, displayData, errorMessage, notFound };
