import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

import { GiAirplaneDeparture } from 'react-icons/gi';

export default function Menu() {
  return (
    <nav
      className={`${styles.Menu} container flex flex-row-reverse justify-content-between align-items-center`}
    >
      <div className={`${styles.navLogo} flex align-items-center h2`}>
        <GiAirplaneDeparture />
        <span>Routes</span>
      </div>
      <ul className={`${styles.navList} p-big flex`}>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          home
        </NavLink>
        <NavLink to={`/about`}>about</NavLink>
        <NavLink to={`/activities`}>activities</NavLink>
      </ul>
    </nav>
  );
}
