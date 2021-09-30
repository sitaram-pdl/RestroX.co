import React from "react";
import { ClockIcon } from "@heroicons/react/outline";

function TableDetails({ tableNo }) {
  const orders = [
    {
      name: "Chicken Pasta",
      quantity: "3",
      isDelivered: true,
    },
    {
      name: "Coke",
      quantity: "5",
      isDelivered: true,
    },
    {
      name: "Ham Burger",
      quantity: "2",
      isDelivered: false,
    },
    {
      name: "Burger",
      quantity: "5",
      isDelivered: true,
    },
    {
      name: "Pizza",
      quantity: "5",
      isDelivered: true,
    },
    {
      name: "Cold Drinks",
      quantity: "5",
      isDelivered: false,
    },
    {
      name: "Chicken Chilly",
      quantity: "5",
      isDelivered: false,
    },
  ];

  return (
    <div>
      <div className="flex-row items-center justify-center">
        {/* Table Details */}
        <div>
          <div className="w-3/5 mx-auto flex-row items-center justify-center">
            {/* Table Layer */}
            <div className="bg-background h-80 rounded-3xl relative lg:mt-10 2xl:mt-20">
              {/* Chairs  */}
              <div className="absolute">
                <div className="relative">
                  <div
                    style={{ marginLeft: "55px", marginTop: "45px" }}
                    className="flex w-4/5"
                  >
                    {/* Chairs Left */}
                    <div className="block relative">
                      <div
                        style={{ width: "110px", marginLeft: "-28px" }}
                        className="chair bg-chair"
                      />
                      <div
                        style={{ width: "110px", marginLeft: "-28px" }}
                        className="chair bg-occupiedChair"
                      />
                    </div>

                    {/* Chairs Right */}
                    <div className="block">
                      <div
                        style={{ width: "110px" }}
                        className="chair bg-chair"
                      />
                      <div
                        style={{ width: "110px" }}
                        className="chair bg-chair"
                      />
                    </div>
                  </div>

                  {/* Table Container */}
                  <div
                    style={{
                      height: "200px",
                      width: "150px",
                      marginLeft: "60px",
                      marginTop: "-180px",
                    }}
                    className="absolute bg-secondary rounded-lg"
                  >
                    {/* Table Layer */}
                    <div className="h-4/5 w-4/5 bg-background mx-auto mt-5 rounded-lg">
                      {/* Table Details */}
                      <div className="w-full h-full bg-secondary mx-auto">
                        <div className="">
                          {/* Header Time */}
                          <div className="flex items-center space-x-1 justify-end mr-1">
                            <div></div>
                            <ClockIcon className="h-4" />
                            <p
                              style={{ marginBottom: "-2px" }}
                              className="text-green-500"
                            >
                              4:38
                            </p>
                          </div>

                          {/* Orders */}
                          <div className="h-11/12 overflow-scroll">
                            {/* Herder */}
                            <h1 className="text-xs font-bold text-white">
                              Orders
                            </h1>

                            {/* Order List */}
                            <div
                              style={{ height: "110px" }}
                              className="overflow-scroll scrollbar-hide"
                            >
                              {orders.map((order) => (
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div
                                      style={{
                                        marginTop: "-10px",
                                        marginRight: "8px",
                                      }}
                                      className={`h-2 w-2 bg-red-800 rounded-full ${
                                        order.isDelivered && "bg-green-700"
                                      }`}
                                    />
                                    <p className="text-xs">{order.name}</p>
                                  </div>

                                  <p className="text-xs ml-1">
                                    <span className="-mt-1">*</span>
                                    {order.quantity}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table No */}
                <h1
                  style={{ marginLeft: "70px", marginTop: "50px" }}
                  className="text-white text-2xl font-bold justify-end"
                >
                  {tableNo}
                </h1>
              </div>
            </div>
            {/* Table Edit Button */}
            <div className="mt-4">
              <button
                style={{ marginLeft: "79px" }}
                className="px-5 bg-editTable py-1 rounded-lg focus:outline-none focus:outline-nones"
              >
                Edit Table
              </button>
            </div>
          </div>
        </div>

        {/* QR code */}
        <div>
          <div
            // style={{ marginTop: "5%" }}
            className="bg-white mx-auto h-80 w-3/5 rounded-lg mt-10 2xl:mt-70"
          >
            <div className="h-3"></div>
            {/* Heder */}
            <div className="mx-auto">
              <h1
                style={{
                  marginLeft: "40px",
                  marginBottom: "-20px",
                  marginTop: "-5px",
                }}
                className="text-md font-semibold"
              >
                Welcome to Dunga Restro
              </h1>
            </div>
            <div style={{ marginTop: "40px" }}>
              <img className="mx-auto" src="/Icons/qrIcon.png" alt="" />
            </div>

            {/* Table no */}
            <div>
              <h1
                style={{
                  marginLeft: "92px",
                  marginBottom: "-20px",
                  marginTop: "20px",
                }}
                className="text-md font-semibold"
              >
                Table NO 05
              </h1>
            </div>

            <div
              style={{ textAlign: "center" }}
              className="mt-7 w-11/12 mx-auto"
            >
              <p className="text-black text-xs font-normal">
                Scan QR Code for Menu, Chat, and many other cool things
              </p>
            </div>
          </div>

          {/* Scan Button */}
          <div style={{ marginTop: "20px" }}>
            <button
              style={{ marginLeft: "165px" }}
              className="px-5 bg-editTable py-1 rounded-lg focus:outline-none"
            >
              Edit QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableDetails;
