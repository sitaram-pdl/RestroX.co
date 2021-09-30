import React, { useState } from "react";

import styles from "./Shortcuts.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const Shortcuts = (props) => {
  const stats = [
    {
      name: "Add Table",
    },
    {
      name: "Add Space",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.barcontain}>
        {stats.map((dat, index) => (
          <div
            className={styles.list}
            onClick={() => props.menuHandler(dat.name)}
          >
            <div className={styles.name}>{dat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shortcuts;
