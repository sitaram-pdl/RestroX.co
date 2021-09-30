import "primereact/resources/primereact.css";

import React, { useState } from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";

import styles from "./leftContainer.module.css";
import HelloContainer from "./Component/HelloContainer";
import ContainerSec from "./Component/Containersec";
import Containersecondary from "./Component/Containersecondary/Containersecondary";
import Servestaff from "./Component/Servestaffcharts/Servestaff";
import Staff from "./Component/Staffrow2/Staff";
import Hire from "./Component/Hire/Hire";
import "./Custum.css";
import Attendance from "./Component/Attendancebar/Attendance";
import Recruitment from "./Component/Recruitment/Recruitment";
import Attandencecard from "./Component/Attendance/Atendance";
import Shifts from "./Component/Shifts/Shifts";
import Task from "./Component/Tasks/Task";
import { CgChevronRightO } from "react-icons/cg";
import Shifttask from "./Component/Shifttask/Shifttask";

const LeftContainer = () => {
  const [value7, setValue7] = useState(40);
  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.row1}>
          <div>
            <HelloContainer />
          </div>
          <div>
            <ContainerSec />
          </div>
        </div>
        <div className={styles.row11}>
          <div>
            <Containersecondary />
          </div>
          <div>
            <Servestaff />
          </div>
        </div>
      </div>
      {
        //2nd row
      }

      <div className={styles.container}>
        <div className={styles.row2}>
          <Staff />
        </div>
        <div className={styles.row22}>Statics</div>
      </div>
      {
        //3rd row
      }
      <div className={styles.container}>
        <div className={styles.row3}>
          <Hire />
        </div>
        <div className={styles.row33}>
          <div className={styles.row33style}>
            <div className={styles.customer1}>Customers</div>
            <div className={styles.customer2}>
              <CgChevronRightO />
            </div>
          </div>

          <div className={styles.semicircle}>
            <Progress percent={30} type="dashboard" />
          </div>
          <div className={styles.customerserved}>
            <div className={styles.served}>
              <div className={styles.served1}>Served</div>
              <div className={styles.served2}> 24</div>
            </div>
            <div className={styles.serving}>
              <div className={styles.served1}>Serving</div>
              <div className={styles.served2}> 24</div>
            </div>
          </div>
        </div>
        <div className={styles.row333}>
          <Attendance />
        </div>
        <div className={styles.row3333}>
          <div className={styles.row3333style}>
            <div className={styles.customer1}>Task</div>
            <div className={styles.customer2}>
              <CgChevronRightO />
            </div>
          </div>

          <div className={styles.semicircle}>
            <Progress percent={80} type="dashboard" strokeColor="#FDD506" />
          </div>
          <div className={styles.customerserved}>
            <div className={styles.served}>
              <div className={styles.served1}>Total</div>
              <div className={styles.served2}> 24</div>
            </div>
            <div className={styles.serving}>
              <div className={styles.served1}>Pending</div>
              <div className={styles.served2}> 24</div>
            </div>
          </div>
        </div>
      </div>
      {
        //4rd row
      }
      <div className={styles.container}>
        <div className={styles.row4}>
          <Recruitment />
          <Attandencecard />
        </div>
        <div className={styles.row44}>
          <div className={styles.column144}>
            <Task />
          </div>
          <div className={styles.column244}>
            <Shifts />
          </div>
        </div>
      </div>

      <div className={styles.container}></div>
      <Shifttask />
    </div>
  );
};

export default LeftContainer;
