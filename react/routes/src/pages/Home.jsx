import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <section className={`${styles.Home}  `}>
      <div className={styles.HomeHero}>
        <img
          src="https://images.pexels.com/photos/1161161/pexels-photo-1161161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hero"
          className={styles.HeroImg}
        />
      </div>
      <div className={styles.HomeContent}>
        <h2>Home - main content</h2>
      </div>
    </section>
  );
}
