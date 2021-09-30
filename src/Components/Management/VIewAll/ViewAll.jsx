import React, { useState } from "react";
import styles from "./ViewAll.module.css";
import cx from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
import List from "./components/List";
import Grid from "./components/Grid";

import { FaThList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { BiSelectMultiple } from "react-icons/bi";
import { HiSortDescending } from "react-icons/hi";
import { BiEditAlt } from "react-icons/bi";

import { FiArrowLeftCircle } from "react-icons/fi";

const ViewAll = () => {
  const [itemsIndex, setItemIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  const [option, setOption] = useState([
    { name: "All Dishes" },
    { name: "Cold Dishes" },
    { name: "Soup" },
    { name: "Grill" },
    { name: "Appetizer" },
    { name: "Desert" },
  ]);
  const tabicon = [{ tab: "list" }, { tab: "grid" }];
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className={styles.container}>
      <div className={styles.heading}>All Dishes</div>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          Management {">"} MenuManagement {">"} All Dishes
        </div>
        <div className={styles.topRight}>
          <div className={styles.searchDiv}>
            <input className={styles.input} placeholder="Search here" />
            <AiOutlineSearch
              size="1.5em"
              color="gray"
              className={styles.menuicon}
            />
          </div>
          <div className={styles.menu}>Add Dishes</div>

          <div className={styles.menu}>
            <HiSortDescending
              size="1.5em"
              color="white"
              className={styles.menuicon}
            />
            Short By
          </div>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.subTop}>
        <div className={styles.subTopLeft}>
          {option.map((dat, index) => (
            <div
              className={cx(
                styles.itm,
                itemsIndex == index ? styles.active : 0
              )}
              onClick={() => setItemIndex(index)}
            >
              {dat.name}
            </div>
          ))}
        </div>
        <div className={styles.subTopRight}>
          {tabicon.map((dat, tabindex) => (
            <div
              className={styles.tabIcon}
              onClick={() => {
                setIconIndex(tabindex);
                setActiveTab(dat.tab);
              }}
            >
              <div className={tabindex === iconIndex ? styles.active1 : null}>
                {dat.tab === "list" ? <FaThList /> : <BsFillGrid3X3GapFill />}
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeTab === "list" ? (
        <div>
          {" "}
          <List />
        </div>
      ) : (
        <div>
          {" "}
          <Grid />
        </div>
      )}
    </div>
  );
};

export default ViewAll;
