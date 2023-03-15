import CardList from './components/cardList';
import Hero from './components/hero';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar';
import MiniCardList from './components/miniCardList';

import { useState } from 'react';

import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="App">
      <Navbar inputValue={inputValue} setInputValue={setInputValue} />
      <Hero />
      <MiniCardList inputValue={inputValue} />
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
    </div>
  );
}

export default App;
