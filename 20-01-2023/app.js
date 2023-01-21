import { getElement, cEl, cartPop } from './utils/utils.js';

const products = getElement('.products');
const loader = getElement('.loader');
const burger = getElement('.burger');
const cartNav = getElement('.cart-nav');
const url = 'https://api.escuelajs.co/api/v1/products';

const fetchData = async () => {
  loader.textContent = 'Loading...';
  cartNav.classList.remove('active');

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('There was an error on response');
    }
    const data = await response.json();
    const dataFilter = data.filter((element) => element.category.id === 1);
    // console.log(dataFilter);
    dataFilter.forEach((item) => dataMap(item));
  } catch (error) {
    console.log(error.message);
    loader.textContent = 'There was an error trying to load the content.';
  }
};

window.addEventListener('DOMContentLoaded', () => {
  fetchData();
});

const dataMap = (item) => {
  loader.remove();

  const prodContainer = cEl('div');
  prodContainer.classList.add('card');

  const title = cEl('h1');
  title.classList.add('title');
  title.textContent = item.title.slice(0, 10);

  const img = cEl('img');
  img.classList.add('img');
  img.setAttribute('src', item.images[0]);

  const desc = cEl('p');
  desc.classList.add('desc');
  desc.textContent = item.description.slice(0, 30);

  const cartContainer = cEl('div');
  cartContainer.classList.add('cart');

  const addBtn = cEl('button');
  addBtn.classList.add('addBtn');
  addBtn.textContent = 'add to cart';

  addBtn.addEventListener('click', () => {
    cartPop(item);
  });

  const price = cEl('span');
  price.classList.add('price');
  price.textContent = `$ ${item.price}`;

  prodContainer.appendChild(title);
  prodContainer.appendChild(img);
  prodContainer.appendChild(desc);

  cartContainer.appendChild(price);
  cartContainer.appendChild(addBtn);

  prodContainer.appendChild(cartContainer);

  products.appendChild(prodContainer);
};

burger.addEventListener('click', () => {
  cartNav.classList.toggle('active');
});
