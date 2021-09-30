import React, { useState, useEffect } from "react";
import styles from "./MenuBar.module.css";
import { AiOutlineHeart } from "react-icons/ai";

import { BiStoreAlt } from "react-icons/bi";
import cx from "classnames";
const MenuBar = (props) => {
  const options = [
    { name: "Menu Management", desc: "Manage Your Product,Pricing" },
    { name: "Inventory Management", desc: "Manage Your Product,Pricing" },
    { name: "Account Management", desc: "Manage Your Account" },
    { name: "Staff Management", desc: "Manage Your Staff" },
    { name: "Table Management", desc: "Manage Your Table" },
    { name: "Social Media Management", desc: "Manage Your Social Media" },

    { name: "Department", desc: "Manage Your Deparment" },

    { name: "Review  Management", desc: "Manage Review" },
    { name: "Support and Help", desc: "Support and Help" },
  ];
  const inventarymanagementsubmenu = [
    { name: "Inventory List" },
    { name: "Inventory", desc: "View & Manage All Dishes" },
    { name: "Update Inventory", desc: "Manage Your Product,Pricing" },
    { name: "Add New Inventory", desc: "Promote your Business" },
    { name: "Physical Stock", desc: "Manage Your Product,Pricing" },
    { name: "Department Inventory", desc: "Promote your Business" },
    { name: "Measuring Unit", desc: "Promote your Business" },
    { name: "Groups" },
  ];
  const menumanagementsubmenu = [
    { name: "Digital Menu", desc: "" },

    { name: "All Dishes", desc: "" },
    { name: "Discount", desc: "" },
    { name: "Real Time Menu", desc: "" },
    { name: "Physical Menu", desc: "" },
    { name: "Add Items", desc: "" },
    { name: "Promotion", desc: "" },
    { name: "QR code ", desc: "" },

    { name: "Category", desc: "" },
  ];
  const staffmanagementsubmenu = [
    { name: "Staff Profile", desc: "Manage Your Product,Pricing" },
    { name: "Attendance", desc: "View & Manage All Dishes" },
    { name: "Staff Shifts", desc: "Manage Your Product,Pricing" },
    { name: "Salary Report", desc: "Promote your Business" },
    { name: "Staff Review", desc: "Manage Your Product,Pricing" },
    { name: "Hire Staff", desc: "Promote your Business" },
  ];
  const socialmediamanagementsubmenu = [
    { name: "Promotion", desc: "promotion" },
    { name: "Social Account", desc: "Social Account " },
    { name: "Social Media Handler", desc: "Social Media Handler" },
  ];
  const tablemanagementmanagementsubmenu = [
    { name: "Tables", desc: "Tables" },
    { name: "Restro Logout", desc: "Restro Logout " },
    { name: "Add New Table", desc: "Social Media Handler" },
    { name: "Generate QR for Table", desc: "Generate QR for Table" },
  ];
  const accountmanagementmanagementsubmenu = [
    { name: "Invoices", total: "124", img: "/images/inventory.png" },
    { name: "Income", total: "124", img: "/images/inventory.png" },
    { name: "Expenses", total: "124", img: "/images/inventory.png" },
    { name: "Customer", total: "124", img: "/images/inventory.png" },
    { name: "Supliers", total: "124", img: "/images/inventory.png" },
    { name: "Reccuring Bills", total: "124", img: "/images/inventory.png" },
    { name: "Cash Flow", total: "124", img: "/images/inventory.png" },
    { name: "Reports", total: "124", img: "/images/inventory.png" },
  ];
  const userrolemanagementsubmenu = [
    { name: "Position", desc: "Position" },
    { name: "Roles", desc: "Roles " },
    { name: "Staff Roles", desc: "Staff Roles" },
  ];

  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    if (props.match.params.sub == "0") {
      setMainData(options);
    } else if (
      props.match.params.main == "Inventory Management" &&
      props.match.params.sub != "0"
    ) {
      setMainData(inventarymanagementsubmenu);
    } else if (
      props.match.params.main == "Menu Management" &&
      props.match.params.sub != "0"
    ) {
      setMainData(menumanagementsubmenu);
    } else if (
      props.match.params.main == "Staff Management" &&
      props.match.params.sub != "0"
    ) {
      setMainData(staffmanagementsubmenu);
    } else if (
      props.match.params.main == "Social Media Management" &&
      props.match.params.sub != "0"
    ) {
      setMainData(socialmediamanagementsubmenu);
    } else if (
      props.match.params.main == "Table Management" &&
      props.match.params.sub != "0"
    ) {
      setMainData(tablemanagementmanagementsubmenu);
    } else if (
      props.match.params.main == "Staff Management" &&
      props.match.params.sub != "0"
    ) {
      setMainData(userrolemanagementsubmenu);
    } else if (
      props.match.params.main == "Account Management" &&
      props.match.params.sub != "0"
    ) {
      setMainData(accountmanagementmanagementsubmenu);
    }
  }, [props.match.params]);
  const functionr = (a) => {
    console.log(props.match.params.main);
  };

  return (
    <div className={cx(styles.container, props.theme ? styles.white : null)}>
      <div className={styles.items}>
        <div className={cx(styles.list2)}>
          {/* <div className={styles.image} onClick={() => props.history.goBack()}>
                        <IoIosArrowBack />
                    </div> */}
          <div className={styles.singleRow2}>
            <div>Management</div>
          </div>
        </div>
        {mainData.map((dat, index) => (
          <div
            className={cx(
              styles.list,
              props.match.params.main === dat.name ||
                props.match.params.sub === dat.name
                ? styles.tomato
                : null
            )}
            onClick={() => props.routing(dat.name)}
          >
            <div className={styles.image}>
              <BiStoreAlt size="1.3em" />
            </div>
            <div className={styles.singleRow}>
              <div>{dat.name}</div>
              {
                (dat.desc = "" ? null : (
                  <div className={styles.small2}>{dat.desc}</div>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBar;
