import { useState, useEffect, useContext } from 'react';
import { Context } from '../../store';
import { randomHSLA } from '../../utils/funcs';
import styles from './index.module.scss';

const Task = ({ taskData }) => {
  const { store, dispatch } = useContext(Context);

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.info}>
        <img src={taskData.image} alt={taskData.username} />
        {taskData.completed && <button>V</button>}
      </div>
      <div className={styles.content}>
        <span>{taskData.username}</span>
        <p>{taskData.todo}</p>
      </div>
    </div>
  );
};

export default Task;
