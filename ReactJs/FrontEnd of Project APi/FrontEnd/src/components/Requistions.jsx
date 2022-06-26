import React from "react";

const Requistions = () => {
  return (
    <div>
     

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
                  <option value="">Today</option>
      
                  <option value="not-furnished">Not Furnished</option>
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Yesterday</option>
                  <option value="1000">RM 1000</option>
                 
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Last Week</option>
                  <option value="200">200 sq.ft</option>
                  
                </select>

                <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                  <option value="">Custom Range</option>
                  
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
                        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className=" text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 21, 2020
                          </p>
                        </td>
                        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">43</p>
                        </td>
                        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            />
                            <span className="px-4 relative">Activ</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
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
                        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
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
                        <td className="px-4 py-5 bg-white text-sm">
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
