import { useState, useEffect, useRef } from 'react';

import Home from './components/home';
import MainSection from './components/mainSection';
import MissionSection from './components/missionSection';
import FormSection from './components/formSection';
import FooterSection from './components/footerSection';

import { GET } from './utils/utils';
import styles from './App.module.scss';

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
  const [catValue, setCatValue] = useState('Cocktail');
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
      <MainSection
        fetchList={filteredList(mainList, 'strCategory', catValue)}
        setSingleItemContext={setSingleItemContext}
        singleItemContext={singleItemContext}
        singleData={singleItemContext.payload}
        mainList={mainList}
        setCatValue={setCatValue}
        refs={refs}
      />
      <MissionSection refs={refs} />
      <FormSection refs={refs} setPopup={setPopup} isPopup={isPopup} />
      <FooterSection refs={refs} />
    </div>
  );
}

export default App;
