import styles from './index.module.scss';
import video from '../../assets/video.mp4';

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>make your choice</h1>
        <hr className={styles.line} />
        <h3 className={styles.textSub}>
          A cocktail is an alcoholic mixed drink. Most commonly, cocktails are
          either a single spirit or a combination of spirits, mixed with other
          ingredients such as juices, flavored syrups, tonic water, shrubs, and
          bitters.
        </h3>
      </div>
      <div className={styles.textWrapperSecond}>
        <h1 className={styles.text}>make your choice</h1>
        <hr className={styles.line} />
        <h3 className={styles.textSub}>
          In the modern world and the Information Age, cocktail recipes are
          widely shared online on websites. Cocktails and restaurants that serve
          them are frequently covered and reviewed in tourism magazines and
          guides.
        </h3>
      </div>
      <div className={styles.videoWrapper}>
        <video src={video} playsInline autoPlay loop muted></video>
      </div>
    </div>
  );
}

export default Hero;
