import React, { useState } from "react";
import styles from "./AccountManagement.module.css";
import Networth from "./TopAccountManagement/ChartsNetworth/Charts";
import Cashflow from "./TopAccountManagement/lineGraph/LineGraph";
import Shortcuts from "./TopAccountManagement/QuickActions/QuickActions";
import { FiSettings } from "react-icons/fi";
import Header from "../Components/TopHeader/Header";

const AccountManagement = (props) => {
  const [options, setOptions] = useState([
    { name: "Invoices", total: "124", img: "/images/inventory.png" },
    { name: "Income", total: "124", img: "/images/inventory.png" },
    { name: "Expenses", total: "124", img: "/images/inventory.png" },
    { name: "Customer", total: "124", img: "/images/inventory.png" },
    { name: "Supliers", total: "124", img: "/images/inventory.png" },
    { name: "Reccuring Bills", total: "124", img: "/images/inventory.png" },
    { name: "Cash Flow", total: "124", img: "/images/inventory.png" },
    { name: "Reports", total: "124", img: "/images/inventory.png" },
  ]);
  const [options1, setOptions1] = useState([
    {
      header: "Account Head",
      subHeader: "Give Best Physical menu to   your costumer",
    },
    {
      header: "Transaction Category",
      subHeader: "Give Best Physical menu to   your costumer",
    },
  ]);

  return (
    <div className={styles.container}>
      <Header
        subheader={"Account Management"}
        header={"Management"}
        {...props}
      />

      <div className={styles.scroll}>
        <div className={styles.topInventory}>
          <div className={styles.Networth}>
            <Networth />
          </div>
          <div className={styles.Cashflow}>
            <Cashflow />
          </div>
          <div className={styles.Shortcuts}>
            <Shortcuts />
          </div>
        </div>

        <div className={styles.hr} />
        <div className={styles.list}>
          {options.map((dat) => (
            <div
              className={styles.box}
              onClick={() =>
                props.history.push(
                  `/management/Account Management/${dat.name}/0`
                )
              }
            >
              <div className={styles.images}>
                <img className={styles.image2} src={dat.img} />
              </div>
              <div className={styles.text}>{dat.name}</div>
              <div className={styles.text2}>{dat.total} items in menu</div>
            </div>
          ))}
        </div>
        <div className={styles.othersMainContainer}>Others</div>
        <div className={styles.otherContainer}>
          {options1.map((dat) => (
            <div className={styles.otherList}>
              <div className={styles.otherHeader}>{dat.header} </div>
              <div className={styles.otherSubHeader}>{dat.subHeader} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
