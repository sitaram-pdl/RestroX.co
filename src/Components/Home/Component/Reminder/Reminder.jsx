import React, { useState } from "react";

import styles from "./Reminder.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import "./Custom.css";
const Reminder = () => {
  const option = [
    {
      reminderName: "Overview Page Redesign",
      day: "Today",
      time: " 9:00 PM",
      done: true,
    },
    {
      reminderName: "Overview Page Redesign",
      day: "Today",
      time: " 9:00 PM",
      done: false,
    },
    {
      reminderName: "Overview Page Redesign",
      day: "Today",
      time: " 9:00 PM",
      done: true,
    },
    {
      reminderName: "Overview Page Redesign",
      day: "Today",
      time: " 9:00 PM",
      done: false,
    },
    {
      reminderName: "Overview Page Redesign",
      day: "Today",
      time: " 9:00 PM",
      done: false,
    },
    {
      reminderName: "Overview Page Redesign",
      day: "Today",
      time: " 9:00 PM",
      done: true,
    },
  ];
  const [data, setData] = useState(option);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleleft}>Reminder</div>

        <div className={styles.titleright}>
          <div>
            <BsThreeDots className={styles.icon1} />
          </div>
          <div>
            <FaPlus className={styles.icon1} />
          </div>
        </div>
      </div>
      <div className={styles.title2}>
        <div className={styles.text1}>
          A board to keep track of persoal tasks.
        </div>
      </div>
      <div className={styles.mapContain}>
        {data.map((dat, index) => (
          <div className={styles.mapList}>
            <label class="containercheckbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <div>
              <div className={styles.mapTop}>
                <div>{dat.reminderName} </div>
                <div className={styles.mapBot}>
                  <div>{dat.day},</div>
                  <div>{dat.time}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reminder;
