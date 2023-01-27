import { GET } from './api.js';

// AUX

const gEl = (el) => document.querySelector(el);
const cEl = (el) => document.createElement(el);

// Project

const cat = gEl('.category');

const searchInput = cEl('input');
searchInput.classList.add('search-input');
searchInput.placeholder = 'search';
cat.appendChild(searchInput);

const cardsContainer = cEl('div');
cardsContainer.classList.add('cards-container');
cat.appendChild(cardsContainer);

GET('top_rated').then((data) => {
  displayCards(data.results);

  searchInput.addEventListener('input', () => {
    cardsContainer.innerHTML = '';
    const filterTitle = data.results.filter((titles) => {
      if (titles.name.toLowerCase().includes(searchInput.value)) {
        return titles.name;
      }
    });

    displayCards(filterTitle);
  });
});

const displayCards = (items) => {
  items.forEach((element) => {
    const movieCard = cEl('div');
    movieCard.classList.add('movie-card');
    const img = cEl('img');
    img.classList.add('movie-card-img');
    if (element.poster_path) {
      img.setAttribute(
        'src',
        `https://image.tmdb.org/t/p/w500${element.poster_path}`
      );
    }

    cardsContainer.appendChild(movieCard);
    movieCard.appendChild(img);
  });
};
