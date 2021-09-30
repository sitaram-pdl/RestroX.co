import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./Suppliers.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const Suppliers = () => {
  const data = {
    labels: ["1 AM", "2 AM ", "3 AM"],
    datasets: [
      {
        label: "2",
        data: [12, 19, 3, 4],
        fill: false,
        backgroundColor: [
          "rgba(254,186,22,1)",
          "rgba(239,69,137,1)",
          "rgba(108,108,108,1)",
          "rgba(194,91,229,0.1)",
        ],
        borderColor: [
          "rgba(254,186,22,1)",
          "rgba(239,69,137,1)",
          "rgba(108,108,108,1)",
          "rgba(194,91,229,0.1)",
        ],
      },
    ],
  };
  const options2 = [
    { value: "Daily", label: "Daily" },
    { value: "This Week", label: "This Week" },
    { value: "This Month", label: "This Month" },
    { value: "Last Year", label: "Last Year" },
  ];
  const options = {
    responsive: true,

    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        display: false,
        labels: {
          usePointStyle: true,
        },
      },
    },

    scales: {},
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div>Suppliers</div> <div className={styles.date}> 2021</div>
        </div>

        <div className={styles.dropdown}>
          <BiChevronRightCircle className={styles.icon} />
        </div>
      </div>
      <div className={styles.barcontainer}>
        <div className={styles.barcontain}>
          <Doughnut data={data} options={options} />
        </div>

        <div className={styles.legendContain}>
          <div className={styles.legend}>
            <div className={styles.dotgreen}></div>
            <div> Green</div>
          </div>

          <div className={styles.legend}>
            <div className={styles.dotgrey}></div>
            <div> Grey</div>
          </div>
          <div className={styles.legend}>
            <div className={styles.dotgrey}></div>
            <div> yellow</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
