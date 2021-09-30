import React, { useState } from "react";

import styles from "./Budget.module.css";
import { FaFileInvoice } from "react-icons/fa";
import Dropdown from "../../../../react-dropdown";
import "./Custum.css";
import { Progress } from "antd";

const Budget = () => {
  const stats = [
    {
      percent: 80,
      total: "900000",
      budget: "450000",
    },
    {
      percent: 20,
      total: "900,000",
      budget: "450000",
    },
    {
      percent: 70,
      total: "900,000",
      budget: "450000",
    },
  ];
  const options1 = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>Budget</div>

          <div>
            July : - Rs 4,50,000 /{" "}
            <text className={styles.totalText}> Rs 900,000</text>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            options={options1}
            value={"Month"}
            placeholder="Select an option"
            controlClassName={styles.dropdowncontrol}
          />
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.progressBarTop}>
          <Progress strokeColor={"green"} percent={50.9} id="progressbarLine" />
        </div>
        <div className={styles.list}>
          {stats.map((dat, index) => (
            <div>
              <div className={styles.relative}>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  percent={dat.percent}
                  width={90}
                  id="progressbarCircle"
                />

                <div className={styles.progressbarCircleimg}>
                  <img src={"./images/progressbarCircle.png"}></img>
                </div>
              </div>
              <div className={styles.budgetText}>
                <div> July : - Rs {dat.budget}</div>
                <div className={styles.totalText1}>
                  /<text className={styles.totalText}> Rs {dat.total}</text>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
