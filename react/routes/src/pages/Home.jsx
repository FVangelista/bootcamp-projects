import { useState } from 'react';

import styles from '../styles/pages/Home.module.scss';

import Menu from '../components/menu';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={`${styles.Home} container`}>
      <Menu l1={'activity'} l2={'about'} l3={'city'} />

      <div className={styles.MainContentHome}>Main content</div>

      <Footer />
    </div>
  );
}
