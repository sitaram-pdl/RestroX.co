import React, { useState } from "react";
import styles from "./ProceedToPayment.module.css";

const ProceedToPayment = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <div
        className={styles.absolute}
        onClick={() => props.setShow((dat) => !dat)}
      ></div>
      <div className={styles.contain}>
        <div className={styles.leftContainer}></div>
        <div className={styles.rightContainer}></div>
      </div>
    </div>
  );
};

export default ProceedToPayment;
