import { useState, useEffect } from 'react';

import CardList from '../../components/cardList';

import data from '../../mock/activities.json';
import styles from '../../styles/pages/Activities.module.scss';

export default function Activities() {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    setDataItems(data.data);
  }, []);

  return (
    <div className={`${styles.Activities} section `}>
      <h2 className={styles.title}>Activities</h2>
      <CardList data={dataItems} />
    </div>
  );
}
