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
    <div className={`${styles.SingleActivity} section`}>
      <h2>Single activity</h2>
      <div className={`${styles.SingleItem} flex`}>
        <img
          src={dataItem.cover_image_url}
          alt={dataItem.title}
          className={styles.ItemImg}
        />
        <div className={styles.ItemText}>
          <h3 className="h3">{dataItem.title}</h3>
          <p className="p-big">{dataItem.description}</p>
        </div>
      </div>
      {/* {dataItem.categories.map((cat) => {
        return (
          <div className="section" key={cat.id}>
            <h3>{cat.name}</h3>
            <img src={cat.event_image_url} alt={cat.name} />
          </div>
        );
      })} */}
    </div>
  );
}
