import React, { useState } from "react";
import styles from "./CashFlow.module.css";

import cx from "classnames";

import Dropdown from "../../../../react-dropdown";
import { Divider } from "antd";
import { Donut, Legend } from "britecharts-react";
import "antd/dist/antd.css";

const CashFlow = (props) => {
  const [itemsIndex, setItemIndex] = useState(0);
  const cash = [
    {
      name: "Cash Out",
    },
    {
      name: "Cash In",
    },
  ];
  const purchase = [
    // in this graph guantity is for percentage & colour is set after name
    {
      name: "Purchase1",
      percentage: 45,
      amount: 45000,
      quantity: 10,
    },
    {
      name: "Purchase2",
      percentage: 45,
      amount: 45000,
      quantity: 20,
    },
    {
      name: "Purchase3",
      percentage: 45,
      amount: 45000,
      quantity: 30,
    },
    {
      name: "Purchase4",
      percentage: 45,
      amount: 45000,
      quantity: 40,
    },
    {
      name: "Purchase5",
      percentage: 45,
      amount: 45000,
      quantity: 10,
    },
    {
      name: "Purchase6",
      percentage: 45,
      amount: 45000,
      quantity: 10,
    },
  ];

  const date = new Date();
  const marginObject = {};
  const options1 = [
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftcontainer}>
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <div className={styles.summary}>Cash Flow</div>
          </div>
          <div className={styles.topRight}>
            <Dropdown
              options={options1}
              value={"2021"}
              placeholder="Select an option"
              controlClassName={styles.dropdowncontrol}
            />
          </div>
        </div>
        <div className={styles.leftBody}>
          <div className={styles.donut}>
            <Donut
              data={purchase}
              width={200}
              height={200}
              margin={marginObject}
              externalRadius={240 / 2.5}
              internalRadius={200 / 5}
            />
          </div>
        </div>
        <div className={styles.cashFlowContain}>
          {cash.map((dat, index) => (
            <div
              className={cx(
                styles.cashButton,
                itemsIndex == index && dat.name === "Cash In"
                  ? styles.cashout
                  : 0,
                itemsIndex == index && dat.name === "Cash Out"
                  ? styles.cashin
                  : 0
              )}
              onClick={() => setItemIndex(index)}
            >
              {dat.name}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.tableHead}>
          <div>Category</div>
          <div>Percent</div>
          <div>Amount</div>
        </div>
        <div className={styles.tableContain}>
          {purchase.map((dat, index) => (
            <div className={styles.tableData}>
              <div>{dat.name} </div>
              <div> {dat.percentage}%</div>
              <div> Rs {dat.amount} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CashFlow;
