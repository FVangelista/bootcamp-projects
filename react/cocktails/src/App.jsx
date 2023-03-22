import { useState, useEffect } from 'react';
import { FaCocktail } from 'react-icons/fa';

import { GET, objFilter } from './utils/utils';
import styles from './App.module.scss';

// Root

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
    <div className={styles.App}>
      <Navbar setSingleItemContext={setSingleItemContext} />

      {singleItemContext.isVisible ? (
        <SingleItem
          singleData={singleItemContext.payload}
          fetchList={filteredList(mainList, 'strCategory', catValue)}
        />
      ) : (
        <>
          <Hero fetchList={mainList} setCatValue={setCatValue} />
          <Content
            fetchList={filteredList(mainList, 'strCategory', catValue)}
            setSingleItemContext={setSingleItemContext}
          />
        </>
      )}

      <Footer />
    </div>
  );
}

// Components

function Navbar({ setSingleItemContext }) {
  const handleClick = () => {
    setSingleItemContext({ isVisible: false });
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <FaCocktail />
      </div>

      <ul className={styles.menu}>
        <li onClick={handleClick}>home</li>
        <li>about</li>
        <li>mission</li>
        <li>contact</li>
        <li>
          <button className={styles.btn}>preorder</button>
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
    <div className={styles.Hero}>
      <h1 className={styles.text}>All about your favorite cocktail</h1>
      <h3 className={styles.textSub}>choose wisely</h3>
      <hr className={styles.line} />
      <ul className={styles.navHero}>
        {result.map((item, i) => (
          <li
            className={styles.navHeroList}
            onClick={() => handleClick(item.strCategory)}
            key={i}
          >
            {item.strCategory.split(' ').splice(0, 1).join(' ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Content({ fetchList, setSingleItemContext }) {
  return (
    <div className={styles.Content}>
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

  return (
    <div className={styles.Card} onClick={handleClick}>
      <img
        className={styles.img}
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className={styles.info}>
        <h2>{data.strDrink}</h2>
        <ul className={styles.list}>
          {objFilter(data, 'strIngredient').map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SingleItem({ singleData, fetchList }) {
  const handleClick = () => {};

  return (
    <div className={styles.SingleItem}>
      <div className={styles.text}>
        <div className={styles.plain}>
          <h1 className={styles.title}>{singleData.strDrink}</h1>
          <h4>{singleData.strCategory}</h4>
          <h4>{singleData.strGlass}</h4>
        </div>
        <ul className={styles.list}>
          <h3>ingredients</h3>
          {objFilter(singleData, 'strIngredient').map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul className={styles.list}>
          <h3>instructions</h3>
          <li>{singleData.strInstructions}</li>
        </ul>
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={singleData.strDrinkThumb} alt="" />

        <div className={styles.caroussel}>
          <button className={`${styles.btn} ${styles.prev}`}>previous</button>
          <button className={`${styles.btn} ${styles.next}`}>next</button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.info}>
        <h4>e-mail: random@random.com</h4>
        <p>&copy;cocktails .srl</p>
      </div>
      <div className={styles.logo}>
        <FaCocktail />
      </div>
    </div>
  );
}

export default App;
