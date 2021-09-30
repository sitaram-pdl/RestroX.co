import React, { useState } from "react";

import styles from "./Purchase.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const Purchase = () => {
  const [options, setOptions] = useState([
    { name: "Order", number: "21", img: "/images/icon.png" },
    { name: "Pending", number: "21", img: "/images/icon2.png" },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Purchase</div>

        <div className={styles.dropdown}>
          <BiChevronRightCircle className={styles.icon} />
        </div>
      </div>
      <div>
        <div className={styles.container2}>
          {options.map((dat, index) => (
            <div className={styles.box}>
              <div className={styles.img}>
                <img src={dat.img} />
              </div>
              <div className={styles.desc}>
                <div className={styles.number}>21</div>
                <div>{dat.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
