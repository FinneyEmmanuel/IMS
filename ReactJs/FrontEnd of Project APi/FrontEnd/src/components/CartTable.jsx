import React, { useState } from "react";
import { useEffect } from "react";
import useStore from "../stores/itemStore";

function CartTable() {
  const retrieveItems = useStore((state) => state.retrieveItems);
  const items = useStore((state) => state.items);

  useEffect(() => {
    retrieveItems();
  }, []);

  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 mt-10">
      <table className="border-collapse w-full mt-5">
        <thead>
          <tr className="text-center">
            <th className="p-3 font-bold uppercase bg-gray-400 text-gray-600 border border-gray-500 hidden lg:table-cell">
              Item name
            </th>
            <th className="p-3 font-bold uppercase bg-gray-400 text-gray-600 border border-gray-500 hidden lg:table-cell">
              Item Class
            </th>
            <th className="p-3 font-bold uppercase bg-gray-400 text-gray-600 border border-gray-500 hidden lg:table-cell">
              Description
            </th>
            <th className="p-3 font-bold uppercase bg-gray-400 text-gray-600 border border-gray-500 hidden lg:table-cell">
              Quantity
            </th>
            <th className="p-3 font-bold uppercase bg-gray-400 text-gray-600 border border-gray-500 hidden lg:table-cell">
              ADD/DEC
            </th>

            <th className="p-3 font-bold uppercase bg-gray-400 text-gray-600 border border-gray-500 hidden lg:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="form-group shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
          {items.map((i) => (
            <tr
              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              key={i._id}
            >
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Item name
                </span>
                {i.name}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                {/* <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Items Classes
              </span> */}
                {i?.itemClass?.name}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Status
                </span>
                <span className="shadow-2xl py-1 px-3 text-lg ">
                  {i.description}
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Status
                </span>
                <span className="shadow-2xl py-1 px-3 text-lg ">
                  {/* {i.description} */}
                </span>
              </td>
              <div className="col-xl-0 mt-2">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      onClick={decNum}
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    value={num}
                    onChange={handleChange}
                  />
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      onClick={incNum}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* {window.location.href.includes("admin") ? (
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <Link
                  to={
                    window.location.href.includes("admin")
                      ? `/admin/itemsform/${i._id}`
                      : "/customer/cart"
                  }
                  className="text-blue-400 hover:text-blue-600 underline pl-6"
                >
                  Edit
                  <button
                    className="text-blue-400 hover:text-blue-600 underline pl-6"
                    onClick={() => removeItem(i._id)}
                  >
                    Delete
                  </button>{" "}
                </Link>
              </td>
            ) : ( */}
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <button
                  className="text-blue-400 hover:text-blue-600 underline pl-6"
                  // onClick={() => addItemToCart(i)}
                >
                  Add To Cart
                </button>
              </td>
              {/* )} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
