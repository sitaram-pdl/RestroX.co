import React, { useState } from "react";

import styles from "./AccountBalance.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const AccountBalance = () => {
  const [stats, setStats] = useState([
    {
      cashFlowOn: "Cash & Cash Equivalents",
      amount: "5000",
    },
    {
      cashFlowOn: "Suppliers",
      amount: "5000",
    },
    {
      cashFlowOn: "Income",
      amount: "52000",
    },
    {
      cashFlowOn: "Expense",
      amount: "52000",
    },
    {
      cashFlowOn: "Capital",
      amount: "52000",
    },
    {
      cashFlowOn: "Loan",
      amount: "52000",
    },
    {
      cashFlowOn: "Sales",
      amount: "52000",
    },
    {
      cashFlowOn: "Cost of Sales",
      amount: "52000",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>Account Balances</div>
          <div className={styles.subitle}>
            Last Updated 6 Jul, 2021 at 5:21 PM
          </div>
        </div>

        <div className={styles.titleicon}>
          <BiChevronRightCircle className={styles.icon} />
        </div>
      </div>
      <div className={styles.listcontain}>
        {stats.map((dat, index) => (
          <div className={styles.list}>
            <div className={styles.listLeft}>{dat.cashFlowOn}</div>
            <div className={styles.listRight}> Rs : {dat.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountBalance;
