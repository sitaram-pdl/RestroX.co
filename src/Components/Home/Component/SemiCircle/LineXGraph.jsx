import React, { useState } from "react";
import styles from "./LineXGraph.module.css";
import { Doughnut } from "react-chartjs-2";

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
const Semi = (props) => {
  const size = 14;
  const center = 7;
  const radius = 6;
  const strokeWidth = 1;
  const circleOneStroke = props.theme ? "rgba(31, 29, 42, 0.084)" : "gray";
  const circleTwoStroke = "#4A4DE6";

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Satisfaction Rate</div>
        <div>
          <div className={styles.picker}>From all Reviews</div>
        </div>
      </div>
      <div className={styles.circleContainer}>
        <div className={styles.graph}>
          <svg className={styles.svg} width={`${size}vw`} height={`${size}vw`}>
            <circle
              className={styles.svgcirclebg}
              stroke={circleOneStroke}
              cx={`${center}vw`}
              cy={`${center}vw`}
              r={`${radius}vw`}
              strokeWidth={`${strokeWidth}vw`}
              strokeDasharray={
                2 * Math.PI * parseInt(radius) * (window.innerWidth / 100)
              }
              strokeDashoffset={
                ((100 - parseInt(100 / 2)) / 100) *
                2 *
                Math.PI *
                parseInt(radius) *
                (window.innerWidth / 100)
              }
              stroke-linecap="round"
            />
            <circle
              className={styles.svgcircle}
              stroke={circleTwoStroke}
              cx={`${center}vw`}
              cy={`${center}vw`}
              r={`${radius}vw`}
              strokeWidth={`${strokeWidth}vw`}
              strokeDasharray={
                2 * Math.PI * parseInt(radius) * (window.innerWidth / 100)
              }
              strokeDashoffset={
                ((100 - parseInt(20 / 2)) / 100) *
                2 *
                Math.PI *
                parseInt(radius) *
                (window.innerWidth / 100)
              }
              stroke-linecap="round"
            />
          </svg>
          <div className={styles.text}>
            <div>6%</div>
            <div className={styles.subText3}>Based on Reviews</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.title2}>Yesterday: 20%</div>
        <div>
          <div className={styles.details}>Details</div>
        </div>
      </div>
    </div>
  );
};

export default Semi;
