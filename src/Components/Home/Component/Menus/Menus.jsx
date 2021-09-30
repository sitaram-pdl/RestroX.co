import React from "react";
import styles from "./Menus.module.css";

const Menus = () => {
  const option = [
    {
      name: "Die In Menu",
      itemNo: "211",
      image: "./images/Dieinimg.png",
    },
    {
      name: "New Year's Menu",
      itemNo: "211",
      image: "./images/NewYear.png",
    },
    {
      name: "Friday Night Menu",
      itemNo: "211",
      image: "./images/FridayNight.png",
    },
    {
      name: "Die In Menu",
      itemNo: "211",
      image: "./images/Dieinimg.png",
    },
    {
      name: "Die In-Alternate01",
      itemNo: "211",
      image: "./images/Diein1img.png",
    },
    {
      name: "Die In-Alternate01",
      itemNo: "211",
      image: "./images/Diein1img.png",
    },
    {
      name: "Die In-Alternate01",
      itemNo: "211",
      image: "./images/Diein1img.png",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.textMenu}> Menus</div>
      <div className={styles.subMenu}>7 Different Type of Menu</div>
      <div className={styles.mapContain}>
        {option.map((dat) => (
          <div className={styles.box}>
            <div className={styles.images}>
              <img src={dat.image} className={styles.images1}></img>
            </div>

            <div className={styles.mapRight}>
              <div className={styles.mapHead}> {dat.name}</div>
              <div className={styles.mapSubHead}> {dat.itemNo} Items</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
