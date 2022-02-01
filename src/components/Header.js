import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main__container}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <img width={48} height={48} src="/img/logo.svg" alt="logo" />
          <img width={32} height={32} src="/img/hamburger.svg" alt="hmbrgr" />
        </div>
        <div className={styles.hello__container}>
          <div className={styles.hello__text}>
            <h1 className={styles.hello__text__h1}>
              New Automation
              <br />
              Tool for Your Home
            </h1>
            <p className={styles.hello__text__p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              tristique vulputate ultrices ut mauris tellus at. Posuere
              sollicitudin odio tellus elit.
            </p>
            <button className={styles.hello__button}>See Our Project</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
