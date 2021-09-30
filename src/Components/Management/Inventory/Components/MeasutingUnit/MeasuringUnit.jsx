import React, { useState } from "react";
import styles from "./MeasuringUnit.module.css";
import Header from "../../../Components/TopHeader/Header";
import "antd/dist/antd.css";
import cx from "classnames";
import { Checkbox } from "antd";
import {
  TrashIcon,
  PencilIcon,
  XIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import "./List.module.css";
import { Switch } from "antd";
import { Tooltip } from "antd";

function MeasuringUnit(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [numberOfCheckedList, setNumberOfCheckedList] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState("default");
  const [items, setItems] = useState([
    {
      index: 0,
      isCheckedArray: false,
      id: "MU001",
      measuringUnit: "Kilogram",
      nickName: "KG",
      Descriptin: "Restaurant ko side ko",
    },
    {
      index: 1,
      isCheckedArray: false,
      id: "MU001",
      measuringUnit: "Liters",
      nickName: "Ltr",
      Descriptin: "Restaurant ko side ko",
    },
    {
      index: 2,
      isCheckedArray: false,
      id: "MU001",
      measuringUnit: "Pound",
      nickName: "lb",
      Descriptin: "Restaurant ko side ko",
    },
    {
      index: 3,
      isCheckedArray: false,
      id: "MU001",
      measuringUnit: "Hectogram",
      nickName: "t",
      Descriptin: "Restaurant ko side ko",
    },
    {
      index: 4,
      isCheckedArray: false,
      id: "MU001",
      measuringUnit: "Tonne",
      nickName: "g",
      Descriptin: "Restaurant ko side ko",
    },
    {
      index: 5,
      isCheckedArray: false,
      id: "MU001",
      measuringUnit: "Gram",
      nickName: "KG",
      Descriptin: "Restaurant ko side ko",
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

  const saveUnit = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className="relative">
        {/* Normal Header */}
        {numberOfCheckedList === 0 ? (
          <div style={{ height: "80px" }}>
            <Header {...props} />
            <div
              style={{ marginTop: "30px", marginRight: "30px" }}
              className="absolute right-0 top-0 flex items-center space-x-6"
            >
              <div className="flex items-center rounded-md bg-background px-3">
                <input
                  className="bg-transparent flex-grow py-1 px-4 focus:outline-none"
                  placeholder="Search"
                  type="text"
                />
                <SearchIcon className="h-5 text-gray-500" />
              </div>
              <div>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-background px-4 py-1 rounded-md focus:outline-none"
                >
                  CreateUnit
                </button>
              </div>
            </div>
          </div>
        ) : (
          // On checked Header

          <div className="">
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

      {/* Body */}
      <div>
        {/* List */}
        <div>
          <div className={styles.measuringUnitcontainer}>
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
                onClick={() => changeSort("id")}
                className={cx(styles.id, "cursor-pointer")}
              >
                ID
              </div>

              <div
                onClick={() => changeSort("measuringUnit")}
                className={cx(styles.item, "cursor-pointer")}
              >
                Measuring Unit
              </div>
              <div
                onClick={() => changeSort("nickName")}
                className={cx(styles.price, "cursor-pointer")}
              >
                Nick Name
              </div>
              <div
                onClick={() => changeSort("Descriptin")}
                className={cx(styles.category, "cursor-pointer")}
              >
                Description
              </div>
              <div className={styles.category}>Actions</div>

              <div className={styles.sn1}></div>
            </div>
            {items.map((dat, index) => (
              <div>
                <div
                  className={cx(
                    styles.search3,
                    dat.isCheckedArray
                      ? "bg-onHover border border-b border-background"
                      : index % 2 === 1 && styles.grey,
                    "hover:bg-onHover w-full mr-3 rounded-sm"
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
                  <div className={styles.id}>{dat.id}</div>
                  <div className={styles.item}>{dat.measuringUnit}</div>
                  <div style={{ marginLeft: "6%" }}>{dat.nickName}</div>
                  <div className={styles.description}>{dat.Descriptin}</div>
                  <div className={styles.category}>
                    <div
                      style={{ marginRight: "26%" }}
                      className="flex items-center space-x-3"
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.fixed}>
          <div className={styles.absolute} />
          <div className={cx(styles.contain, "rounded-md bg-secondary")}>
            {/* Header */}
            <div className="">
              <div className="text-center">
                <h1 className="text-white text-lg font-bold mt-2">
                  Create Measuring Unit
                </h1>
              </div>
              <div
                onClick={() => setShowModal(false)}
                style={{ marginTop: "-32px" }}
                className="flex justify-end mr-2 cursor-pointer"
              >
                <XIcon className="h-6" />
              </div>
            </div>
            <div className="w-4/5 mx-auto mt-10 flex items-center space-x-3">
              {/* Space Name */}
              <div className="flex-1">
                <h1 className="text-modalText">Unit Name</h1>
                <div className="bg-background">
                  <input
                    className="bg-transparent w-full focus:outline-none px-4 py-2"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>

              {/* Nick Name */}
              <div>
                <h1 className="text-modalText">Nick Name</h1>
                <div className="bg-background">
                  <input
                    className="bg-transparent w-full focus:outline-none px-4 py-2"
                    type="text"
                    placeholder="Ex: Kilogram - KG"
                  />
                </div>
              </div>
            </div>

            {/* Space Description */}
            <div className="w-4/5 mx-auto mt-5">
              <h1 className="text-modalText">Description</h1>
              <div className="bg-background">
                <textarea
                  className={cx(
                    styles.textarea,
                    "bg-transparent w-full focus:outline-none px-4 py-1"
                  )}
                  id=""
                  rows="5"
                ></textarea>
              </div>
            </div>

            {/* Bottom line */}
            <div
              style={{
                marginTop: "60px",
                marginLeft: "60px",
                marginRight: "59px",
              }}
            >
              <div
                style={{ height: "1px", background: "#ffffff1A" }}
                className="w-full"
              />
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-end space-x-2 mt-5 mr-16">
              <button
                onClick={() => setShowModal(false)}
                className="focus:outline-none border px-10 py-1 rounded-lg border-gray-600"
              >
                Cancle
              </button>
              <button
                onClick={saveUnit}
                className="focus:outline-none border px-10 py-1 rounded-lg border-red-800 bg-red-800"
              >
                Save Unit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeasuringUnit;
