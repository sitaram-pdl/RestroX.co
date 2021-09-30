import React, { useState } from "react";
import styles from "./Shifttask.module.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Progress } from "antd";
import "antd/dist/antd.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Shifttask = () => {
  const [items, setItems] = useState([
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
      totaltask: "6",
      completed: "3",
      percent: "60",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
      totaltask: "6",
      completed: "3",
      percent: "40",
    },
    {
      name: "Subin Bhandari",
      desc: "Manager",
      image:
        "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
      totaltask: "6",
      completed: "3",
      percent: "30",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.customer1}>Staff Task</div>
        <div className={styles.customer2}>
          SEE ALL STAFFS
          <FaArrowCircleRight className={styles.icon} />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.arrow}>
          <FiChevronLeft className={styles.arrowicon} />
        </div>
        <div className={styles.scrollContain}>
          {items.map((dat, index) => (
            <div className={styles.listcontainer}>
              <div className={styles.listcontain}>
                <div>
                  <img className={styles.image} src={dat.image}></img>
                </div>

                <div>
                  <div className={styles.small1}>{dat.name}</div>
                  <div className={styles.small2}>{dat.desc}</div>
                </div>
              </div>
              <div className={styles.progressbar} id="progressbar">
                {dat.completed} from {dat.totaltask} tasks completed
                <Progress percent={dat.percent} width={80} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.arrow}>
          <FiChevronRight className={styles.arrowicon} />
        </div>
      </div>
    </div>
  );
};

export default Shifttask;
