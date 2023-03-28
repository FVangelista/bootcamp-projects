import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/pages/City.module.scss';

export default function City() {
  return (
    <div className={styles.City}>
      <h1>City</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/activity">Activity</Link>
        </li>
        <li>
          <Link to=":id">id</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
