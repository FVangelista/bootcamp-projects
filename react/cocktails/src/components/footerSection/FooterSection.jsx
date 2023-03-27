import styles from './index.module.scss';

import logo from '../../assets/logo.svg';

function FooterSection({ refs }) {
  return (
    <div ref={refs.footerRef} className={styles.Footer}>
      <div className={styles.info}>
        <span>&copy;cocktails by bortoletti.srl</span>
        <span>e-mail: random@random.com</span>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default FooterSection;
