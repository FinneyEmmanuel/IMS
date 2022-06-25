import React, { useEffect } from "react";
import useStore from "../stores/usersStore";
import { Link } from "react-router-dom";

const Users = () => {
  const retrieveUsers = useStore((state) => state.retrieveUsers);
  const users = useStore((state) => state.users);
  const deleteUsers = useStore((state) => state.deleteUsers);

  useEffect(() => {
    retrieveUsers();
  }, []);

  const user = users.filter((user) => user.isAdmin !== true);

  console.log(`all the users`, user);

  let removeUser = (remove) => {
    deleteUsers(remove).then(() => retrieveUsers());
    console.log("this is user", remove);
  };

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
              type="text"
              id="table-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {user.map((u) => (
              <tr
                className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={u._id}
              >
                <td className="w-4 p-4">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>

                {/* <Link to={`/admin/itemsclassesform/${itemsClasses._id}`}> */}
                <td className="text-black-900 px-6 py-4">
                  Name: {u.firstName}{" "}
                </td>
                {/* </Link> */}
                <td className="text-black-900 px-6 py-4">
                  Role:{u.isShopkeeper ? "Shopkeper" : "Customer"}
                </td>
                <td className="text-right px-6 py-4">
                  <Link to={`/admin/usersform/${u._id}`}>
                    <button className="font-medium text-blue-900 dark:text-blue-500 hover:underline">
                      Edit
                    </button>
                  </Link>
                </td>

                <td className="text-center px-4 py-4 text-left ">
                  <button
                    className="font-medium text-red-900 dark:text-red-500 hover:underline"
                    onClick={() => removeUser(u._id)}
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

export default Users;
