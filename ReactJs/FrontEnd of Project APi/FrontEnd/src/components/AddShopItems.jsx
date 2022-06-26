import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useStores from "../stores/shopStore";
import useStore from "../stores/itemClassStore";
import useItemStore from "../stores/itemStore";
import getShopItem from "../stores/shopItemStore";
import { useEffect, useNavigate } from "react";
import { useState } from "react";
const li = [];
const AddShopItems = () => {
  const schema = yup.object().shape({
    shop: yup.string().required(),
    item: yup.string().required(),
    quantityAddition: yup.array().of(
      yup.object().shape({
        amount: yup.number(),
        unit: yup.string(),
        date: yup.date(),
        addedBy: yup.string(),
      })
    ),
    availableQuantity: yup.object().shape({
      amount: yup.number().min(0).max(300),
      unit: yup.string(),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const shops = useStores((state) => state.shops);
  const retrieveShops = useStores((state) => state.retrieveShops);
  const retrieveItemClasses = useStore((state) => state.retrieveItemClasses);
  const retrieveItems = useItemStore((state) => state.retrieveItems);

  const itemsClasses = useStore((state) => state.itemsClasses);
  const items = useItemStore((state) => state.items);
  const createShopItem = getShopItem((state) => state.createShopItem);
  // const navigate = useNavigate();

  useEffect(() => {
    retrieveItemClasses();
    retrieveShops();
    retrieveItems();
  }, []);

  const [optionSelected, setOptionSelected] = useState("");
  const [itemsToView, setItemsToView] = useState();
  const [itemExists, setItemExists] = useState(false);
  const [checked, setChecked] = useState(false);
  const setItemBasedOnClassesHandler = async () => {
    const allItems = await items.filter(
      (i) => i.itemClass._id === optionSelected
    );
    setItemsToView(allItems);
    console.log("itemtoview", itemsToView);
  };

  const onSubmitHandler = (data) => {
    createShopItem(data);
    // navigate("/shops");
  };

  return (
    <div className="">
      <form
        className="shop-container w-2/4"
        // onClick={handleSubmit(onSubmitHandler)}
      >
        <div className="mt-48 relative z-0 w-full mb-6 group parent-div">
          <select
            required
            id="shop"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            {...register("shop")}
          >
            <label
              for="shop"
              className="block mb-2 text-sm font-medium text-purple-900 dark:text-gray-400"
            >
              Select a Shop
            </label>
            <p className="text-red-900">{errors.shop?.message}</p>

            <option selected>Choose a Shop</option>
            {shops.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div className="relative z-0 w-full mb-6 group parent-div">
          <label
            for="itemClass"
            className="block mb-2 text-sm font-medium text-purple-900 dark:text-gray-400"
          >
            Select an ItemClass
          </label>
          <p className="text-red-900">{errors.itemsClasses?.message}</p>
          <select
            onChange={(event) => {
              setOptionSelected(event.target.value);
            }}
            id="custom-itemClasses"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            // {...register("fieldId")}
            required
          >
            {" "}
            <option selected className="itemClasses">
              Choose an Item Class
            </option>
            {itemsClasses.map((i) => (
              <option key={i._id} value={i._id}>
                {i.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={(event) => {
            event.preventDefault();
            setItemBasedOnClassesHandler();
          }}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-20 px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <div>
        {itemsToView === undefined ? (
          <div>Please select item{itemsToView}</div>
        ) : (
          itemsToView.map((e) => {
            console.log("e", e);
            return (
              <table>
                <tr>
                  <td>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setChecked(!checked)}
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="flexCheckDefault"
                      >
                        {e.name}
                      </label>
                    </div>
                  </td>
                </tr>
              </table>
            );
          })
        )}
      </div>
      <button
        onClick={() => handleSubmit(onSubmitHandler)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-20 px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add
      </button>
    </div>
  );
};

export default AddShopItems;
