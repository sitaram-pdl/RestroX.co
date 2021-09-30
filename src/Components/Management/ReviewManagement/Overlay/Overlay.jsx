import { ClickableTile } from "carbon-components-react";
import React from "react";
import styles from "./Overlay.module.css";
import { AiTwotoneStar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import TextareaAutosize from "react-textarea-autosize";

import cx from "classnames";

const Overlay = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <div className={styles.boxTop}>
          <div className={styles.boxTopLeft}>
            <div className={styles.image}>
              <img
                src={props.dat[props.index].image}
                className={styles.boxImage}
              ></img>
            </div>
            <div>
              <div className={styles.dishName}>
                {props.dat[props.index].dishName}
              </div>
              <div className={styles.review}>
                <AiTwotoneStar className={styles.reviewStar} />
                {props.dat[props.index].dishReview} ({" "}
                {props.dat[props.index].totalReview} reviewed)
              </div>
            </div>
          </div>
          <div className={styles.boxTopRight}>
            <BiDotsVerticalRounded className={styles.iconBox} />
          </div>
        </div>
        <div className={styles.boxMid}>
          <div>
            <div
              className={cx(
                styles.status,
                props.dat[props.index].status == "Replied"
                  ? styles.replied
                  : styles.unreplied
              )}
            >
              {props.dat[props.index].status}
            </div>
          </div>
          <div className={styles.date}>{props.dat[props.index].date}</div>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.boxBottom}>
          <div className={styles.spaceBetween}>
            <div className={styles.bottomLeft}>
              <div className={styles.boxTopLeft}>
                <div className={styles.image}>
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
                    }
                    className={styles.boxImage1}
                  ></img>
                </div>
                <div>
                  <div className={styles.userName}>
                    {props.dat[props.index].userName}
                  </div>
                  <div className={styles.review}>@swodeshnep</div>
                </div>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <div>
                <AiTwotoneStar className={styles.reviewStar1} />{" "}
              </div>
              <div> {props.dat[props.index].madeReview}</div>
            </div>
          </div>
          <div className={styles.reviewTextcontain}>
            <div className={styles.reviewText}>
              {props.dat[props.index].message}
            </div>
            {props.dat[props.index].status === "Replied" ? (
              <div className={styles.width100}>
                <div className={styles.repliedContain}>
                  <div className={styles.replierDetail}>
                    <div className={styles.userName1}>
                      {props.dat[props.index].userName}
                    </div>
                    <div className={styles.review1}>@swodeshnep</div>
                  </div>
                  <div className={styles.image10}>
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&usqp=CAU"
                      }
                      className={styles.boxImage10}
                    ></img>
                  </div>
                </div>
                <div className={styles.reviewText}>
                  {props.dat[props.index].message}
                </div>
              </div>
            ) : null}
          </div>
          {props.dat[props.index].status === "Unreplied" ? (
            <div className={styles.spaceBetween}>
              <div className={styles.searchDiv1}>
                <input
                  type="text"
                  className={styles.input1}
                  placeholder="Write Message here"
                />
                <ImAttachment
                  size="1.1em"
                  color="gray"
                  className={styles.menuicon1}
                />
              </div>
              <div className={styles.arrowicon}>
                <IoIosArrowDroprightCircle
                  size="1.8em"
                  color="#4199a6"
                  backgroundColor="white"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
