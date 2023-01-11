import quotes from './mock/data.js';
import quoteGen from './tools/quoteGen.js';

const btn = document.querySelector('.btn');
const card = document.querySelector('.card');

btn.addEventListener('click', () => {
  if (card.classList.contains('card-back')) {
    card.classList.remove('card-back');
  } else {
    card.classList.add('card-back');
  }
});

// advance

quotes.forEach((item) => quoteGen(item.quote, item.author));
