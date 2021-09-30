import React, { useEffect, useState } from "react";
import styles from "./StaffManagement.module.css";
import Hello from "./Components/Hello/HelloContainer";
import Attendance from "./Components/Attendancebar/Attendance";
import Profession from "./Components/Professions/Professions";
import Header from "../Components/TopHeader/Header";

const StaffManagement = (props) => {
  const [options, setOptions] = useState([
    {
      name: "Staff Profile",
      total: "124",
      img: "/images/staffmanagement1.png",
    },
    { name: "Attendance", total: "124", img: "/images/staffmanagement2.png" },
    {
      name: "Salary Report",
      total: "124",
      img: "/images/staffmanagement3.png",
    },
    { name: "Staff Shifts", total: "124", img: "/images/staffmanagement4.png" },
    { name: "Job Vancancy", total: "124", img: "/images/staffmanagement5.png" },
    { name: "Staff Document", total: "124", img: "/images/inventory.png" },
    { name: "User Role Manag.", total: "124", img: "/images/inventory.png" },
  ]);

  return (
    <div className={styles.container}>
      <Header subheader={"Staff Management"} header={"Management"} {...props} />
      <div className={styles.top}>
        <div className={styles.topRow1}>
          <Hello />
        </div>
        <div className={styles.topRow2}>
          <Attendance />
        </div>
        <div className={styles.topRow3}>
          <Profession />
        </div>
      </div>
      <div className={styles.borderBottom}></div>
      <div className={styles.list}>
        {options.map((dat, index) => (
          <div
            className={styles.box}
            onClick={() =>
              props.history.push({
                pathname: "/employee",

                state: { tab: index },
              })
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
    </div>
  );
};
export default StaffManagement;
