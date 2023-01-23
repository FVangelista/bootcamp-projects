import { getElement, cEl } from './utils/utils.js';
import { cartPop } from './utils/cartUtils.js';

const products = getElement('.products');
const loader = getElement('.loader');
const burger = getElement('.burger');
const cartNav = getElement('.cart-nav');
const searchInput = getElement('.search-input');
const slider = getElement('.slider');
// API url
const url = 'https://api.escuelajs.co/api/v1/products';

// Fetching data with async / await
const fetchData = async () => {
  loader.textContent = 'Loading...';
  // Removing the class active from cartNav otherwise it will stay open even on page refresh
  cartNav.classList.remove('active');
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('There was an error on response');
    }
    const data = await response.json();

    // FILTERING BY ID

    // Display list on load of the page
    dataMap(data);

    searchInput.addEventListener('keyup', () => {
      // Clean product list every time a new search is done
      products.innerHTML = '';

      // Filter based on id value that are passes trouth search input
      const dataFilter = data.filter(
        (element) => element.category.id === parseInt(searchInput.value)
      );

      // If there is no searching input value display the hole list
      if (!searchInput.value) {
        dataMap(data);
      }

      // Display and log filtered products
      console.log(dataFilter);
      dataMap(dataFilter);
    });
  } catch (error) {
    console.log(error.message);
    loader.textContent = 'There was an error trying to load the content.';
  }
};

window.addEventListener('DOMContentLoaded', () => {
  // Fetch data on load
  fetchData();
});

const dataMap = (element) => {
  // Removing loader
  loader.remove();

  // Getting the fetched data (based if its filtered or not) and dynamically creating the products list
  element.forEach((item) => {
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

    // Add the selected product to cart navigation
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
  });
};

// Opens cart menu navigation
burger.addEventListener('click', () => {
  cartNav.classList.toggle('active');
});

// Header slider
slider.addEventListener('click', (e) => {
  const element = e.target;
  const marksArr = [...document.querySelectorAll('.marks')];
  const header = getElement('.header');

  const removeActive = () => {
    marksArr.forEach((mark) => {
      mark.classList.remove('active-mark');
    });
  };
  removeActive();

  if (element.classList.contains('mark-1')) {
    element.classList.add('active-mark');
    header.style.backgroundImage = 'url(./utils/imgs/1.jpeg)';
    header.style.backgroundPosition = 'top';
  } else if (element.classList.contains('mark-2')) {
    element.classList.add('active-mark');
    header.style.backgroundImage = 'url(./utils/imgs/3.jpeg)';
    header.style.backgroundPosition = 'center';
  } else if (element.classList.contains('mark-3')) {
    element.classList.add('active-mark');
    header.style.backgroundImage = 'url(./utils/imgs/2.jpeg)';
    header.style.backgroundPosition = 'bottom';
  }
});
