import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import styles from './index.module.scss';
import cities from '../../mock/cities.json';

export default function City() {
  const { id } = useParams();
  const location = useLocation();

  const [city, setCity] = useState([]);

  useEffect(() => {
    const filterList = cities.filter((item) =>
      id ? item.title.toLowerCase().includes(id) : []
    );

    setCity(filterList[0]);
  }, [location]);

  return (
    <div className={`${styles.City} section`}>
      <h2 className={styles.title}>city</h2>
      {city ? (
        <div className={`${styles.cityWrapper} flex align-items-center`}>
          <img
            src={city.cover_image_url}
            alt={city.title}
            className={styles.cityImg}
          />
          <div
            className={`${styles.cityInfo} flex flex-column justify-content-center align-items-start`}
          >
            <h1>
              <b>{city.title}</b>
            </h1>
            <h2>
              {city.country} - {city.iso_code}
            </h2>
            <h3>UTC: {city.time_zone}</h3>
          </div>
        </div>
      ) : (
        <h2>404</h2>
      )}
    </div>
  );
}
