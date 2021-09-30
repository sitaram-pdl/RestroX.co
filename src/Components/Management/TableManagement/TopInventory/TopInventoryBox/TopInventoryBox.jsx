import React, { useState } from "react";
import styles from "./TopInventoryBox.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const Income = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Inventory</div>

        <div className={styles.dropdown}>
          <BiChevronRightCircle className={styles.icon} />
        </div>
      </div>
      <div className={styles.boxContain}>
        <div className={styles.box}>
          <div>
            <img
              src={"/images/topInventory1.png"}
              className={styles.images1st}
            ></img>
          </div>
          <div className={styles.qualityText}>Quality in Hand</div>
          <div className={styles.qualityNum}>214</div>
        </div>
        <div className={styles.box}>
          <div>
            <img
              src={"/images/topInventory2.png"}
              className={styles.images2nd}
            ></img>
          </div>
          <div className={styles.qualityText}>Will be Recieved</div>
          <div className={styles.qualityNum}>44</div>
        </div>
      </div>
    </div>
  );
};

export default Income;
