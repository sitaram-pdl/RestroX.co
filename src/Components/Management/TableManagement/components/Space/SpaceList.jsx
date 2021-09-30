import React, { useState } from "react";
import styles from "./Space.module.css";
import { Checkbox } from "antd";
import { Tooltip } from "antd";
import { TrashIcon, PencilIcon, XIcon } from "@heroicons/react/solid";
import cx from "classnames";

function SpaceList({
  sn,
  space,
  noOfTable,
  Descriptin,
  isCheckedArray,
  index,
  item,
  setNumberOfCheckedList,
  checkList,
}) {
  const [showTablesModal, setShowTablesModal] = useState(false);

  const handleOnChangeArray = (index, val) => {
    var name = [...item];
    name[index].isCheckedArray = !val;
    setNumberOfCheckedList(checkList + (val ? -1 : 1));
  };

  return (
    <div className="flex items-center w-full">
      <div className={styles.sn} id="one">
        <Checkbox
          checked={isCheckedArray}
          onChange={() => handleOnChangeArray(index, isCheckedArray)}
        />
      </div>
      <div className={styles.id}>{sn}</div>
      <div
        onClick={() => setShowTablesModal(true)}
        className={cx("cursor-pointer", styles.item)}
      >
        {space}
      </div>
      <div style={{ marginLeft: "6%" }}>{noOfTable}</div>
      <div className={styles.description}>{Descriptin}</div>
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

      {showTablesModal && (
        <div className={styles.fixed}>
          <div
            onClick={() => setShowTablesModal(false)}
            className={styles.absolute}
          />
          <div
            className={cx(styles.tableModalContain, "bg-secondary rounded-lg")}
          >
            {/* Header */}
            <div className="">
              <div className="text-center">
                <h1 className="text-white text-lg font-bold mt-2">{space}</h1>
              </div>
              <div
                onClick={() => setShowTablesModal(false)}
                style={{ marginTop: "-32px" }}
                className="flex justify-end mr-2 cursor-pointer"
              >
                <XIcon className="h-6" />
              </div>
            </div>
            <div className="w-4/5 mx-auto mt-4">
              {/* Top input fields */}
              <div className="flex space-x-4">
                {/* Space Name */}
                <div>
                  <h1 className="text-modalText text-md">Space Name</h1>
                  <div className="w-full bg-background">
                    <input
                      className="bg-transparent px-4 py-3 focus:outline-none"
                      type="text"
                      value={space}
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <h1 className="text-modalText">Description</h1>
                  <div className="bg-background">
                    <input
                      className="bg-transparent px-4 py-3 w-full focus:outline-none"
                      type="text"
                      placeholder="Space Description"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* List of tables */}
          </div>
        </div>
      )}
    </div>
  );
}

export default SpaceList;
