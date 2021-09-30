import React, { useRef, useState, useEffect } from "react";
import styles from "./TableBill.module.css";
import { BackDrop, FixedPayment, Menu, StoriesHeader } from "..";
import StoryHeader from "./StoriesHeader/StoriesHeader";
import RightOrder from "./RightOrder";
import { FiSearch } from "react-icons/fi";
import cx from "classnames";
import ListView from "../ListView/ListView";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillEye, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import { IoNotificationsOutline, IoCheckmarkDone } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { BiSelectMultiple } from "react-icons/bi";
import { HiSortDescending } from "react-icons/hi";
import { BiEditAlt } from "react-icons/bi";
import Row from "./Row";
import Single from "./Single";
const TableBill = (props) => {
  const [category, setCategory] = useState([
    { name: "All" },
    { name: "Order #124" },
  ]);
  const [styl, setStyl] = useState(0);
  const [payment, setPayment] = useState(false);
  const [view, setView] = useState(false);
  const [clickDrop, setClickDrop] = useState(false);
  const clickHandle = () => {
    setPayment(!payment);
  };
  const wrapperRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setClickDrop(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.stories}>
          <StoriesHeader {...props} />
        </div>
        <div className={styles.background}>
          <div className={styles.topBox}>
            <div className={styles.topLeft}>
              <div
                className={cx(
                  styles.leftTable,
                  props.theme ? styles.white : null
                )}
              >
                <div className={styles.title1}>Table No. 5</div>
                <div className={styles.dateAndTime}>
                  {new Date().toUTCString().slice(16, 22)}{" "}
                  <FaUserAlt
                    color=" rgba(255, 255, 255, 0.545)"
                    size="10px"
                    className={styles.topIcons}
                  />
                  <text className={styles.topIcons}>4</text>
                </div>
              </div>
            </div>
            <div className={styles.topRight}>
              <StoryHeader />
            </div>
          </div>
          <div className={styles.topBox}>
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
            </div>
            <div className={styles.secondRow}>
              <div className={styles.menu1}>
                <BiFoodMenu size="1.5em" className={styles.menuicon} />
                Add Order
              </div>
              <div className={styles.menu1}>
                <BiSelectMultiple size="1.5em" className={styles.menuicon} />
                Assign Staff
              </div>
              <div className={styles.menu1}>
                <HiSortDescending size="1.5em" className={styles.menuicon} />
                Short By
              </div>
              <div className={styles.menu1}>
                <BiEditAlt size="1.5em" className={styles.menuicon} />
                Filter
              </div>
            </div>
            <div className={styles.border} />
          </div>
          <div className={styles.menu}>
            <Row title={"Served"} />
            <Row title={"Pending"} />
            <Single title={"Cancel"} />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        {<RightOrder clicked={clickHandle} {...props} />}
      </div>
    </div>
  );
};

export default TableBill;
