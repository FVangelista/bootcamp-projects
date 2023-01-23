import { getElement, cEl } from './utils.js';

const cart = [];

// CART FUNCTIONS
const cartNav = getElement('.cart-nav');
const totalQ = getElement('.total-qty');

// Setting default values

// Div with the total qty (above the burger)
totalQ.textContent = '0';
// Total price on carNav defaul value
cartNav.innerHTML = `<p class="total-pay">Total: $ 0</p>`;

// Create Items that are inside the cart array
const cartCreation = () => {
  // Updating qty & price
  let totalQty = 0;
  let totalPay = 0;
  cart.forEach((item) => {
    totalQty = totalQty + item.qty;
    totalPay = totalPay + item.price;
    if (item.qty > 1) {
      totalPay = totalPay * item.qty;
    }
  });
  totalQ.textContent = totalQty;

  // Updatind the cartNav and the total price
  cartNav.innerHTML = `<p class="total-pay">Total: $ ${totalPay}</p>`;

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
    }</span></p><button class="btn-dec">-</button><button class="btn-inc">+</button><button class="btn-remove">x</button>`;
    cartNav.appendChild(cartItem);

    // adding a listening event to each item remove-btn that are in the cart array, and checking if the element has a certain class remove it from the array and remove() it from the display cartNav by removing the item.
    cartItem.addEventListener('click', (e) => {
      const element = e.target;
      if (element.classList.contains('btn-remove')) {
        // Removing from array
        cart.splice(index, 1);
        // Removing from display
        cartItem.remove();

        console.log(cart);
        // Delete properly - updates cart array after removing a certain item.
        cartCreation();
      } else if (element.classList.contains('btn-inc')) {
        item.qty++;
        cartCreation();
      } else if (element.classList.contains('btn-dec')) {
        item.qty--;
        if (item.qty === 0) {
          cart.splice(index, 1);
          cartItem.remove();
        }
        cartCreation();
      }
    });
  });
};

// Create an item when addBtn are clicked
const cartPop = (item) => {
  // Create a new obj based on the selected item with the needed keys and values
  const newObj = {
    id: item.id,
    img: item.images[0],
    title: item.title,
    price: item.price,
    qty: 1,
  };

  // Create an array a filtered array based on the cart and compares the element.id that there is in the cart with the newObj.id, and return the element with the updated qty value.
  let search = cart.filter((element) => {
    if (newObj.id === element.id) {
      element.qty++;

      return element;
    }
  });
  console.log(search);

  // It will check if the search array is equal to zero, if true it will push the newObj to the cart else cartPop() will only update the qty value.
  if (search.length === 0) {
    cart.push(newObj);
  }

  // Create the elements that are inside the cart array.
  cartCreation();
  console.log(cart);
  // Confirm that the item has been added to the cart.
  alert(`The item ${item.title.slice(0, 10)} has been added to the cart`);
};

export { cartPop };
