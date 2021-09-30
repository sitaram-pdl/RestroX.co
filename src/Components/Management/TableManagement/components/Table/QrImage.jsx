import React, { useState } from "react";
import Status from "./Status";
import styles from "./Table.module.css";
import cx from "classnames";
import { QrcodeIcon } from "@heroicons/react/solid";
import { Tooltip } from "antd";

function QrImage({ img, table }) {
  const [showQR, setShowQR] = useState(false);
  return (
    <div>
      <div className="relative cursor-pointer">
        <div
          onMouseLeave={() => setShowQR(false)}
          onMouseEnter={() => setShowQR(true)}
        >
          <QrcodeIcon className="h-5 text-gray-500" />
        </div>

        {showQR && (
          <div
            style={{ marginLeft: "-270px", width: "250px", marginTop: "-30px" }}
            className="absolute h-80 bg-white z-50 rounded-md"
          >
            <div className="flex items-center justify-center mt-8">
              <h1 className="text-md font-bold">Welcome to Dunga Restro</h1>
            </div>

            <div
              style={{ width: "100px" }}
              className="flex items-center justify-center mt-8 p-3 shadow-xl mx-auto"
            >
              <img className="h-30 w-30" src={img} alt="" />
            </div>

            <div className="flex items-center justify-center mt-5">
              <h1 className="text-xl font-bold">{table}</h1>
            </div>

            <div className="flex items-center justify-center mt-4 text-center mx-4">
              <p className="text-black text-xs">
                Scan QR Code for Menu, Chat, and many other cool things
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QrImage;
