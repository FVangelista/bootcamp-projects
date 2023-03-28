import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Menu(props) {
  const { l1, l2, l3 } = props;

  return (
    <div
      className={`${styles.Menu} flex justify-content-around align-items-center`}
    >
      <h1 className=" h2">Home</h1>

      <ul className={`${styles.MenuItem}  flex  p-big`}>
        <li>
          <Link to={`/${l1}`}>{l1}</Link>
        </li>

        <li>
          <Link to={`/${l2}`}>{l2}</Link>
        </li>

        <li>
          <Link to={`/${l3}`}>{l3}</Link>
        </li>
      </ul>
    </div>
  );
}
