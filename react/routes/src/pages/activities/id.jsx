import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './id.module.scss';

export default function SingleActivity() {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDataItem(data));
  }, []);

  return (
    <div className={`${styles.SingleActivity} `}>
      <h2>Single activity</h2>
      <div className={`${styles.SingleItem} section flex`}>
        <img
          src={dataItem.image}
          alt={dataItem.title}
          className={styles.ItemImg}
        />
        <div className={styles.ItemText}>
          <h3 className="h3">{dataItem.title}</h3>
          <p className="p-big">{dataItem.description}</p>
        </div>
      </div>
    </div>
  );
}
