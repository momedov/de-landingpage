import styles from "./WhatWeDo.module.css";

import Card from ".//Card";

const cardContent = [
  {
    img: "/img/card1.svg",
    h2: "Make Your business To Be Better Famous In Internet",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "#",
  },
  {
    img: "/img/card2.svg",
    h2: "Bring Technology To Your Comfrotable Home",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "#",
  },
  {
    img: "/img/card3.svg",
    h2: "Build Your Digital Product That Suitable For Your Need",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "#",
  },
];

const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main__container}>
        <div className={styles.flex__container}>
          <div className={styles.cards__container}>
            <div className={styles.cards__left}>
              <div className={styles.cards__left__text}>
                What we do to help
                <br />
                our client grow in
                <br />
                digital era
              </div>
              <div className={styles.cards__left__center}>
                <Card content={cardContent[0]} />
              </div>
              <div className={styles.cards__left__bottom}> </div>
            </div>
            <div className={styles.cards__right}>
              <div className={styles.cards__right__top}>
                <Card content={cardContent[1]} />
              </div>
              <div className={styles.cards__right__bottom}>
                <Card content={cardContent[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
