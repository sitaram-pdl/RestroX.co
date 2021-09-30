import React, { useState } from "react";
import styles from "./ReviewManagement.module.css";
import { AiTwotoneStar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { BiSelectMultiple } from "react-icons/bi";
import { HiSortDescending } from "react-icons/hi";
import { BiEditAlt } from "react-icons/bi";
import cx from "classnames";
import Congratulation from "./TopRowItems/Congratulation";
import Shortcuts from "./TopRowItems/Shortcuts";
import Statistic from "./TopRowItems/Statistics";
import Overlay from "./Overlay/Overlay";
import Header from "../Components/TopHeader/Header";
const ReviewManagement = (props) => {
  const [item, setItem] = useState([
    {
      name: "Chicken Pasta",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
      time: "20 Minutes",
      rating: "4.8",
      price: "500",
    },
    {
      name: "Mo:Mo",
      image:
        "https://i1.wp.com/fullofplants.com/wp-content/uploads/2017/08/vegan-jackfruit-potstickers-dumplings-thumb.jpg?fit=1339%2C1339&ssl=1",
      time: "10 Minutes",
      rating: "4.8",
      price: "200",
    },
    {
      name: "Ham and Cheese Club Sandwich",
      image:
        "https://bunnyswarmoven.net/wp-content/uploads/2014/05/Pineapple-coffee-cake_106.jpg",
      time: "20 Minutes",
      rating: "4.8",
      price: "400",
    },
  ]);

  const option = [
    {
      name: "All",
    },
    {
      name: "Replied",
    },
    {
      name: "Unreplied",
    },
  ];
  const option1 = [
    {
      dishName: "Chicken MOMO",
      dishReview: "4.8",
      totalReview: "223",
      madeReview: "4.3",
      date: "Sun,21 Feb 2021",
      userName: "Swadesh Nepali",

      status: "Unreplied",
      message:
        "  MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
    },
    {
      dishName: "Chicken MOMO",
      dishReview: "4.8",
      totalReview: "223",
      madeReview: "4.3",
      date: "Sun,21 Feb 2021",
      userName: "Swadesh Nepali",
      status: "Unreplied",
      message:
        "  MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
    },
    {
      dishName: "Chicken MOMO",
      dishReview: "4.8",
      totalReview: "223",
      madeReview: "4.3",
      date: "Sun,21 Feb 2021",
      userName: "Swadesh Nepali",
      status: "Unreplied",
      message:
        "  MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
    },
    {
      dishName: "Chicken MOMO",
      dishReview: "4.8",
      totalReview: "223",
      madeReview: "4.3",
      date: "Sun,21 Feb 2021",
      userName: "Swadesh Nepali",
      status: "Unreplied",
      message:
        "  MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
    },
    {
      dishName: "Chicken MOMO",
      dishReview: "4.8",
      totalReview: "223",
      madeReview: "4.3",
      date: "Sun,21 Feb 2021",
      userName: "Swadesh Nepali",
      status: "Replied",
      message:
        "  MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
    },
    {
      dishName: "Chicken MOMO",
      dishReview: "4.8",
      totalReview: "223",
      madeReview: "4.3",
      date: "Sun,21 Feb 2021",
      userName: "Swadesh Nepali",
      status: "Unreplied",
      message:
        "  MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
    },
    {
      dishName: "Chicken MOMO",
      dishReview: "4.8",
      totalReview: "223",
      madeReview: "4.3",
      date: "Sun,21 Feb 2021",
      userName: "Swadesh Nepali",
      status: "Replied",
      message:
        "  MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
    },
    {
      dishName: "Chicken MOMO",
      dishReview: "4.8",
      totalReview: "223",
      madeReview: "4.3",
      date: "Sun,21 Feb 2021",
      userName: "Swadesh Nepali",
      status: "Replied",
      message:
        "  MOMO mitho thiyo, MOMO mitho thiyo, MOMO mitho thiyo, MOMO mithothiyo,",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2018/10/One-Pot-Creamy-Cajun-Chicken-Pasta-pan-500x500.jpg",
    },
  ];

  const [itemsIndex, setItemIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [countIndex, setCountIndex] = useState(0);

  const menuHandler = () => {
    setShow((b) => !b);
  };
  return (
    <div className={styles.container}>
      <Header
        subheader={"Social Management"}
        header={"Management"}
        {...props}
      />
      <div className={styles.scroll}>
        <div className={styles.topRowContain}>
          <Congratulation />
          <Statistic /> <Shortcuts />
        </div>
        <div className={styles.midSearchRow}>
          <div className={styles.midContainer}>
            {option.map((dat, index) => (
              <div
                className={cx(
                  styles.list1,
                  itemsIndex == index ? styles.selectedList : null
                )}
                onClick={() => setItemIndex(index)}
              >
                {dat.name}
              </div>
            ))}
          </div>
          <div className={styles.secondRow}>
            <div className={styles.searchDiv}>
              <input className={styles.input} placeholder="Search here" />
              <AiOutlineSearch size="1.5em" className={styles.menuicon} />
            </div>
            <div className={styles.menu}>
              <BiFoodMenu size="1.5em" className={styles.menuicon} />
              Menu
            </div>
            <div className={styles.menu}>
              <BiSelectMultiple size="1.5em" className={styles.menuicon} />
              Select
            </div>
            <div className={styles.menu}>
              <HiSortDescending size="1.5em" className={styles.menuicon} />
              Short By
            </div>
            <div className={styles.menu}>
              <BiEditAlt size="1.5em" className={styles.menuicon} />
              Edit
            </div>
          </div>
        </div>

        <div className={styles.mapContain2}>
          {option1.map((dat, count) => (
            <div
              className={styles.boxContainer}
              onClick={() => {
                setCountIndex(count);
                menuHandler();
              }}
            >
              <div className={styles.boxTop}>
                <div className={styles.boxTopLeft}>
                  <div className={styles.image}>
                    <img src={dat.image} className={styles.boxImage}></img>
                  </div>
                  <div>
                    <div className={styles.dishName}>{dat.dishName}</div>
                    <div className={styles.review}>
                      <AiTwotoneStar className={styles.reviewStar} />
                      {dat.dishReview} ( {dat.totalReview} reviewed)
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
                      dat.status == "Replied"
                        ? styles.replied
                        : styles.unreplied
                    )}
                  >
                    {dat.status}
                  </div>
                </div>
                <div>{dat.date}</div>
              </div>
              <div className={styles.hr}></div>
              <div className={styles.boxBottom}>
                <div className={styles.spaceBetween}>
                  <div className={styles.bottomLeft}>
                    <div> {dat.userName}</div>
                  </div>
                  <div className={styles.bottomRight}>
                    <div>
                      {" "}
                      <AiTwotoneStar className={styles.reviewStar1} />{" "}
                    </div>
                    <div> {dat.madeReview}</div>
                  </div>
                </div>
                <div className={styles.reviewText}>{dat.message}</div>
                <div className={styles.spaceBetween}>
                  <div className={styles.searchDiv1}>
                    <input
                      className={styles.input1}
                      placeholder="Write Message here"
                    />
                    <ImAttachment
                      size="1.1em"
                      color="gray"
                      className={styles.menuicon1}
                    />
                  </div>
                  <div>
                    <IoIosArrowDroprightCircle
                      size="1.8em"
                      color="#4199a6"
                      backgroundColor="white"
                    />
                  </div>
                </div>
              </div>
              {show == true && count === countIndex ? (
                <div className={styles.fixed}>
                  <div className={styles.absolute} />

                  <div className={styles.modal3} onClick={() => menuHandler()}>
                    <Overlay dat={option1} index={countIndex} />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewManagement;
