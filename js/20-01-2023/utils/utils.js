const cart = [];

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(`Such element ${selection} does not exist.`);
  }
};

const cEl = (element) => document.createElement(element);

const cartNav = getElement('.cart-nav');

const cartCreation = () => {
  cartNav.innerHTML = ``;

  cart.forEach((item, index) => {
    const cartItem = cEl('div');
    cartItem.classList.add('single-cart');
    cartItem.innerHTML = `<img src="${
      item.img
    }" class="cart-img"><p class="desc">x${item.qty} ${item.title.slice(
      0,
      10
    )} <span class="price">$${
      item.price
    }</span></p><button class="btn-remove">X</button>`;
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

  // console.log(search);
  cartCreation();
  alert(`The item ${item.title.slice(0, 10)} has been added to the cart`);
};

export { getElement, cEl, cartPop, cartCreation };
