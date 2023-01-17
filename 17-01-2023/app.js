const products = document.querySelector('.products');
const loader = document.querySelector('.loader');
const burger = document.querySelector('.burger');
const cartNav = document.querySelector('.cart-nav');
const cart = [];
loader.style.color = '#c5c5c5';

window.addEventListener('DOMContentLoaded', () => {
  loader.textContent = 'Loading...';
  cartNav.classList.remove('active');

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
    const prodContainer = document.createElement('div');
    prodContainer.classList.add('card');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = item.title.slice(0, 10);

    const img = document.createElement('img');
    img.classList.add('img');
    img.setAttribute('src', item.images[0]);

    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.textContent = item.description.slice(0, 30);

    const cartContainer = document.createElement('div');
    cartContainer.classList.add('cart');

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'add to cart';

    btn.addEventListener('click', () => {
      cart.push(item);
      cartCreation();
      alert(`The item ${item.title}has been added to the cart`);
      //   console.log(cart);
    });

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

burger.addEventListener('click', () => {
  cartNav.classList.toggle('active');
});

const cartCreation = () => {
  cartNav.innerHTML = '';
  cart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('single-cart');
    cartItem.innerHTML = `<img src="${item.images[0]}" class="cart-img"><p class="desc">${item.title} <span class="price">$${item.price}</span></p><button class="btn-remove">X</button>`;
    cartNav.appendChild(cartItem);

    cartItem.addEventListener('click', (e) => {
      const element = e.target;
      if (element.classList.contains('btn-remove')) {
        cart.pop(item);
        cartItem.remove();
        // console.log(cart);
      }
    });
  });
};
