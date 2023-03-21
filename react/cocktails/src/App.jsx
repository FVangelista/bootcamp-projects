import { useState, useEffect } from 'react';
import { FaCocktail } from 'react-icons/fa';

import GET from './utils/utils';
import './App.scss';

function App() {
  const [mainList, setMainList] = useState([]);
  const [catValue, setCatValue] = useState('Cocktail');
  const [singleItemContext, setSingleItemContext] = useState({
    isVisible: false,
    payload: {},
  });

  useEffect(() => {
    GET('search.php?f=a').then(({ drinks }) => setMainList(drinks));
  }, []);

  const filteredList = (list, key, value) =>
    list.filter((item) => item[key] === value);

  return (
    <div className="App">
      <Navbar setSingleItemContext={setSingleItemContext} />

      {singleItemContext.isVisible ? (
        <SingleItem data={singleItemContext.payload} />
      ) : (
        <>
          <Hero fetchList={mainList} setCatValue={setCatValue} />
          <Content
            fetchList={filteredList(mainList, 'strCategory', catValue)}
            setSingleItemContext={setSingleItemContext}
          />
        </>
      )}
    </div>
  );
}

// Components

function Navbar({ setSingleItemContext }) {
  const handleClick = () => {
    setSingleItemContext({ isVisible: false });
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <FaCocktail />
      </div>

      <ul className="menu">
        <li onClick={handleClick}>home</li>
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

function Hero({ fetchList, setCatValue }) {
  const handleClick = (value) => {
    console.log(value);
    setCatValue(value);
  };

  const result = fetchList.reduce((acc, x) => {
    const index = acc.findIndex((y) => y.strCategory === x.strCategory);
    if (index >= 0) {
      acc.splice(index, 0);
    } else {
      acc.push(x);
    }
    return acc;
  }, []);

  return (
    <div className="Hero">
      <h1 className="Hero__text">All about your favorite cocktail</h1>
      <h3 className="Hero__text--sub">choose wisely</h3>
      <hr className="line" />
      <ul className="list-nav-hero">
        {result.map((item, i) => (
          <li onClick={() => handleClick(item.strCategory)} key={i}>
            {item.strCategory.split(' ').splice(0, 1).join(' ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Content({ fetchList, setSingleItemContext }) {
  return (
    <div className="Content">
      {fetchList.map((item) => (
        <Card
          data={item}
          key={item.idDrink}
          setSingleItemContext={setSingleItemContext}
        />
      ))}
    </div>
  );
}

function Card(props) {
  const { data, setSingleItemContext } = props;

  const handleClick = () => {
    setSingleItemContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));
  };

  let obj = [];

  for (let prop in data) {
    if (prop.includes('strIngredient') && data[prop] != null) {
      obj.push(data[prop]);
    }
  }

  return (
    <div className="Card" onClick={handleClick}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className="info">
        <h2>{data.strDrink}</h2>
        <ul>
          {obj.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SingleItem({ data }) {
  let obj = [];

  for (let prop in data) {
    if (prop.includes('strIngredient') && data[prop] != null) {
      obj.push(data[prop]);
    }
  }

  return (
    <div className="SingleItem">
      <div className="SingleItem__text">
        <div className="SingleItem__text--plain">
          <h1>{data.strDrink}</h1>
          <h4>{data.strCategory}</h4>
          <h4>{data.strGlass}</h4>
        </div>
        <ul className="SingleItem__text--list">
          <h3>ingredients</h3>
          {obj.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul className="SingleItem__text--list">
          <h3>instructions</h3>
          <li>{data.strInstructions}</li>
        </ul>
      </div>
      <div className="SingleItem__img">
        <img src={data.strDrinkThumb} alt="" />
        <div className="SingleItem__img--caroussel">
          <button className="prev">previous</button>
          <button className="next">next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
