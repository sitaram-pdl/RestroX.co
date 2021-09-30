import React, { useState } from "react";
import styles from "./Buy.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Switch from "react-switch";
const Measuring = (props) => {
  const [items, setItems] = useState([
    { Code: "Kilo Gram", name: "KG" },
    { Code: "Kilo Gram", name: "KG" },
    { Code: "Kilo Gram", name: "KG" },
    { Code: "Kilo Gram", name: "KG" },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Measuring Units</div>
      <div className={styles.division}>
        <div className={styles.search}>
          <div className={styles.searchDiv}>
            <div className={styles.logo}>
              <AiOutlineSearch size="22" />
            </div>
            <input placeholder="Search Here" className={styles.input} />
          </div>
          <div className={styles.rightIcons}>
            <div className={styles.filter}>
              <IoFilter />
            </div>
            <div className={styles.dots}>
              <BiDotsVerticalRounded />
            </div>
          </div>
        </div>
        <div className={styles.search2}>
          <div className={styles.id}>SN</div>
          <div className={styles.code}>Unit Name</div>
          <div className={styles.offers}>Nick Name</div>
          <div className={styles.start}>Description</div>
          <div className={styles.active}>
            <BiDotsVerticalRounded />
          </div>
        </div>
        {items.map((dat, index) => (
          <div className={styles.search3}>
            <div className={styles.id}>{index + 1}</div>
            <div className={styles.code}>{dat.Code}</div>
            <div className={styles.offers}>{dat.name}</div>
            <div className={styles.start}>{dat.start}</div>
            <div className={styles.active}>
              <BiDotsVerticalRounded />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <div className={styles.button1}>Save Draft</div>
        <div
          className={styles.button}
          onClick={() =>
            props.history.push(
              "/management/Inventory Management/Measuring Units/Create"
            )
          }
        >
          Create New
        </div>
      </div>
    </div>
  );
};
export default Measuring;
