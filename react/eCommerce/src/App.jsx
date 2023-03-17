import CardList from './components/cardList';
import Hero from './components/hero';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar';
import MiniCardList from './components/miniCardList';

import { useState } from 'react';

import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem('cartList')) || []
  );

  const localStorageCartList =
    window !== 'undefined' &&
    JSON.parse(localStorage.getItem('cartList') || '[]').length;

  const [cartVisible, setCartVisible] = useState(false);

  return (
    <div className="App">
      <Navbar
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCartVisible={setCartVisible}
        cartListLength={localStorageCartList || cartList.length}
      />
      <Hero />
      <MiniCardList inputValue={inputValue} />
      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setCartList={setCartList}
      />
      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        setCartList={setCartList}
      />
      <Footer />

      {cartVisible && (
        <Cart
          cartList={cartList}
          setCartList={setCartList}
          setCartVisible={setCartVisible}
        />
      )}
    </div>
  );
}

// Modal Component

function Cart({ cartList, setCartList, setCartVisible }) {
  const onHandleClick = (cartProduct) => {
    const filteredCartList = cartList.filter(
      (product) => product.id !== cartProduct.id
    );

    setCartList(() => filteredCartList);

    localStorage.setItem('cartList', JSON.stringify(filteredCartList));
  };

  const handleClick = () => setCartVisible((prev) => !prev);

  return (
    <div className="Cart">
      <button onClick={handleClick}>close ❌</button>
      {cartList.map((productData) => {
        return (
          <div className="Cart__cartList" key={productData.id}>
            <div className="Cart__cartList--text">
              <button
                className="Cart__cartList__text--btn"
                onClick={() => onHandleClick(productData)}
              >
                ❌
              </button>
              <h1>{productData.title.split(' ').slice(0, 2).join(' ')}</h1>
              <span>
                {productData.description.split(' ').slice(0, 3).join(' ')}
              </span>
              <span>$ {productData.price}</span>
            </div>
            <div className="Cart__cartList--thumb">
              <img src={productData.thumbnail} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
