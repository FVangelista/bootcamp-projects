import styles from './index.module.scss';
import MainCard from '../mainCard';

function MainContent({ fetchList, setSingleItemContext }) {
  return (
    <div className={styles.Content}>
      {fetchList.map((item) => (
        <MainCard
          data={item}
          key={item.idDrink}
          setSingleItemContext={setSingleItemContext}
          fetchList={fetchList}
        />
      ))}
    </div>
  );
}

export default MainContent;
