import { useContext, useReducer } from 'react';
import { Context } from './store';
import { initialState } from './store/state';
import { mainReducer } from './store/reducers';
import Hero from './components/hero';
import TasksList from './components/tasksList';
import styles from './App.module.scss';
import ModalContent from './components/modalContent';

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'SET_MODAL_VISIBILITY', payload: true });
  };

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        <TasksList />
        <button onClick={handleClick} className={styles.addTodo}>
          {'+'}
        </button>

        <ModalContent />
      </Context.Provider>
    </div>
  );
}

export default App;
