import React, { useState } from "react";

import styles from "./Discovers.module.css";
import { BiChevronRightCircle } from "react-icons/bi";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./Custom.css";

const Discovers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Discover More </div>

        <div className={styles.dropdown}>
          <BiChevronRightCircle className={styles.icon} />
        </div>
      </div>
      <div>
        <Carousel autoplay autoplaySpeed={10000}>
          {/**   crousal 1st*/}
          <div className={styles.carousal}>
            <div className={styles.imagecontain}>
              <img src="./images/amico.png" className={styles.image}></img>
            </div>
            <div className={styles.botContain}>
              <div className={styles.botLeft}>
                <div className={styles.text1}>Import your data from Excel</div>
                <div className={styles.text2}>
                  Watch this video to learn how to import your data from an
                  Excel spreadsheet.
                </div>
              </div>
              <div></div>

              <div className={styles.botRight}>Lern How ( 2:27s )</div>
            </div>
          </div>
          {/**   crousal 2st*/}
          <div className={styles.carousal}>
            <div className={styles.imagecontain}>
              <img src="./images/amico.png" className={styles.image}></img>
            </div>

            <div className={styles.botContain}>
              <div className={styles.botLeft}>
                <div className={styles.text1}>Import your data from Excel</div>
                <div className={styles.text2}>
                  Watch this video to learn how to import your data from an
                  Excel spreadsheet.
                </div>
              </div>
              <div></div>

              <div className={styles.botRight}>Lern How ( 2:27s )</div>
            </div>
          </div>
          {/**   crousal 3st*/}{" "}
          <div className={styles.carousal}>
            <div className={styles.imagecontain}>
              <img src="./images/amico.png" className={styles.image}></img>
            </div>

            <div className={styles.botContain}>
              <div className={styles.botLeft}>
                <div className={styles.text1}>Import your data from Excel</div>
                <div className={styles.text2}>
                  Watch this video to learn how to import your data from an
                  Excel spreadsheet.
                </div>
              </div>
              <div></div>

              <div className={styles.botRight}>Lern How ( 2:27s )</div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Discovers;
