import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import data from '../../mock/activities.json';
import styles from './id.module.scss';

export default function SingleActivity() {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState({});

  useEffect(() => {
    const filteredData = data.data.filter((item) => item.uuid === id);
    setDataItem(filteredData[0]);
  }, []);

  return (
    <div className={styles.SingleActivity}>
      <h2 className={styles.title}>Single activity</h2>
      <div className={`${styles.SingleItem} flex flex-column`}>
        <img
          src={dataItem.cover_image_url}
          alt={dataItem.title}
          className={styles.ItemImg}
        />
        <div className={`${styles.ItemText} flex flex-column`}>
          <h3 className="h3">{dataItem.title}</h3>
          <p className="p-big">{dataItem.about}</p>
        </div>
      </div>
    </div>
  );
}
