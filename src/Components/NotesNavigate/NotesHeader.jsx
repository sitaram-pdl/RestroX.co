import React from "react";
import {
  SortDescendingIcon,
  SearchIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import { BiSelectMultiple } from "react-icons/bi";

function NotesHeader() {
  return (
    <div>
      <div className="flex ml-1 mr-5 items-center bg-secondary pb-1 pt-5 pl-7">
        {/* Header Left */}
        <div className="flex-grow">
          <h1 className="text-xl text-gray-200">Notes</h1>
          <p className="flex items-center space-x-2 text-xs text-gray-400">
            Tasks & orders &nbsp; {<ChevronRightIcon className="h-3" />} &nbsp;
            Notes
          </p>
        </div>

        {/* Header Right */}
        <div className="flex items-center space-x-4">
          {/* Input */}
          <div className="flex items-center border border-gray-700 px-2 py-1 rounded-lg mb-3 md:mb-0">
            <input
              className="outline-none bg-transparent flex-grow placeholder-gray-400 text-gray-200"
              type="text"
              placeholder="Search"
            />
            <SearchIcon className="h-5 text-gray-400" />
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-2 md:space-x-2">
            <button
              style={{ backgroundColor: "#202326" }}
              className="flex items-center px-4 pt-2 rounded-xl space-x-2 focus:outline-none cursor-pointer"
            >
              <SortDescendingIcon className="h-5 text-gray-200" />
              <p className="text-xs text-gray-200 font-semibold pt-1">
                Sort By
              </p>
            </button>

            <button
              style={{ backgroundColor: "#202326" }}
              className="flex items-center px-4 pt-2 rounded-xl space-x-2 focus:outline-none cursor-pointer"
            >
              <BiSelectMultiple size="1.2em" className="text-gray-200 -mt-1" />
              <p className="text-xs text-gray-200 font-semibold pt-1">Filter</p>
            </button>
            <DotsVerticalIcon className="h-5 text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mx-7">
        <div className="w-full border border-white opacity-10" />
      </div>
    </div>
  );
}

export default NotesHeader;
