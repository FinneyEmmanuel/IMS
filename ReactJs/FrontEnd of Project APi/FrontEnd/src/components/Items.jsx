import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../stores/itemStore";
// import useStores from "../stores/cartStore";
import getUseStore from "../stores/loginStore";

const Items = () => {
  const retrieveItems = useStore((state) => state.retrieveItems);
  const items = useStore((state) => state.items);
  const deleteItems = useStore((state) => state.deleteItems);
  // const addToCart = useStores((state) => state.addToCart);
  const login = getUseStore((state) => state.login);
  // const users = getUseStore((state) => state.users);

  useEffect(() => {
    retrieveItems();
    login();
  }, []);

  let removeItem = (item) => {
    deleteItems(item).then(() => retrieveItems());
    console.log("in this field", item);
  };

  // let addItemToCart = (item) => {
  //   console.log("in this field", item);

  //   addToCart({
  //     cartId: users.cartId,
  //     item: item._id,
  //     cutomerId: users._id,
  //     price: item.price,
  //   });
  // };

  return (
    <div className="max-w-6xl mx-auto py-40 mt-10  ">
      <table className="border-collapse w-full  mt-5 overflow-auto item-table">
        <thead>
          <Link to="/admin/itemsform">
            <button className="bg-gray-300 hover:bg-blue-200 text-blue font-bold py-1 px-4 rounded-full absolute text-blue right-20 absolute top-48">
              Add
            </button>
          </Link>
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
            {/* <th className="p-3 font-bold uppercase bg-gray-400 text-gray-600 border border-gray-500 hidden lg:table-cell">
              Quantity
            </th>
            <th className="p-3 font-bold uppercase bg-gray-400 text-gray-600 border border-gray-500 hidden lg:table-cell">
              Price
            </th> */}
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
              {/* <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Quantity
                </span>
                <span className="shadow-2xl py-1 px-3 text-lg ">
                  {i.quantity}
                </span>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Price
                </span>
                <span className=" py-1 px-3 text-xs font-bold">{i.price}</span>
              </td> */}
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <Link
                  to={`/admin/itemsform/${i._id}`}
                  className="text-blue-400 hover:text-blue-600 underline pl-6"
                >
                  Edit{" "}
                </Link>
                <button
                  className="text-blue-400 hover:text-blue-600 underline pl-6"
                  onClick={() => removeItem(i._id)}
                >
                  Delete
                </button>{" "}
              </td>
              {/* ) : (
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <button
                  className="text-blue-400 hover:text-blue-600 underline pl-6"
                  onClick={() => addItemToCart(i)}
                >
                  Add To Cart
                </button>
              </td>
              )} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
