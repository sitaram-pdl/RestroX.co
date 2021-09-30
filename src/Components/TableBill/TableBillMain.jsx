import React, { useRef, useState, useEffect } from "react";
import styles from "./TableBillMain.module.css";
import { BackDrop, FixedPayment, Menu, StoriesHeader } from "..";
import RightOrder from "./RightOrder";
import { FiSearch } from "react-icons/fi";
import cx from "classnames";
import ListView from "../ListView/ListView";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillEye, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaThList } from "react-icons/fa";
import { IoNotificationsOutline, IoCheckmarkDone } from "react-icons/io5";
import Row from "./Row";
import Single from "./Single";
const TableBillMain = (props) => {
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
          <div className={styles.tableName}>
            <div
              className={cx(
                styles.leftTable,
                props.theme ? styles.white : null
              )}
            >
              <div className={styles.title1}>Table No. 5</div>
              <div>{new Date().toUTCString().slice(16, 22)}</div>
            </div>
            <BiDotsVerticalRounded
              size="1em"
              color="white"
              onClick={() => setClickDrop(true)}
            />
            {clickDrop ? (
              <div className={styles.absoluteDropdown} ref={wrapperRef}>
                <div className={styles.options}>
                  <IoNotificationsOutline />{" "}
                  <div className={styles.food}>Add Food</div>
                </div>
                <div className={styles.options}>
                  <AiFillEye /> <div className={styles.food}>View Bill</div>
                </div>
                <div className={styles.options}>
                  <IoCheckmarkDone />{" "}
                  <div className={styles.food}>Send Message</div>
                </div>
                <div className={styles.options}>
                  <AiOutlineUsergroupAdd />{" "}
                  <div className={styles.food}>Assign to Staff</div>
                </div>
                <div className={styles.options}>
                  <IoCheckmarkDone />{" "}
                  <div className={styles.food}>Check Out</div>
                </div>
              </div>
            ) : null}
          </div>
          <div className={styles.line}>
            <div className={cx(styles.row, props.theme ? styles.white2 : null)}>
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

export default TableBillMain;
