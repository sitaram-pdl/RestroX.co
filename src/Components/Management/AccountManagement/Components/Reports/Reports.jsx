import React, { useState } from "react";
import styles from "./Reports.module.css";
import cx from "classnames";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { BiSelectMultiple } from "react-icons/bi";
import { HiSortDescending } from "react-icons/hi";
import { BiEditAlt } from "react-icons/bi";
import FavouritesReports from "./FavouritesReports/FavouritesReports";
import OverView from "./Overviews/Overviews";
const Reports = (props) => {
  const business = [
    "Audit log",
    "Custum Summary Report",
    "Profit and loss by month",
    "Balance Sheet Comparision",
    "Balance Sheet Comparision",
    "Audit log",
    "Custum Summary Report",
    "Profit and loss by month",
    "Balance Sheet Comparision",
    "Balance Sheet Comparision",
    "Audit log",
    "Custum Summary Report",
    "Profit and loss by month",
    "Balance Sheet Comparision",
    "Balance Sheet Comparision",
  ];
  const topLeft = [{ name: "All" }, { name: "Management Reports" }];
  const topRight = [{ name: "Expand" }, { name: "Compact" }];
  const companyReports = [
    {
      reportsTitle: "Company Overview",
      year: "2077",
      restroName: "BullDog Bar | Beer | Blues",
    },
    {
      reportsTitle: "Company Overview",
      year: "2077",
      restroName: "BullDog Bar | Beer | Blues",
    },
    {
      reportsTitle: "Company Overview",
      year: "2077",
      restroName: "BullDog Bar | Beer | Blues",
    },
  ];
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [expand, setExpand] = useState(false);
  const [tab, setTab] = useState("All");
  const fav = [, { name: "Profit and Loss" }];
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>Reports</div>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          {topLeft.map((dat, indexleft) => (
            <div
              className={cx(
                styles.topleftName,
                leftIndex === indexleft ? styles.red : null
              )}
              onClick={() => setLeftIndex(indexleft)}
            >
              {dat.name}
            </div>
          ))}
        </div>
        <div className={styles.topRight}>
          <div className={styles.secondRow}>
            <div className={styles.searchDiv}>
              <input className={styles.input} placeholder="Search here" />
              <AiOutlineSearch
                size="1.5em"
                color="gray"
                className={styles.menuicon}
              />
            </div>
            <div className={styles.extend}>
              {topRight.map((dat, rIndex) => (
                <div
                  className={cx(
                    styles.extendSelect,
                    rightIndex === rIndex ? styles.extendSelected : null
                  )}
                  onClick={() => {
                    setRightIndex(rIndex);

                    rIndex === 0 ? setExpand(true) : setExpand(false);
                  }}
                >
                  {dat.name}
                </div>
              ))}
            </div>

            <div className={styles.menu}>
              <HiSortDescending
                size="1.5em"
                color="white"
                className={styles.menuicon}
              />
              Short By
            </div>
            <div className={styles.menu}>
              <BiEditAlt
                size="1.5em"
                color="white"
                className={styles.menuicon}
              />
              filter
            </div>
          </div>
        </div>
        <div className={styles.hr}></div>
      </div>

      <div className={styles.companyReports}>
        <div className={styles.crTitle}>Company Reports</div>
        <div className={styles.reportsContain}>
          {companyReports.map((dat) => (
            <div className={styles.report}>
              <div className={styles.leftReport}>
                <div className={styles.rotate}>
                  {dat.reportsTitle},{dat.year}
                </div>
              </div>
              <div className={styles.rightReport}>
                <div className={styles.reportTop}>
                  <div className={styles.reportsTitle}>{dat.reportsTitle} </div>
                  <div className={styles.periodText}>
                    For the period of {dat.year}{" "}
                  </div>
                </div>
                <div className={styles.reportBottom}>
                  <div className={styles.logoContain}>
                    <img src={"/images/logo1.png"} className={styles.imglogo} />
                  </div>
                  <div className={styles.restroName}>{dat.restroName} </div>
                  <div className={styles.reporttext}>
                    For the management purpose only
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.favourites}>
          <FavouritesReports />
        </div>
        <div className={styles.favourites}>
          <OverView name="Business Overview" data={business} expand1={expand} />
        </div>
        <div className={styles.favourites}>
          <OverView name="Who Owes You" data={business} expand1={expand} />
        </div>
        <div className={styles.favourites}>
          <OverView
            name="Sales and Customer"
            data={business}
            expand1={expand}
          />
        </div>
        <div className={styles.favourites}>
          <OverView name="Who You Owes" data={business} expand1={expand} />
        </div>
        <div className={styles.favourites}>
          <OverView
            name="Expenses and Suppliers"
            data={business}
            expand1={expand}
          />
        </div>
        <div className={styles.favourites}>
          <OverView name="For my Accountant" data={business} expand1={expand} />
        </div>
        <div className={styles.favourites}>
          <OverView name="Payroll" data={business} expand1={expand} />
        </div>
      </div>
    </div>
  );
};
export default Reports;
