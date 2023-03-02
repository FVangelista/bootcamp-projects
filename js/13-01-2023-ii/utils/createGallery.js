import data from './data.js';

const createGallery = () => {
  return `      <div class="menu-container">
    <ul class="menu">
      <li>
        <a href="#">home</a>
      </li>
      <li>
        <a href="#">projects</a>
      </li>
      <li>
        <a href="#">about</a>
      </li>
    </ul>
  </div>
  
  <h3 class="title">.slider</h3>

  <img
    src="${data[0].img}"
    alt="image slide"
    class="img-slide"
  />
  
  <h3 class="sub">${data[0].title}</h3>
  
  <div class="nav-container">
    <i class="fa-solid fa-caret-left prev-btn"></i>
    <button type="button" class="nav nav-active" data-id="0"></button>
    <button type="button" class="nav" data-id="1"></button>
    <button type="button" class="nav" data-id="2"></button>
    <button type="button" class="nav" data-id="3"></button>
    <i class="fa-solid fa-caret-right next-btn"></i>
  </div>
  `;
};

export default createGallery;
