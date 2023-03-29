import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';

export default function Card({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/activities/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles.Card} flex flex-column justify-content-between`}
    >
      <div className={styles.CardText}>
        <h3 className="h3">{data.title.split(' ').splice(0, 2).join(' ')}</h3>
        <p className="p-big">
          {data.description.split(' ').splice(0, 6).join(' ')}
        </p>
      </div>
      <img src={data.image} alt={data.title} className={styles.CardImg} />
    </div>
  );
}
