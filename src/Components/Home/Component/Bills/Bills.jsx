import React, { useState } from "react";

import styles from "./Bills.module.css";
import { BiChevronRightCircle } from "react-icons/bi";

import { FaCalendar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Bills = () => {
  const stats = [
    {
      cost: "000",
      coston: "Food",
    },
    {
      cost: "134000",
      coston: "Overdue",
    },
    {
      cost: "134000",
      coston: "Due",
    },
  ];
  const option = [
    {
      name: "Subin Bhandari",
      overDueDays: "22",
      rs: "340000",
      month: "May",
      day: "8",
      type: "Salary",
    },
    {
      name: "Subin Bhandari",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "8",
      type: "Salary",
    },
  ];
  const option1 = [
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
    {
      name: "Land Lord",
      overDueDays: "22",
      rs: "3400",
      month: "May",
      day: "11",
      type: "Rent",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleleft}>Bills</div>

        <div className={styles.titleright}>
          <div>
            <FaCalendar className={styles.icon1} />
          </div>
          <div>
            <FaPlus className={styles.icon1} />
          </div>
          <div>
            <BiChevronRightCircle className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.title2}>
        <div className={styles.text1}>May:Rs 134000</div>
      </div>
      <div className={styles.costbar}>
        {stats.map((dat, index) => (
          <div className={styles.cost}>
            <div>Rs:{dat.cost} </div>
            <div> {dat.coston}</div>
          </div>
        ))}
      </div>
      <div className={styles.overdue}>
        <div className={styles.overdueleft}>OverDue</div>
        <div className={styles.overdueright}> Rs 63505.00</div>
      </div>
      <div className={styles.body}>
        {option.map((dat, index) => (
          <div className={styles.bodymap}>
            <div className={styles.row1}>
              <div className={styles.month}>{dat.month}</div>
              <div className={styles.day}>{dat.day}</div>
            </div>
            <div className={styles.row11}>
              <div className={styles.name}>{dat.name}</div>
              <div className={styles.overduemap}>
                Overdue {dat.overDueDays} days
              </div>
            </div>
            <div className={styles.row111}>
              <div className={styles.rs}>Rs {dat.rs}</div>
              <div className={styles.type}>{dat.type}</div>
            </div>
            <div className={styles.row1111}>
              <div className={styles.paybill}>Pay Bill </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.overdue}>
        <div className={styles.overdueleft}>Due Within 30 Days</div>
        <div className={styles.overdueright}> Rs 63505.00</div>
      </div>
      <div className={styles.body}>
        {option1.map((dat, index) => (
          <div className={styles.bodymap}>
            <div className={styles.row1}>
              <div className={styles.month1}>{dat.month}</div>
              <div className={styles.day1}>{dat.day}</div>
            </div>
            <div className={styles.row11}>
              <div className={styles.name}>{dat.name}</div>
              <div className={styles.overduemap}>
                Due in {dat.overDueDays} days
              </div>
            </div>
            <div className={styles.row111}>
              <div className={styles.rs}>Rs {dat.rs}</div>
              <div className={styles.type}>{dat.type}</div>
            </div>
            <div className={styles.row1111}>
              <div className={styles.paybill}>Pay Bill </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bills;
