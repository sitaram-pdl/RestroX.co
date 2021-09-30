import React from "react";
import { Bar } from "react-chartjs-2";
import styles from "./PurchaseOrder.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

const PurchaseOrder = () => {
  const data = {
    labels: ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM"],
    datasets: [
      {
        barThickness: 14,

        label: "Today",
        data: [2200, 2900, 2300, 3500, 3200, 3000, 1200],
        backgroundColor: ["#139511c8"],
        borderColor: ["#139511c8"],
        borderWidth: 0.7,

        borderRadius: 4,
      },
      {
        barThickness: 14,

        label: "Yestrday",
        data: [2200, 2900, 2300, 3500, 3200, 3000, 1200],
        backgroundColor: ["#676967c7"],
        borderColor: ["#828682c7"],
        borderWidth: 0.7,

        borderRadius: 4,
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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Purchase Order</div>

        <div className={styles.dropdown}>
          <BiChevronRightCircle className={styles.icon} />
        </div>
      </div>
      <div className={styles.barcontain}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PurchaseOrder;
