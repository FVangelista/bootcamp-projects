import { useState, useEffect, useContext } from 'react';
import { Context } from '../../store';
import { GET } from '../../utils/http';
import Task from '../task/Task';
import styles from './index.module.scss';

const TasksList = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    GET('todos').then((res) => {
      dispatch({ type: 'SET_TASKS_LIST', payload: res.todos });
    });
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
