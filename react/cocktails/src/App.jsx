import { useState, useEffect } from 'react';
import { FaCocktail } from 'react-icons/fa';

import GET from './utils/utils';
import './App.scss';

function App() {
  const [mainList, setMainList] = useState([]);

  useEffect(() => {
    GET('search.php?f=a').then(({ drinks }) => setMainList(drinks));
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content fetchList={mainList} />
    </div>
  );
}

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <FaCocktail />
      </div>

      <ul className="menu">
        <li>home</li>
        <li>about</li>
        <li>mission</li>
        <li>contact</li>
        <li>
          <button className="btn">preorder</button>
        </li>
      </ul>
    </div>
  );
}

function Hero() {
  return (
    <div className="Hero">
      <h1>All about your favorite cocktail</h1>
      <h3>choose wisely</h3>
      <ul className="list-nav-hero">
        <li>item1</li>
        <li>iten2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
    </div>
  );
}

function Content({ fetchList }) {
  return (
    <div className="Content">
      {fetchList.map((item) => (
        <Card data={item} key={item.idDrink} />
      ))}
    </div>
  );
}

function Card(props) {
  const { data } = props;
  return (
    <div className="Card">
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className="info">
        <h2>{data.strDrink}</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
