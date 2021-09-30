import { React, useState } from "react";

import { Bar } from "react-chartjs-2";
import styles from "./Revenue.module.css";
import Dropdown from "../../../react-dropdown";

const Revenue = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        barThickness: 10,

        label: "Today",
        data: [
          2200, 2900, 2300, 3500, 3200, 1300, 1200, 2300, 3500, 3200, 1300,
          1200,
        ],
        backgroundColor: ["#7367F0"],
        borderColor: ["#7367F0"],
        borderWidth: 1,

        borderRadius: 4,
      },
      {
        barThickness: 10,

        label: "yesterday",
        data: [
          -2200, -2900, -2300, -3500, -3200, -1300, -1200,

          -2300, -3500, -3200, -1300, -1200,
        ],
        backgroundColor: ["  #FF9F43"],
        borderColor: ["  #FF9F43"],
        borderWidth: 1,

        borderRadius: 4,
      },
    ],
  };
  var delayed;
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      y: {
        ticks: {
          display: true,
        },
        grid: {
          display: false,
        },
      },
      x: {
        stacked: true,
        ticks: {
          display: true,
        },
        grid: {
          display: false,
        },
      },
    },

    legend: {
      display: false,
    },
  };
  const options1 = [
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.staftext}>Revenue Report</div>
        <div className={styles.legendconain}>
          <div className={styles.dotgreen}></div>
          <div className={styles.legendname}> Green</div>
          <div className={styles.dotgrey}></div>
          <div className={styles.legendname}> Grey</div>
          <div className={styles.dropdown}>
            <Dropdown
              options={options1}
              value={"2021"}
              placeholder="Select an option"
              id="dropdown"
              controlClassName={styles.dropdowncontrol}
            />
          </div>
        </div>
      </div>

      <div className={styles.graph}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Revenue;
