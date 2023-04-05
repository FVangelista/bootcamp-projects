import { useContext } from 'react';
import { Context } from '../../store';
import scss from './index.module.scss';

function ModalContent() {
  const { state, dispatch } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_NEW_TASK',
      payload: state.tempTodo,
    });

    dispatch({ type: 'SET_MODAL_VISIBILITY', payload: false });
    dispatch({ type: 'SET_TEMP_ID', payload: state.tasksListData.length + 1 });
  };

  const handleClick = () => {
    dispatch({ type: 'SET_MODAL_VISIBILITY', payload: false });
  };

  const handleUsername = (e) => {
    dispatch({ type: 'SET_TEMP_USERNAME', payload: e.target.value });
  };

  const handleTodo = (e) => {
    dispatch({ type: 'SET_TEMP_TODO', payload: e.target.value });
  };

  const handleImg = (e) => {
    dispatch({ type: 'SET_TEMP_IMG', payload: e.target.value });
  };

  const handleCheck = (e) => {
    dispatch({ type: 'SET_TEMP_CHECK', payload: e.target.checked });
  };

  return (
    <section
      className={state.isModalVisible ? scss['ModalContent'] : scss['hide']}
    >
      <button onClick={handleClick} type="button" className={scss.close_btn}>
        close
      </button>
      <form onSubmit={handleSubmit} action="" className={scss.form}>
        <input onChange={handleUsername} type="text" placeholder="username" />
        <input
          onChange={handleTodo}
          type="text"
          className={scss.text_area}
          placeholder="todo"
        />
        <input onChange={handleImg} type="text" placeholder="img" />
        <input onChange={handleCheck} type="checkbox" />
        <input type="submit" className={scss.btn} />
      </form>
    </section>
  );
}

export default ModalContent;
