import { useState } from 'react';
import styles from './index.module.scss';

function FormSubmit({ handlePopup, setFormData }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleFirstInput = (e) => setFirstName(e.target.value);
  const handleLastInput = (e) => setLastName(e.target.value);
  const handleDateInput = (e) => setDate(e.target.value);
  const handleTimeInput = (e) => setTime(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => [
      ...prev,
      {
        id: Math.round(Math.random() * 1000),
        firstName,
        lastName,
        date,
        time,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        onChange={handleFirstInput}
        className={styles.textInput}
        type="text"
        placeholder="first name"
        required
      />
      <input
        onChange={handleLastInput}
        className={styles.textInput}
        type="text"
        placeholder="last name"
        required
      />
      <input
        onChange={handleDateInput}
        className={styles.dateInput}
        type="date"
        required
      />
      <input
        onChange={handleTimeInput}
        className={styles.timeInput}
        type="time"
        required
      />
      <input
        onClick={handlePopup}
        className={styles.subInput}
        type="submit"
        value="submit"
      />
    </form>
  );
}

export default FormSubmit;
