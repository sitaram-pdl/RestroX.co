import React, { useState } from "react";
import styles from "./Modals.module.css";
import { XIcon, ChevronDownIcon, PlusIcon } from "@heroicons/react/solid";
import cx from "classnames";

function CreateTableModal({ setCreateNewTable, spaceName }) {
  const [modalSelectedButton, setModalSelectedButton] = useState("open");

  const saveTable = () => {
    setCreateNewTable(false);
  };

  return (
    <div className={styles.tableModalFixed}>
      <div
        onClick={() => setCreateNewTable(false)}
        className={styles.tableModalAbsolute}
      />
      <div className={cx(styles.tableModalContain, "bg-secondary rounded-lg")}>
        {/* Header */}
        <div className="flex items-center justify-center">
          <div
            style={{ marginRight: "-40px" }}
            className="flex justify-center fix mt-5 ml-auto"
          >
            <h1 className="text-white text-lg font-semibold">Create Table</h1>
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
              <h1 className="text-modalText text-md font-semibold">Space</h1>
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
              <h1 className="text-modalText text-md font-semibold">Capacity</h1>
              <div className="bg-background pr-5">
                <input
                  className="bg-background px-8 py-2 focus:outline-none"
                  type="text"
                  placeholder="05"
                />
              </div>
            </div>

            <div>
              <h1 className="text-modalText text-md font-semibold">Status</h1>
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
  );
}

export default CreateTableModal;
