import CardList from './components/cardList';
import Hero from './components/hero';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar';
import MiniCardList from './components/miniCardList';

import { useState } from 'react';

import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisibile: false,
  });

  return (
    <div className="App">
      <Navbar inputValue={inputValue} setInputValue={setInputValue} />
      <Hero />
      <MiniCardList inputValue={inputValue} />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContext={setModalContext}
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        setModalContext={setModalContext}
      />
      <Footer />

      {modalContext.isVisibile && (
        <ModalCard
          productData={modalContext.productData}
          setModalContext={setModalContext}
        />
      )}
    </div>
  );
}

// Modal Component

function ModalCard({ productData, setModalContext }) {
  const onHandleClose = () =>
    setModalContext((prev) => ({
      ...prev,
      isVisibile: false,
    }));
  console.log(productData);

  return (
    <div className="ModalCard">
      <div className="ModalCard__content">
        <div className="ModalCard__text">
          <h1>{productData.title}</h1>
          <p>{productData.description}</p>
          <div className="ModalCard__text--info">
            <span>{productData.category}</span>
            <span>{productData.price}</span>
          </div>
        </div>
        <div className="ModalCard__gallery">
          {productData.images.map((image) => (
            <img
              onClick={() => onHandleImageClick(image)}
              src={image}
              alt={image}
              key={image}
            />
          ))}
        </div>
        <button onClick={onHandleClose} className="ModalCard--close">
          X
        </button>
      </div>
    </div>
  );
}

export default App;
