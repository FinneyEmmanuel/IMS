import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../stores/shopStore";
import useStores from "../stores/shopItemStore";

const ShopItems = () => {
  const retrieveShops = useStore((state) => state.retrieveShops);
  const shops = useStore((state) => state.shops);
  const retrieveShopItem = useStores((state) => state.retrieveShopItem);
  const shopItems = useStores((state) => state.shopItems);
  console.log("in this field", shopItems);
  const deleteShopItem = useStores((state) => state.deleteShopItem);

  useEffect(() => {
    retrieveShops();
    retrieveShopItem();
  }, []);

  let remove = (item) => {
    deleteShopItem(item).then(() => retrieveShopItem());
  };
  return (
    <div className="ml-24 px-2 mt-48">
      <table className="border-collapse w-full ">
        <thead>
          <Link to="/shopkeeper/addShopItems" className="">
            <button>Add</button>
          </Link>
          <tr className="text-center">
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Shops
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Shop Item
            </th>

            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="form-group">
          {shops.map((s) => (
            <tr
              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
              key={s._id}
            >
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Shops
                </span>
                {s.name}
              </td>
              {shopItems.map((shopItem) => (
                <td
                  className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"
                  key={shopItem._id}
                >
                  <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    Shop Item
                  </span>
                  {shopItem?.item?.name}
                </td>
              ))}
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Actions
                </span>

                <Link
                  className="text-blue-400 hover:text-blue-600 underline pl-6"
                  to=""
                >
                  Edit
                  <button
                    onClick={() => remove(s._id)}
                    className="text-blue-400 hover:text-blue-600 underline pl-6"
                  >
                    Delete
                  </button>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShopItems;
