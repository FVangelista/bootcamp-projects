import { useSearchParams } from 'react-router-dom';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  const [searchParams] = useSearchParams();
  return (
    <section className={`${styles.Home}  `}>
      <div className={styles.HomeHero}>
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80"
          alt="hero"
          className={styles.HeroImg}
        />
      </div>
      <div className={styles.HomeContent}>
        <h2 className={styles.title}>Home - main content</h2>
        {searchParams.get('time') && (
          <h1>
            Here is the query {'->'} ' {searchParams.get('time')} '{' '}
          </h1>
        )}
      </div>
    </section>
  );
}
