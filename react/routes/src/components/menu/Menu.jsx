import { useState, useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

import { GiCrossroad } from 'react-icons/gi';

export default function Menu() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(() => e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/city/${inputValue.toLowerCase()}`);
  };

  // scroll effect nav
  const [header, setHeader] = useState('bg-transparent');

  const listenScrollEvent = (event) => {
    if (window.scrollY < 30) {
      return setHeader('');
    } else if (window.scrollY > 30) {
      return setHeader('bg-light');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <nav
      className={`${styles.Menu} ${header} flex flex-row-reverse justify-content-around align-items-center`}
    >
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
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="search by city"
          className={styles.navInput}
          onChange={handleChange}
        />
      </form>
      <div className={`${styles.navLogo} flex align-items-center h2`}>
        <GiCrossroad />
        <span>routes</span>
      </div>
    </nav>
  );
}
