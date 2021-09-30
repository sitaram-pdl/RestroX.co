import React, { useState } from "react";

import styles from "./ShortcutsButtons.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const ShortcutsButtons = () => {
  const stats = [
    {
      name: "Purchase Request",
    },
    {
      name: "Stock In",
    },
    {
      name: "Update Bll",
    },
    {
      name: "Purchase Order",
    },
    {
      name: "Add New Inventory",
    },
    {
      name: "Stoct Out",
    },
    {
      name: "Update Stocks",
    },
    {
      name: "Notes",
    },
    {
      name: "Purchase Bill",
    },
    {
      name: "invalid",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}> Shortcuts</div>
      </div>
      <div className={styles.barcontain}>
        {stats.map((dat, index) => (
          <div className={styles.list}>
            <div className={styles.name}>{dat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortcutsButtons;
