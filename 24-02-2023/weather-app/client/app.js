import { GET } from './utils/api.js';
import { gEl, displayData, errorMessage, notFound } from './utils/tools.js';
// import { initMap } from './utils/map.js';

// Map - api init
function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    mapId: 'a25ede39525eec8e',
    center: { lat: 45, lng: 7 },
    zoom: 7,
    maxZoom: 7,
    minZoom: 7,
    disableDefaultUI: true,
  });

  let myMapType = new google.maps.ImageMapType({
    getTileUrl: function (coord, zoom) {
      return `https://tile.openweathermap.org/map/precipitation/${zoom}/${coord.x}/${coord.y}.png?appid=5a96f4ff59267f0528252f959e255edb`;
    },
    tileSize: new google.maps.Size(256, 256),
    name: 'mymaptype',
  });

  let beachMarker = new google.maps.Marker({
    position: { lat: 45, lng: 8 },
    map,
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
  });

  map.overlayMapTypes.insertAt(0, myMapType);
}

window.initMap = initMap;

//  Default js

const select = gEl('.city-selection');
const search = gEl('.search-input');
const upperText = gEl('.upper-text');
const upperNav = gEl('.upperNav');
const toTop = gEl('.top-btn');

toTop.addEventListener('click', () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
});

// Promises

let piedmont = [
  'turin',
  'biella',
  'asti',
  'cuneo',
  'alessandria',
  'vercelli',
  'novara',
  'verbano-cusio-ossola',
];

const objArray = piedmont.map((item) => {
  return GET(item);
});

Promise.all(objArray).then((data) => {
  displayData(data);

  //   Select - filters
  select.addEventListener('change', () => {
    deleteBefore();
    if (select.value === 'All') {
      displayData(data);
    } else {
      const filterData = data.filter((item) => {
        if (item.name.includes(select.value)) {
          return item;
        }
      });
      displayData(filterData);
    }
  });

  //   Search - filters
  search.addEventListener('keyup', (e) => {
    // Triggers when pressing enter key
    if (e.key === 'Enter') {
      let searchArray = search.value.split('');

      deleteBefore();
      if (searchArray.length >= 3) {
        const filterData = data.filter((item) => {
          if (item.name.toLowerCase().includes(search.value)) {
            return item;
          }
        });

        if (filterData.length === 0) {
          notFound();
        }

        displayData(filterData);
      } else if (search.value === '') {
        displayData(data);
      } else {
        errorMessage();
      }
    }
  });
});

// Piedmont data

GET('piemonte').then((data) => {
  const topImg = document.createElement('img');
  topImg.classList.add('flag-top');
  topImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  upperText.textContent = `Italy, Piedmont ${Math.round(data.main.temp)}°c - ${
    data.weather[0].description
  }`;

  upperNav.appendChild(topImg);
  console.log(data);
});

// Delete function

const deleteBefore = () => {
  const usersEl = document.querySelectorAll('.card');
  const error = document.querySelectorAll('.error');

  error.forEach((error) => {
    error.remove();
  });

  usersEl.forEach((user) => user.remove());
};
