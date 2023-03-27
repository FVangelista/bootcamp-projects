import styles from './index.module.scss';

import MainContent from '../mainContent';
import MainContentItem from '../mainContentItem';

function MainSection(props) {
  const {
    fetchList,
    setSingleItemContext,
    singleItemContext,
    singleData,
    mainList,
    setCatValue,
    refs,
  } = props;

  const handleClick = (value) => {
    setCatValue(value);
  };

  const result = mainList.reduce((acc, x) => {
    const index = acc.findIndex((y) => y.strCategory === x.strCategory);
    if (index >= 0) {
      acc.splice(index, 0);
    } else {
      acc.push(x);
    }
    return acc;
  }, []);

  return (
    <section ref={refs.mainRef} className={styles.Main}>
      {singleItemContext.isVisible ? (
        <MainContentItem
          setSingleItemContext={setSingleItemContext}
          singleData={singleData}
          fetchList={fetchList}
          singleItemContext={singleItemContext}
        />
      ) : (
        <>
          <ul className={styles.navMain}>
            {result.map((item, i) => (
              <li
                className={styles.navMainList}
                onClick={() => handleClick(item.strCategory)}
                key={i}
              >
                {item.strCategory.split(' ').splice(0, 1).join(' ')}
              </li>
            ))}
          </ul>
          <MainContent
            fetchList={fetchList}
            setSingleItemContext={setSingleItemContext}
          />
        </>
      )}
    </section>
  );
}

export default MainSection;
