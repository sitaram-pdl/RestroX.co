import React, { useState } from "react";
import styles from "./Attendance.module.css";
import "antd/dist/antd.css";
import "../../Custum.css";
import { Progress } from "antd";
import { CgChevronRightO } from "react-icons/cg";

const Attendance = () => {
  const [option, setOption] = useState([
    { percent: "60" },
    { percent: "40" },
    { percent: "60" },
    { percent: "80" },
    { percent: "60" },
    { percent: "20" },
    { percent: "20" },
  ]);
  const [option1, setOption1] = useState([
    { day: "Sun" },
    { day: "Mon" },
    { day: "Tue" },
    { day: "Wed" },
    { day: "Thu" },
    { day: "Fri" },
    { day: "Sat" },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.customer1}>Attendance</div>
        <div className={styles.customer2}>
          <CgChevronRightO />
        </div>
      </div>

      <div className={styles.barcontian} id="barContainer">
        {option.map((dat, index) => (
          <div className={styles.progressbar}>
            <Progress
              strokeColor={{
                "0%": " #FFAB00",
                "100%": " #FFAB00",
              }}
              percent={dat.percent}
              style={{ width: 195 }}
            />
          </div>
        ))}
      </div>
      <div className={styles.daylist}>
        {option1.map((dat, index) => (
          <div className={styles.daystyle}>{dat.day}</div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
