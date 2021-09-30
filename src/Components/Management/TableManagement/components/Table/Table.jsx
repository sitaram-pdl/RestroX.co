import React, { useState } from "react";
import styles from "./Table.module.css";
import Header from "../../../Components/TopHeader/Header";
import cx from "classnames";
import { Tooltip } from "antd";
import { Checkbox } from "antd";
import {
  TrashIcon,
  PencilIcon,
  XIcon,
  DotsVerticalIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  QrcodeIcon,
} from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";
import Status from "./Status";
import { Switch } from "antd";
import QrImage from "./QrImage";
import TableModal from "./TableModal";
import EditTable from "./EditTable";
import TableDetails from "./TableDetails";

function Table(props) {
  const [selectedButton, setSelectedButton] = useState("all");
  const [isChecked, setIsChecked] = useState(false);
  const [numberOfCheckedList, setNumberOfCheckedList] = useState(0);
  const [sort, setSort] = useState("default");
  const [showTableDetails, setShowTableDetails] = useState(false);
  const [showTableSortingIcon, setShowTableSortingIcon] = useState(false);
  const [showSpaceLocationSortingIcon, setSpaceLocationSortingIcon] =
    useState(false);
  const [showCapacitySortingIcon, setShowCapacitySortingIcon] = useState(false);
  const [showStatusSortingIcon, setShowStatusSortingIcon] = useState(false);
  const [sortIconStyling, setSortIconStyling] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [items, setItems] = useState([
    {
      index: 0,
      isCheckedArray: false,
      sn: "01",
      table: "Table No 1",
      spaceLocation: "1st Floor",
      capacity: "5",
      status: "occupied",
    },
    {
      index: 1,
      isCheckedArray: false,
      sn: "02",
      table: "Table No 2",
      spaceLocation: "1st Floor",
      capacity: "5",
      status: "open",
    },
    {
      index: 2,
      isCheckedArray: false,
      sn: "03",
      table: "Table No 3",
      spaceLocation: "1st Floor",
      capacity: "5",
      status: "reserved",
    },
    {
      index: 3,
      isCheckedArray: false,
      sn: "04",
      table: "Table No 4",
      spaceLocation: "1st Floor",
      capacity: "5",
      status: "outOfService",
    },
  ]);

  const orders = [
    {
      name: "Chicken Pasta",
      quantity: "3",
      isDelivered: true,
    },
    {
      name: "Coke",
      quantity: "5",
      isDelivered: true,
    },
    {
      name: "Ham Burger",
      quantity: "2",
      isDelivered: false,
    },
    {
      name: "Burger",
      quantity: "5",
      isDelivered: true,
    },
    {
      name: "Pizza",
      quantity: "5",
      isDelivered: true,
    },
    {
      name: "Cold Drinks",
      quantity: "5",
      isDelivered: false,
    },
    {
      name: "Chicken Chilly",
      quantity: "5",
      isDelivered: false,
    },
  ];

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
      setSort(e);
      setSortIconStyling("ascending");
      setItems(myTemp);
    } else {
      const temp = [];
      for (var i = items.length - 1; i >= 0; i--) {
        // setItems(tempSort[i]);
        temp.push(items[i]);
      }
      setItems(temp);
      if (sortIconStyling === "ascending") {
        setSortIconStyling("descending");
      } else {
        setSortIconStyling("ascending");
      }
    }
  };

  // const tableDetails = (

  // );

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

  return (
    <div className={styles.container}>
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
              <div>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-background px-4 py-1 rounded-md focus:outline-none"
                >
                  Create Table
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
      {/* Sub Header */}
      <div className="flex items-center space-x-4 ml-3 mt-2">
        <p
          onClick={() => setSelectedButton("all")}
          className={`subHeader ${selectedButton === "all" && "bg-background"}`}
        >
          All
        </p>
        <p
          onClick={() => setSelectedButton("uncate")}
          className={`subHeader ${
            selectedButton === "uncate" && "bg-background"
          }`}
        >
          Uncategorized
        </p>
        <p
          onClick={() => setSelectedButton("groundF")}
          className={`subHeader ${
            selectedButton === "groundF" && "bg-background"
          }`}
        >
          Ground Floor
        </p>
        <p
          onClick={() => setSelectedButton("1stF")}
          className={`subHeader ${
            selectedButton === "1stF" && "bg-background"
          }`}
        >
          1st Floor
        </p>
        <p
          onClick={() => setSelectedButton("2ndF")}
          className={`subHeader ${
            selectedButton === "2ndF" && "bg-background"
          }`}
        >
          2nd Floor
        </p>
        <p
          onClick={() => setSelectedButton("roof")}
          className={`subHeader ${
            selectedButton === "roof" && "bg-background"
          }`}
        >
          Roof
        </p>
      </div>

      {/* List */}
      <div>
        {/* Table details Modal */}
        {showTableDetails && (
          <div className="">
            <div
              style={{ width: "450px", zIndex: "9999" }}
              className="absolute right-0 h-screen top-0 bg-black 2xl:pt-6"
            >
              <div className="relative">
                <div className="relative">
                  <TableDetails tableNo="Table No 3" />
                </div>
                <div
                  style={{ marginLeft: "-60px", marginTop: "-420px" }}
                  className="flex items-center justify-center absolute"
                >
                  <div className="flex items-center">
                    <div
                      onClick={() => setShowTableDetails(false)}
                      style={{ height: "50px", width: "50px" }}
                      className="rounded-full bg-black cursor-pointer"
                    >
                      <XIcon className="h-8 mt-2 ml-2" />
                    </div>
                    <div className={styles.triangle}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div>
          <div className={styles.listcontainer}>
            <div className={styles.search2}>
              <div className={styles.checkbox} id="two">
                <Tooltip title="Select All">
                  <Checkbox
                    checked={isChecked}
                    onChange={() => handleOnChange()}
                  />
                </Tooltip>
              </div>
              <div
                onClick={() => changeSort("sn")}
                className={cx(styles.sn, "cursor-pointer")}
              >
                S.N
              </div>
              {/*  */}
              <div
                onClick={() => changeSort("table")}
                onMouseLeave={() => setShowTableSortingIcon(false)}
                onMouseEnter={() => setShowTableSortingIcon(true)}
                className={cx(styles.table)}
              >
                <div className="cursor-pointer hover:bg-chair pt-4 pb-1 flex items-center w-4/5 pr-5 rounded-sm">
                  <div className="fixed">
                    <p className="ml-4">Table</p>
                  </div>
                  <div className="ml-auto">
                    {showTableSortingIcon && (
                      <div className="-mt-2">
                        {sort === "table" &&
                        sortIconStyling === "descending" ? (
                          <SortDescendingIcon className="h-5 text-white" />
                        ) : (
                          <SortAscendingIcon className="h-5 text-white" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                onClick={() => changeSort("spaceLocation")}
                onMouseLeave={() => setSpaceLocationSortingIcon(false)}
                onMouseEnter={() => setSpaceLocationSortingIcon(true)}
                className={cx(styles.spaceLocation)}
              >
                <div className="cursor-pointer hover:bg-chair pt-4 pb-1 flex items-center pr-5 rounded-sm w-11/12">
                  <div className="fixed">
                    <p className="ml-4">Space/Location</p>
                  </div>
                  <div className="ml-auto">
                    {showSpaceLocationSortingIcon && (
                      <div className="-mt-2">
                        {sort === "spaceLocation" &&
                        sortIconStyling === "descending" ? (
                          <SortDescendingIcon className="h-5 text-white" />
                        ) : (
                          <SortAscendingIcon className="h-5 text-white" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                onClick={() => changeSort("capacity")}
                onMouseLeave={() => setShowCapacitySortingIcon(false)}
                onMouseEnter={() => setShowCapacitySortingIcon(true)}
                className={cx(styles.capacity)}
              >
                <div className="cursor-pointer hover:bg-chair pt-4 pb-1 flex items-center w-11/12 pr-3 rounded-sm">
                  <div className="fixed">
                    <p className="ml-4">Capacity</p>
                  </div>
                  <div className="ml-auto">
                    {showCapacitySortingIcon && (
                      <div className="-mt-2">
                        {sort === "capacity" &&
                        sortIconStyling === "descending" ? (
                          <SortDescendingIcon className="h-5 text-white" />
                        ) : (
                          <SortAscendingIcon className="h-5 text-white" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                onClick={() => changeSort("status")}
                onMouseLeave={() => setShowStatusSortingIcon(false)}
                onMouseEnter={() => setShowStatusSortingIcon(true)}
                className={cx(styles.status)}
              >
                <div className="cursor-pointer hover:bg-chair pt-4 pb-1 flex items-center w-3/4 pr-5 ml-2s 2xl:ml-11">
                  <div className="fixed">
                    <p style={{ marginLeft: "40px" }}>Status</p>
                  </div>
                  <div className="ml-auto">
                    {showStatusSortingIcon && (
                      <div className="-mt-2">
                        {sort === "status" &&
                        sortIconStyling === "descending" ? (
                          <SortDescendingIcon className="h-5 text-white" />
                        ) : (
                          <SortAscendingIcon className="h-5 text-white" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={cx(styles.action, "cursor-pointer")}>Action</div>

              <div className={styles.sn1}></div>
            </div>
            {items.map((dat, index) => (
              <div
                className={cx(
                  styles.search3,
                  dat.isCheckedArray
                    ? "bg-onHover border border-b border-background "
                    : index % 2 === 1 && styles.grey,
                  "hover:bg-onHover w-full mr-3 rounded-sm relative"
                )}
              >
                <div className={styles.datacheckbox} id="one">
                  <Checkbox
                    checked={dat.isCheckedArray}
                    onChange={() =>
                      handleOnChangeArray(dat.index, dat.isCheckedArray)
                    }
                  />
                </div>

                <div className={styles.datasn}>{dat.sn}</div>
                <div
                  onClick={() => setShowTableDetails(true)}
                  className={cx(styles.datatable, "cursor-pointer")}
                >
                  <p style={{ marginTop: "14px" }} className="ml-3">
                    {dat.table}
                  </p>
                </div>
                <div className={styles.dataspaceLocation}>
                  <p style={{ marginTop: "14px" }} className="ml-10">
                    {dat.spaceLocation}
                  </p>
                </div>
                <div className={styles.datacapacity}>
                  <p style={{ marginTop: "14px", marginLeft: "50px" }}>
                    {dat.capacity}
                  </p>
                </div>
                <div className={styles.dataStatus}>
                  <Status stat={dat.status} />
                </div>
                <div className={styles.dataAction}>
                  <div className="flex items-center space-x-1">
                    <div className="p-2 rounded-full hover:bg-gray-700 cursor-pointer relative">
                      <div className="relative">
                        <QrImage img="/Icons/qrIcon.png" table={dat.table} />
                      </div>
                    </div>
                    <Tooltip title="Edit">
                      <div
                        onClick={() => setShowEditModal(true)}
                        className="p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                      >
                        <PencilIcon className="h-6  text-gray-500" />
                      </div>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <div className="p-2 rounded-full hover:bg-gray-700 cursor-pointer">
                        <TrashIcon className="h-6 text-gray-500" />
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {showModal && (
          <div>
            <TableModal title="Create Table" setShowModal={setShowModal} />
          </div>
        )}
      </div>

      <div>
        {showEditModal && (
          <div>
            <EditTable title="Edit Table" setShowEditModal={setShowEditModal} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Table;
