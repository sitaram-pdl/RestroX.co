import React from "react";
import styles from "./MidContainer.module.css";
import Events from "./Component/Events/Events";
import Reminder from "./Component/Reminder/Reminder";
import PendingTask from "./Component/PendingTask/PendingTask";

const Midcontainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rowContain}>
        <Events />
        <Reminder />
      </div>
      <div className={styles.rowContain}>
        <PendingTask />
      </div>
    </div>
  );
};

export default Midcontainer;
