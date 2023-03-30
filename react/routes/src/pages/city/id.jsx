import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './index.module.scss';
import cities from '../../mock/cities.json';

export default function City() {
  const { id } = useParams();

  const [city, setCity] = useState([]);

  useEffect(() => {
    const filterList = cities.data.filter((item) =>
      item.name.toLocaleLowerCase().includes(id)
    );
    setCity(filterList[0]);
  }, []);

  return (
    <div className={`${styles.City} section`}>
      <div className={`${styles.cityWrapper} flex flex-column`}>
        <img
          src={city.cover_image_url}
          alt={city.name}
          className={styles.cityImg}
        />
        <div
          className={`${styles.cityInfo} flex flex-column justify-content-center align-items-center`}
        >
          <h1>
            <b>{city.name}</b>
          </h1>
          <h2>{/* {city.country.name} - {city.country.iso_code} */}</h2>
          <h3>UTC: {city.time_zone}</h3>
        </div>
      </div>
    </div>
  );
}
