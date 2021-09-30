import React, { useState } from "react";
import styles from "./Space.module.css";
import Header from "../../../Components/TopHeader/Header";
import { Tooltip } from "antd";
import { Checkbox } from "antd";
import cx from "classnames";
import {
  TrashIcon,
  XIcon,
  DotsVerticalIcon,
  SortDescendingIcon,
} from "@heroicons/react/solid";
import { Switch } from "antd";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import SpaceList from "./SpaceList";

function Space(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [numberOfCheckedList, setNumberOfCheckedList] = useState(0);
  const [sort, setSort] = useState("default");
  const [spaceName, setSpaceName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showTableOptions, setShowTableOptions] = useState(false);
  const [modalSelectedButton, setModalSelectedButton] = useState("open");
  const [selectTableOptions, setSelectTableOptions] = useState("unused");
  const [createNewTable, setCreateNewTable] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [items, setItems] = useState([
    {
      index: 0,
      isCheckedArray: false,
      sn: "01",
      space: "First Floor",
      noOfTable: "24",
      Descriptin: "Restaurant ko side ko",
    },
    {
      index: 1,
      isCheckedArray: false,
      sn: "02",
      space: "Second Floor",
      noOfTable: "24",
      Descriptin: "Restaurant ko side ko",
    },
    {
      index: 2,
      isCheckedArray: false,
      sn: "03",
      space: "Third Floor",
      noOfTable: "24",
      Descriptin: "Restaurant ko side ko",
    },
    {
      index: 3,
      isCheckedArray: false,
      sn: "04",
      space: "Roof",
      noOfTable: "24",
      Descriptin: "Restaurant ko side ko",
    },
  ]);

  const fakeTables = [
    { capacity: 4, tableNo: 1 },
    { capacity: 4, tableNo: 2 },
    { capacity: 4, tableNo: 3 },
    { capacity: 4, tableNo: 4 },
    { capacity: 4, tableNo: 5 },
    { capacity: 4, tableNo: 6 },
    { capacity: 4, tableNo: 7 },
    { capacity: 4, tableNo: 8 },
    { capacity: 4, tableNo: 9 },
    { capacity: 4, tableNo: 10 },
    { capacity: 4, tableNo: 11 },
    { capacity: 4, tableNo: 12 },
    { capacity: 4, tableNo: 13 },
    { capacity: 4, tableNo: 14 },
    { capacity: 4, tableNo: 15 },
    { capacity: 4, tableNo: 16 },
    { capacity: 4, tableNo: 17 },
    { capacity: 4, tableNo: 18 },
    { capacity: 4, tableNo: 19 },
    { capacity: 4, tableNo: 20 },
    { capacity: 4, tableNo: 21 },
    { capacity: 4, tableNo: 22 },
    { capacity: 4, tableNo: 23 },
    { capacity: 4, tableNo: 24 },
    { capacity: 4, tableNo: 25 },
    { capacity: 4, tableNo: 26 },
    { capacity: 4, tableNo: 27 },
    { capacity: 4, tableNo: 28 },
    { capacity: 4, tableNo: 29 },
    { capacity: 4, tableNo: 30 },
    { capacity: 4, tableNo: 31 },
    { capacity: 4, tableNo: 32 },
  ];

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

  const saveTable = () => {
    setCreateNewTable(false);
    setSpaceName("");
  };

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

  const saveSpace = () => {
    if (spaceName.length <= 0) {
      setShowErrorMessage(true);
    } else {
      setShowModal(false);
      setShowTableOptions(true);
      setShowErrorMessage(false);
    }
  };

  const showUnused = () => {
    setSelectTableOptions("unused");
  };

  const showFloorOne = () => {
    setSelectTableOptions("floor1");
  };

  const showRoof = () => {
    setSelectTableOptions("roof");
  };

  const showBalcony = () => {
    setSelectTableOptions("balcony");
  };

  const selectTable = () => {
    setShowTableOptions(false);
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
              <div>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-background px-4 py-1 rounded-md focus:outline-none"
                >
                  Create Space
                </button>
              </div>
            </div>
          </div>
        ) : (
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

      {/* Body */}
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
                onClick={() => changeSort("id")}
                className={cx(styles.id, "cursor-pointer")}
              >
                S.N
              </div>
              {/*  */}
              <div
                onClick={() => changeSort("Group")}
                className={cx(styles.item, "cursor-pointer")}
              >
                Space
              </div>
              <div
                onClick={() => changeSort("noOfItems")}
                className={cx(styles.price, "cursor-pointer")}
              >
                No of Table
              </div>
              <div
                onClick={() => changeSort("Descriptin")}
                className={cx(styles.category, "cursor-pointer")}
              >
                Description
              </div>
              <div className={cx(styles.category, "cursor-pointer")}>
                Actions
              </div>

              <div className={styles.sn1}></div>
            </div>
            {items.map((dat, index) => (
              <div
                className={cx(
                  styles.search3,
                  dat.isCheckedArray
                    ? "bg-onHover border border-b border-background"
                    : index % 2 === 1 && styles.grey,
                  "hover:bg-onHover w-full mr-3 rounded-sm"
                )}
              >
                <SpaceList
                  isCheckedArray={dat.isCheckedArray}
                  index={dat.index}
                  sn={dat.sn}
                  space={dat.space}
                  noOfTable={dat.noOfTable}
                  Descriptin={dat.Descriptin}
                  item={items}
                  setNumberOfCheckedList={setNumberOfCheckedList}
                  checkList={numberOfCheckedList}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.fixed}>
          <div
            onClick={() => setShowModal(false)}
            className={styles.absolute}
          />
          <div className={cx(styles.contain, "rounded-md bg-secondary")}>
            <form>
              {/* Header */}
              <div className="">
                <div className="text-center">
                  <h1 className="text-white text-lg font-bold mt-2">
                    Create Space
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

              {/* Space Name */}
              <div className="w-4/5 mx-auto mt-5">
                <h1 className="text-modalText">Space Name</h1>
                <div className="bg-background">
                  <input
                    required
                    value={spaceName}
                    onChange={(e) => setSpaceName(e.target.value)}
                    className="bg-transparent w-full focus:outline-none px-4 py-2"
                    type="text"
                    placeholder="Name"
                  />
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
                    rows="3"
                  ></textarea>
                </div>
              </div>

              {/* Bottom line */}
              <div
                style={{
                  marginTop: "30px",
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
              <div className="flex justify-end space-x-2 mt-2 mr-16">
                <button
                  onClick={() => setShowModal(false)}
                  className="focus:outline-none border px-12 py-1 rounded-lg border-gray-600"
                >
                  Cancle
                </button>
                <button
                  type="submit"
                  onClick={saveSpace}
                  className="focus:outline-none border px-4 py-1 rounded-lg border-red-800 bg-red-800"
                >
                  Save & Add Tables
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Select Table Modal */}
      <div>
        {showTableOptions && (
          <div className={styles.tableOptionsFixed}>
            <div
              onClick={() => setShowTableOptions(false)}
              className={styles.tableOptionsAbsolute}
            />
            <div
              className={cx(
                styles.tableOptionsContain,
                "rounded-md bg-secondary"
              )}
            >
              {/* Header */}
              <div className="">
                <div className="text-center">
                  <h1 className="text-white text-lg font-bold mt-2">
                    Select Table
                  </h1>
                </div>
                <div
                  onClick={() => setShowTableOptions(false)}
                  style={{ marginTop: "-32px" }}
                  className="flex justify-end mr-2 cursor-pointer"
                >
                  <XIcon className="h-6" />
                </div>
              </div>

              {/* Secon Header */}
              <div className="w-4/5 mx-auto mt-5 flex justify-between">
                {/* Left Options */}
                <div className="flex space-x-2 text-xs font-semibold items-center">
                  <button
                    onClick={showUnused}
                    className={`px-2 focus:outline-none rounded-md py-1 ${
                      selectTableOptions === "unused" && "bg-onHover"
                    }`}
                  >
                    Unused
                  </button>
                  <button
                    onClick={showFloorOne}
                    className={`px-2 focus:outline-none rounded-md py-1 ${
                      selectTableOptions === "floor1" && "bg-onHover"
                    }`}
                  >
                    Floor 1
                  </button>
                  <button
                    onClick={showRoof}
                    className={`px-2 focus:outline-none rounded-md py-1 ${
                      selectTableOptions === "roof" && "bg-onHover"
                    }`}
                  >
                    Roof
                  </button>
                  <button
                    onClick={showBalcony}
                    className={`px-2 focus:outline-none rounded-md py-1 ${
                      selectTableOptions === "balcony" && "bg-onHover"
                    }`}
                  >
                    Balcony
                  </button>
                </div>

                {/* Right Options */}
                <div className="flex items-center space-x-2">
                  <LibraryAddCheckOutlinedIcon className={styles.checkIcon} />
                  <SortDescendingIcon className="h-5 cursor-pointer" />
                </div>
              </div>

              {/* Top Line */}
              <div
                style={{
                  marginTop: "10px",
                  marginLeft: "60px",
                  marginRight: "55px",
                }}
              >
                <div
                  style={{ height: "1px", background: "#ffffff1A" }}
                  className="w-full"
                />
              </div>

              {/* Tables */}
              <div
                className={cx(
                  styles.tableContainer,
                  "overflow-scroll scrollbar-hide w-4/5 mx-auto mt-4"
                )}
              >
                {/* tables */}
                <div className="grid grid-cols-6 gapx-1 gap-y-6">
                  {fakeTables.map((tables) => (
                    <div>
                      <div
                        style={{ height: "100px", width: "90px" }}
                        className="bg-background rounded-lg relative"
                      >
                        <p className="absolute text-xs mt-3 ml-2">
                          Capacity {tables.capacity}
                        </p>
                      </div>
                      {/* Table Numbers */}
                      <div className="mt-2">
                        <h2 className="text-white text-xs font-bold ml-2">
                          Table No {tables.tableNo}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom line */}
              <div
                style={{
                  marginTop: "20px",
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
              <div className="flex justify-between mt-3">
                {/* Left Buttons */}
                <div className="ml-14">
                  <button
                    onClick={() => setCreateNewTable(true)}
                    className="focus:outline-none border px-5 py-1 rounded-lg bg-background border-background"
                  >
                    Create New Table
                  </button>
                </div>
                {/* Right Buttons */}
                <div className="mr-14 space-x-3">
                  <button
                    onClick={() => setShowTableOptions(false)}
                    className="focus:outline-none border px-10 py-1 rounded-lg border-gray-600"
                  >
                    Cancle
                  </button>
                  <button
                    onClick={selectTable}
                    className="focus:outline-none border px-12 py-1 rounded-lg border-red-800 bg-red-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {createNewTable && (
        <div className={styles.tableModalFixed}>
          <div
            onClick={() => setCreateNewTable(false)}
            className={styles.tableModalAbsolute}
          />
          <div
            className={cx(styles.tableModalContain, "bg-secondary rounded-lg")}
          >
            {/* Header */}
            <div className="flex items-center justify-center">
              <div
                style={{ marginRight: "-40px" }}
                className="flex justify-center fix mt-5 ml-auto"
              >
                <h1 className="text-white text-lg font-semibold">
                  Create Table
                </h1>
              </div>

              <div
                onClick={() => {
                  setCreateNewTable(false);
                }}
                className="ml-auto mr-3 cursor-pointer mt-2"
              >
                <XIcon className="h-6" />
              </div>
            </div>

            {/* Body */}
            <div>
              {/* First Line */}
              <div className="flex space-x-4 justify-center mt-4">
                <div className="ml-4">
                  <h1 className="text-modalText text-md font-semibold">
                    Table Name
                  </h1>
                  <div className="bg-background pr-5">
                    <input
                      className="bg-background px-8 py-2 focus:outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="text-modalText text-md font-semibold">
                    Space
                  </h1>
                  <div
                    style={{ width: "290px" }}
                    className="flex items-center bg-background "
                  >
                    <input
                      value={spaceName}
                      className="bg-transparent px-8 py-2 focus:outline-none mr-10"
                      type="text"
                      placeholder="Default"
                    />
                  </div>
                </div>
              </div>

              {/* Second Line */}
              <div className="flex space-x-4 justify-center mt-6">
                <div>
                  <h1 className="text-modalText text-md font-semibold">
                    Capacity
                  </h1>
                  <div className="bg-background pr-5">
                    <input
                      className="bg-background px-8 py-2 focus:outline-none"
                      type="text"
                      placeholder="05"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="text-modalText text-md font-semibold">
                    Status
                  </h1>
                  <div className="mt-4">
                    <button
                      onClick={() => setModalSelectedButton("open")}
                      className={`tableModalButton ${
                        modalSelectedButton === "open" && "bg-blue-500"
                      } `}
                    >
                      Open
                    </button>
                    <button
                      onClick={() => setModalSelectedButton("outOfService")}
                      className={`tableModalButton ${
                        modalSelectedButton === "outOfService" && "bg-blue-500"
                      } `}
                    >
                      Out of Service
                    </button>
                    <button
                      onClick={() => setModalSelectedButton("reserved")}
                      className={`tableModalButton ${
                        modalSelectedButton === "reserved" && "bg-blue-500"
                      } `}
                    >
                      Reserved
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom line */}
              <div
                style={{
                  marginTop: "100px",
                  marginLeft: "60px",
                  marginRight: "40px",
                }}
              >
                <div
                  style={{ height: "1px", background: "#ffffff1A" }}
                  className="w-full"
                />
              </div>

              {/* Bottom Buttons */}
              <div
                // onClick={() => {
                //   setShowModal(false);
                // }}
                className="flex items-center justify-end mt-5 mr-5 space-x-4"
              >
                <button
                  onClick={() => setCreateNewTable(false)}
                  className="px-8 border border-gray-600 rounded-md py-1 focus:outline-none"
                >
                  Cancle
                </button>
                <button
                  onClick={saveTable}
                  className="px-6 border bg-blue-500 border-gray-600 rounded-md py-1 focus:outline-none"
                >
                  Save Table
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Space;
