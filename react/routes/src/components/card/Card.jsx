import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
import { AiFillStar } from 'react-icons/ai';

export default function Card({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/activities/${data.uuid}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.Card} flex flex-column justify-content-between`}
    >
      <div className={styles.ImgWrapper}>
        <img
          src={data.cover_image_url}
          alt={data.title}
          className={styles.CardImg}
        />
      </div>

      <div className={styles.CardText}>
        <div
          className={`${styles.TextHeader} flex justify-content-between align-center`}
        >
          <p>
            {data.city.name}, {data.city.country.name}
          </p>
          <span>
            <AiFillStar />
            {data.reviews_avg}
          </span>
        </div>
        <p className="">{data.title.split(' ').splice(0, 5).join(' ')}...</p>
      </div>
    </div>
  );
}
