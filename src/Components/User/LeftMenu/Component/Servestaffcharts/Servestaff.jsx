import { React, useState } from "react";

import { Bar } from "react-chartjs-2";
import styles from "./Servestaff.module.css";

const Servestaff = () => {
  const data = {
    labels: [
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
    ],
    datasets: [
      {
        barThickness: 10,

        label: "Today",
        data: [22, 29, 23, 35, 32, 3, 12],
        backgroundColor: ["#139511"],
        borderColor: ["#139511"],
        borderWidth: 1,

        borderRadius: 4,
      },
      {
        barThickness: 10,

        label: "yesterday",
        data: [22, 29, 23, 35, 32, 3, 12],
        backgroundColor: [" #4e4f52"],
        borderColor: [" #4e4f52"],
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
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.staftext}>
          Your staffs are serving 46 costumers.
        </div>
        <div className={styles.legendconain}>
          <div className={styles.dotgreen}></div>
          <div> Green</div> <div className={styles.dotgrey}></div>
          <div> Grey</div>
        </div>
      </div>

      <div className={styles.graph}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Servestaff;
