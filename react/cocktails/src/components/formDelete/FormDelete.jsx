import { useState } from 'react';
import styles from './index.module.scss';

function FormDelete({ handlePopup, formData, setFormData }) {
  const [isId, setId] = useState(null);
  const [lastName, setLastName] = useState('');

  const handleLastInput = (e) => setLastName(e.target.value);
  const handleNumberInput = (e) => setId(e.target.value);

  const handleDelete = (e) => {
    e.preventDefault();

    const filteredStorage = formData.filter((user) => {
      if ((user.id !== Number(isId)) | (user.lastName !== lastName)) {
        return user;
      }
    });

    setFormData(() => filteredStorage);
    localStorage.setItem('preorder', JSON.stringify(filteredStorage));
  };
  console.log(formData);

  return (
    <form onSubmit={handleDelete} className={styles.form}>
      <input
        onChange={handleNumberInput}
        className={styles.textInput}
        type="number"
        placeholder="order n°"
      />

      <input
        onChange={handleLastInput}
        className={styles.textInput}
        type="text"
        placeholder="last name"
      />
      <input
        onClick={handlePopup}
        className={styles.delInput}
        type="submit"
        value="Delete"
      />
    </form>
  );
}

export default FormDelete;
