import React, { useState } from "react";
import styles from "./Recruitment.module.css";

const Recruitment = () => {
  const [items, setItems] = useState([
    {
      fullname: "Subin Bhandari",
      profession: "Chef",
      status: "Watchlist",
    },
    {
      fullname: "Subin Bhandari",
      profession: "Chef",
      status: "Interview",
    },
    {
      fullname: "Subin Bhandari",
      profession: "Chef",
      status: "Watchlist",
    },
    {
      fullname: "Subin Bhandari",
      profession: "Chef",
      status: "Interview",
    },
    {
      fullname: "Subin Bhandari",
      profession: "Chef",
      status: "Interview",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.headercontain}>
        <div className={styles.headerleft}>Recruitment Progress</div>
        <div className={styles.headerright}>See All</div>
      </div>
      <div className={styles.table1}>
        <div className={styles.fullname}>Full name</div>
        <div className={styles.profession}> Profession</div>
        <div className={styles.status}>Status</div>
      </div>
      <div>
        {items.map((dat, index) => (
          <div className={styles.table2}>
            <div className={styles.fullname}>{dat.fullname}</div>
            <div className={styles.profession}> {dat.profession}</div>
            <div className={styles.statuscontain}>
              <div
                className={
                  dat.status == "Watchlist" ? styles.dotred : styles.dotgreen
                }
              ></div>
              <div>{dat.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
