import React, { useState } from "react";
import styles from "./OrderReport.module.css";
import cx from "classnames";

import Dropdown from "../../../react-dropdown";
const OrderReport = (props) => {
  const [order, setOrder] = useState([
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Pending",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Pending",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Pending",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
    {
      img: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      table: "Table no 1",
      orders: [
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
        { name: "Spicy Sea Food" },
      ],
      amount: "1260",
      mode: "Take Away",
      Payment: "Cash",
      status: "Completed",
    },
  ]);
  const options = [
    { value: "Most Ordered", label: "Most Ordered" },
    { value: "Most Reviewed", label: "Most Reviewed" },
    { value: "Most Order Type", label: "Most Order Type" },
    { value: "Most Delivered", label: "Most Delivered" },
  ];
  return (
    <div className={styles.container}>
      <div className={cx(styles.orderTable, props.theme ? styles.white : null)}>
        <div className={cx(styles.title, props.theme ? styles.white : null)}>
          <div>Order Report</div>

          <div>
            <Dropdown
              options={options}
              value={"Most Ordered"}
              placeholder="Select an option"
              controlClassName={styles.dropDown}
            />
          </div>
        </div>
        <div className={cx(styles.table, props.theme ? styles.white : null)}>
          <div className={styles.table1}>Customer/ Table No</div>
          <div className={styles.table2}>Orders</div>
          <div className={styles.table3}>Total Payment</div>
          <div className={styles.table4}>Mode</div>
          <div className={styles.table5}>Payments</div>
          <div className={styles.table6}>Status</div>
        </div>
        <div className={styles.horizontal} />
        <div className={styles.tableHeight}>
          {order.map((dat) => (
            <div
              className={cx(styles.table, props.theme ? styles.white : null)}
            >
              <div className={styles.table1}>
                <img src={dat.img} className={styles.image}></img>{" "}
                <div> {dat.table}</div>
              </div>
              <div className={styles.table2}>
                {dat.orders.map((data) => data.name)}
              </div>
              <div className={styles.table3}>{dat.amount}</div>
              <div className={styles.table4}>{dat.mode}</div>
              <div className={styles.table5}>{dat.Payment}</div>
              <div className={styles.table6}>
                <div
                  className={cx(
                    styles.box,
                    dat.status == "Completed" ? styles.green : styles.red
                  )}
                >
                  {" "}
                  {dat.status}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderReport;
