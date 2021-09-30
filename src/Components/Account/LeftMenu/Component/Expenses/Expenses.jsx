import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./Earning.module.css";
import { BiChevronRightCircle } from "react-icons/bi";
import "antd/dist/antd.css";
import "./Custom.css";
import { Progress } from "antd";

const Earning = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Expenses</div>
      </div>
      <div className={styles.barcontainer}>
        <div className={styles.leftContain}>
          <div className={styles.text1}> This Month</div>
          <div className={styles.text2}>Rs 4055.56</div>
          <div className={styles.text3}>
            <text className={styles.text4}>68.2% </text> more earnings than
            <br /> last month
          </div>
        </div>
        <div className={styles.rightContain}>
          <div className={styles.relative} id="sc">
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#723022",
              }}
              percent={78}
              width={100}
              strokeWidth={14}
            />
            <div id="hidden1" className={styles.absoluteBar}>
              <Progress
                type="circle"
                strokeColor={{
                  "0%": "#823c26",
                }}
                percent={30}
                width={100}
                strokeWidth={14}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
