import { useState, useEffect } from 'react';
import styles from './index.module.scss';

import FormSubmit from '../formSubmit';
import FormDelete from '../formDelete';
import FormPopup from '../formPopup';

import { scrollToSection } from '../../utils/utils';
import { FaArrowLeft, FaArrowUp } from 'react-icons/fa';

function FormSection({ refs, setPopup, isPopup }) {
  // #0 Popup Visibility
  const handlePopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 2000);
  };

  // #1 Forms Visibility
  const [isDeleteVisible, setDeleteVisible] = useState(false);

  const handleClick = () => setDeleteVisible((prev) => !prev);

  // #2 Form Data
  const [formData, setFormData] = useState(
    localStorage.getItem('preorder')
      ? JSON.parse(localStorage.getItem('preorder'))
      : []
  );

  // #4 Local Storage
  useEffect(() => {
    localStorage.setItem('preorder', JSON.stringify(formData));
  }, [formData]);

  return (
    <section ref={refs.formRef} className={styles.Preorder}>
      <div className={styles.formWrapper}>
        {isPopup && (
          <FormPopup>
            <h3>{isDeleteVisible ? 'got it!' : 'thanks!'}</h3>
            <p>
              {isDeleteVisible
                ? 'your order has been deleted'
                : 'we received your order'}
            </p>
          </FormPopup>
        )}
        <h2 className={styles.title}>
          {isDeleteVisible ? 'see you soon!' : 'get your spot!'}
        </h2>

        {isDeleteVisible ? (
          <FormDelete
            handlePopup={handlePopup}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <FormSubmit handlePopup={handlePopup} setFormData={setFormData} />
        )}

        <button onClick={handleClick} className={styles.delBtnForm}>
          {isDeleteVisible ? <FaArrowLeft /> : 'change your mind ?'}
        </button>
      </div>

      <button
        onClick={() => scrollToSection(refs.homeRef)}
        className={styles.btnUp}
      >
        <FaArrowUp />
      </button>
    </section>
  );
}

export default FormSection;
