import React, { useState } from "react";

import styles from "./QuickAction.module.css";
import cx from "classnames";

const QuickAction = () => {
  const [tempindex, setTempindex] = useState(0);

  const option = [
    { name: "Dine In Menu ", sub: "211 Item" },
    { name: "Orders", sub: "211 Item" },
    { name: "Tasks ", sub: "211 Item" },
    { name: "Staff Management ", sub: "211 Item" },
    { name: "Attendance", sub: "211 Item" },
    { name: "Inventory Management", sub: "211 Item" },
    { name: "Accounts ", sub: "211 Item" },
    { name: "Report", sub: "211 Item" },
    { name: "Notes ", sub: "211 Item" },
    { name: "Take Away ", sub: "211 Item" },
    { name: "Inventory Management ", sub: "211 Item" },
    { name: "Accounts", sub: "211 Item" },
    { name: "Staff Management ", sub: "211 Item" },
    { name: "Inventory Management", sub: "211 Item" },
  ];

  const option2 = [
    { name: "Tasks" },
    { name: "Notes" },
    { name: "Wallet" },
    { name: "Upload Bill" },
    { name: "Cancel" },
  ];

  const option3 = [{ name: "Scan QR Code" }, { name: "Share My QR" }];

  return (
    <div className={styles.container}>
      <div className={styles.text}>Quick Action</div>
      <div className={styles.mapcontain}>
        {option.map((dat) => (
          <div className={styles.list}>
            <div>
              <img className={styles.images} src={"./images/Dieinimg.png"} />
            </div>
            <div className={styles.text1}>
              <div className={styles.name}> {dat.name}</div>
              <div className={styles.sub}> {dat.sub} </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.mapcontain2}>
        {option2.map((dat) => (
          <div className={styles.list2}>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwVYY32WF33882swzfHT76rhLpcqDgq5SkFcA47cp1s01sBmBSm6o92JRIE0Mfz45-OA&usqp=CAU"
                className={styles.image2}
              />
            </div>
            <div className={styles.name2}>{dat.name} </div>{" "}
          </div>
        ))}
      </div>
      <div className={styles.qrMain}>
        <div className={styles.qrCode}>
          {option3.map((dat, index) => (
            <div
              className={cx(
                styles.name3,
                tempindex === index ? styles.selected : null
              )}
              onClick={() => setTempindex(index)}
            >
              {dat.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAction;
