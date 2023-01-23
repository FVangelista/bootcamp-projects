import { getElement, cEl } from './utils/aux.js';

const body = getElement('body');
const quotesContainer = cEl('section');
quotesContainer.classList.add('q-container');
body.appendChild(quotesContainer);

const url = 'https://dummyjson.com/quotes';

const fetchData = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('There was an error on response');
    }
    const data = await response.json();
    const dataQuotes = data.quotes;
    displayQuotes(dataQuotes);
  } catch (error) {
    console.log(error.message);
    loader.textContent = 'There was an error trying to load the content.';
  }
};

window.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

const displayQuotes = (element) => {
  element.forEach((item) => {
    const quotesCenter = cEl('div');
    quotesCenter.classList.add('q-center');
    quotesContainer.appendChild(quotesCenter);
    quotesCenter.innerHTML = `<blockquote cite="${item.author}">${item.quote}</blockquote><div class="line"></div><p class="author">${item.author}</p>`;
  });

  const randomContainer = cEl('div');
  randomContainer.classList.add('r-quote');
  body.appendChild(randomContainer);

  const singleQuote = cEl('div');
  singleQuote.classList.add('r-center');
  randomContainer.appendChild(singleQuote);
  const randomBtn = cEl('button');
  randomBtn.textContent = 'random quote';
  randomBtn.classList.add('r-btn');
  body.appendChild(randomBtn);

  singleQuote.innerHTML = `<blockquote cite="${element[0].author}">${element[0].quote}</blockquote><div class="line"></div><p class="author">${element[0].author}</p>`;

  randomBtn.addEventListener('click', () => {
    const randomNum = Math.ceil(Math.random() * 30);
    element.forEach((item) => {
      if (randomNum === item.id) {
        singleQuote.innerHTML = `<blockquote cite="${item.author}">${item.quote}</blockquote><div class="line"></div><p class="author">${item.author}</p>`;
      }
    });
  });
};
