import styles from './index.module.scss';
import Navbar from '../navbar';
import Hero from '../hero';

function Home({ setSingleItemContext, refs }) {
  return (
    <section ref={refs.homeRef} className={styles.Home}>
      <Navbar setSingleItemContext={setSingleItemContext} refs={refs} />
      <Hero />
    </section>
  );
}

export default Home;
