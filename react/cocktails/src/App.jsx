import { useState, useEffect, useRef } from 'react';

import { FaArrowLeft, FaArrowUp } from 'react-icons/fa';

import logoNav from './assets/logoNav.svg';
import logo from './assets/logo.svg';
import video from './assets/video.mp4';
import reviews from './utils/mock/localData';

import { GET, objFilter, scrollToSection } from './utils/utils';
import styles from './App.module.scss';

// Root

function App() {
  const refs = {
    homeRef: useRef(null),
    mainRef: useRef(null),
    missionRef: useRef(null),
    formRef: useRef(null),
    footerRef: useRef(null),
  };

  const [isPopup, setPopup] = useState(false);
  const [mainList, setMainList] = useState([]);
  const [catValue, setCatValue] = useState('Shot');
  const [singleItemContext, setSingleItemContext] = useState({
    isVisible: false,
    payload: {},
    positionList: null,
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
        refs={refs}
      />

      <Main
        fetchList={filteredList(mainList, 'strCategory', catValue)}
        setSingleItemContext={setSingleItemContext}
        singleItemContext={singleItemContext}
        singleData={singleItemContext.payload}
        mainList={mainList}
        setCatValue={setCatValue}
        refs={refs}
      />

      <Mission refs={refs} />

      <Form refs={refs} setPopup={setPopup} isPopup={isPopup} />

      <Footer refs={refs} />
    </div>
  );
}

// Section Components
function Home({ setSingleItemContext, refs }) {
  return (
    <section ref={refs.homeRef} className={styles.Home}>
      <Navbar setSingleItemContext={setSingleItemContext} refs={refs} />

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
    refs,
  } = props;

  const handleClick = (value) => {
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
    <section ref={refs.mainRef} className={styles.Main}>
      {singleItemContext.isVisible ? (
        <SingleItem
          setSingleItemContext={setSingleItemContext}
          singleData={singleData}
          fetchList={fetchList}
          singleItemContext={singleItemContext}
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

function Form({ refs, setPopup, isPopup }) {
  // #0 Popup Visibility
  const handlePopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 2000);
  };

  // #1 Forms Visibility
  const [isDeleteVisible, setDeleteVisible] = useState(false);

  const handleClick = () => setDeleteVisible((prev) => !prev);

  // #2 Form Data
  const [formData, setFormData] = useState(
    localStorage.getItem('preorder')
      ? JSON.parse(localStorage.getItem('preorder'))
      : []
  );

  // #4 Local Storage
  useEffect(() => {
    localStorage.setItem('preorder', JSON.stringify(formData));
  }, [formData]);

  return (
    <section ref={refs.formRef} className={styles.Preorder}>
      <div className={styles.formWrapper}>
        {isPopup && (
          <Popup>
            <h3>{isDeleteVisible ? 'got it!' : 'thanks!'}</h3>
            <p>
              {isDeleteVisible
                ? 'your order has been deleted'
                : 'we received your order'}
            </p>
          </Popup>
        )}
        <h2 className={styles.title}>
          {isDeleteVisible ? 'see you soon!' : 'get your spot!'}
        </h2>

        {isDeleteVisible ? (
          <DeleteForm
            handlePopup={handlePopup}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <SubmitForm handlePopup={handlePopup} setFormData={setFormData} />
        )}

        <button onClick={handleClick} className={styles.delBtnForm}>
          {isDeleteVisible ? <FaArrowLeft /> : 'change your mind ?'}
        </button>
      </div>

      <button
        onClick={() => scrollToSection(refs.homeRef)}
        className={styles.btnUp}
      >
        <FaArrowUp />
      </button>
    </section>
  );
}

function Mission({ refs }) {
  return (
    <section ref={refs.missionRef} className={styles.Mission}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>spreading events</h1>
        <hr className={styles.line} />
        <h3 className={styles.textSub}>
          The first "cocktail party" ever thrown was allegedly by Julius S.
          Walsh Jr. of St. Louis, Missouri, in May 1917. Walsh invited 50 guests
          to her home at noon on a Sunday. The party lasted an hour until lunch
          was served at 1 p.m. The site of this first cocktail party still
          stands. In 1924, the Roman Catholic Archdiocese of St. Louis bought
          the Walsh mansion at 4510 Lindell Boulevard, and it has served as the
          local archbishop's residence ever since.
        </h3>
      </div>
      <div className={styles.reviews}>
        {reviews.map((user) => {
          return (
            <div className={styles.card}>
              <div className={styles.imgWrapper}>
                <img className={styles.userImg} src={user.img} alt="" />
              </div>
              <div className={styles.textWrapper}>
                <div className="title">
                  <h2 className={styles.name}>{user.name}</h2>
                  <span className={styles.age}>{user.age}</span>
                </div>
                <h4 className={styles.review}>{user.review}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer({ refs }) {
  return (
    <div ref={refs.footerRef} className={styles.Footer}>
      <div className={styles.info}>
        <span>&copy;cocktails by bortoletti.srl</span>
        <span>e-mail: random@random.com</span>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

// Small Components

function Navbar({ refs }) {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logoNav} alt="" />
      </div>

      <ul className={styles.menu}>
        <li onClick={() => scrollToSection(refs.homeRef)}>home</li>
        <li onClick={() => scrollToSection(refs.mainRef)}>Catalog</li>
        <li onClick={() => scrollToSection(refs.missionRef)}>mission</li>
        <li onClick={() => scrollToSection(refs.footerRef)}>contact</li>
      </ul>

      <button
        onClick={() => scrollToSection(refs.formRef)}
        className={styles.btn}
      >
        preorder
      </button>
    </div>
  );
}

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>make your choice</h1>
        <hr className={styles.line} />
        <h3 className={styles.textSub}>
          A cocktail is an alcoholic mixed drink. Most commonly, cocktails are
          either a single spirit or a combination of spirits, mixed with other
          ingredients such as juices, flavored syrups, tonic water, shrubs, and
          bitters.
        </h3>
      </div>
      <div className={styles.textWrapperSecond}>
        <h1 className={styles.text}>make your choice</h1>
        <hr className={styles.line} />
        <h3 className={styles.textSub}>
          In the modern world and the Information Age, cocktail recipes are
          widely shared online on websites. Cocktails and restaurants that serve
          them are frequently covered and reviewed in tourism magazines and
          guides.
        </h3>
      </div>
      <div className={styles.videoWrapper}>
        <video src={video} autoPlay loop muted></video>
      </div>
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
          fetchList={fetchList}
        />
      ))}
    </div>
  );
}

function Card({ data, setSingleItemContext, fetchList }) {
  const handleClick = () => {
    setSingleItemContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
      positionList: fetchList
        .map(function (e) {
          return e.strDrink;
        })
        .indexOf(data.strDrink),
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

function SingleItem({
  singleItemContext,
  setSingleItemContext,
  singleData,
  fetchList,
}) {
  const handleClick = () => {
    setSingleItemContext({
      isVisible: false,
    });
  };

  const handleNextBtn = () => {
    if (singleItemContext.positionList >= fetchList.length - 1) {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: fetchList[0],
        positionList: 0,
      }));
    } else {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: fetchList[prev.positionList + 1],
        positionList: prev.positionList + 1,
      }));
    }
  };

  const handlePrevtBtn = () => {
    if (singleItemContext.positionList <= 0) {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: fetchList[fetchList.length - 1],
        positionList: fetchList.length - 1,
      }));
    } else {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: fetchList[prev.positionList - 1],
        positionList: prev.positionList - 1,
      }));
    }
  };

  console.log(singleItemContext.positionList);

  return (
    <div className={styles.SingleItem}>
      <div className={styles.text}>
        <button onClick={handleClick} className={styles.btn}>
          <FaArrowLeft />
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
          <button
            onClick={handlePrevtBtn}
            className={`${styles.btn} ${styles.prev}`}
          >
            previous
          </button>
          <button
            onClick={handleNextBtn}
            className={`${styles.btn} ${styles.next}`}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

function SubmitForm({ handlePopup, setFormData }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleFirstInput = (e) => setFirstName(e.target.value);
  const handleLastInput = (e) => setLastName(e.target.value);
  const handleDateInput = (e) => setDate(e.target.value);
  const handleTimeInput = (e) => setTime(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => [
      ...prev,
      {
        id: Math.round(Math.random() * 1000),
        firstName,
        lastName,
        date,
        time,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        onChange={handleFirstInput}
        className={styles.textInput}
        type="text"
        placeholder="first name"
        required
      />
      <input
        onChange={handleLastInput}
        className={styles.textInput}
        type="text"
        placeholder="last name"
        required
      />
      <input
        onChange={handleDateInput}
        className={styles.dateInput}
        type="date"
        required
      />
      <input
        onChange={handleTimeInput}
        className={styles.timeInput}
        type="time"
        required
      />
      <input
        onClick={handlePopup}
        className={styles.subInput}
        type="submit"
        value="submit"
      />
    </form>
  );
}

function DeleteForm({ handlePopup, formData, setFormData }) {
  const [isId, setId] = useState(null);
  const [lastName, setLastName] = useState('');

  const handleLastInput = (e) => setLastName(e.target.value);
  const handleNumberInput = (e) => setId(e.target.value);

  const handleDelete = (e) => {
    e.preventDefault();

    const filteredStorage = formData.filter((user) => {
      if ((user.id !== Number(isId)) | (user.lastName !== lastName)) {
        return user;
      }
    });

    setFormData(() => filteredStorage);
    localStorage.setItem('preorder', JSON.stringify(filteredStorage));
  };
  console.log(formData);

  return (
    <form onSubmit={handleDelete} className={styles.form}>
      <input
        onChange={handleNumberInput}
        className={styles.textInput}
        type="number"
        placeholder="order n°"
      />

      <input
        onChange={handleLastInput}
        className={styles.textInput}
        type="text"
        placeholder="last name"
      />
      <input
        onClick={handlePopup}
        className={styles.subInput}
        type="submit"
        value="Delete"
      />
    </form>
  );
}

// Side Components

function Popup({ children }) {
  return <div className={styles.Popup}>{children}</div>;
}

export default App;
