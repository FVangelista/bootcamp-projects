import styles from './index.module.scss';
import { FaArrowLeft } from 'react-icons/fa';

import { objFilter } from '../../utils/utils';

function MainContentItem({
  singleItemContext,
  setSingleItemContext,
  singleData,
  fetchList,
}) {
  const handleClick = () => {
    setSingleItemContext({
      isVisible: false,
    });
  };

  const handleNextBtn = () => {
    if (singleItemContext.positionList >= fetchList.length - 1) {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: fetchList[0],
        positionList: 0,
      }));
    } else {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: fetchList[prev.positionList + 1],
        positionList: prev.positionList + 1,
      }));
    }
  };

  const handlePrevtBtn = () => {
    if (singleItemContext.positionList <= 0) {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: fetchList[fetchList.length - 1],
        positionList: fetchList.length - 1,
      }));
    } else {
      setSingleItemContext((prev) => ({
        ...prev,
        payload: fetchList[prev.positionList - 1],
        positionList: prev.positionList - 1,
      }));
    }
  };

  console.log(singleItemContext.positionList);

  return (
    <div className={styles.SingleItem}>
      <div className={styles.text}>
        <button onClick={handleClick} className={styles.btn}>
          <FaArrowLeft />
        </button>
        <div className={styles.plain}>
          <h1 className={styles.title}>{singleData.strDrink}</h1>
          <h4>{singleData.strCategory}</h4>
          <h4>{singleData.strGlass}</h4>
        </div>
        <div className={styles.lists}>
          <ul className={styles.list}>
            <h3 className={styles.title}>ingredients</h3>
            {objFilter(singleData, 'strIngredient').map((item, i) => (
              <li className={styles.item} key={i}>
                {item}
              </li>
            ))}
          </ul>
          <ul className={styles.list}>
            <h3 className={styles.title}>instructions</h3>
            <li className={styles.item}>{singleData.strInstructions}</li>
          </ul>
        </div>
      </div>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={singleData.strDrinkThumb} alt="" />

        <div className={styles.caroussel}>
          <button
            onClick={handlePrevtBtn}
            className={`${styles.btn} ${styles.prev}`}
          >
            previous
          </button>
          <button
            onClick={handleNextBtn}
            className={`${styles.btn} ${styles.next}`}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContentItem;
