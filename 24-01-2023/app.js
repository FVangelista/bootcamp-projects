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

// Create users cards

const displayUsers = (data) => {
  const { username, image } = data;
  const { address, city } = data.address;
  const { lat, lng } = data.address.coordinates;

  const container = cEl('div');
  container.classList.add('u-container');
  const infos = cEl('div');
  infos.classList.add('u-info');
  const img = cEl('img');
  img.classList.add('u-img');
  const user = cEl('p');
  const userAddr = cEl('p');
  const lati = cEl('p');
  const lngi = cEl('p');

  img.setAttribute('src', image);
  user.textContent = `Username: ${username}`;
  userAddr.textContent = `Address: ${address} - ${city}`;
  lati.textContent = `Latitude: ${lat}`;
  lngi.textContent = `Longitude: (${lng})`;

  wrapper.appendChild(container);
  container.appendChild(img);
  container.appendChild(infos);
  infos.appendChild(user);
  infos.appendChild(userAddr);
  infos.appendChild(lati);
  infos.appendChild(lngi);
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
