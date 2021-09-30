import React, { useState, useEffect } from "react";
import styles from "./MenuTypes.module.css";
import cx from "classnames";
import { RiInformationFill } from "react-icons/ri";
import { CSS_COLOR_NAMES } from "../../../api";
import { Switch, notification } from "antd";
import "antd/dist/antd.css";
import "./Custum.css";
import Header from "../Components/TopHeader/Header";

const MenuType = (props) => {
  const [data, setData] = useState([
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Dine in Menu",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Take Away Menu",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
    {
      image:
        "http://media-s3-us-east-1.ceros.com/walstead/images/2018/12/17/9d0fb808541c6b60f58bbabdae6d41c2/shutterstock-391582873-burger-plate.png",
      name: "Breakfast",
      type: "Owner",
    },
  ]);
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
  const [shortcuts, setShortcuts] = useState([
    { name: "Add Dishes" },
    { name: "Add New Menu" },
    { name: "Review Dishe Price" },
  ]);
  const [hover, setHover] = useState(1);
  const [checked, setChecked] = useState(false);
  function getDarkColor() {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  }

  const onChange = (checked) => {
    setChecked(!checked);
  };

  return (
    <div className={styles.container}>
      <Header {...props} />

      <div className={styles.singleTop}>
        <div className={styles.leftSide}>
          <div className={styles.reportsContain}>
            {companyReports.map((dat) => (
              <div className={styles.report}>
                <div className={styles.leftReport}></div>
                <div
                  className={styles.rightReport}
                  style={{ backgroundColor: getDarkColor() }}
                >
                  <div className={styles.reportTop}>
                    <div className={styles.reportsTitle}>
                      {dat.reportsTitle}{" "}
                    </div>
                    <div className={styles.periodText}>
                      For the period of {dat.year}{" "}
                    </div>
                  </div>
                  <div className={styles.reportBottom}>
                    <div className={styles.logoContain}>
                      <img
                        src={"/images/logo1.png"}
                        className={styles.imglogo}
                      />
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
        </div>
      </div>

      <div className={styles.table3}>
        {/**

        <div className={styles.row}>
          <div>Drafts</div>
          <div className={styles.subText}>Saved Menus</div>
        </div>
        
                <div>
                    <div className={styles.addButton}>
                        Add Menu
                    </div>
                </div>
            </div>

            <div className={styles.boxType}>
                {[0, 1, 2, 3, 5].map((dat) => <div className={styles.typesBox}>
                    <div>
                        <img src="/images/Take Away Food.png" className={styles.typesImage} />
                    </div>
                    <div className={styles.typesRight}>
                        <div>
                            Dine in Menu
                        </div>
                        <div className={styles.items}>
                            211 Items
                        </div>
                    </div>
                </div>)}
                */}
      </div>
    </div>
  );
};

export default MenuType;
