import React, { useState } from "react";

import styles from "./Income.module.css";
import { BiChevronRightCircle } from "react-icons/bi";
import { Donut, Legend } from "britecharts-react";
import "./Custum.css";

const Income = () => {
  const donutDataWith4Slices = [
    {
      quantity: 60,
      percentage: 60,
      name: "React",
      id: 1,
    },
    {
      quantity: 20,
      percentage: 20,
      name: "Ember",
      id: 2,
    },
    {
      quantity: 10,
      percentage: 10,
      name: "Angular",
      id: 3,
    },
    {
      quantity: 10,
      percentage: 10,
      name: "Backbone",
      id: 4,
    },
  ];
  const marginObject = {};

  const legendMargin = {
    top: 10,
    bottom: 10,
    left: 0,
    right: 30,
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Income</div>

        <div className={styles.dropdown}>
          <BiChevronRightCircle className={styles.icon} />
        </div>
      </div>
      <div className={styles.barcontainer}>
        <div className={styles.barcontain}>
          <Donut
            data={donutDataWith4Slices}
            width={245}
            height={225}
            margin={marginObject}
            externalRadius={270 / 2.5}
            internalRadius={220 / 5}
          />
        </div>

        <div className={styles.legendContain}>
          <Legend data={donutDataWith4Slices} width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Income;
