import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { green } from "@mui/material/colors";

function Status({ stat }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const options = [
    {
      name: "Open",
      color: "Blue",
    },
    {
      name: "Occupied",
      color: "Green",
    },
    {
      name: "Reserved",
      color: "Pale",
    },
    {
      name: "Out of Service",
      color: "Red",
    },
  ];

  const openPopUp = () => {
    setShowPopUp(true);
  };

  const selectColor = () => {
    setShowPopUp(false);
  };

  if (stat === "occupied") {
    return (
      <div className="tableButtonContainer relative">
        <button
          onClick={openPopUp}
          className="tableButton border-tableOccupied"
        >
          <p className="tableStatusText text-tableOccupied">Occupied</p>
          <ChevronDownIcon className="h-5 text-tableOccupied" />
        </button>
        {showPopUp && (
          <div
            style={{ height: "205px", width: "230px" }}
            className="absolute bg-background z-50 rounded-sm mt-1"
          >
            {/* Input Field */}
            <div>
              <input
                className="bg-transparent text-xs w-full px-4 py-3 focus:outline-none text-white placeholder-white"
                type="text"
                placeholder="Search by Name"
              />
            </div>

            {/* Blue Line */}
            <div style={{ height: "2px" }} className="bg-indigo-400 w-full" />

            {/* Options */}
            <div>
              {/* Option */}
              {options.map((optn) => (
                <div onClick={selectColor} className="hover:bg-onHover mt-1">
                  <div
                    style={{ paddingTop: "9px" }}
                    className="flex items-center justify-between w-4/5 mx-auto"
                  >
                    <p className="text-xs"> {optn.name}</p>
                    {/* Color */}
                    <div
                      style={{
                        height: "6px",
                        width: "40px",
                        marginTop: "-10px",
                      }}
                      className={`rounded-md ${
                        optn.color === "Green" && "bg-tableOpen"
                      } ${optn.color === "Blue" && "bg-tableOccupied"} ${
                        optn.color === "Pale" && "bg-tableReserved"
                      } ${optn.color === "Red" && "bg-tableOutOfService"}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else if (stat === "open") {
    return (
      <div className="tableButtonContainer">
        <button onClick={openPopUp} className="tableButton border-tableOpen">
          <p className="tableStatusText text-tableOpen">Open</p>
          <ChevronDownIcon className="h-5 text-tableOpen" />
        </button>
        {showPopUp && (
          <div
            style={{ height: "205px", width: "230px" }}
            className="absolute bg-background z-50 rounded-sm mt-1"
          >
            {/* Input Field */}
            <div>
              <input
                className="bg-transparent text-xs w-full px-4 py-3 focus:outline-none text-white placeholder-white"
                type="text"
                placeholder="Search by Name"
              />
            </div>

            {/* Blue Line */}
            <div style={{ height: "2px" }} className="bg-indigo-400 w-full" />

            {/* Options */}
            <div>
              {/* Option */}
              {options.map((optn) => (
                <div onClick={selectColor} className="hover:bg-onHover mt-1">
                  <div
                    style={{ paddingTop: "9px" }}
                    className="flex items-center justify-between w-4/5 mx-auto"
                  >
                    <p className="text-xs"> {optn.name}</p>
                    {/* Color */}
                    <div
                      style={{
                        height: "6px",
                        width: "40px",
                        marginTop: "-10px",
                      }}
                      className={`rounded-md ${
                        optn.color === "Green" && "bg-tableOpen"
                      } ${optn.color === "Blue" && "bg-tableOccupied"} ${
                        optn.color === "Pale" && "bg-tableReserved"
                      } ${optn.color === "Red" && "bg-tableOutOfService"}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else if (stat === "reserved") {
    return (
      <div className="tableButtonContainer">
        <button
          onClick={openPopUp}
          className="tableButton border-tableReserved"
        >
          <p className="tableStatusText text-tableReserved">Reserved</p>
          <ChevronDownIcon className="h-5 text-tableReserved" />
        </button>
        {showPopUp && (
          <div
            style={{ height: "205px", width: "230px" }}
            className="absolute bg-background z-50 rounded-sm mt-1"
          >
            {/* Input Field */}
            <div>
              <input
                className="bg-transparent text-xs w-full px-4 py-3 focus:outline-none text-white placeholder-white"
                type="text"
                placeholder="Search by Name"
              />
            </div>

            {/* Blue Line */}
            <div style={{ height: "2px" }} className="bg-indigo-400 w-full" />

            {/* Options */}
            <div>
              {/* Option */}
              {options.map((optn) => (
                <div onClick={selectColor} className="hover:bg-onHover mt-1">
                  <div
                    style={{ paddingTop: "9px" }}
                    className="flex items-center justify-between w-4/5 mx-auto"
                  >
                    <p className="text-xs"> {optn.name}</p>
                    {/* Color */}
                    <div
                      style={{
                        height: "6px",
                        width: "40px",
                        marginTop: "-10px",
                      }}
                      className={`rounded-md ${
                        optn.color === "Green" && "bg-tableOpen"
                      } ${optn.color === "Blue" && "bg-tableOccupied"} ${
                        optn.color === "Pale" && "bg-tableReserved"
                      } ${optn.color === "Red" && "bg-tableOutOfService"}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else if (stat === "outOfService") {
    return (
      <div className="tableButtonContainer">
        <button
          onClick={openPopUp}
          className="tableButton border-tableOutOfService"
        >
          <p className="tableStatusText text-tableOutOfService">
            Out of Service
          </p>
          <ChevronDownIcon className="h-5 text-tableOutOfService" />
        </button>
        {showPopUp && (
          <div
            style={{ height: "205px", width: "230px" }}
            className="absolute bg-background z-50 rounded-sm mt-1"
          >
            {/* Input Field */}
            <div>
              <input
                className="bg-transparent text-xs w-full px-4 py-3 focus:outline-none text-white placeholder-white"
                type="text"
                placeholder="Search by Name"
              />
            </div>

            {/* Blue Line */}
            <div style={{ height: "2px" }} className="bg-indigo-400 w-full" />

            {/* Options */}
            <div>
              {/* Option */}
              {options.map((optn) => (
                <div onClick={selectColor} className="hover:bg-onHover mt-1">
                  <div
                    style={{ paddingTop: "9px" }}
                    className="flex items-center justify-between w-4/5 mx-auto"
                  >
                    <p className="text-xs"> {optn.name}</p>
                    {/* Color */}
                    <div
                      style={{
                        height: "6px",
                        width: "40px",
                        marginTop: "-10px",
                      }}
                      className={`rounded-md ${
                        optn.color === "Green" && "bg-tableOpen"
                      } ${optn.color === "Blue" && "bg-tableOccupied"} ${
                        optn.color === "Pale" && "bg-tableReserved"
                      } ${optn.color === "Red" && "bg-tableOutOfService"}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Status;
