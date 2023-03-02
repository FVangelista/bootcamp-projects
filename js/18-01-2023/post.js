const postForm = document.querySelector('#post-form');
const inputTitle = document.querySelector('#title');
const inputPrice = document.querySelector('#price');
const inputCategory = document.querySelector('#category');
const inputImage = document.querySelector('#image');
const inputDescription = document.querySelector('#description');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formObj = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };

  postFunction(formObj);
});

const postFunction = (objBody) => {
  fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => console.log(`response post: `, data))
    .catch((error) => console.log(`error: `, error));
};
