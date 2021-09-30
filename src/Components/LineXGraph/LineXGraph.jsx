import React, { useState } from "react";
import styles from "./LineXGraph.module.css";
import { Line } from "react-chartjs-2";

import Dropdown from "../react-dropdown";
const data = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "This Month",
      data: [
        120, 190, 30, 120, 200, 800, 300, 400, 500, 700, 120, 190, 30, 120, 200,
        800, 300, 400, 500, 700, 120, 190, 30, 120, 200, 800, 300, 400, 500,
        700,
      ],
      fill: false,
      backgroundColor: "rgba(94,91,229,0.1)",
      borderColor: "rgb(94,91,229)",
      tension: 0.3,
    },
    {
      label: "Last Month",
      data: [
        220, 900, 330, 500, 320, 400, 200, 500, 400, 500, 500, 220, 900, 330,
        500, 320, 400, 200, 500, 400, 500, 500, 220, 900, 330, 500, 320, 400,
        200, 500, 400, 500, 500,
      ],
      fill: false,
      backgroundColor: "rgb(58,58,60)",
      borderColor: "rgb(58,58,60)",
      tension: 0.3,
    },
  ],
};
const options2 = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        beginAtZero: true,
      },
      grid: {
        display: true,
        color: "  #3d3c4150",
        borderColor: "  #3d3c4139",
      },
    },
    x: {
      ticks: {
        display: true,
        beginAtZero: true,
      },
      grid: {
        display: false,
      },
    },
  },
};
const LineXGraph = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Total Visitors</div>
        <div>
          <div className={styles.picker}>
            <Dropdown
              options={options2}
              value={"March 2021"}
              placeholder="Select an option"
              controlClassName={styles.dropDown1}
            />
          </div>
        </div>
      </div>
      <div className={styles.title1}>Visitors</div>
      <div className={styles.graph}>
        <Line data={data} options={options} height="100%" />
      </div>
    </div>
  );
};

export default LineXGraph;
