import React, { useState } from "react";
import cx from "classnames";
import styles from "./TableBill.module.css";

const Single = (props) => {
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
    <div className={styles.rowContainer2}>
      <div className={styles.titleRow}>
        <div className={styles.title}>
          {props.title == "Served" ? (
            <div className={styles.green} />
          ) : null || props.title == "Pending" ? (
            <div className={styles.yellow} />
          ) : null || props.title == "Cancel" ? (
            <div className={styles.red} />
          ) : null}
          <div>
            <div className={styles.textTitle1}>{props.title}</div>
            <div className={styles.textTitle2}>9 order processing</div>
          </div>
        </div>
      </div>
      <div className={styles.rowData}>
        {category.map((dat) => (
          <div className={styles.box2}>
            <img
              src="https://cdn.tasteatlas.com/images/dishes/49e0e32425aa469b91d926707db3b849.jpg?w=905&h=510"
              className={styles.image}
            />
            <div className={styles.written}>
              <div className={styles.foodName}>Chicken Pasta</div>
              <div className={styles.price}>Rs 250</div>
              <div className={styles.price}>2 Set</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Single;
