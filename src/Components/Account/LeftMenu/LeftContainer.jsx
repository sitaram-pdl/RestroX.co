import React from "react";

import styles from "./leftContainer.module.css";
import Charts from "./Component/ChartsNetworth/Charts";
import LineGraph from "./Component/lineGraph/LineGraph";
import Income from "./Component/Income/Income";
import MonthSalary from "./Component/MonthSalary/MonthSalary";
import Todo from "./Component/Todo/Todo";
import Revenue from "./Component/Revenue/Revenue";
import Shortcut from "./Component/Shortcuts/Shortcut";
import Expenses from "./Component/Expenses/Expenses";
import Earning from "./Component/Earning/Earning";

import DayReport from "./Component/DayReport/DayReport";
import AccountBalance from "./Component/AccountBalance/AccountBalance";
import FavouritesReports from "./Component/FavouritesReports/FavouritesReports";
import Bills from "./Component/Bills/Bills";
import ShortcutsButtons from "./Component/ShortcutsButtons/ShortcutsButtons";
import AccountActivity from "./Component/AccountActivity/AccountActivity";
import Budget from "./Component/Budget/Budget";
import CashFlow from "./Component/CashFlow/CashFlow";
import Discover from "./Component/Discovers/Discovers";
import TotalEarning from "./Component/TotalEarning/TotalEarning";
import TotalExpenses from "./Component/TotalExpenses/TotalExpenses";
import SalesTarget from "./Component/SalesTarget/SalesTarget";
import CashBalance from "./Component/CashBalance/CashBalance";
import Purchase from "./Component/Purchase/Purchase";

const LeftContainer = (props) => {
  const size = "70px";
  const center = "35px";
  const radius = "32.5";
  const strokeWidth = "5px";
  const circleOneStroke = props.theme ? "rgba(31, 29, 42, 0.084)" : "gray";
  const circleTwoStroke = "tomato";

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.row1}>
          <Charts />
        </div>
        <div className={styles.row1}>
          <LineGraph />
        </div>
        <div className={styles.row1}>
          <Budget />
        </div>
      </div>
      <div className={styles.containerRow}>
        <div className={styles.row2}>
          <MonthSalary theme={props.theme} />
        </div>
        <div className={styles.row22}>
          <ShortcutsButtons />
        </div>
      </div>
      <div className={styles.containerRow}>
        <div className={styles.row3}>
          <Revenue />
        </div>
        <div className={styles.row33}>
          <Income />
        </div>
        <div className={styles.row33}>
          <div>
            <Expenses />
          </div>

          <div className={styles.margintop}>
            <Earning />
          </div>
        </div>
      </div>
      <div className={styles.containerRow}>
        <div className={styles.row4}>
          <Todo />
        </div>
        <div className={styles.row44}>
          <DayReport theme={props.theme} />
        </div>
      </div>
      <div className={styles.containerRow}>
        <div className={styles.row5}>
          <CashFlow />
        </div>
        <div className={styles.row55}>
          <Discover />
        </div>
      </div>
      <div className={styles.containerRow}>
        <div className={styles.row6}>
          <div>
            <TotalEarning />
          </div>
          <div className={styles.margintop}>
            <TotalExpenses />
          </div>
        </div>
        <div className={styles.row66}>
          <SalesTarget />
        </div>
        <div className={styles.row666}>
          <div>
            <CashBalance />
          </div>
          <div className={styles.margintop}>
            <Purchase />
          </div>
        </div>
      </div>
      <div className={styles.containerBottom}>
        <div className={styles.row6}>
          <div>
            <FavouritesReports />
          </div>
          <div className={styles.margintop}>
            <AccountBalance />
          </div>
        </div>
        <div className={styles.row66}>
          <Bills />
        </div>
        <div className={styles.row666}>
          <AccountActivity />
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
