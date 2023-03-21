import { useState, useEffect } from 'react';
import { FaCocktail } from 'react-icons/fa';

import GET from './utils/utils';
import './App.scss';

function App() {
  const [mainList, setMainList] = useState([]);
  const [singleItemContext, setSingleItemContext] = useState({
    isVisible: false,
    payload: {},
  });

  useEffect(() => {
    GET('search.php?f=d').then(({ drinks }) => setMainList(drinks));
  });

  return (
    <div className="App">
      <Navbar />
      <SingleItem
        data={singleItemContext.payload}
        setSingleItemContext={setSingleItemContext}
      />
      {/* <Hero />
      <Content fetchList={mainList} /> */}
    </div>
  );
}

// Components

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
      <h1 className="Hero__text">All about your favorite cocktail</h1>
      <h3 className="Hero__text--sub">choose wisely</h3>
      <hr className="line" />
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

function SingleItem({ setSingleItemContext }) {
  return (
    <div className="singleItem">
      <div className="singleItem__text">
        <h1>Refreshing Drink</h1>
        <p>strCategory</p>
        <p>strGlass</p>
        <ul>
          <h3>ingredients</h3>
          <li>strIngredient1</li>
        </ul>
        <ul>
          <h3>instructions</h3>
          <li>strIngredient1</li>
        </ul>
      </div>
      <div className="singleItem__img">
        {/* strDrinkThumb */}
        <img
          src="https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg"
          alt=""
        />
        <div className="singleItem__img--caroussel">
          <button>previous</button>
          <button>next</button>
        </div>
      </div>
    </div>
  );
}
export default App;
