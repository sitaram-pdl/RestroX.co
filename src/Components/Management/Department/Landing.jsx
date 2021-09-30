import React, { useState, useEffect } from "react";
import styles from "./Landing.module.css";
import Header from "../Components/TopHeader/Header";
import "antd/dist/antd.css";
import cx from "classnames";
import { Checkbox } from "antd";
import {
  TrashIcon,
  PencilIcon,
  XIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import { Switch } from "antd";
import AddDepartment from "./AddDepartment";
import { Tooltip } from "antd";
import { templateSettings } from "lodash";

function Groups(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [numberOfCheckedList, setNumberOfCheckedList] = useState(0);
  const [createDepartment, setCreateDepartment] = useState(false);
  const [sort, setSort] = useState("default");
  const [items, setItems] = useState([
    {
      index: 0,
      isCheckedArray: false,
      sn: "01.",
      department: "Kitchen",
      noOfStaffs: "24",
      Descriptin: "Restaurant ko side ko",
      subDepartment: "Kitchen,Roof,Bar,Rooms",
    },
    {
      index: 1,
      isCheckedArray: false,
      sn: "02.",
      department: "Kitchen",
      noOfStaffs: "26",
      Descriptin: "Restaurant ko side ko",
      subDepartment: "-",
    },
    {
      index: 2,
      isCheckedArray: false,
      sn: "03.",
      department: "Kitchen",
      noOfStaffs: "28",
      Descriptin: "Restaurant ko side ko",
      subDepartment: "Kitchen,Roof",
    },
    {
      index: 3,
      isCheckedArray: false,
      sn: "04.",
      department: "Kitchen",
      noOfStaffs: "29",
      Descriptin: "Restaurant ko side ko",
      subDepartment: "Kitchen,Roof,Bar,Rooms",
    },
  ]);

  const handleOnChange = () => {
    items.forEach((item, index) => {
      handleOnChangeArray(index, isChecked);
    });
    setNumberOfCheckedList(isChecked ? 0 : items.length);
    setIsChecked(!isChecked);
  };

  const handleOnChangeArray = (index, val) => {
    var name = [...items];
    name[index].isCheckedArray = !val;
    setNumberOfCheckedList(numberOfCheckedList + (val ? -1 : 1));
    setItems(name);
  };

  // Sorting Logic
  const changeSort = (e) => {
    var tempItems = items;
    console.log(e);
    if (sort != e) {
      const myTemp = tempItems.sort(function (a, b) {
        // sorting in ascending order
        if (a[e] > b[e]) return 1;
        if (a[e] < b[e]) return -1;
        return 0;
      });
      console.log(myTemp);
      setSort(e);
      setItems(myTemp);
    } else {
      const temp = [];
      for (var i = items.length - 1; i >= 0; i--) {
        // setItems(tempSort[i]);
        temp.push(items[i]);
      }
      setItems(temp);
    }
  };

  return (
    <div className={styles.container}>
      {createDepartment && (
        <div>
          <AddDepartment />
        </div>
      )}
      {/* Header */}
      <div className="relative">
        {/* Normal header */}
        {numberOfCheckedList === 0 ? (
          <div style={{ height: "80px" }}>
            <Header {...props} />
            <div
              style={{ marginTop: "30px", marginRight: "30px" }}
              className="absolute right-0 top-0 flex items-center space-x-6"
            >
              <div className="space-x-3">
                <button className="bg-background px-4 py-1 rounded-md focus:outline-none">
                  Create Department
                </button>
                <button className="bg-background px-4 py-1 rounded-md focus:outline-none">
                  Select
                </button>
                <button className="bg-background px-4 py-1 rounded-md focus:outline-none">
                  Merge
                </button>
              </div>
            </div>
          </div>
        ) : (
          // On checked Header

          <div style={{ height: "80px" }}>
            <div
              style={{ height: "75px", marginBottom: "2px" }}
              className="flex !w-screen z-50 ml-3 mr-9"
            >
              {/* Header Left */}
              <div
                style={{ marginBottom: "-6px" }}
                className="flex items-center space-x-2"
              >
                <XIcon
                  onClick={handleOnChange}
                  className="h-5 text-gray-500 cursor-pointer"
                />
                <p
                  style={{ marginBottom: "-1px" }}
                  className="font-semibold text-lg"
                >
                  {numberOfCheckedList} selected
                </p>
              </div>

              {/* Header Right */}
              <div
                style={{ marginBottom: "-6px" }}
                className="ml-auto flex space-x-10 items-center"
              >
                {/* Header right buttons */}
                <div className="flex items-center space-x-2">
                  <button className="bg-background px-4 py-1 rounded-lg focus:outline-none">
                    Select All
                  </button>
                  <button className="bg-background px-4 py-1 rounded-lg focus:outline-none">
                    Move To Sub
                  </button>
                  <button className="bg-background px-4 py-1 rounded-lg focus:outline-none">
                    Merge
                  </button>
                </div>

                {/* Header Right icons*/}
                <div className="flex items-center space-x-3">
                  <Switch defaultChecked />
                  <Tooltip title="Delete">
                    <TrashIcon className="h-5 text-gray-400 cursor-pointer" />
                  </Tooltip>

                  <DotsVerticalIcon className="h-5 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="ml-4 mr-8">
              <div className="border border-white w-full border-opacity-10" />
            </div>
          </div>
        )}
      </div>

      {/* Body  */}
      <div>
        {/* List */}
        <div>
          <div className={styles.listcontainer}>
            <div className={styles.search2}>
              <div className={styles.sn} id="two">
                <Tooltip title="Select All">
                  <Checkbox
                    checked={isChecked}
                    onChange={() => handleOnChange()}
                  />
                </Tooltip>
              </div>
              <div
                onClick={() => changeSort("sn")}
                className={cx(styles.id, "cursor-pointer")}
              >
                S.N
              </div>
              {/*  */}
              <div
                onClick={() => changeSort("department")}
                className={cx(styles.item, "cursor-pointer")}
              >
                Department
              </div>
              <div
                onClick={() => changeSort("noOfStaffs")}
                className={cx(styles.price, "cursor-pointer")}
              >
                No of Staffs
              </div>
              <div
                onClick={() => changeSort("Descriptin")}
                className={cx(styles.category, "cursor-pointer")}
              >
                Description
              </div>
              <div
                onClick={() => changeSort("subDepartment")}
                className={cx(styles.category, "cursor-pointer")}
              >
                Sub Department
              </div>
              <div className={cx(styles.category, "cursor-pointer")}>
                Actions
              </div>

              <div className={styles.sn1}></div>
            </div>

            <div>
              {items.map((dat, index) => (
                <div
                  className={cx(
                    styles.search3,
                    dat.isCheckedArray
                      ? "bg-onHover"
                      : index % 2 === 1 && styles.grey,
                    "hover:bg-onHover w-full mr-3"
                  )}
                >
                  <div className={styles.sn} id="one">
                    <Checkbox
                      checked={dat.isCheckedArray}
                      onChange={() =>
                        handleOnChangeArray(dat.index, dat.isCheckedArray)
                      }
                    />
                  </div>
                  <div className={styles.id}>{dat.sn}</div>
                  <div className={styles.item}>{dat.department}</div>
                  <div style={{ marginLeft: "6%" }}>{dat.noOfStaffs}</div>
                  <div className={styles.description}>{dat.Descriptin}</div>
                  <div className={styles.description}>{dat.subDepartment}</div>
                  <div className={styles.category}>
                    <div
                      style={{ marginRight: "26%" }}
                      className="flex items-center space-x-1"
                    >
                      <Tooltip title="Edit">
                        <div className="p-2 rounded-full hover:bg-gray-700 cursor-pointer">
                          <PencilIcon className="h-5 text-gray-500" />
                        </div>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <div className="p-2 rounded-full hover:bg-gray-700 cursor-pointer">
                          <TrashIcon className="h-5 text-gray-500" />
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
