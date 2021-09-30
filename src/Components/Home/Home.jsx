import React, { useState } from "react";
import styles from "./HomeCss.module.css";

import cx from "classnames";
import { StoriesHeader, Tables } from "../";
import Summary from "./Summary";
import Monthsalary from "./Component/MonthSalary/MonthSalary";
import Servestaff from "./Component/Servestaffcharts/Servestaff";
import OrderReport from "./Component/OrderReport/OrderReport";
import Shortcut from "./Component/Shortcuts/Shortcuts";
import Revenue from "./Component/Revenue/Revenue";
import Semi from "./Component/SemiCircle/LineXGraph";
import Bills from "./Component/Bills/Bills";
import Reminder from "./Component/Reminder/Reminder";
import Single from "./Component/Todo/Single";
import Menus from "./Component/Menus/Menus";
import LineXGraph from "../LineXGraph/LineXGraph";
import Notes from "./Component/Notes/Notes";

const Home = (props) => {
  const size = "70px";
  const center = "35px";
  const radius = "32.5";
  const strokeWidth = "5px";
  const circleOneStroke = props.theme ? "rgba(31, 29, 42, 0.084)" : "gray";
  const circleTwoStroke = "tomato";

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.storiesDiv}>
          <StoriesHeader {...props} />
        </div>
        <div className={styles.rightDiv}>
          <Summary />
        </div>
      </div>
      <div className={styles.rowContain}>
        <div className={styles.row1}>
          <Monthsalary />
        </div>
        <div className={styles.row11}>
          <Servestaff />
        </div>
      </div>
      <div className={styles.rowContain}>
        <div className={styles.leftContainer}>
          <OrderReport />
          <div className={styles.leftRevenueSatisfaction}>
            <div className={styles.revenue}>
              <Revenue />
            </div>
            <div className={styles.semi}>
              <Semi />
            </div>
          </div>
          <div className={styles.leftRevenueSatisfaction}>
            <div className={styles.revenue}>
              <Bills />
            </div>
            <div className={styles.semi}>
              <Reminder />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Shortcut />
          <div className={styles.displayFlex}>
            <Single /> <Notes />
          </div>
          <div className={styles.displayFlex}>
            <Menus />
          </div>
          <div className={styles.displayFlex}>
            <LineXGraph />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
