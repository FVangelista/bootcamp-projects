import { useState, useEffect, useRef } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import logoNav from './assets/logoNav.svg';
import logo from './assets/logo.svg';

import { GET, objFilter } from './utils/utils';
import styles from './App.module.scss';

import styled from 'styled-components';

// Root

function App() {
  const homeRef = useRef(null);
  const mainRef = useRef(null);
  const formRef = useRef(null);

  const [isPopup, setPopup] = useState(false);
  const [mainList, setMainList] = useState([]);
  const [catValue, setCatValue] = useState('Shot');
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
      <Home
        setSingleItemContext={setSingleItemContext}
        setPopup={setPopup}
        mainList={mainList}
        setCatValue={setCatValue}
      />

      <Main
        fetchList={filteredList(mainList, 'strCategory', catValue)}
        setSingleItemContext={setSingleItemContext}
        singleItemContext={singleItemContext}
        singleData={singleItemContext.payload}
        mainList={mainList}
        setCatValue={setCatValue}
      />

      <Form />
      <Footer />
    </div>
  );
}

// Main Components
function Home(props) {
  const { setSingleItemContext, setPopup, mainList, setCatValue } = props;
  return (
    <section className={styles.Home}>
      <Navbar setSingleItemContext={setSingleItemContext} setPopup={setPopup} />
      <Hero />
    </section>
  );
}

function Main(props) {
  const {
    fetchList,
    setSingleItemContext,
    singleItemContext,
    singleData,
    mainList,
    setCatValue,
  } = props;

  const handleClick = (value) => {
    console.log(value);
    setCatValue(value);
  };

  const result = mainList.reduce((acc, x) => {
    const index = acc.findIndex((y) => y.strCategory === x.strCategory);
    if (index >= 0) {
      acc.splice(index, 0);
    } else {
      acc.push(x);
    }
    return acc;
  }, []);

  return (
    <section className={styles.Main}>
      {singleItemContext.isVisible ? (
        <SingleItem
          setSingleItemContext={setSingleItemContext}
          singleData={singleData}
        />
      ) : (
        <>
          <ul className={styles.navMain}>
            {result.map((item, i) => (
              <li
                className={styles.navMainList}
                onClick={() => handleClick(item.strCategory)}
                key={i}
              >
                {item.strCategory.split(' ').splice(0, 1).join(' ')}
              </li>
            ))}
          </ul>
          <Content
            fetchList={fetchList}
            setSingleItemContext={setSingleItemContext}
          />
        </>
      )}
    </section>
  );
}

function Form() {
  return <section className={styles.Form}></section>;
}

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.info}>
        <span>&copy;cocktails bortoletti.srl</span>
        <span>e-mail: random@random.com</span>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

// Small Components

function Navbar({ setPopup }) {
  const handlePopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 2000);
  };

  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logoNav} alt="" />
      </div>

      <ul className={styles.menu}>
        <li>home</li>
        <li>about</li>
        <li>mission</li>
        <li>contact</li>
        <li>
          <button onClick={handlePopup} className={styles.btn}>
            preorder
          </button>
        </li>
      </ul>
    </div>
  );
}

// Styled Components

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
  padding: 25px;
  height: 250px;
  width: 75%;
  max-width: 1600px;
  margin: 0 auto;
`;

const HeroText = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #b10027;
`;
const LineHero = styled.hr`
  height: 100%;
  border: 0.75px solid #b1002681;
`;

const HeroSub = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: capitalize;
  text-align: start;
  letter-spacing: 0.1rem;
  color: #b4ced4;
`;

function Hero() {
  return (
    <HeroWrapper>
      <HeroText>make your choice</HeroText>
      <LineHero />
      <HeroSub>
        A cocktail is an alcoholic mixed drink. Most commonly, cocktails are
        either a single spirit or a combination of spirits, mixed with other
        ingredients such as juices, flavored syrups, tonic water, shrubs, and
        bitters.
      </HeroSub>
    </HeroWrapper>
    // <div className={styles.Hero}>
    //   <h1 className={styles.text}>make your choice</h1>
    //   <hr className={styles.line} />
    //   <h3 className={styles.textSub}>
    //     A cocktail is an alcoholic mixed drink. Most commonly, cocktails are
    //     either a single spirit or a combination of spirits, mixed with other
    //     ingredients such as juices, flavored syrups, tonic water, shrubs, and
    //     bitters.
    //   </h3>
    // </div>
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

function SingleItem({ setSingleItemContext, singleData }) {
  const handleClick = () => {
    setSingleItemContext({ isVisible: false });
  };

  return (
    <div className={styles.SingleItem}>
      <div className={styles.text}>
        <button onClick={handleClick} className={styles.btn}>
          <IoMdArrowRoundBack />
        </button>
        <div className={styles.plain}>
          <h1 className={styles.title}>{singleData.strDrink}</h1>
          <h4>{singleData.strCategory}</h4>
          <h4>{singleData.strGlass}</h4>
        </div>
        <div className={styles.lists}>
          <ul className={styles.list}>
            <h3 className={styles.title}>ingredients</h3>
            {objFilter(singleData, 'strIngredient').map((item, i) => (
              <li className={styles.item} key={i}>
                {item}
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            <h3 className={styles.title}>instructions</h3>
            <li className={styles.item}>{singleData.strInstructions}</li>
          </ul>
        </div>
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

// Side Components

function Popup({ children }) {
  return <div className={styles.Popup}>{children}</div>;
}

export default App;

// {isPopup && (
//   <Popup>
//     <h3>got it!</h3>
//     <p>thank you for your order.</p>
//   </Popup>
// )}
