import React, { useState } from "react";
import styles from "./Index.module.css";
import Header from "../../../Components/TopHeader/Header";
import {
  TrendingUpIcon,
  SortDescendingIcon,
  PrinterIcon,
  SaveIcon,
  DotsVerticalIcon,
  TrashIcon,
  PencilIcon,
  XIcon,
  ChevronDownIcon,
  PlusIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { Checkbox } from "antd";
import cx from "classnames";
import { Tooltip } from "antd";
import Buttons from "./Buttons";
import { Switch } from "antd";
import MeasuringUnitModal from "./MeasuringUnitModal";
import ItemGroupModal from "./ItemGroupModal";
import InventoryAccountModal from "./InventoryAccountModal";

function InventoryList(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedButton, setSelectedButton] = useState("AI");
  const [numberOfCheckedList, setNumberOfCheckedList] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [sort, setSort] = useState("default");
  const [showMeasuringUnit, setShowMeasuringUnit] = useState(false);
  const [showItemGroup, setShowItemGroup] = useState(false);
  const [showInventoryAccount, setShowInventoryAccount] = useState(false);
  const [createMeasuringUnit, setCreateMeasuringUnit] = useState(false);
  const [createItemGroup, setCreateItemGroup] = useState(false);
  const [createInventoryAccount, setCreateInventoryAccount] = useState(false);
  const [items, setItems] = useState([
    {
      index: 0,
      isCheckedArray: false,
      id: "s 0051",
      items: "Chicken Meat",
      group: "Meat",
      accounts: "Raw Material",
      inHand: "30kg",
      inTransit: "20 Kg",
      totalStock: "50 Kg",
      status: "inStock",
    },
    {
      index: 1,
      isCheckedArray: false,
      id: "s 0051",
      items: "Rice",
      group: "Groceries",
      accounts: "Raw Material",
      inHand: "30kg",
      inTransit: "20 Kg",
      totalStock: "50 Kg",
      status: "outOfStock",
    },
    {
      index: 2,
      isCheckedArray: false,
      id: "s 0051",
      items: "Coke",
      group: "Drink",
      accounts: "FInished Goods",
      inHand: "30kg",
      inTransit: "20 Kg",
      totalStock: "50 Kg",
      status: "doNotOrder",
    },
    {
      index: 3,
      isCheckedArray: false,
      id: "s 0051",
      items: "Oil",
      group: "Groceries",
      accounts: "Raw Material",
      inHand: "30kg",
      inTransit: "20 Kg",
      totalStock: "50 Kg",
      status: "inStock",
    },
    {
      index: 4,
      isCheckedArray: false,
      id: "s 0051",
      items: "Curd",
      group: "Groceries",
      accounts: "Raw Material",
      inHand: "30kg",
      inTransit: "20 Kg",
      totalStock: "50 Kg",
      status: "inStock",
    },
    {
      index: 5,
      isCheckedArray: false,
      id: "s 0051",
      items: "Ghee",
      group: "Groceries",
      accounts: "Raw Material",
      inHand: "30kg",
      inTransit: "20 Kg",
      totalStock: "50 Kg",
      status: "inStock",
    },
    {
      index: 5,
      isCheckedArray: false,
      id: "s 0051",
      items: "Turkey Meat",
      group: "Meat",
      accounts: "Raw Material",
      inHand: "30kg",
      inTransit: "20 Kg",
      totalStock: "50 Kg",
      status: "inStock",
    },
    {
      index: 5,
      isCheckedArray: false,
      id: "s 0051",
      items: "Chicken Wings",
      group: "Meat",
      accounts: "Raw Material",
      inHand: "30kg",
      inTransit: "20 Kg",
      totalStock: "50 Kg",
      status: "scheduled",
    },
  ]);

  const measutingOptions = [
    { name: "Kilogram - Kg" },
    { name: "Pound" },
    { name: "Liters - ltr" },
  ];

  const itemGroupOptions = [
    {
      name: "Drink",
    },
    {
      name: "Vegitable",
    },
    {
      name: "Meat",
    },
    {
      name: "Fruits",
    },
    {
      name: "Rice",
    },
    {
      name: "Bar",
    },
  ];

  const inventoryAccountOptions = [
    {
      name: "Raw Materials",
    },
    { name: "Finished Goods" },
    { name: "Semi-Finished" },
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

  const allInventory = () => {
    setSelectedButton("AI");
  };

  const rawMaterial = () => {
    setSelectedButton("RM");
  };

  const finishedGoods = () => {
    setSelectedButton("FG");
  };

  const inventoryAssets = () => {
    setSelectedButton("IA");
  };

  const saveItem = () => {
    setShowModal(false);
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
      {/* Header */}
      <div>
        {/* First Header */}
        <div className="relative">
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
                    Create Item
                  </button>
                </div>
              </div>
            </div> // On checked Header
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

        {/* Second Header */}
        <div className="flex items-center justify-between mt-1 mx-4">
          {/* Second Header Left */}
          <div className="flex items-center space-x-3 mt-3">
            <p
              onClick={allInventory}
              className={`cursor-pointer rounded-lg px-4 py-2 text-xs hover:bg-background ${
                selectedButton === "AI" && "bg-background "
              }`}
            >
              All Inventory
            </p>
            <p
              onClick={rawMaterial}
              className={`rounded-lg cursor-pointer px-4 py-2 text-xs hover:bg-background ${
                selectedButton === "RM" && "bg-background "
              }`}
            >
              Raw Material
            </p>
            <p
              onClick={finishedGoods}
              className={`rounded-lg cursor-pointer px-4 py-2 text-xs hover:bg-background ${
                selectedButton === "FG" && "bg-background "
              }`}
            >
              Finished Goods
            </p>
            <p
              onClick={inventoryAssets}
              className={`rounded-lg cursor-pointer  px-4 py-2 text-xs hover:bg-background ${
                selectedButton === "IA" && "bg-background"
              }`}
            >
              Inventory Assets
            </p>
          </div>

          {/* Second Header Right */}
          <div className="flex-grow">
            <div className="flex justify-end space-x-14">
              {/* Header Right left icons */}
              <div className="flex items-cente space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-trendingUpBg h-10 px-2 pb-3 pt-2 w-10 rounded-full flex items-center">
                    <TrendingUpIcon className="h-6 text-trendingUpIcon" />
                  </div>
                  <div>
                    <h1 className="text-h1 font-bold text-lg -mb-2">5</h1>
                    <p className="text-xs text-gray-700 mt-1">Requests</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-trendingUpBg h-10  w-10 rounded-full">
                    <img src="/images/icon2.png" alt="" />
                  </div>

                  <div>
                    <h1 className="text-h1 font-bold text-lg -mb-2">5</h1>
                    <p className="text-xs text-gray-700 mt-1">Requests</p>
                  </div>
                </div>
              </div>

              {/* Header Right right Icons*/}
              <div className="flex items-center space-x-8">
                <div>
                  <button className="flex items-center space-x-2 focus:outline-none bg-background px-4 py-1 rounded-lg">
                    <SortDescendingIcon className="h-4" />
                    &nbsp; Filter
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <PrinterIcon className="h-5 cursor-pointer" />
                  <SaveIcon className="h-5 cursor-pointer" />
                  <div
                    style={{ marginTop: "-9px" }}
                    className="h-2 w-5 cursor-pointer"
                  >
                    <img src="/images/rightIcon.png" alt="" />
                  </div>
                  <DotsVerticalIcon className="h-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* List */}
      <div>
        {/* Previous List */}
        <div className={styles.listcontainer}>
          <div className={styles.search2}>
            <div
              style={{ marginLeft: "4px" }}
              className={styles.titleSn}
              id="two"
            >
              <Tooltip title="Select All">
                <Checkbox
                  checked={isChecked}
                  onChange={() => handleOnChange()}
                />
              </Tooltip>
            </div>
            <div
              onClick={() => changeSort("id")}
              className={cx(styles.titleId, "cursor-pointer")}
            >
              ID
            </div>
            <div
              onClick={() => changeSort("items")}
              style={{ marginLeft: "22px" }}
              className={cx(styles.titleItem, "cursor-pointer")}
            >
              Items
            </div>
            <div
              onClick={() => changeSort("group")}
              className={cx(styles.titleGroup, "cursor-pointer")}
            >
              Group
            </div>
            <div
              onClick={() => changeSort("accounts")}
              className={cx(styles.titleAccounts, "cursor-pointer")}
            >
              Accounts
            </div>
            <div
              onClick={() => changeSort("inHand")}
              className={cx(styles.titleinhandle, "cursor-pointer")}
            >
              In Hand
            </div>
            <div
              onClick={() => changeSort("inTransit")}
              className={cx(styles.titleinTransit, "cursor-pointer")}
            >
              In transit
            </div>
            <div
              onClick={() => changeSort("totalStock")}
              className={cx(styles.titleStock, "cursor-pointer")}
            >
              Total Stock
            </div>
            <div
              onClick={() => changeSort("status")}
              className={cx(styles.titlestatus, "cursor-pointer")}
            >
              Status
            </div>
            <div className={cx(styles.titleAction, "cursor-pointer")}>
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
                "hover:bg-onHover w-full rounded-sm"
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
              <div className={styles.item}>{dat.items}</div>
              <div className={styles.group}>{dat.group}</div>
              <div className={styles.accounts}>{dat.accounts}</div>
              <div className={styles.inhandle}>{dat.inHand}</div>
              <div className={styles.inTransit}>{dat.inTransit}</div>
              <div className={styles.totalStock}>{dat.totalStock}</div>
              <div className={styles.status}>
                <Buttons stat={dat.status} />
              </div>
              <div className={styles.action}>
                <div className="flex items-center space-x-1">
                  <Tooltip title="Edit">
                    <div className="p-1 rounded-full hover:bg-gray-700 cursor-pointer">
                      <PencilIcon className="h-5 text-gray-500" />
                    </div>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <div className="p-1 rounded-full hover:bg-gray-700 cursor-pointer">
                      <TrashIcon className="h-5 text-gray-500" />
                    </div>
                  </Tooltip>
                  <Tooltip title="More">
                    <div className="p-1 rounded-full hover:bg-gray-700 cursor-pointer">
                      <DotsVerticalIcon className="h-5 text-gray-500" />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className={styles.fixed}>
          <div
            onClick={() => setShowModal(false)}
            className={styles.absolute}
          />
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

            {/* Top Line */}
            <div className="w-4/5 mx-auto mt-10 flex items-center space-x-3">
              {/* Space Name */}
              <div className="flex-1">
                <h1 className="text-modalText">Item Name</h1>
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
                    placeholder="Name"
                  />
                </div>
              </div>
            </div>

            {/* Second line */}
            <div className="w-4/5 mx-auto mt-3 flex items-center space-x-3">
              {/* Measuring Unit */}
              <div className="">
                <h1 className="text-modalText">Measuring Unit</h1>
                <div className="bg-background flex items-center">
                  <input
                    onClick={() => setShowMeasuringUnit(true)}
                    className="bg-transparent w-full focus:outline-none px-4 py-2"
                    type="text"
                    placeholder="Inventory - Other"
                  />
                  {showMeasuringUnit ? (
                    <ChevronUpIcon
                      onClick={() => setShowMeasuringUnit(false)}
                      className="h-5 bg-background mr-1 cursor-pointer"
                    />
                  ) : (
                    <ChevronDownIcon
                      onClick={() => setShowMeasuringUnit(true)}
                      className="h-5 bg-background mr-1 cursor-pointer"
                    />
                  )}
                </div>
                {showMeasuringUnit && (
                  <div
                    style={{ height: "160px", width: "192px" }}
                    className="absolute bg-background z-50 rounded-sm shadow-lg"
                  >
                    {/* Blue Line */}
                    <div
                      style={{ height: "2px" }}
                      className="bg-indigo-400 w-full"
                    />

                    {/* Options */}
                    <div
                      style={{ height: "120px" }}
                      className="overflow-scroll scrollbar-hide"
                    >
                      {/* Option */}
                      {measutingOptions.map((optn) => (
                        <div className="hover:bg-onHover mt-1">
                          <div
                            onClick={() => setShowMeasuringUnit(false)}
                            style={{ paddingTop: "9px" }}
                            className="flex items-center justify-between w-4/5 mx-auto"
                          >
                            <p className="text-xs"> {optn.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="mx-4">
                      <div
                        style={{ height: "1px", background: "#ffffff1A" }}
                        className="w-full"
                      />
                    </div>

                    {/* Create unit */}
                    <div className="flex justify-center space-x-2 mt-1">
                      <div
                        onClick={() => setCreateMeasuringUnit(true)}
                        className="flex space-x-2 mt-1 cursor-pointer"
                      >
                        <PlusIcon
                          style={{ marginTop: "3px" }}
                          className="h-4"
                        />
                        <p>Create Unit</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Item Group */}
              <div>
                <h1 className="text-modalText">Item Group</h1>
                <div className="bg-background flex items-center">
                  <input
                    onClick={() => setShowItemGroup(true)}
                    className="bg-transparent w-full focus:outline-none px-4 py-2"
                    type="text"
                    placeholder="Select Item Group"
                  />
                  {showItemGroup ? (
                    <ChevronUpIcon
                      onClick={() => setShowItemGroup(false)}
                      className="h-5 bg-background mr-1 cursor-pointer"
                    />
                  ) : (
                    <ChevronDownIcon
                      onClick={() => setShowItemGroup(true)}
                      className="h-5 bg-background mr-1 cursor-pointer"
                    />
                  )}
                </div>
                {showItemGroup && (
                  <div
                    style={{ height: "160px", width: "192px" }}
                    className="absolute bg-background z-50 rounded-sm shadow-lg"
                  >
                    {/* Blue Line */}
                    <div
                      style={{ height: "2px" }}
                      className="bg-indigo-400 w-full"
                    />

                    {/* Options */}
                    <div
                      style={{ height: "120px" }}
                      className="overflow-scroll scrollbar-hide"
                    >
                      {/* Option */}
                      {itemGroupOptions.map((optn) => (
                        <div className="hover:bg-onHover mt-1">
                          <div
                            onClick={() => setShowItemGroup(false)}
                            style={{ paddingTop: "9px" }}
                            className="flex items-center justify-between w-4/5 mx-auto"
                          >
                            <p className="text-xs"> {optn.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Bar */}
                    <div className="mx-4">
                      <div
                        style={{ height: "1px", background: "#ffffff1A" }}
                        className="w-full"
                      />
                    </div>

                    {/* Create unit */}
                    <div className="flex justify-center space-x-2 mt-1">
                      <div
                        onClick={() => setCreateItemGroup(true)}
                        className="flex space-x-2 mt-1 cursor-pointer"
                      >
                        <PlusIcon
                          style={{ marginTop: "3px" }}
                          className="h-4"
                        />
                        <p>Create Unit</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Inventory Account */}
              <div>
                <h1 className="text-modalText">Inventory Account</h1>
                <div className="bg-background flex items-center">
                  <input
                    onClick={() => setShowInventoryAccount(true)}
                    className="bg-transparent w-full focus:outline-none px-4 py-2 relative"
                    type="text"
                    placeholder="Inventory - Others"
                  />
                  {showInventoryAccount ? (
                    <ChevronUpIcon
                      onClick={() => setShowInventoryAccount(false)}
                      className="h-5 bg-background mr-1 cursor-pointer"
                    />
                  ) : (
                    <ChevronDownIcon
                      onClick={() => setShowInventoryAccount(true)}
                      className="h-5 bg-background mr-1 cursor-pointer"
                    />
                  )}
                </div>
                {showInventoryAccount && (
                  <div
                    style={{ height: "160px", width: "192px" }}
                    className="absolute bg-background z-50 rounded-sm shadow-lg"
                  >
                    {/* Blue Line */}
                    <div
                      style={{ height: "2px" }}
                      className="bg-indigo-400 w-full"
                    >
                      {/* Options */}
                      <div
                        style={{ height: "120px" }}
                        className="overflow-scroll scrollbar-hide"
                      >
                        {inventoryAccountOptions.map((optn) => (
                          <div className="hover:bg-onHover mt-1">
                            <div
                              onClick={() => setShowInventoryAccount(false)}
                              style={{ paddingTop: "9px" }}
                              className="flex items-center justify-between w-4/5 mx-auto"
                            >
                              <p className="text-xs"> {optn.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Bottom Bar */}
                      <div style={{ marginTop: "3px" }} className="mx-4">
                        <div
                          style={{ height: "1px", background: "#ffffff1A" }}
                          className="w-full"
                        />
                      </div>

                      {/* Create unit */}
                      <div className="flex justify-center">
                        <div
                          onClick={() => setCreateInventoryAccount(true)}
                          className="flex space-x-2 mt-1 cursor-pointer"
                        >
                          <PlusIcon
                            style={{ marginToqp: "3px" }}
                            className="h-4"
                          />
                          <p>Create Unit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Third Line */}
            <div className="w-4/5 mx-auto mt-3 flex items-center space-x-3">
              {/* Measuring Unit */}
              <div className="">
                <h1 className="text-modalText">Opening Stock</h1>
                <div className="bg-background flex items-center">
                  <input
                    className="bg-transparent focus:outline-none pl-4 mr-7 py-2 w-full"
                    type="text"
                    placeholder="Initial Stock Avilable"
                  />
                </div>
              </div>

              {/* Item Group */}
              <div>
                <h1 className="text-modalText">Re-order level</h1>
                <div className="bg-background flex items-center">
                  <input
                    className="bg-transparent w-full focus:outline-none pl-4 pr-7 py-2"
                    type="text"
                    placeholder="Minimum level of stock"
                  />
                </div>
              </div>

              {/* Inventory Account */}
              <div>
                <h1 className="text-modalText">Re-order Quantity</h1>
                <div className="bg-background flex items-center">
                  <input
                    className="bg-transparent w-full focus:outline-none pl-4 pr-7 py-2"
                    type="text"
                    placeholder="Acerage Re-order Quantity"
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

            {/* check Box */}
            <div className="flex justify-center">
              <div className="flex space-x-2 mt-3">
                <Checkbox />
                <p>I purchase this product/service from a prefered supplier.</p>
              </div>
            </div>

            {/* Bottom line */}
            <div
              style={{
                marginTop: "7x",
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
                onClick={saveItem}
                className="focus:outline-none border px-10 py-1 rounded-lg border-red-800 bg-red-800"
              >
                Save Item
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Measuring Unit */}
      {createMeasuringUnit && (
        <div>
          <MeasuringUnitModal setCreateMeasuringUnit={setCreateMeasuringUnit} />
        </div>
      )}

      {/* Create Item Group */}
      {createItemGroup && (
        <div>
          <ItemGroupModal setCreateItemGroup={setCreateItemGroup} />
        </div>
      )}

      {/* Create Inventory Account */}
      {createInventoryAccount && (
        <div>
          <InventoryAccountModal
            setCreateInventoryAccount={setCreateInventoryAccount}
          />
        </div>
      )}
    </div>
  );
}

export default InventoryList;
