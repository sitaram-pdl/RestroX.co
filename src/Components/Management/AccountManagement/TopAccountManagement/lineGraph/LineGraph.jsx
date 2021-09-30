import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import styles from "./LineGraph.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const LineGraph = () => {
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
        label: "First dataset",
        data: [33000, 53000, 85000, 41000, 44000, 65000],
        fill: false,
        borderColor: "#953111",
      },
      {
        label: "Second dataset",
        data: [33000, 25000, 35000, 51000, 52000, 76000],
        fill: false,
        borderColor: "#139511",
      },
    ],
  };
  var delayed;
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
      },
    },
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
  };
  const options1 = [
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>
          Cash flow
          <div> Jun:Rs 45,000 </div>
        </div>

        <div className={styles.dropdown}>
          <div className={styles.dotgreen}></div>
          <div> Green</div> <div className={styles.dotgrey}></div>
          <div> Grey</div>
          <div>
            <BiChevronRightCircle className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.barcontain}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;
