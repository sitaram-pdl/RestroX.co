import React, { useState } from "react";
import cx from "classnames";
import styles from "./TableBill.module.css";

const Row = (props) => {
  const [category, setCategory] = useState([
    { name: "Hot Dishes" },
    { name: "Cold Dishes" },
    { name: "Soup" },
    { name: "Grill" },
    { name: "Appetizer" },
    ,
    { name: "Dessert" },
  ]);

  return (
    <div className={styles.rowContainer}>
      <div className={styles.titleRow}>
        <div className={styles.title}>
          {props.title == "Served" ? (
            <div className={styles.green} />
          ) : null || props.title == "Pending" ? (
            <div className={styles.yellow} />
          ) : null || props.title == "Cancel" ? (
            <div className={styles.green} />
          ) : null}
          <div>
            <div className={styles.textTitle1}>{props.title}</div>
            <div className={styles.textTitle2}>9 order processing</div>
          </div>
        </div>
      </div>
      <div className={styles.rowData}>
        {category.map((dat) => (
          <div className={styles.box}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5a4aa9ea90badea8b8c07c4f/1586187526276-MF2S55KMONPE1L173M8I/Maddalena%2Bsplatter-5.jpg?format=1000w"
              className={styles.image}
            />
            <div className={styles.written}>
              <div className={styles.foodName}>Chicken Pasta</div>
              <div className={styles.price}>Rs 250</div>
              <div className={styles.price1}>2 Set</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
