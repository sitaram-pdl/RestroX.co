import React, { useState } from "react";
import styles from "./Home.module.css";
import Demo from "./demo.png";
import cx from "classnames";
import { Left, Orders, Right, StoriesHeader, Tables } from "../";
import Tabs from "../Tabs/Tabs";
import Chart from "../Chart/Chart";
import LineXGraph from "../LineXGraph/LineXGraph";
import Radial from "../RadialChart/LineXGraph";
import Semi from "../SemiCircle/LineXGraph";
import MultiGraph from "../MultiGraph/LineXGraph";
import Trending from "../Trending/Trending";
import MostViewed from "../MostViewed/Trending";
import TakeAway from "../TakeAway/TakeAway";
const Home = (props) => {
  const size = "70px";
  const center = "35px";
  const radius = "32.5";
  const strokeWidth = "5px";
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
        <div className={styles.overview}>Overview</div>
        <StoriesHeader {...props} />

        <div>
          <Left {...props} theme={props.theme} />
          <Chart />
          <Orders theme={props.theme} />
          <LineXGraph theme={props.theme} />
          <MultiGraph theme={props.theme} />
          <div className={styles.twoDiv}>
            <div className={styles.leftTwo}>
              <Semi />
            </div>
            <div className={styles.rightTwo}>
              <Radial />
            </div>
          </div>
          <div className={styles.twoDiv}>
            <div className={styles.rightTwo}>
              <Trending />
            </div>
            <div className={styles.leftTwo}>
              <MostViewed />
            </div>
          </div>
          <div className={styles.splitDiv}>
            <div className={styles.splitLeft}>
              <TakeAway title={"Take Away"} />
              <TakeAway title={"Dine In"} />
            </div>
            <div className={styles.splitRight}>
              <TakeAway title={"Delivery"} show={true} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Right where={props.where} theme={props.theme} />
      </div>
    </div>
  );
};
export default Home;
