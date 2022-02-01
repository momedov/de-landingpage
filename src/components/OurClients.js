import styles from "./OurClients.module.css";

const OurClients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content__container__background}>
        <div className={styles.content__container}>
          <div className={styles.content__intro__container}>
            <div className={styles.content__intro__left}>
              Our Beloved Client
            </div>
            <div className={styles.content__intro__right}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
        </div>
        <div className={styles.content__table__container}>
          <div className={styles.content__table}>
            <div className={styles.content__table__row}>
              <div className={styles.content__table__cell}>
                <div className={styles.content__table__cell1}>
                  LOGO CLIENT 1
                </div>
              </div>
              <div className={styles.content__table__cell}>
                <div className={styles.content__table__cell2}>
                  LOGO CLIENT 2
                </div>
              </div>
              <div className={styles.content__table__cell}>
                <div className={styles.content__table__cell3}>
                  LOGO CLIENT 3
                </div>
              </div>
              <div className={styles.content__table__cell}>
                <div className={styles.content__table__cell4}>
                  LOGO CLIENT 4
                </div>
              </div>
            </div>

            <div className={styles.content__table__row}>
              <div className={styles.content__table__cell}>
                <div className={styles.content__table__cell5}>
                  LOGO CLIENT 5
                </div>
              </div>
              <div className={styles.content__table__cell}>
                <div className={styles.content__table__cell6}>
                  LOGO CLIENT 6
                </div>
              </div>
              <div className={styles.content__table__cell}>
                <div className={styles.content__table__cell7}>
                  LOGO CLIENT 7
                </div>
              </div>
              <div className={styles.content__table__cell}>
                <div className={styles.content__table__cell8}>More Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
