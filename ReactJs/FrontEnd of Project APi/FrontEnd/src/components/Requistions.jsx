import React from "react";

const Requistions = () => {
  return (
    <div>
      {/* <nav className="shadow-lg border-t-2 border-gray-500">
        <div className="max-w-10xl mx-auto px-6">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <img
                    src="https://cdn.discordapp.com/avatars/699203703164633120/2f34ca5ca47fc1e257cc77e7ef97f02d.png"
                    alt="Logo"
                    className="rounded-full h-8 w-8 mr-2"
                  />
                  <span className="font-semibold text-gray-500 text-lg">
                    MrDark
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href className="py-4 px-2 text-blue-500 font-semibold">
                Home
              </a>
              <a
                href
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Projects
              </a>
              <a
                href="https://www.buymeacoffee.com/MrDark"
                className="bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition duration-300"
              >
                Donate
              </a>
            </div>
            <div className="mr-10 flex md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-dark">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden">
            <a
              href
              className="cursor-pointer text-white text-blue-500 block px-3 py-2 hover:text-blue-500 rounded-md text-base font-medium transition duration-300"
            >
              Home{" "}
            </a>
            <a
              href
              className="cursor-pointer text-white block px-3 py-2 hover:text-blue-500 rounded-md text-base font-medium transition duration-300"
            >
              Projects
            </a>
            <a
              href
              className="cursor-pointer bg-purple-600 text-white block px-3 py-2 hover:bg-purple-800 rounded-md text-base font-medium transition duration-300"
            >
              Donate
            </a>
          </div>
        </div>
      </nav> */}

      <div class="grid grid-cols-1 divide-y-[2px] divide-gray-100 text-center mt-32">
        <div>
          <ul
            aria-label="top bar right"
            aria-orientation="horizontal"
            class="px-2 mt-2 flex items-center"
          >
            <li class="relative">
              <input
                title="Search Bar"
                aria-label="search bar"
                role="search"
                class="pr-8 pl-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out focus:border-black focus:cursor-text w-4 focus:w-64 placeholder-transparent focus:placeholder-gray-500"
                type="text"
                placeholder="Search here"
              />
              <i class="pointer-events-none absolute top-0 right-0 h-full flex items-center pr-3">
                <svg
                  class="fill-current w-4 h-4 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                </svg>
              </i>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <div className=" grid grid-cols-[10%_70%_20%] divide-x">
        <div>
          <div class="mt-20 w-min md:w-52 shadow p-5 rounded-lg bg-white">
            <div class="flex items-center justify-between mt-4">
              <p class="font-medium">Filters</p>
            </div>

            <div>
              <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">All </option>
                  <option value="for-rent">Placed</option>
                  <option value="for-sale">Dispatched</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Furnish Type</option>
                  <option value="fully-furnished">Fully Furnished</option>
                  <option value="partially-furnished">
                    Partially Furnished
                  </option>
                  <option value="not-furnished">Not Furnished</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Any Price</option>
                  <option value="1000">RM 1000</option>
                  <option value="2000">RM 2000</option>
                  <option value="3000">RM 3000</option>
                  <option value="4000">RM 4000</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Floor Area</option>
                  <option value="200">200 sq.ft</option>
                  <option value="400">400 sq.ft</option>
                  <option value="600">600 sq.ft</option>
                  <option value="800 sq.ft">800</option>
                  <option value="1000 sq.ft">1000</option>
                  <option value="1200 sq.ft">1200</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Bedrooms</option>
                  <option value="1">1 bedroom</option>
                  <option value="2">2 bedrooms</option>
                  <option value="3">3 bedrooms</option>
                  <option value="4">4 bedrooms</option>
                  <option value="5">5 bedrooms</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-20">
          {" "}
          <div className="bg-white p-2 rounded-md w-full mt-5">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <div class="grid grid-cols-4 divide-x flex justify-between">
                  <h4 className="text-gray-600 font-semibold">
                    Daily Kirana Shop
                  </h4>
                  <h4 className="text-gray-600 font-semibold">
                    Wellness Forever
                  </h4>
                  <h4 className="text-gray-600 font-semibold">
                    Pashan Hardwares
                  </h4>
                  <h4 className="text-gray-600 font-semibold">Products Oder</h4>
                </div>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-min shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Mobile
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Address
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Vera Carpenter
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 21, 2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">43</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            />
                            <span className="relative">Activo</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Blake Bowman
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Editor
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 01, 2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">77</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            />
                            <span className="relative">Activo</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Dana Moore
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Editor
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 10, 2020
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">64</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                            />
                            <span className="relative">Suspended</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Alonzo Cox
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 18, 2020
                          </p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">70</p>
                        </td>
                        <td className="px-5 py-5 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            />
                            <span className="relative">Inactive</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="ml-24 mt-14 w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
              />
              <div className="ml-14">
                <p className="text-gray-900 whitespace-no-wrap">
                  Vera Carpenter
                  <span className="text-gray-900 whitespace-no-wrap">
                    +91 9876543210
                  </span>
                </p>
                <p className="text-gray-900 whitespace-no-wrap">
                  ChandraVarsha , Pashan, Pune 412010
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requistions;
