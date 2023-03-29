import styles from './index.module.scss';

import Menu from '../components/menu';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <div className={styles.SharedLayout}>
      <Menu />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}
