import { products } from './mock.js';

const bodyEl = document.body;
const section = document.createElement('section');
section.className = 'main';
bodyEl.appendChild(section);

const creatCard = (prod) => {
  // console.log(bodyE1);

  const cardE1 = document.createElement('div');
  const imgEl = document.createElement('img');
  const titleEl = document.createElement('h2');
  const descEl = document.createElement('p');

  cardE1.className = 'card';
  cardE1.setAttribute('id', 'pippo');
  // cardE1.style.border = '4px solid red';
  // cardE1.classList.add('welcome-message');
  imgEl.className = 'card-img';
  imgEl.setAttribute('src', prod.img);
  imgEl.setAttribute('alt', 'loremm picsum');

  descEl.className = 'card-desc';
  descEl.textContent = prod.description;

  titleEl.className = 'card-title';
  titleEl.textContent = prod.title;

  cardE1.append(imgEl, titleEl, descEl);
  section.appendChild(cardE1);
};

for (const product of products) {
  creatCard(product);
}
