import React, { useState } from "react";
import styles from "./Todo.module.css";

const LeftContainer = () => {
  const [stats, setStats] = useState([
    {
      num: "1",
    },
    {
      num: "2",
    },
    {
      num: "3",
    },
    {
      num: "4",
    },
    {
      num: "5",
    },
    {
      num: "6",
    },
  ]);
  return (
    <div className={styles.maincontainer}>
      <div className={styles.todo}>Todo</div>
      <div className={styles.container}></div>
      <div className={styles.pagination}>
        {stats.map((dat) => (
          <div className={styles.dot}></div>
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;
