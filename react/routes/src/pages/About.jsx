import { Link } from 'react-router-dom';
import styles from '../styles/pages/About.module.scss';

export default function About() {
  return (
    <div className={styles.About}>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/activity">Activity</Link>
        </li>

        <li>
          <Link to="/city">City</Link>
        </li>
      </ul>
    </div>
  );
}
