import { useContext, useState } from 'react';
import { Context } from '../../store';
import scss from './index.module.scss';

function ModalContent() {
  const [textValue, setTextValue] = useState('');
  const [isChecked, setChecked] = useState(null);

  const { state, dispatch } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_NEW_TASK',
      payload: {
        id: state.tasksListData.length + 1,
        todo: textValue,
        completed: isChecked,
        userId: Math.round(Math.random() * 10000),
      },
    });

    dispatch({ type: 'false' });
  };

  const handleClick = () => {
    dispatch({ type: 'false' });
  };

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <section
      className={state.isModalVisible ? scss['ModalContent'] : scss['hide']}
    >
      <button onClick={handleClick} type="button" className={scss.close_btn}>
        close
      </button>
      <form onSubmit={handleSubmit} action="" className={scss.form}>
        <textarea
          onChange={handleChange}
          type="text-area"
          className={scss.text_area}
        />
        <input onChange={handleCheck} type="checkbox" />
        <input type="submit" className={scss.btn} />
      </form>
    </section>
  );
}

export default ModalContent;
