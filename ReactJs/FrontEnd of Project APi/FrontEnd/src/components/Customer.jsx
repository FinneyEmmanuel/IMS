import React from "react";
import useStore from "../stores/loginStore";
import Home from "./Home";
import images from "../images/scart.png";
import { Link, Outlet } from "react-router-dom";

function Customer() {
  // const user = useStore((state) => state.users);

  return (
    <div>
      <div class="flex min-h-screen">
        <nav class="w-64 flex-shrink-0">
          <div class="flex-auto bg-gray-900 h-full">
            <div class="flex flex-col overflow-y-auto">
              <ul class="relative m-0 p-0 list-none h-full">
                <li class="text-white text-2xl p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700"></li>
                <li class="absolute bottom-2 text-white p-4 w-full flex relative shadow-sm justify-start bg-gray-800 border-b-2 border-gray-700">
                  {/* <div class="mr-4 flex-shrink-0 my-auto"></div> */}
                  <div class="flex-auto absolute bottom-0 my-1 ml-8">
                    <span className="mt-2 ml-6 self-center  flex flex-nowrap item-center text-xl font-semibold whitespace-nowrap text-white">
                      IMS
                      <img className="photo" src={images} />{" "}
                    </span>
                  </div>
                </li>
                <li class="p-4 w-full flex relative shadow-sm">
                  <div class="flex-auto my-1">
                    <span class="text-left text-white font-medium">
                      Sort By
                    </span>
                  </div>
                </li>

                <div class="text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                  <div class="mr-4 my-auto">
                    <input
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    ></label>
                    <svg
                      class="fill-current h-5 w-5"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {/* <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path> */}
                    </svg>
                  </div>
                  <div class="flex-auto my-1">
                    <span>Authentication</span>
                  </div>
                </div>

                <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                  <div class="mr-4 my-auto">
                    <svg
                      class="fill-current h-5 w-5"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                    </svg>
                  </div>
                  <div class="flex-auto my-1">
                    <span>Realtime Database</span>
                  </div>
                </div>

                <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                  <div class="mr-4 my-auto">
                    <svg
                      class="fill-current h-5 w-5"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path>
                    </svg>{" "}
                  </div>
                  <div class="flex-auto my-1">
                    <span>Storage</span>
                  </div>
                </div>

                <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                  <div class="mr-4 my-auto">
                    <svg
                      class="fill-current h-5 w-5"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                    </svg>{" "}
                  </div>
                  <div class="flex-auto my-1">
                    <span>Hosting</span>
                  </div>
                </div>

                <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
                  <div class="mr-4 my-auto">
                    <svg
                      class="fill-current h-5 w-5"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path>
                    </svg>
                  </div>
                  <div class="flex-auto my-1">
                    <span>Functions</span>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>

        <div class="flex flex-col w-full">
          <header class="text-white py-3 bg-blue-400 sticky left-auto top-0 right-0">
            <div class="h-12 px-6 flex relative items-right justify-end">
              <button class="relative block h-12 w-12 rounded-full overflow-hidden shadow focus:outline-none">
                <img
                  class="h-full w-full object-cover"
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Avatar"
                />
              </button>
            </div>
            <div class="text-white text-end bg-blue-400 flex flex-shrink-0 absolute right-2 absolute top-20 ">
              <div class="flex relative items-center ">
                <span class="text-xl tracking-wide">Hey!! Welcome</span>
              </div>
            </div>
          </header>

          <div class="text-white bg-blue-400 flex w-full">
            <div class="flex overflow-hidden h-12 ml-2">
              <Link to="customerShop">
                {" "}
                <button class="mx-3 border-b-2 border-white">
                  <span>Shops</span>
                </button>
              </Link>

              <Link to="/customer/cart">
                <button class="mx-3 hover:border-b-2 border-white">
                  <span>Cart</span>
                </button>
              </Link>

              <Link to="/customer/orders">
                <button class="mx-3 hover:border-b-2 border-white">
                  <span>Orders</span>
                </button>
              </Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Customer;
