import React, { useState } from "react";
import styles from "./Overviews.module.css";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import cx from "classnames";
import { FaRegStar } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect } from "react";
const Overviews = (props) => {
  const dropdownopt = [
    "View",
    "Edit",
    "Send",
    "Export as Pdf",
    "Export as DOCX",
    "Copy",
    "Move To Management Report",
  ];

  const [expand, setExpand] = useState(false);
  const [boxHover, setBoxHover] = useState(true);
  const [starHover, setStarHover] = useState(false);
  const [tempIndex, setTempIndex] = useState(null);
  const [option, setOption] = useState(false);
  const [optIndexTemp, setOptIndex] = useState(true);

  useEffect(() => {
    setExpand(props.expand1);
  }, [props.expand1]);
  return (
    <div className={cx(styles.container, expand ? styles.paddingBottom : null)}>
      <div className={styles.header}>
        <div onClick={() => setExpand(!expand)}>
          {expand ? (
            <RiArrowDownSLine className={styles.arrow} />
          ) : (
            <RiArrowUpSLine className={styles.arrow} />
          )}
        </div>
        <div>{props.name}</div>
      </div>
      {expand ? (
        <div className={styles.box}>
          {props.data.map((dat, index) => (
            <div className={styles.dataBox}>
              <div
                className={cx(
                  styles.data,
                  boxHover === true && tempIndex === index
                    ? styles.boxBorder
                    : null
                )}
                onMouseLeave={
                  (option === true ? () => setBoxHover(false) : null,
                  () => setOption(false))
                }
                onMouseEnter={
                  (() => setBoxHover(true), () => setTempIndex(index))
                }
                onMouseLeave={() => {
                  setTempIndex(null);
                  setOption(false);
                }}
              >
                <div>{dat}</div>
                {boxHover === true && tempIndex === index ? (
                  <div className={styles.iconContain}>
                    <div onMouseEnter={() => setStarHover(true)}>
                      {tempIndex === index && starHover === true ? (
                        <BsFillStarFill className={styles.starHover} />
                      ) : (
                        <FaRegStar />
                      )}
                    </div>
                    <div
                      className={styles.option}
                      onClick={() => setOption(!option)}
                    >
                      <HiOutlineDotsVertical />
                    </div>
                  </div>
                ) : null}
              </div>
              {tempIndex === index && option === true && boxHover === true ? (
                <div
                  className={styles.optionBox}
                  onMouseOver={() => setOption(true)}
                >
                  {dropdownopt.map((dat, optIndex) => (
                    <div
                      className={cx(
                        styles.optionList,
                        optIndexTemp === optIndex ? styles.selected : null
                      )}
                    >
                      {dat}{" "}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Overviews;
