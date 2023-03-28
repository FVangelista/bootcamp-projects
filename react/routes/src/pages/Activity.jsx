import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/pages/Activity.module.scss';

export default function Activity() {
  return (
    <div className={styles.Contacts}>
      <h1>Activity</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/city">City</Link>
        </li>
        <li>
          <Link to=":id">id</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
