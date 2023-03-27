import styles from './index.module.scss';
import logoNav from '../../assets/logoNav.svg';

import { scrollToSection } from '../../utils/utils';

function Navbar({ refs }) {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logoNav} alt="" />
      </div>

      <ul className={styles.menu}>
        <li onClick={() => scrollToSection(refs.homeRef)}>home</li>
        <li onClick={() => scrollToSection(refs.mainRef)}>Catalog</li>
        <li onClick={() => scrollToSection(refs.missionRef)}>mission</li>
        <li onClick={() => scrollToSection(refs.footerRef)}>contact</li>
      </ul>

      <button
        onClick={() => scrollToSection(refs.formRef)}
        className={styles.btn}
      >
        preorder
      </button>
    </div>
  );
}

export default Navbar;
