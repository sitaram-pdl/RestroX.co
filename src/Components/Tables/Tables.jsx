import React, { useEffect, useState } from "react";
import styles from "./Tables.module.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import cx from "classnames";
const Tables = (props) => {
  const [data, setData] = useState([
    {
      name: "table1",
      task: [{ name: "Water" }],
      imp: [
        {
          imp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      task: [{ name: "Water" }],
      imp: [
        {
          imp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22", status: "Completed" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
    {
      name: "table1",
      task: [{ name: "Water" }],
      imp: [
        {
          imp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      task: [{ name: "Water" }],
      imp: [
        {
          imp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22", status: "Completed" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
    {
      name: "table1",
      task: [{ name: "Water" }],
      imp: [
        {
          imp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      task: [{ name: "Water" }],
      imp: [
        {
          imp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22", status: "Completed" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [{ name: "Chicken Pasta", quantity: "22" }],
    },
    {
      name: "table1",
      st: new Date(),
      ot: new Date(),
      timer: "0",
      orders: [
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
        { name: "Chicken Pasta", quantity: "22" },
      ],
    },
  ]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    var timer = setTimeout(calculateTime, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  const calculateTime = () => {
    let temp = data;

    for (var i = 0; i < data.length; i++) {
      let difference = temp[i].st - temp[i].ot;
      var date = new Date(0);
      date.setSeconds(difference + count); // specify value for SECONDS here
      var timeString = date.toISOString().substr(14, 5);
      temp[i].timer = timeString;
    }
    setData(temp);
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      {data.map((dat, index) => (
        <div
          className={styles.main}
          onClick={() => props.history.push(`/Order/${dat.name}`)}
        >
          <div
            className={cx(
              styles.subContainer,
              props.theme ? styles.white : null
            )}
          >
            <div className={styles.topRow}>
              <div className={styles.secondLine}>Table 1</div>
              <div className={styles.clock2}>
                <div className={styles.clock}>
                  <AiOutlineClockCircle />
                </div>
                <div>{dat.timer}</div>
              </div>
            </div>

            <div className={styles.orderDiv}>
              {dat.orders.map((dat2) => (
                <div className={styles.thirdLine}>
                  <div
                    className={cx(
                      styles.dot,
                      dat2.status == "Completed" ? styles.green : styles.red
                    )}
                  />

                  <div className={styles.name2}>{dat2.name}</div>
                  <div>{dat2.quantity}</div>
                </div>
              ))}
            </div>
            <div className={styles.lastrow}>
              <div className={styles.maxDiv}>
                {dat.imp
                  ? dat.imp.map((image) => (
                      <img
                        className={styles.image}
                        className={styles.image}
                        src={image.imp}
                      />
                    ))
                  : null}
              </div>
              <div>
                {dat.task
                  ? dat.task.map((ing) => (
                      <div>
                        {ing.name == "Water" ? (
                          <div className={styles.dot1} />
                        ) : null}
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className={styles.nameLine}>{dat.name}</div>
        </div>
      ))}
    </div>
  );
};
export default Tables;
