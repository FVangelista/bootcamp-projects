import { GET } from './api.js';

// AUX
const gEL = (element) => document.querySelector(element);
const cEl = (element) => document.createElement(element);

// Project

// Default selection

const bodyEl = gEL('body');
const wrapper = cEl('section');
wrapper.classList.add('wrap');
const searchInput = cEl('input');
searchInput.classList.add('search-input');
searchInput.setAttribute('placeholder', 'username');

bodyEl.appendChild(searchInput);
bodyEl.appendChild(wrapper);

const modalContainer = gEL('.modal-container');
const modalImage = gEL('.modal-img');
const modalText = gEL('.pass');

// Create users cards

const displayUsers = (data) => {
  const { username, image, password } = data;
  const { address, city } = data.address;
  const { lat, lng } = data.address.coordinates;

  const container = cEl('div');
  container.classList.add('u-container');
  const infos = cEl('div');
  infos.classList.add('u-info');
  const img = cEl('img');
  img.classList.add('u-img');
  const user = cEl('p');
  user.classList.add('t-info');
  const userAddr = cEl('p');
  userAddr.classList.add('t-info');
  const lati = cEl('p');
  lati.classList.add('t-info');
  const lngi = cEl('p');
  lngi.classList.add('t-info');

  img.setAttribute('src', image);
  user.innerHTML = `<span class="keys">Username:</span> ${username}`;
  userAddr.innerHTML = `<span class="keys">Address:</span> ${address} - ${city}`;
  lati.innerHTML = `<span class="keys">Lat:</span> (${lat})`;
  lngi.innerHTML = `<span class="keys">Lng:</span> (${lng})`;

  wrapper.appendChild(container);
  container.appendChild(img);
  container.appendChild(infos);
  infos.appendChild(user);
  infos.appendChild(userAddr);
  infos.appendChild(lati);
  infos.appendChild(lngi);

  // Modal

  container.addEventListener('click', () => {
    modalImage.setAttribute('src', image);
    modalText.textContent = `Password: ${password}`;
    modalContainer.classList.remove('hidden');
  });

  modalContainer.addEventListener('click', () => {
    modalContainer.classList.add('hidden');
  });
};

// Get all users & display onload

GET('users?limit=12').then(({ users }) =>
  users.forEach((user) => displayUsers(user))
);

// Filtering users

searchInput.addEventListener('input', (e) => {
  deleteBefore();
  const sValue = e.target.value;

  GET('users?limit=12').then(({ users }) =>
    users.forEach((user) => {
      if (user.username.includes(sValue)) displayUsers(user);
    })
  );
});

// Delete users function

const deleteBefore = () => {
  const usersEl = document.querySelectorAll('.u-container');

  usersEl.forEach((user) => user.remove());
};
