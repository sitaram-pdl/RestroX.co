import React, { useState } from "react";

import styles from "./FavouritesReports.module.css";
import { BiChevronRightCircle } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";

const FavouritesReports = () => {
  const stats = [
    {
      name: "Balance Sheet",
    },
    {
      name: "Profit and Loss",
    },
    {
      name: "Statement of Cash Flows",
    },
    {
      name: "Statement of Cash Flows",
    },
    {
      name: "Profit and Loss by Month",
    },
    {
      name: "Profit and Loss by Month",
    },
    {
      name: "Account Receivable ageing details",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Favourites Reports</div>

        <div className={styles.dropdown}>
          <div>
            <BiChevronRightCircle className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.barcontain}>
        {stats.map((dat, index) => (
          <div className={styles.list}>
            <div>
              <BsFillStarFill className={styles.iconstar} />
            </div>
            <div className={styles.name}>{dat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritesReports;
