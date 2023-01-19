const postForm = document.querySelector('#post-form');
const inputTitle = document.querySelector('#title');
const inputPrice = document.querySelector('#price');
const inputCategory = document.querySelector('#category');
const inputImage = document.querySelector('#image');
const inputDescription = document.querySelector('#description');

const catForm = document.querySelector('#cat-form');
const catName = document.querySelector('#cat-name');
const catImg = document.querySelector('#cat-img');

catForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const catObj = {
    name: catName.value,
    image: catImg.value,
  };
  console.log(catObj);
  postFunction(catObj, 'categories');
});

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (parseInt(inputCategory.value) < 1) {
    alert('category must be bigger than 0');
    return;
  }

  const formObj = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };

  postFunction(formObj, 'products');
});

const postFunction = (objBody, param) => {
  fetch('https://api.escuelajs.co/api/v1/' + param, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.statusCode >= 400 && data.statusCode < 500) {
        alert(`Unable to upload the following: ${param} ` + data.message);
      } else {
        alert(`${param} successfully uploaded!`);
      }
    })
    .catch((error) => console.log(`error: `, error));
};
