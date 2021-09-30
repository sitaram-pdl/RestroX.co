import React, { useState } from "react";

import styles from "./SalesTarget.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

import "./Custum.css";
import { Progress } from "antd";

const SalesTarget = () => {
  const stats = [
    {
      time: " Today",
      percent: 80,
      total: "115000",
      sales: "45000",
    },
    {
      time: " Week",
      percent: 20,
      total: "115000",
      sales: "45000",
    },
    {
      time: " Month",
      percent: 70,
      total: "115000",
      sales: "45000",
    },
    {
      time: " Year",
      percent: 70,
      total: "115000",
      sales: "45000",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>Sales Target</div>
        </div>
        <div className={styles.dropdown}>
          <BiChevronRightCircle />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.averageText}>Average Sales target for 2021</div>

        <div className={styles.list}>
          {stats.map((dat) => (
            <div className={styles.mapContain}>
              <div className={styles.progressTop}>
                <div className={styles.textToday}> {dat.time}</div>
                <div className={styles.textCost}>
                  {" "}
                  Rs {dat.sales}/Rs {dat.total}
                </div>
              </div>
              <div>
                <Progress
                  strokeColor={"#24a35d"}
                  percent={50.9}
                  id="progressbarLine"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesTarget;
