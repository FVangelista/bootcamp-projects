const products = document.querySelector('.products');
const loader = document.querySelector('.loader');
loader.style.color = '#c5c5c5';

window.addEventListener('DOMContentLoaded', () => {
  loader.textContent = 'Loading...';

  fetch('https://api.escuelajs.co/api/v1/products')
    .then((res) => res.json())
    .then((data) => dataMap(data))
    .catch((error) => {
      loader.textContent = 'There was an error trying to load the content!';
      console.log(`my error: ${error}`);
    });
});

const dataMap = (data) => {
  loader.remove();

  data.forEach((item) => {
    console.log(item.title);
    console.log(item.description);
    console.log(`-----------------`);

    const prodContainer = document.createElement('div');
    prodContainer.classList.add('card');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = item.title;

    const img = document.createElement('img');
    img.classList.add('img');
    img.setAttribute('src', item.images[0]);

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = item.description;

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart');

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'add to cart';
    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = `$ ${item.price}`;

    prodContainer.appendChild(title);
    prodContainer.appendChild(img);
    prodContainer.appendChild(desc);

    cartContainer.appendChild(price);
    cartContainer.appendChild(btn);

    prodContainer.appendChild(cartContainer);

    products.appendChild(prodContainer);
  });
};
