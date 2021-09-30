import React, { useState } from "react";

import styles from "./CashBalance.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const CashBalance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Cash Balance</div>

        <div className={styles.dropdown}>
          <BiChevronRightCircle className={styles.icon} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CashBalance;
