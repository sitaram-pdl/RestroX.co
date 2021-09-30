import React, { useState } from "react";
import { Promotions } from "..";
import PurchaseBill from "../PurchaseBill/PurchaseBill";
import AddInventory from "./AddInventory/AddInventory";
import AddItem from "./AddItem/AddItem";
import BillGallery from "./BillGallery/BillGallery";
import Department from "./Department/Create";
import Landing from "./Department/Landing";
import Digital from "./DigitalMenu/DigitalMenu";
import Create from "./Inventory/Create/Create";
import Inventory from "./Inventory/Inventory";
import Measuring from "./Inventory/MeasuringUnit/MeasuringUnit";
import MenuBar from "./MenuBar/MenuBar";
import MenuType from "./MenuTypes/MenuTypes";
import OnlineMenu from "./OnlineMenu/OnlineMenu";
import PhysicalMenu from "./PhysicalMenu/PhysicalMenu";
import ProductManagement from "./ProductMangement/ProductManagement";
import QR from "./QR/QR";
import Right from "./Right/Right";
import styles from "./Settings.module.css";
import StaffManagement from "./StaffManagement/StaffManagement";
import AccountManagement from "./AccountManagement/AccountManagement";
import SocialMediaManagement from "./SocialMediaManagement/SocialMediaManagement";
import DiscountAndOffer from "./Discount/Discount";
import ReviewManagement from "./ReviewManagement/ReviewManagement";
import TableManagement from "./TableManagement/TableManagement";
import ViewAll from "./VIewAll/ViewAll";
import Category from "./Category/Category";
import Reports from "./AccountManagement/Components/Reports/Reports";
import MeasuringUnit from "./Inventory/Components/MeasutingUnit/MeasuringUnit";
import Groups from "./Inventory/Components/Groups/Groups";
import InventoryList from "./Inventory/Components/InventoryList/InventoryList";
import StockIn from "./Inventory/Components/Stockin/StockIn";
import Table from "./TableManagement/components/Table/Table";
import Space from "./TableManagement/components/Space/Space";

const Settings = (props) => {
  const routing = (a) => {
    const oldUrl = props.match.url;
    const urlArr = oldUrl.split("/");
    urlArr[urlArr.indexOf("0") - 1] = a;
    const newUrl = urlArr.join("/");
    props.history.push(newUrl);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <MenuBar {...props} routing={routing} theme={props.theme} />
      </div>
      <div className={styles.rightContainer}>
        {"Menu Management" == props.match.params.main &&
        "Add Items" == props.match.params.sub ? (
          <AddItem theme={props.theme} />
        ) : null}
        {"Menu Management" == props.match.params.main &&
        "Discount" == props.match.params.sub ? (
          <DiscountAndOffer theme={props.theme} />
        ) : null}

        {"Menu Management" == props.match.params.main &&
        "All Dishes" == props.match.params.sub ? (
          <ViewAll theme={props.theme} {...props} />
        ) : null}
        {"Menu Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <ProductManagement theme={props.theme} {...props} />
        ) : null}
        {"Menu Management" == props.match.params.main &&
        "Real Time Menu" == props.match.params.sub ? (
          <Digital theme={props.theme} {...props} />
        ) : null}
        {"Menu Management" == props.match.params.main &&
        "Physical Menu" == props.match.params.sub ? (
          <PhysicalMenu theme={props.theme} {...props} />
        ) : null}
        {"Menu Management" == props.match.params.main &&
        "QR Code " == props.match.params.sub ? (
          <QR theme={props.theme} {...props} />
        ) : null}
        {"Menu Management" == props.match.params.main &&
        "Category" == props.match.params.sub ? (
          <Category theme={props.theme} {...props} />
        ) : null}

        {"Staff Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <StaffManagement theme={props.theme} {...props} />
        ) : null}

        {"Menu Management" == props.match.params.main &&
        "Digital Menu" == props.match.params.sub ? (
          <MenuType theme={props.theme} {...props} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <Inventory {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <Inventory {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "Measuring Unit" == props.match.params.sub ? (
          <MeasuringUnit {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "Groups" == props.match.params.sub ? (
          <Groups {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "Inventory List" == props.match.params.sub ? (
          <InventoryList {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "Stock In" == props.match.params.sub ? (
          <StockIn {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "Bill Gallery" == props.match.params.sub ? (
          <BillGallery {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "Add Bill" == props.match.params.sub ? (
          <PurchaseBill {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "0" == props.match.params.last &&
        "Measuring Units" == props.match.params.sub ? (
          <Measuring {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "Create" == props.match.params.last &&
        "Measuring Units" == props.match.params.sub ? (
          <Create {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "0" == props.match.params.last &&
        "Table" == props.match.params.sub ? (
          <Table {...props} theme={props.theme} />
        ) : null}
        {"Inventory Management" == props.match.params.main &&
        "0" == props.match.params.last &&
        "Space" == props.match.params.sub ? (
          <Space {...props} theme={props.theme} />
        ) : null}

        {"Department" == props.match.params.main &&
        "Create" == props.match.params.sub ? (
          <Department {...props} theme={props.theme} />
        ) : null}
        {"Department" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <Landing {...props} theme={props.theme} />
        ) : null}

        {"Promotion" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <Promotions {...props} theme={props.theme} />
        ) : null}

        {"Account Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <AccountManagement {...props} theme={props.theme} />
        ) : null}

        {"Social Media Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <SocialMediaManagement {...props} theme={props.theme} />
        ) : null}
        {"Table Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <TableManagement {...props} theme={props.theme} />
        ) : null}
        {"User Rule Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <Inventory {...props} theme={props.theme} />
        ) : null}
        {"Review  Management" == props.match.params.main &&
        "0" == props.match.params.sub ? (
          <ReviewManagement {...props} theme={props.theme} />
        ) : null}
        {"Account Management" == props.match.params.main &&
        "Reports" == props.match.params.sub ? (
          <Reports {...props} theme={props.theme} />
        ) : null}
      </div>
    </div>
  );
};

export default Settings;
