import data from './utils/data.js';
import getElement from './utils/getElement.js';
import getAllElement from './utils/getAllElements.js';
import createGallery from './utils/createGallery.js';

const sliderContainer = getElement('.slider-container');
const body = getElement('body');

sliderContainer.innerHTML = createGallery();

const btns = getAllElement('.nav');
const img = getElement('.img-slide');
const sub = getElement('.sub');
let counter = 0;

// selection
const removeActive = () => {
  btns.forEach((btn) => {
    btn.classList.remove('nav-active');
  });
};

sliderContainer.addEventListener('click', (e) => {
  const element = e.target;
  const id = e.target.dataset.id;
  const dataImgs = data.map((item) => item.img);
  const dataSubs = data.map((item) => item.title);

  // nav-container
  if (id) {
    // remove selected
    removeActive();
    element.classList.add('nav-active');
    // display img
    data.forEach((item) => {
      if (item.id === id) {
        img.setAttribute('src', item.img);
        sub.textContent = item.title;
        body.style.background = `url(${item.img})`;
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
        counter = parseInt(id);
      }
    });
  }

  // prev & next btns
  if (element.classList.contains('prev-btn')) {
    counter--;
    if (counter < 0) {
      counter = dataImgs.length - 1;
    }
    img.setAttribute('src', dataImgs[counter]);
    sub.textContent = dataSubs[counter];
    body.style.background = `url(${dataImgs[counter]})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';

    removeActive();
    btns[counter].classList.add('nav-active');
  } else if (element.classList.contains('next-btn')) {
    counter++;
    if (counter > dataImgs.length - 1) {
      counter = 0;
    }
    img.setAttribute('src', dataImgs[counter]);
    sub.textContent = dataSubs[counter];
    body.style.background = `url(${dataImgs[counter]})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';

    removeActive();
    btns[counter].classList.add('nav-active');
  }
});
