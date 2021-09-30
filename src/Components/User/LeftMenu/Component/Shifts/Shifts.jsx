import React, { useState } from "react";
import styles from "./Shifts.module.css";
import { Progress } from "antd";
import "antd/dist/antd.css";

const Shifts = () => {
  const [items, setItems] = useState([
    {
      shift: "Morning ",
      start: "8 am",
      end: "3 pm",
      percent: "60",
    },
    {
      shift: "Evening ",
      start: "8 am",
      end: "3 pm",
      percent: "60",
    },
    {
      shift: "Night ",
      start: "8 am",
      end: "3 pm",
      percent: "60",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.headercontain}>
        <div className={styles.headerleft}>Shifts</div>
        <div className={styles.headerright}>See All</div>
      </div>
      <div className={styles.hiremapcontain}>
        {items.map((dat, index) => (
          <div className={styles.listcontain}>
            <div className={styles.leftcontain}>
              <div>
                <div className={styles.reception}>{dat.shift} Shift</div>
                <div className={styles.candidates}>
                  {" "}
                  {dat.start}-{dat.end}
                </div>
              </div>
            </div>
            <div className={styles.rightcontain}>
              <Progress type="circle" percent={dat.percent} width={55} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shifts;
