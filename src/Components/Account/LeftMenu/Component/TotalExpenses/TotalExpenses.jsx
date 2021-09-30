import React, { useState } from "react";
import styles from "./TotalExpenses.module.css";
import { RiArrowUpSLine } from "react-icons/ri";

const TotalExpenses = () => {
  const stats = [
    {
      percent: 12,
      time: "Year",
      amount: 5000000000,
    },
    {
      percent: 12,
      time: "Month",
      amount: 10000,
    },
    {
      percent: 12,
      time: "Week",
      amount: 20000000,
    },
    {
      percent: 12,
      time: "Day",
      amount: 1000000,
    },
  ];
  function test(labelValue) {
    const sign = Math.sign(Number(labelValue));
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? sign * (Math.abs(Number(labelValue)) / 1.0e9) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? sign * (Math.abs(Number(labelValue)) / 1.0e6) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? sign * (Math.abs(Number(labelValue)) / 1.0e3) + "K"
      : Math.abs(Number(labelValue));
  }
  return (
    <div className={styles.maincontainer}>
      <div className={styles.todo}>Total Expenses</div>
      <div className={styles.container}>
        {stats.map((dat) => (
          <div className={styles.mapContain}>
            <div className={styles.percentage}>
              {dat.percent}
              {"%"}
              <RiArrowUpSLine />
            </div>
            <div className={styles.time}>{dat.time} </div>
            <div className={styles.amount}>{test(dat.amount)} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalExpenses;
