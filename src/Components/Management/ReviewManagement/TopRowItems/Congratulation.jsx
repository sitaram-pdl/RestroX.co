import React from "react";
import styles from "./Congratulation.module.css";

const Congratulation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.congratulation}>
          Congratulation{" "}
          <img src="/images/NewYear.png" className={styles.image2} /> john!
        </div>
        <div className={styles.text}>You have gold medal</div>
        <div className={styles.rating}>4.5 Rating</div>
        <div className={styles.viewSales}> View Sales</div>
      </div>
      <div className={styles.right}>
        <img src="/images/Badge.png" className={styles.image}></img>
      </div>
    </div>
  );
};

export default Congratulation;
