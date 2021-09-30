import React, { useState } from "react";
import styles from "./TableManagement.module.css";
import TopInventoryBox from "./TopInventory/TopInventoryBox/TopInventoryBox";
import Suppliers from "./TopInventory/Suppiers/Suppliers";
import Shortcuts from "./TopInventory/Shortcuts/Shortcuts";
import PurchaseOrder from "./TopInventory/PurchaseOrder/PurchaseOrder";
import AddItem from "../ProductMangement/AddItem";
import PurchaseRequest from "./Modals/PurchaseRequest";
import PurchaseOrderModal from "./Modals/PurchaseOrder";
import PurchaseInvoice from "./Modals/PurchaseInvoice";
import Header from "../Components/TopHeader/Header";

const TableManagement = (props) => {
  const [options, setOptions] = useState([
    { name: "Table", total: "124", img: "/images/inventory.png" },
    { name: "Space", total: "124", img: "/images/inventory.png" },
  ]);
  const [options1, setOptions1] = useState([
    {
      header: "Measuring Unit",
      subHeader: "Give Best Physical menu to   your costumer",
    },
    {
      header: "Category",
      subHeader: "Give Best Physical menu to   your costumer",
    },
    {
      header: "Drafts",
      subHeader: "Give Best Physical menu to   your costumer",
    },
  ]);
  const [addDish, setAddDish] = useState(false);
  const [addMenu, setMenu] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const menuHandler = (a) => {
    console.log(a);
    switch (a) {
      case "Purchase Request":
        setAddDish((b) => !b);
        break;

      case "Purchase Order":
        setMenu((b) => !b);
        break;

      case "Purchase Bill":
        setInvoice((b) => !b);
        break;
    }
  };
  return (
    <div className={styles.container}>
      <Header subheader={"Table Management"} header={"Management"} {...props} />
      <div className={styles.scroll}>
        <div className={styles.topInventory}>
          <div className={styles.TopInventoryBox}>
            <TopInventoryBox />
          </div>
          <div className={styles.Suppliers}>
            <Suppliers />
          </div>

          <div className={styles.Shortcuts}>
            <Shortcuts menuHandler={menuHandler} />
          </div>
        </div>

        <div className={styles.list}>
          {options.map((dat) => (
            <div
              className={styles.box}
              onClick={() =>
                props.history.push(
                  `/management/Inventory Management/${dat.name}/0`
                )
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
      {addDish ? (
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => menuHandler("Purchase Request")}
          />

          <div className={styles.modal}>
            <PurchaseRequest menuHandler={menuHandler} />
          </div>
        </div>
      ) : null}
      {addMenu ? (
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => menuHandler("Purchase Order")}
          />

          <div className={styles.modal3}>
            <PurchaseOrderModal menuHandler={menuHandler} />
          </div>
        </div>
      ) : null}
      {invoice ? (
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => menuHandler("Purchase Bill")}
          />

          <div className={styles.modal3}>
            <PurchaseInvoice menuHandler={menuHandler} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TableManagement;
