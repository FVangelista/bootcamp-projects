import { getElement } from './utils.js';

const postForm = getElement('#post-form');
const catForm = getElement('.cat-form');
const putForm = getElement('.put-form');
const deleteForm = getElement('.delete-form');

const url = 'https://api.escuelajs.co/api/v1/';

// Post form

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

// Post category

catForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formObj = {
    name: e.target[0].value,
    image: e.target[1].value,
  };

  fetchData(formObj, 'categories', 'POST', '');
});

// PUT

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

// Delete

deleteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target[0].value);

  deleteFetch('products', 'DELETE', parseInt(e.target[0].value));
});

// Fetch api

const fetchData = async (objBody, path, method, id = '') => {
  try {
    const response = await fetch(url + path + '/' + id, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objBody),
    });

    if (!response.ok) {
      throw new Error(`There was an error seding your ${method}`);
    }

    const data = await response.json();
    console.log('REPONSE POST: ', data);
  } catch (error) {
    console.log(error.message);
  }
};

// Fetch delete method

const deleteFetch = async (path, method, id = '') => {
  try {
    const response = await fetch(url + path + '/' + id, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`There was an error seding your ${method}`);
    }

    const data = await response.json();
    console.log('REPONSE POST: ', data);
  } catch (error) {
    console.log(error.message);
  }
};
