import React, { useState } from "react";
import { useEffect } from "react";
import useStore from "../stores/itemStore";
import useStores from "../stores/cartStore";
import getUseStore from "../stores/loginStore";
import shopItemStore from "../stores/shopItemStore";

function CartTable() {
  const retrieveItems = useStore((state) => state.retrieveItems);
  const dataItems = useStore((state) => state.items);
  const addToCart = useStores((state) => state.addToCart);
  const login = getUseStore((state) => state.login);
  const users = getUseStore((state) => state.users);
  const retrieveShopItem = shopItemStore((state) => state.retrieveShopItem);
  const shopItems = shopItemStore((state) => state.shopItems);
  const [items, setItems] = useState();

  useEffect(() => {
    retrieveShopItem();
    setItems(shopItems);
  }, []);

  let addItemToCart = (item) => {
    console.log("in this field", item);

    addToCart({
      cartId: users.cartId,
      item: item._id,
      cutomerId: users._id,
      totalPrice: item.price,
      availableQuantity: shopItems.amount,
      price: shopItems.price,
    });
  };

  let [num, setNum] = useState(0);
  let incNum = (i) => {
    if (num < 10) {
      for (const itm of items) {
        if (itm._id == i._id) {
          itm.quantity = Number(itm.quantity ? itm.quantity : 0) + 1;
          break;
        }
      }
      setItems([...items]);
    }
  };
  let decNum = (i) => {
    if (i.quantity > 0) {
      for (const itm of items) {
        if (itm._id == i._id) {
          itm.quantity = Number(itm.quantity) - 1;
          break;
        }
      }
      setItems([...items]);
    }
  };
  let handleChange = (e, i) => {
    for (const itm of items) {
      if (itm._id == i._id) {
        itm.quantity = Number(e.target.value);
      }
    }
    setItems([...items]);
  };
  console.log(items);
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
              Price
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
          {items?.map((i) => {
            return (
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
                itemss Classes
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
                        onClick={() => decNum(i)}
                      >
                        -
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      value={i.quantity ? i.quantity : 0}
                      onChange={(e) => handleChange(e, i)}
                    />
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-primary"
                        type="button"
                        onClick={() => incNum(i)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                  <button
                    className="text-blue-400 hover:text-blue-600 underline pl-6"
                    onClick={() => addItemToCart(i)}
                  >
                    Add To Cart
                  </button>
                </td>
                {/* )} */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
