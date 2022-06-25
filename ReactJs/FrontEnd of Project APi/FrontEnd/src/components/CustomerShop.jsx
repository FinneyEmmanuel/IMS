import React from "react";
import { Link, Outlet } from "react-router-dom";
import images from "../images/Grrocery.jpg";
import images1 from "../images/Mediical.jpg";
import images2 from "../images/Hardware.jpg";

const CustomerShop = () => {
  return (
    <div className="mt-0">
      <div className="grid grid-cols-[10%_10%_80%] divide-x">
        <div style={{ backgroundColor: "white" }}>
          Filters
          <br />
          <br />
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default checkbox
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default checkbox
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default checkbox
            </label>
          </div>
        </div>
        <div className="px-2 bg-gray-100">
          <div className="flex justify-center">
            <div className="rounded-lg shadow-2xl bg-white max-w-sm mt-2">
              <a href="#!">
                <img className="rounded-t-lg" src={images} alt="" />
              </a>
              <div className="p-4">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Grocery
                </h5>
                <p className="text-gray-700 text-base mb-4">03 Shops</p>

                <Link to="itemsclasses">
                  {" "}
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm mt-2">
              <a href="#!">
                <img className="rounded-t-lg" src={images1} alt="" />
              </a>
              <div className="p-4">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Medical
                </h5>
                <p className="text-gray-700 text-base mb-4">03 Shops</p>
                <Link to="itemsclasses">
                  {" "}
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm mt-2">
              <a href="#!">
                <img className="rounded-t-lg" src={images2} alt="" />
              </a>
              <div className="p-4">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Hardware
                </h5>
                <p className="text-gray-700 text-base mb-4">03 Shops</p>
                <Link to="itemsclasses">
                  <button
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <span>Showing results for Grocery Shops</span>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomerShop;
