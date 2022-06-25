import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../stores/itemClassStore";

const ItemCLasses = () => {
  const retrieveItemClasses = useStore((state) => state.retrieveItemClasses);
  const itemsClasses = useStore((state) => state.itemsClasses);
  const deleteItemClasses = useStore((state) => state.deleteItemClasses);

  let counter = 1;
  useEffect(() => {
    retrieveItemClasses();
  }, []);
  let removeItem = (item) => {
    deleteItemClasses(item).then(() => retrieveItemClasses());
    console.log("in this field", item);
  };
  // console.log(window.location);

  // const [data, setName] = useState("");

  // const [foundItemClasses, setFoundItemClasses] = useState(itemsClasses);

  // const filter = (e) => {
  //   const keyword = e.target.value;

  //   if (keyword !== "") {
  //     const results = itemsClasses.filter((itemClass) => {
  //       return itemClass.name.toLowerCase().startsWith(keyword.toLowerCase());
  //     });
  //     setFoundItemClasses(results);
  //   } else {
  //     setFoundItemClasses(itemsClasses);
  //   }
  //   setName(keyword);
  // };

  return (
    <div className="max-w-6xl mx-auto mt-40 ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <div className="p-4 flex flex-nowrap">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="table-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
          {window.location.href.includes("admin") ? (
            <Link to="/admin/itemsclassesform">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full absolute text-white right-10 mt-4">
                Add
              </button>
            </Link>
          ) : (
            <div>
              <ion-icon
                className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full absolute text-white right-10 mt-4"
                name="cart-outline"
              ></ion-icon>
            </div>
          )}
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Sr.No
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {itemsClasses.map((itemsClasses) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={itemsClasses._id}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {counter++}
                </th>
                <Link
                  to={
                    window.location.href.includes("admin")
                      ? `/admin/itemsclassesform/${itemsClasses._id}`
                      : "/customer/cartTable"
                  }
                >
                  <td className="text-black-500 px-6 py-4">
                    {itemsClasses.name}
                  </td>
                </Link>
                <td className="px-6 py-4">{itemsClasses?.category?.name}</td>

                <td className="px-8 py-4 text-left ">
                  <button
                    className="font-medium text-red-900 dark:text-red-500 hover:underline"
                    onClick={() => removeItem(itemsClasses._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemCLasses;
