import React, { useState } from "react";
import styles from "./StockIn.module.css";
import Header from "../../../Components/TopHeader/Header";

function StockIn(props) {
  const [selectedButton, setSelectedButton] = useState("PB");
  const purchaseBills = () => {
    setSelectedButton("PB");
  };

  const purchaseOrders = () => {
    setSelectedButton("PO");
  };

  const purchaseRequests = () => {
    setSelectedButton("PR");
  };

  const suppliers = () => {
    setSelectedButton("S");
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className="relative">
        <Header {...props} />
        <div
          style={{ marginTop: "30px", marginRight: "30px" }}
          className="absolute right-0 top-0 flex items-center space-x-6"
        >
          <div>
            <button className="bg-background px-4 py-1 rounded-md focus:outline-none">
              Add Purchase Bill
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div>
        {/* Second header buttons */}
        <div className="flex items-center justify-between mt-1 mx-4">
          <div className="flex items-center space-x-3 mt-3">
            <p
              onClick={purchaseBills}
              className={`cursor-pointer rounded-lg px-4 py-2 text-xs hover:bg-background ${
                selectedButton === "PB" && "bg-background "
              }`}
            >
              Purchase Bills
            </p>
            <p
              onClick={purchaseOrders}
              className={`rounded-lg cursor-pointer px-4 py-2 text-xs hover:bg-background ${
                selectedButton === "PO" && "bg-background "
              }`}
            >
              Purchase Orders
            </p>
            <p
              onClick={purchaseRequests}
              className={`rounded-lg cursor-pointer px-4 py-2 text-xs hover:bg-background ${
                selectedButton === "PR" && "bg-background "
              }`}
            >
              Purchase Requests
            </p>
            <p
              onClick={suppliers}
              className={`rounded-lg cursor-pointer  px-4 py-2 text-xs hover:bg-background ${
                selectedButton === "S" && "bg-background"
              }`}
            >
              Suppliers
            </p>
          </div>
        </div>

        {/* Paind, Pending and cancle boxes */}
        <div className="mt-3 flex items-center justify-between mr-10 ml-3 relative">
          {/* Paid Box */}
          <div className="stockInBoxes">
            <p className="stockInBoxHeader">Paid</p>
            <div>
              <h1 className="stockInNumbers">25</h1>
              <p className="stockInText">Invoice</p>
            </div>
            <div>
              <h1 className="stockInNumbers">14</h1>
              <p className="stockInText">Suppliers</p>
            </div>
            <div>
              <h1 className="stockInNumbers">
                <span>RS</span>50K
              </h1>
              <p className="stockInText">Amount</p>
            </div>
          </div>

          {/* Pending Box */}
          <div className="stockInBoxes">
            <p className="stockInBoxHeader">Paid</p>
            <div>
              <h1 className="stockInNumbers">25</h1>
              <p className="stockInText">Invoice</p>
            </div>
            <div>
              <h1 className="stockInNumbers">14</h1>
              <p className="stockInText">Suppliers</p>
            </div>
            <div>
              <h1 className="stockInNumbers">
                <span>RS</span>50K
              </h1>
              <p className="stockInText">Amount</p>
            </div>
          </div>

          {/* Cancle Box */}
          <div className="stockInBoxes">
            <p className="stockInBoxHeader">Paid</p>
            <div>
              <h1 className="stockInNumbers">25</h1>
              <p className="stockInText">Invoice</p>
            </div>
            <div>
              <h1 className="stockInNumbers">14</h1>
              <p className="stockInText">Suppliers</p>
            </div>
            <div>
              <h1 className="stockInNumbers">
                <span>RS</span>50K
              </h1>
              <p className="stockInText">Amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockIn;
