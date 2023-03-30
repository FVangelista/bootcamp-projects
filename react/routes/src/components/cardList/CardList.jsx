import Card from '../card';

import styles from './index.module.scss';

export default function CardList({ data }) {
  return (
    <div
      className={`${styles.CardList} section flex justify-content-center flex-wrap`}
    >
      {data.map((item, i) => (
        <Card data={item} key={i} />
      ))}
    </div>
  );
}
