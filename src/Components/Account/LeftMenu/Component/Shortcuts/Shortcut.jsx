import React, { useState } from "react";

import styles from "./Shortcut.module.css";
import { FaFileInvoice } from "react-icons/fa";

const Shortcut = () => {
  const [stats, setStats] = useState([
    {
      desc: "Invoice",
    },
    {
      desc: "Estimate",
    },
    {
      desc: "Invoice Pay",
    },
    {
      desc: "Expenses",
    },
    {
      desc: "Supplier",
    },
    {
      desc: "Sales Receipt",
    },
    {
      desc: "Invoice",
    },
    {
      desc: "Estimate",
    },
    {
      desc: "Invoice Pay",
    },
    {
      desc: "Expenses",
    },
    {
      desc: "Supplier",
    },
    {
      desc: "Sales Receipt",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Shortcuts</div>
      </div>
      <div className={styles.mapcontain}>
        {stats.map((dat, index) => (
          <div className={styles.box}>
            <div className={styles.imagecontain}>
              <FaFileInvoice className={styles.icon} />
            </div>
            <div className={styles.desc}>{dat.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shortcut;
