const products = document.querySelector('.products');
const loader = document.querySelector('.loader');
const burger = document.querySelector('.burger');
const cartNav = document.querySelector('.cart-nav');
const cart = [];
let total = 0;

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
    title.textContent = item.title;

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
      cartPop(item);
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
  cartNav.innerHTML = ``;
  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('single-cart');
    cartItem.innerHTML = `<img src="${item.img}" class="cart-img"><p class="desc">${item.title} <span class="price">$${item.price}</span> Q.ty: ${item.qty} </p><button class="btn-remove">X</button>`;
    cartNav.appendChild(cartItem);

    cartItem.addEventListener('click', (e) => {
      const element = e.target;
      if (element.classList.contains('btn-remove')) {
        cart.splice(index, 1);
        cartItem.remove();

        console.log(cart);
      }
    });
  });
};

const cartPop = (item) => {
  const newObj = {
    id: item.id,
    img: item.images[0],
    title: item.title,
    price: item.price,
    qty: 1,
  };

  let search = cart.filter((element) => {
    if (newObj.id === element.id) {
      element.qty++;

      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  console.log(cart);
  cartCreation();
  alert(`The item ${item.title.slice(0, 10)} has been added to the cart`);
};
