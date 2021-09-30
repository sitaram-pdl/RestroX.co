import React, { useState } from "react";
import styles from "./SocialMediaManagement.module.css";
import cx from "classnames";
import Header from "../Components/TopHeader/Header";
const AccountManagement = (props) => {
  const [options, setOptions] = useState([
    {
      name: "Promotion",
      img: "/images/inventory.png",
      subHeader: "Give Best Physical menu to   your costumer",
    },
    {
      name: "Social Accounts",
      img: "/images/inventory.png",
      subHeader: "Give Best Physical menu to   your costumer",
    },
    {
      name: "Social Media Handler",
      img: "/images/inventory.png",
      subHeader: "Give Best Physical menu to   your costumer",
    },
    {
      name: "Boosting",
      img: "/images/inventory.png",
      subHeader: "Give Best Physical menu to   your costumer",
    },
  ]);
  const [options1, setOptions1] = useState([
    {
      name: "Facebook",
      likes: "23.5",
    },
    {
      name: "FoodHunter",
      likes: "23.5",
    },
    {
      name: "Instagram",
      likes: "23.5",
    },

    {
      name: "Pinterest",
      likes: "23.5",
    },
    {
      name: "TikTok",
      likes: "23.5",
    },
    {
      name: "Youtube",
      likes: "23.5",
    },
  ]);
  const checkClass = (a) => {
    switch (a) {
      case "Facebook":
        return styles.facebook;
      case "Pinterest":
        return styles.pinterest;
      case "Instagram":
        return styles.instagram;
      case "FoodHunter":
        return styles.foodhunter;
      case "TikTok":
        return styles.tiktok;
      case "Youtube":
        return styles.youtube;
    }
  };
  return (
    <div className={styles.container}>
      <Header {...props}></Header>
      <div className={styles.topContain}>
        {options1.map((dat, index) => (
          <div className={cx(styles.topListContain, checkClass(dat.name))}>
            <div className={styles.appName}>{dat.name}</div>
            <div className={styles.appName}>
              {dat.likes} k <text className={styles.likes}>Likes</text>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.list}>
        {options.map((dat) => (
          <div className={styles.box}>
            <div className={styles.images}>
              <img className={styles.image2} src={dat.img} />
            </div>
            <div className={styles.textContain}>
              <div className={styles.text}>{dat.name}</div>
              <div className={styles.subHeader}>{dat.subHeader}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountManagement;
{
  /*
   <div className={styles.topContain}>
        {options1.map((dat, index) => (
          <div className={cx(styles.topListContain, checkClass(dat.name))}>
            <div className={styles.appName}>{dat.name}</div>
            <div className={styles.appName}>
              {dat.likes} k <text className={styles.likes}>Likes</text>
            </div>
          </div>
        ))}
      </div>
      */
}
