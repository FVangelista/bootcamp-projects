import styles from './index.module.scss';

function FormPopup({ children }) {
  return <div className={styles.Popup}>{children}</div>;
}

export default FormPopup;
