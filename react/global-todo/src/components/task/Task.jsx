import { useState, useEffect, useContext } from 'react';

import { GET } from '../../utils/http';
import { randomHSLA } from '../../utils/funcs';
import styles from './index.module.scss';

const Task = ({ taskData }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    GET(`users/${taskData.userId}`).then((data) => setUserData(data));
  }, []);

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.info}>
        <img src={userData.image} alt={userData.username} />
        {taskData.completed && <button>V</button>}
      </div>
      <div className={styles.content}>
        <span>{userData.username}</span>
        <p>{taskData.todo}</p>
      </div>
    </div>
  );
};

export default Task;
