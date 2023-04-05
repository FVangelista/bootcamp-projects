import { useState, useEffect, useContext } from 'react';
import { Context } from '../../store';
import data from '../../utils/mock/mock.json';
import Task from '../task/Task';
import styles from './index.module.scss';

const TasksList = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: 'SET_TASKS_LIST', payload: data.todos });
  }, []);

  return (
    <div className={styles.TasksList}>
      {state.tasksListData.map((task) => (
        <Task taskData={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
