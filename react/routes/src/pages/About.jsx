import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/pages/About.module.scss';

export default function About() {
  const navigate = useNavigate();

  const [inputTimeValue, setInputTimeValue] = useState('');

  const onHandleClick = () => {
    navigate(`/?time=${inputTimeValue}`);
  };

  const onHandleInputTime = (e) => {
    setInputTimeValue(() => e.target.value);
  };
  return (
    <div className={styles.About}>
      <h2 className={styles.title}>About</h2>

      <div className={styles.search}>
        <input
          value={inputTimeValue}
          onChange={onHandleInputTime}
          type="text"
          placeholder="write a query"
        />
        <button onClick={onHandleClick}>Send</button>
      </div>
    </div>
  );
}
