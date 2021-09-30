import React, { useState } from "react";
import styles from "./Table.module.css";
import {
  TrashIcon,
  PencilIcon,
  XIcon,
  DotsVerticalIcon,
  SortAscendingIcon,
  SortDescendingIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import cx from "classnames";

function EditTable({ title, setShowEditModal }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSpaceModal, setShowSpaceModal] = useState(false);
  const [modalSelectedButton, setModalSelectedButton] = useState("open");

  const saveTable = () => {};

  const saveSpace = () => {
    setShowSpaceModal(false);
  };

  const closeModal = () => {
    setShowEditModal(false);
  };

  return (
    <div>
      <div>
        <div className={styles.fixed}>
          <div
            className={styles.absolute}
            onClick={() => setShowEditModal(false)}
          />
          <div className={styles.contain}>
            <div>
              <div>
                <div
                  style={{
                    height: "400px",
                    width: "650px",
                    zIndex: "9999999999999",
                  }}
                  className="bg-secondary rounded-lg "
                >
                  {/* Header */}
                  <div className="flex items-center justify-center mt-2">
                    <div
                      style={{ marginRight: "-40px" }}
                      className="flex justify-center fix mt-5 ml-auto"
                    >
                      <h1 className="text-white text-lg font-semibold">
                        {title}
                      </h1>
                    </div>

                    <div
                      onClick={() => {
                        setShowEditModal(false);
                      }}
                      className="ml-auto mr-3 cursor-pointer"
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
                          onClick={() => setShowDropDown(true)}
                        >
                          <input
                            className="bg-transparent px-8 py-2 focus:outline-none mr-10"
                            type="text"
                            placeholder="Default"
                          />
                          <div className="flex justify-end">
                            <ChevronDownIcon className="h-5" />
                          </div>
                        </div>
                        {/* Dropdown */}
                        {showDropDown && (
                          <div
                            style={{ width: "290px", height: "185px" }}
                            className="bg-background absolute border-t border-indigo-400"
                          >
                            {/* List*/}
                            <div
                              style={{ height: "140px" }}
                              className="w-4/5 mx-auto mt-2 overflow-scroll scrollbar-hide"
                            >
                              <p className="text-xs hover:bg-onHover cursor-pointer py-1 px-2">
                                Second Floor
                              </p>
                              <p className="text-xs hover:bg-onHover cursor-pointer py-1 px-2">
                                First Floor
                              </p>
                              <p className="text-xs hover:bg-onHover cursor-pointer py-1 px-2">
                                Third Floor
                              </p>
                              <p className="text-xs hover:bg-onHover cursor-pointer py-1 px-2">
                                Roof Resturant
                              </p>
                            </div>

                            {/* bottom line */}
                            <div className="mx-6 -mt-1">
                              <div
                                style={{
                                  height: "1px",
                                  background: "#ffffff1A",
                                }}
                                className="bg-white w-full "
                              />
                            </div>

                            {/* Create space Button */}
                            <div className="flex justify-center mt-2">
                              <div
                                onClick={() => setShowSpaceModal(true)}
                                className="cursor-pointer flex items-center space-x-2"
                              >
                                <PlusIcon className="h-4 -mt-4" />
                                <p className="text-sm">Create Space</p>
                              </div>
                            </div>
                          </div>
                        )}
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
                            placeholder="Name"
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
                            onClick={() =>
                              setModalSelectedButton("outOfService")
                            }
                            className={`tableModalButton ${
                              modalSelectedButton === "outOfService" &&
                              "bg-blue-500"
                            } `}
                          >
                            Out of Service
                          </button>
                          <button
                            onClick={() => setModalSelectedButton("reserved")}
                            className={`tableModalButton ${
                              modalSelectedButton === "reserved" &&
                              "bg-blue-500"
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
                      onClick={() => {
                        setShowEditModal(false);
                      }}
                      className="flex items-center justify-end mt-5 mr-5 space-x-4"
                    >
                      <button className="px-8 border border-gray-600 rounded-md py-1 focus:outline-none">
                        Cancle
                      </button>
                      <button
                        onClick={() => {
                          saveTable();
                          setShowEditModal(false);
                        }}
                        className="px-6 border bg-blue-500 border-gray-600 rounded-md py-1 focus:outline-none"
                      >
                        Save Table
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Modal */}
      <div>
        {showSpaceModal && (
          <div className={styles.spaceFixed}>
            <div
              onClick={() => setShowSpaceModal(false)}
              className={styles.spaceAbsolute}
            />
            <div className={cx(styles.spaceContain, "rounded-md bg-secondary")}>
              {/* Header */}
              <div className="">
                <div className="text-center">
                  <h1 className="text-white text-lg font-bold mt-2">
                    Create Space
                  </h1>
                </div>
                <div
                  onClick={() => setShowSpaceModal(false)}
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
                  onClick={() => setShowSpaceModal(false)}
                  className="focus:outline-none border px-10 py-1 rounded-lg border-gray-600"
                >
                  Cancle
                </button>
                <button
                  onClick={saveSpace}
                  className="focus:outline-none border px-12 py-1 rounded-lg border-red-800 bg-red-800"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditTable;
