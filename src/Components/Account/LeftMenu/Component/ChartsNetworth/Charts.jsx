import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import Dropdown from "../../../../react-dropdown";

const Charts = () => {
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
        barThickness: 16,

        label: "Net Worth",
        data: [2200, 2900, 2300, 3500, 3200, 3000, 1200],
        backgroundColor: ["#139511c8"],
        borderColor: ["#139511c8"],
        borderWidth: 0.7,

        borderRadius: 3,
      },
    ],
  };
  var delayed;
  const options = {
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
    plugins: {
      legend: {
        display: false,
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
          Net Worth
          <div> Jun:Rs 45,000 </div>
        </div>

        <div className={styles.dropdown}>
          <Dropdown
            options={options1}
            value={"2021"}
            placeholder="Select an option"
            controlClassName={styles.dropdowncontrol}
          />
        </div>
      </div>
      <div className={styles.barcontain}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Charts;
