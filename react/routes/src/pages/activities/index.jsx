import { useState, useEffect } from 'react';

import CardList from '../../components/cardList';

import styles from '../../styles/pages/Activities.module.scss';

export default function Activities() {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setDataItems(data));
  }, []);

  return (
    <div className={`${styles.Activities} `}>
      <h2>Activities</h2>
      <CardList data={dataItems} />
    </div>
  );
}
