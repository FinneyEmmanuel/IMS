import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import classStore from "../stores/itemClassStore";
import useStore from "../stores/itemStore";
import { useEffect } from "react";

const ItemsForms = () => {
  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
    itemClass: yup.string().required(),
    description: yup.string().max(255),
    // quantity: yup.object().shape({
    //   number: yup.number(),
    //   unit: yup.string(),
    // }),
    // price: yup.object().shape({
    //   amount: yup.number(),
    //   unit: yup.string(),
    // }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  //  this store from  items
  const createItems = useStore((state) => state.createItems);

  // this store form  item classes
  const retrieveItemClasses = classStore((state) => state.retrieveItemClasses);

  const itemsClasses = classStore((state) => state.itemsClasses);
  const items = useStore((state) => state.items);
  const updateItems = useStore((state) => state.updateItems);

  const params = useParams();

  useEffect(() => {
    retrieveItemClasses();
  }, []);

  useEffect(() => {
    const itemsId = params.itemsId;
    if (!itemsId) return;
    const item = items.find((item) => item._id === params.itemsId);
    if (!item) return {};
    setValue("_id", item._id);
    setValue("name", item.name);
    setValue("itemClass", item.itemClass._id);
    setValue("price", item.price);
  });

  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    if (!data._id) {
      createItems(data);
      navigate("/admin/items");
    } else {
      updateItems(data);
      navigate("/admin/items");
    }
    console.log("in this fieldss", data);
  };

  return (
    <div>
      <div className="h-min bg-gray-to-tl from-gray-400 to-gray-400 w-full mt-48 px-10 ml-20">
        <div className="flex  items-center   justify-center bg-gery-300 mt-20">
          <div className="px-16 py-6  mt-1000   text-left bg-blue-200 shadow-lg">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <h2 className="text-2xl"> Add Items </h2>
              <br />
              <input
                className="w-full px-8  py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Items"
                id="items"
                type="text"
                required
                {...register("name")}
              ></input>
              <p className=" text-red-900">{errors.name?.message}</p>
              {/* <input
                className="w-full px-8  py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter ItemsClassId"
                type="text"
                required
                {...register("itemClassId")}
              ></input>
              <p className=" text-red-900">{errors.itemClassId?.message}</p> */}

              <div>
                <label for="items">ItemClass :</label>

                <select name="items" {...register("itemClass")} id="">
                  {itemsClasses.map((i) => (
                    <option key={i._id} value={i._id}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </div>
              <p className=" text-red-900">{errors.itemClassId?.message}</p>
              <input
                className="w-full px-8  py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Descriptioin"
                id="description"
                type="text"
                required
                {...register("description")}
              ></input>
              <p className=" text-red-900">{errors.description?.message}</p>
              {/* <input
                className="w-full px-8  py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Quantity"
                id="price"
                type="text"
                required
                {...register("number")}
              ></input>
              <p className=" text-red-900">{errors.number?.message}</p>
              <input
                className="w-full px-8  py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Per Kg"
                id="price"
                type="text"
                required
                {...register("unit")}
              ></input>
              <p className=" text-red-900">{errors.unit?.message}</p>

              <input
                className="w-full px-8  py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Amount"
                id="price"
                type="text"
                required
                {...register("amount")}
              ></input>
              <p className=" text-red-900">{errors.amount?.message}</p>
              <input
                className="w-full px-8  py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Per Kg"
                id="price"
                type="text"
                required
                {...register("unit")}
              ></input>
              <p className=" text-red-900">{errors.unit?.message}</p> */}

              <div className="w-full px-4 py-2 mt-2 border rounded-md"></div>

              <button
                className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900 mt-2"
                type="submit"
              >
                Add Items
              </button>

              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsForms;
