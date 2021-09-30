import React from "react";
import styles from "./Grid.module.css";

const Grid = (props) => {
  const option = [
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
    { name: "1" },
  ];
  return (
    <div className={styles.container}>
      {option.map((dat) => (
        <div className={styles.box}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzykh7ZcpY18hBQ50fk-AFQbmBNNF0HCqcw&usqp=CAU"
              className={styles.images}
            />
          </div>
          <div className={styles.text1}>Spicy seasoned seafood noodles</div>
          <div className={styles.text2}>
            Rs 229 <text className={styles.text3}> ·</text> 8.5/10(21 reviews)
          </div>
        </div>
      ))}
    </div>
  );
};
export default Grid;
