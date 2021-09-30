import React from "react";
import styles from "./PendingTask.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { BiSelectMultiple } from "react-icons/bi";
import { HiSortDescending } from "react-icons/hi";
import { BiEditAlt } from "react-icons/bi";
import "./Custum.css";

const PendingTask = () => {
  const option = [
    {
      taskName: "Design Homepage",
      taskDate: "Thu,Nov 23",
      image: "./images/staffmanagement1.png",
      done: false,
    },
    {
      taskName: "Design Homepage",
      taskDate: "Thu,Nov 23",
      image: "./images/staffmanagement1.png",
      done: false,
    },
    {
      taskName: "Design Homepage",
      taskDate: "Thu,Nov 23",
      image: "./images/staffmanagement1.png",
      done: false,
    },
    {
      taskName: "Design Homepage",
      taskDate: "Thu,Nov 23",
      image: "./images/staffmanagement1.png",
      done: false,
    },
    {
      taskName: "Design Homepage",
      taskDate: "Thu,Nov 23",
      image: "./images/staffmanagement1.png",
      done: false,
    },
    {
      taskName: "Design Homepage",
      taskDate: "Thu,Nov 23",
      image: "./images/staffmanagement1.png",
      done: false,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.topLeft}>All Pending Tasks</div>
        <div className={styles.topRight}>
          <div className={styles.searchDiv}>
            <input className={styles.input} placeholder="Search here" />
            <AiOutlineSearch
              size="1.5em"
              color="gray"
              className={styles.menuicon}
            />
          </div>

          <div className={styles.menu}>
            <BiSelectMultiple
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Filter
          </div>
          <div className={styles.menu}>
            <HiSortDescending
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Short By
          </div>
          <div className={styles.menu}>
            <BiEditAlt size="1.5em" color="white" className={styles.menuicon} />
            New
          </div>
        </div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.mapcontain}>
        {option.map((dat) => (
          <div className={styles.list}>
            <div className={styles.textMid}>
              <div>
                <label class="containercheckbox">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className={styles.text}>
                <div className={styles.text1}>{dat.taskName}</div>
                <div className={styles.text2}>{dat.taskDate}</div>
              </div>
            </div>
            <div>
              <img src={dat.image} className={styles.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingTask;
