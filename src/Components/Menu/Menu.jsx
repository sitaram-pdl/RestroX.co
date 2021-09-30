import React, { useState } from "react";
import styles from "./Menu.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import cx from "classnames";
const Menu = (props) => {
  const [data, setData] = useState([
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
    {
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      name: "Spicy Seasoned Food",
      price: "202",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {data.map((dat) => (
          <div
            className={cx(styles.menuBox, props.theme ? styles.white : null)}
          >
            <img width="110px" className={styles.image} src={dat.image}></img>
            <div className={styles.text}>{dat.name}</div>
            <div className={styles.price}>Rs. {dat.price}</div>
            <div className={styles.plusRow}>
              <div className={props.theme ? styles.number2 : styles.number}>
                <AiOutlineMinus />
              </div>
              <div className={props.theme ? styles.number2 : styles.number}>
                1
              </div>
              <div className={props.theme ? styles.number2 : styles.number}>
                <AiOutlinePlus />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
