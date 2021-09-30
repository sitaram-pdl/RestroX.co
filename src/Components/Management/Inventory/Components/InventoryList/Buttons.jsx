import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import styles from "./Buttons.module.css";

function Buttons({ stat }) {
  if (stat === "inStock") {
    return (
      <div style={{}} className="inventoryButtonsContainer">
        <button className="inventoryListButtons border-inStockBorder px-7">
          <p className="inventoryListButtonP text-white">In stock</p>
          <ChevronDownIcon className="h-5 text-white" />
        </button>
      </div>
    );
  } else if (stat === "outOfStock") {
    return (
      <div className="inventoryButtonsContainer">
        <button className="inventoryListButtons border-outOfStockBorder px-4">
          <p className="inventoryListButtonP text-white">Out of Stock</p>
          <ChevronDownIcon className="h-5 text-white" />
        </button>
      </div>
    );
  } else if (stat === "doNotOrder") {
    return (
      <div className="inventoryButtonsContainer">
        <button className="inventoryListButtons border-doNotOrderBorder px-3">
          <p className="inventoryListButtonP text-white text-xs">
            Do not Order
          </p>
          <ChevronDownIcon className="h-5 text-white" />
        </button>
      </div>
    );
  } else if (stat === "scheduled") {
    return (
      <div className="inventoryButtonsContainer">
        <button className="inventoryListButtons border-scheduledBorder px-5">
          <p className="inventoryListButtonP  text-white">Scheduled</p>
          <ChevronDownIcon className="h-5 text-white" />
        </button>
      </div>
    );
  }
}

export default Buttons;
