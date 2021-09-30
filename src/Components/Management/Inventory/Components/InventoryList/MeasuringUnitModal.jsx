import React from "react";
import styles from "./Modals.module.css";
import cx from "classnames";
import { XIcon } from "@heroicons/react/solid";

function MeasuringUnitModal({ setCreateMeasuringUnit }) {
  const saveUnit = () => {
    setCreateMeasuringUnit(false);
  };

  return (
    <div className={styles.fixed}>
      <div
        onClick={() => setCreateMeasuringUnit(false)}
        className={styles.absolute}
      />
      <div className={cx(styles.contain, "rounded-md bg-secondary")}>
        {/* Header */}
        <div className="mt-4">
          <div className="text-center">
            <h1 className="text-white text-lg font-bold mt-2">Create Space</h1>
          </div>
          <div
            onClick={() => setCreateMeasuringUnit(false)}
            style={{ marginTop: "-32px" }}
            className="flex justify-end mr-2 cursor-pointer"
          >
            <XIcon className="h-6" />
          </div>
        </div>

        {/* First Line */}
        <div className="w-4/5 mx-auto mt-5 flex items-center space-x-4">
          {/* Unit Name */}
          <div className=" flex-1">
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
          <div className="">
            <h1 className="text-modalText">Unit Name</h1>
            <div className="bg-background">
              <input
                className="bg-transparent w-full focus:outline-none px-4 py-2"
                type="text"
                placeholder="Ex: Kilogram - KG"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="w-4/5 mx-auto mt-5">
          <h1 className="text-modalText">Description</h1>
          <div className="bg-background">
            <textarea
              className={cx(
                styles.textarea,
                "bg-transparent w-full focus:outline-none px-4 py-1"
              )}
              id=""
              rows="6"
            ></textarea>
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            marginTop: "190px",
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
            onClick={() => setCreateMeasuringUnit(false)}
            className="focus:outline-none border px-12 py-1 rounded-lg border-gray-600"
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
  );
}

export default MeasuringUnitModal;
