import React, { useState } from "react";
import { BackDrop, FixedPayment, Menu, RightOrder, StoriesHeader } from "..";
import { FiSearch } from "react-icons/fi";
import styles from "./AddFood.module.css";
import cx from "classnames";
import ListView from "../ListView/ListView";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
const AddFood = (props) => {
  const [category, setCategory] = useState([
    { name: "Hot Dishes" },
    { name: "Cold Dishes" },
    { name: "Soup" },
    { name: "Grill" },
    { name: "Appetizer" },
    ,
    { name: "Dessert" },
  ]);
  const [styl, setStyl] = useState(0);
  const [payment, setPayment] = useState(false);
  const [view, setView] = useState(true);

  const clickHandle = () => {
    setPayment(!payment);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.stories}>
          <StoriesHeader {...props} />
        </div>
        <div className={styles.leftContain}>
          <div className={styles.tableName}>
            <div
              className={cx(
                styles.leftTable,
                props.theme ? styles.white : null
              )}
            >
              <div className={styles.title}>Table No. 5</div>
            </div>
          </div>
          <div className={styles.paddingBottom}>
            <div className={styles.line}>
              <div
                className={cx(styles.row, props.theme ? styles.white2 : null)}
              >
                {category.map((dat, index) => (
                  <div
                    onClick={() => setStyl(index)}
                    className={cx(
                      styles.headers,
                      styl == index ? styles.borderLine : null
                    )}
                  >
                    {dat.name}
                  </div>
                ))}
              </div>
              <div className={styles.displayRow}>
                <div
                  className={cx(
                    styles.search,
                    props.theme ? styles.whiteBox : null
                  )}
                >
                  <div className={styles.searchIcon}>
                    <FiSearch />
                  </div>
                  <div className={styles.inputField}>
                    <input
                      className={cx(
                        styles.input,
                        props.theme ? styles.inputWhite : null
                      )}
                      placeholder="Search for food"
                    />
                  </div>
                </div>
                <div
                  className={cx(
                    styles.viewSwitch,
                    props.theme ? null : styles.black
                  )}
                >
                  <div className={styles.grid}>
                    <BsFillGrid1X2Fill
                      onClick={() => setView(true)}
                      color={view ? "tomato" : null}
                      size="25"
                    />
                  </div>
                  <div>
                    <FaThList
                      onClick={() => setView(false)}
                      color={view ? null : "tomato"}
                      size="25"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.border}></div>
            </div>
            <div className={styles.menu}>
              {view ? <Menu {...props} /> : <ListView {...props} />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightTrip}>
          <RightOrder clicked={clickHandle} {...props} />
        </div>
      </div>
    </div>
  );
};

export default AddFood;
//fixedcomment
