import React, { useState } from "react";

import styles from "./QuickActions.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const QuickActions = () => {
  const stats = [
    {
      name: "Staff Salaries",
    },
    {
      name: "Financial Report",
    },
    {
      name: "COGS",
    },
    {
      name: "Purchase Invoice",
    },
    {
      name: "Sales Breakdown",
    },
    {
      name: "Sales Invoice",
    },
    {
      name: "P/L Appro. A/C",
    },
    {
      name: "Trading Account",
    },
    {
      name: "Receive Payment",
    },
    {
      name: "Income",
    },
    {
      name: "Balance Sheet",
    },
    {
      name: "Invoice Payment",
    },
    {
      name: "Expences",
    },
    {
      name: "Cash Flow Stat.",
    },
    {
      name: "Add Supplier",
    },
    {
      name: "Add Costumer",
    },
    {
      name: "Add Costumer",
    },
    {
      name: "Cash Flow Stat.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}> Quick Actions</div>
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

export default QuickActions;
