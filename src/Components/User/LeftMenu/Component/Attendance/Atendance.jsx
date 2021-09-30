import React, { useState } from "react";
import styles from "./Atendance.module.css";
import { Progress } from "antd";
import "antd/dist/antd.css";
import "./custum.css";

const MenuEdit = () => {
  const [items, setItems] = useState([
    {
      receptionnum: "3",
      requirejob: "Reception",
      candidatesnum: "5",
      percent: "30",
    },
    {
      receptionnum: "8",
      requirejob: "Helper",
      candidatesnum: "5",
      percent: "40",
    },
    {
      receptionnum: "3",
      requirejob: "Waiter",
      candidatesnum: "5",
      percent: "50",
    },
    {
      receptionnum: "10",
      requirejob: "Cook",
      candidatesnum: "10",
      percent: "6",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.headercontain}>
        <div className={styles.headerleft}>Attendance</div>
        <div className={styles.headerright}>See All</div>
      </div>
      <div className={styles.hiremapcontain}>
        {items.map((dat, index) => (
          <div className={styles.listcontain}>
            <div className={styles.leftcontain}>
              <div className={styles.receptionnum}> {dat.receptionnum} </div>
              <div>
                <div className={styles.reception}>{dat.requirejob}</div>
                <div className={styles.candidates}>
                  {dat.candidatesnum} Candidates
                </div>
              </div>
            </div>
            <div className={styles.rightcontain}>
              <Progress
                type="circle"
                percent={dat.percent}
                width={55}
                className={styles.redtext}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuEdit;
