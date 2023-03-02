import { useState } from 'react';
import { productsList } from './mocks/productList';

import Hero from './components/hero';
import Gallery from './components/gallery';
import Carousel from './components/carousel';
import Modal from './components/modal';
import ListProducts from './components/productList/ListProducts';
import './main.css';

const Main = () => {
  // const [isModalOpen, setModalOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [displayModal, setDisplayModal] = useState(null);
  // one single parent on the return
  return (
    <div className={`Main ${darkMode && 'dark-mode'}`}>
      <Hero title="react *store" />
      <div className="btn-container">
        <div className="title">
          <h3>dark / light mode</h3>
        </div>
        <button
          className="toggle-btn"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? '🌃' : '🌅'}
        </button>
      </div>
      <Gallery />
      <Carousel />
      <ListProducts dataList={productsList} setDisplayModal={setDisplayModal} />
      {/* {isModalOpen ? <Modal setModalOpen={setModalOpen} /> : null} */}
      {displayModal ? (
        <Modal product={displayModal} setDisplayModal={setDisplayModal} />
      ) : null}
    </div>
  );
};

export default Main;
