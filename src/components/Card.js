import styles from "./Card.module.css";

function Card({ content }) {
  return (
    <div className={styles.container}>
      <div className={styles.card__logo__container}>
        <img className={styles.card__logo} src={content.img} alt="card" />
      </div>
      <div className={styles.card__text__container}>
        <div className={styles.card__h2}>{content.h2}</div>
        <p className={styles.card__p}>{content.p}</p>

        <a href={content.p} className={styles.card__link__container}>
          <span className={styles.card__link}>Learn More</span>
          <img width={24} height={24} src="/img/arrow-right.svg" alt="arrow" />
        </a>
      </div>
    </div>
  );
}
export default Card;
