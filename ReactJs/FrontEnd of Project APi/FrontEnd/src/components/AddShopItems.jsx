import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useStores from "../stores/shopStore";
import useStore from "../stores/itemClassStore";
import { useEffect } from "react";

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
  const itemsClasses = useStore((state) => state.itemsClasses);

  useEffect(() => {
    retrieveItemClasses();
    retrieveShops();
  }, []);

  const onSubmitHandler = () => {};

  return (
    <div className="">
      <form
        className="shop-container w-2/4"
        onClick={handleSubmit(onSubmitHandler)}
      >
        <div className="mt-48 relative z-0 w-full mb-6 group parent-div">
          <select
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
          <select
            id="itemClasses"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            // {...register("fieldId")}
          >
            <label
              for="field"
              className="block mb-2 text-sm font-medium text-purple-900 dark:text-gray-400"
            >
              Select an ItemClass
            </label>
            <p className="text-red-900">{errors.field?.fieldName?.message}</p>

            <option selected>Choose an Item Class</option>
            {itemsClasses.map((i) => (
              <option key={i._id} value={i._id}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            // {...register("isRequired")}
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Is_Required
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-20 px-2.5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddShopItems;
