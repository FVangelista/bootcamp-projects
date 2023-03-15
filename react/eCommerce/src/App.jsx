import CardList from './components/cardList';
import Hero from './components/hero';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar';
import MiniCardList from './components/miniCardList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MiniCardList />
      <CardList title="Technology" endpoint="/products?limit=10" />
      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
    </div>
  );
}

export default App;
