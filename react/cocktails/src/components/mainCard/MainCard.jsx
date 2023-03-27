import styles from './index.module.scss';
import { objFilter } from '../../utils/utils';

function MainCard({ data, setSingleItemContext, fetchList }) {
  const handleClick = () => {
    setSingleItemContext((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
      positionList: fetchList
        .map(function (e) {
          return e.strDrink;
        })
        .indexOf(data.strDrink),
    }));
  };

  return (
    <div className={styles.Card} onClick={handleClick}>
      <img
        className={styles.img}
        src={data.strDrinkThumb}
        alt={data.strDrink}
      />
      <div className={styles.info}>
        <h2>{data.strDrink}</h2>
        <ul className={styles.list}>
          {objFilter(data, 'strIngredient').map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainCard;
