import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./Earning.module.css";
import { BiChevronRightCircle } from "react-icons/bi";
import "antd/dist/antd.css";
import "./Custom.css";
import { Progress } from "antd";

const Expenses = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Earning</div>
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
          <div className={styles.relative}>
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#0b5a0f",
                "50%": "#217346",
              }}
              percent={78}
              width={100}
              strokeWidth={14}
            />
            <div id="hidden" className={styles.absoluteBar}>
              <Progress
                type="circle"
                strokeColor={{
                  "0%": "#26a35d",
                  "50%": "#0c6d24a9",
                  "100%": "#89e63ddf",
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

export default Expenses;
