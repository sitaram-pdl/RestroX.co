import React, { useState } from "react";
import styles from "./RestroMenu.module.css";
import Demo from "./demo.png";
import { Calender, RightRestro } from "..";
import cx from "classnames";
import LeftContainer from "./LeftMenu/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import StoriesHeader from "../StoriesHeader/StoriesHeader";
import Task from "./Task/Task";
import Midcontainer from "./MidContainer/Midcontainer";
const RestroMenu = (props) => {
  const size = "60px";
  const center = "30px";
  const radius = "28.5";
  const strokeWidth = "3px";
  const circleOneStroke = props.theme ? "rgba(31, 29, 42, 0.084)" : "gray";
  const circleTwoStroke = "tomato";

  const [stories, setStories] = useState([
    { image: "/demo.png", value: "30" },
    { image: "/demo.png", value: "4" },
    { image: "/demo.png", value: "94" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
    { image: "/demo.png", value: "44" },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.overview}>Hi Samir</div>
        <div>
          <StoriesHeader {...props} />
        </div>
        <Task {...props} />
        <Midcontainer />
        <LeftContainer />
      </div>
      <div className={styles.rightContainer}>
        <RightContainer />
      </div>
    </div>
  );
};
export default RestroMenu;
