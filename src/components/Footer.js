import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.container}>
      <div className={styles.content__container__back__background}>
        <div className={styles.content__container__background}>
          <div className={styles.content__container}>
            <div className={styles.flex__container}>
              <div className={styles.content__intro__container}>
                <div className={styles.content__intro__top}>
                  Interested to work
                  <br />
                  with our team?
                </div>
                <div className={styles.content__intro__bottom}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </div>
              </div>
              <div className={styles.content__button__container}>
                <button
                  onClick={props.onClickSubmit}
                  className={styles.content__button}
                >
                  Let’s Talk
                </button>
              </div>
            </div>
          </div>
          <div className={styles.line} />
          <div className={styles.contacts__container}>
            <div className={styles.contacts__afrianska}>
              <div className={styles.footer_logo_container}>
                <img
                  className={styles.footer_logo}
                  width={48}
                  height={32}
                  src="img/footer_logo.svg"
                  alt="logo"
                />
                <span className={styles.footer_logo}>Afrianska</span>
              </div>

              <table className={styles.table}>
                <tr>
                  <td>A.</td>
                  <td>
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipisicing elit.
                  </td>
                </tr>
                <tr>
                  <td>T.</td>
                  <td>+62-812-7313-4321</td>
                </tr>
                <tr>
                  <td>E.</td>
                  <td>hello.afrian@gmail.com</td>
                </tr>
              </table>
            </div>
            <div className={styles.contacts__follow_about__block}>
              <div className={styles.contacts__bold}>About Us</div>
              <div className={styles.contacts__regular_block}>
                <div className={styles.contacts__regular}>About</div>
                <div className={styles.contacts__regular}>What We Do</div>
                <div className={styles.contacts__regular}>Project</div>
                <div className={styles.contacts__regular}>
                  How It Work With Us
                </div>
              </div>
            </div>
            <div className={styles.contacts__follow_about__block}>
              <div className={styles.contacts__bold}>Follow Us</div>
              <div className={styles.contacts__regular__block}>
                <div className={styles.contacts__regular}>Instagram</div>
                <div className={styles.contacts__regular}>Facebook</div>
                <div className={styles.contacts__regular}>LinkedIn</div>
                <div className={styles.contacts__regular}>YouTube</div>
              </div>
            </div>
          </div>

          <div className={styles.contacts__copyrights__container}>
            <div className={styles.contacts__copyrights}>
              2022 © Afrianska. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
