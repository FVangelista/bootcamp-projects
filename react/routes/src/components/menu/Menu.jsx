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
    navigate(
      `/city/${
        inputValue === ' ' || inputValue === ''
          ? '0000000'
          : inputValue.toLowerCase()
      }`
    );

    setInputValue(() => ' ');
  };

  // scroll effect nav
  const [header, setHeader] = useState('bg-alpha');

  const listenScrollEvent = (event) => {
    if (window.scrollY < 70) {
      return setHeader('bg-alpha');
    } else if (window.scrollY > 70) {
      return setHeader('bg');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <nav
      className={`${styles.Menu} ${header} flex flex-row-reverse  align-items-center`}
    >
      <ul className={`${styles.navList} p-big flex`}>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'activeNav' : 'link')}
        >
          home
        </NavLink>
        <NavLink
          to={`/about`}
          className={({ isActive }) => (isActive ? ' activeNav' : 'link')}
        >
          about
        </NavLink>
        <NavLink
          to={`/activities`}
          className={({ isActive }) => (isActive ? 'activeNav' : 'link')}
        >
          activities
        </NavLink>
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
