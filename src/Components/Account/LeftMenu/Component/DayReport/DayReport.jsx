import React, { useState } from "react";
import styles from "./DayReport.module.css";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoArrowDown, IoArrowUpOutline } from "react-icons/io5";
import { RiBookmark2Line } from "react-icons/ri";
import cx from "classnames";
import Rupee from "./Group.png";
import { FiUsers } from "react-icons/fi";
import Dropdown from "../../../../react-dropdown";

const HomeLeft = (props) => {
  const date = new Date();
  const [stats, setStats] = useState([
    {
      amount: "10243",
      name: "Total Revenue",
      stats: "+32.40",
      isMoney: "true",
    },
    { amount: "231", name: "Total Dish Ordered", stats: "-32.40" },
    { amount: "10243", name: "Net Profit", stats: "+32.40", isMoney: "true" },
    { amount: "10", name: "Total Customer", stats: "+32.40" },
    {
      amount: "40243",
      name: "Total Expenses",
      stats: "-32.40",
      isMoney: "true",
    },
  ]);
  const options1 = [
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.topLeft}>
          <div className={styles.summary}>Reception's Day Report</div>
          <div className={styles.dateText}> July 2021</div>
        </div>
        <div className={styles.topRight}></div>
      </div>
      <div className={styles.dialogRow}>
        {stats.map((dat) => (
          <div className={cx(styles.dialog, props.theme ? styles.white : null)}>
            <div className={styles.dialogContent}>
              <div className={styles.topDialog}>
                <div
                  className={cx(
                    styles.iconContainer,
                    props.theme ? styles.whiteIcon : null
                  )}
                >
                  {dat.name == "Total Expenses" ||
                  dat.name == "Total Revenue" ||
                  dat.name == "Net Profit" ? (
                    <img src={Rupee} width="19px" />
                  ) : null}
                  {dat.name == "Total Dish Ordered" ? (
                    <RiBookmark2Line size="19px" color="FFB572" />
                  ) : null}
                  {dat.name == "Total Customer" ? (
                    <FiUsers size="19px" color="65B0F6" />
                  ) : null}
                </div>
                <div
                  className={
                    dat.stats.slice(0, 1) == "+" ? styles.green : styles.red
                  }
                >
                  {dat.stats}
                </div>
                <div className={styles.fArrow}>
                  {dat.stats.slice(0, 1) == "+" ? (
                    <IoArrowUpOutline size="15px" color="green" />
                  ) : (
                    <IoArrowDown size="15px" color="#D15050" />
                  )}
                </div>
              </div>
              <div
                className={cx(styles.amount, props.theme ? styles.white : null)}
              >
                {dat.isMoney ? "Rs." : null} {dat.amount}
              </div>
              <div className={styles.name}>{dat.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeLeft;
