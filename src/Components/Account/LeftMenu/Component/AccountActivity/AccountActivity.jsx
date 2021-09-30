import React, { useState } from "react";
import styles from "./AccountActivity.module.css";

const HomeLeft = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <div className={styles.topHeader}>Account Activity</div>
          <div className={styles.topSubHeader}>Audit Log </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
