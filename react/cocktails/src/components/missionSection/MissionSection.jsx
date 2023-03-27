import styles from './index.module.scss';
import reviews from '../../utils/mock/localData';

function MissionSection({ refs }) {
  return (
    <section ref={refs.missionRef} className={styles.Mission}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>spreading events</h1>
        <hr className={styles.line} />
        <h3 className={styles.textSub}>
          The first "cocktail party" ever thrown was allegedly by Julius S.
          Walsh Jr. of St. Louis, Missouri, in May 1917. Walsh invited 50 guests
          to her home at noon on a Sunday. The party lasted an hour until lunch
          was served at 1 p.m. The site of this first cocktail party still
          stands. In 1924, the Roman Catholic Archdiocese of St. Louis bought
          the Walsh mansion at 4510 Lindell Boulevard, and it has served as the
          local archbishop's residence ever since.
        </h3>
      </div>
      <div className={styles.reviews}>
        {reviews.map((user) => {
          return (
            <div className={styles.card} key={user.id}>
              <div className={styles.imgWrapper}>
                <img className={styles.userImg} src={user.img} alt="" />
              </div>
              <div className={styles.textWrapper}>
                <div className="title">
                  <h2 className={styles.name}>{user.name}</h2>
                  <span className={styles.age}>{user.age}</span>
                </div>
                <h4 className={styles.review}>{user.review}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MissionSection;
