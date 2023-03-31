import styles from './index.module.scss';
import { GiCrossroad } from 'react-icons/gi';

export default function () {
  return (
    <footer className={styles.Footer}>
      <div className={`${styles.navLogo} flex align-items-center h2`}>
        <GiCrossroad />
        <span>routes</span>
      </div>
      <span>&copy; routes .srl</span>
    </footer>
  );
}
