import { getElement } from '../utils.js';
import { fetchData, deleteFetch } from './postFetch.js';

const postForm = getElement('#post-form');
const catForm = getElement('.cat-form');
const putForm = getElement('.put-form');
const deleteForm = getElement('.delete-form');

// Post form - post a new product in the api database

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formObj = {
    title: e.target[0].value,
    price: parseInt(e.target[1].value),
    description: e.target[4].value,
    categoryId: parseInt(e.target[2].value),
    images: [e.target[3].value],
  };

  fetchData(formObj, 'products', 'POST', '');
});

// Post category - post a new category on api database

catForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formObj = {
    name: e.target[0].value,
    image: e.target[1].value,
  };

  fetchData(formObj, 'categories', 'POST', '');
});

// PUT - update a product from api database

putForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formObj = {
    title: e.target[0].value,
    price: parseInt(e.target[1].value),
    description: e.target[4].value,
    categoryId: parseInt(e.target[2].value),
    images: [e.target[3].value],
  };

  fetchData(formObj, 'products', 'PUT', 307);
});

// Delete - delete a product from api database

deleteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target[0].value);

  deleteFetch('products', 'DELETE', parseInt(e.target[0].value));
});

// Display selected form

const selectForm = getElement('#form-select');

selectForm.addEventListener('change', () => {
  const forms = [...document.querySelectorAll('.form')];

  forms.forEach((form) => {
    form.classList.add('hide');
  });

  if (selectForm.value === 'post') {
    postForm.classList.remove('hide');
  } else if (selectForm.value === 'cat') {
    catForm.classList.remove('hide');
  } else if (selectForm.value === 'put') {
    putForm.classList.remove('hide');
  } else if (selectForm.value === 'delete') {
    deleteForm.classList.remove('hide');
  }
});
