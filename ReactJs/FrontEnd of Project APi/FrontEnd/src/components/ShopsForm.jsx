import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useStore from "../stores/shopStore";
import useStores from "../stores/categoriesStore";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ShopsForm = () => {
  const schema = yup.object().shape({
    name: yup.string().min(5).max(255).required(),
    shopId: yup.string().min(8).max(255).required(),
    addressLine1: yup.string().min(5).max(255).required(),
    addressLine2: yup.string().min(5).max(255).required(),
    area: yup.string().min(3).max(20).required(),
    city: yup.string().min(3).max(20).required(),
    state: yup.string().min(3).max(20).required(),
    zipcode: yup.string().min(5).max(6).required(),
    category: yup.string().required(),

    // contactPerson: yup
    //   .object()
    //   .shape({
    //     name: yup.string().min(5).max(255),
    //     phone: yup.string().min(9).max(10),
    //   })
    //   .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const addShop = useStore((state) => state.addShops);
  const categories = useStores((state) => state.categories);
  const retrieveCategory = useStores((state) => state.retrieveCategory);
  const shops = useStore((state) => state.shops);
  const updateShops = useStores((state) => state.updateShops);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    retrieveCategory();
  }, []);

  useEffect(() => {
    const shopsId = params.shopsId;
    if (!shopsId) return;
    const shop = shops.find((shop) => shop._id === params.shopsId);
    if (!shop) {
      return;
    }
    setValue("_id", shop._id);
    setValue("name", shop.name);
    setValue("shopId", shop.shopId);
    setValue("addressLine1", shop.addressLine1);
    setValue("addressLine2", shop.addressLine2);
    setValue("area", shop.area);
    setValue("city", shop.city);
    setValue("state", shop.state);
    setValue("zipCode", shop.zipCode);
    setValue("category", shop.category._id);
  });

  const onSubmitHandler = (data) => {
    if (!data._id) {
      addShop(data);
      navigate("/shopkeeper/shops");
    } else {
      updateShops(data);
      navigate("/shopkeeper/shops");
    }
  };

  return (
    <div className="flex justify-content-center mt-32 px-40">
      <div className="container-fluid flex justify-center h-full bg-gradient-to-tl from-blue-500 to-indigo-200">
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          method="post"
          className="form-componenet"
        >
          <h2 className="text-2xl"> Add Shops </h2>
          <br />
          <div>
            {" "}
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("name")}
              id="name"
              placeholder="Enter Shops"
              type="text"
            ></input>
            <p className="text-red-900">{errors.name?.message}</p>
          </div>

          <br />

          <div>
            <label for="category">Category : </label>

            <select name="category" {...register("category")} id="category">
              <option selected>Select a Category</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
            <p className="text-red-900">{errors.category?.message}</p>
          </div>

          <div>
            {" "}
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("shopId")}
              placeholder="Shop Id"
              id="shopId"
              type="text"
            ></input>
            <p className="text-red-900">{errors.shopId?.message}</p>
          </div>

          <div>
            {" "}
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("addressLine1")}
              placeholder="AddressLine1"
              type="text"
              id="addressLine1"
            ></input>
            <p className="text-red-900">{errors.addressLine1?.message}</p>
          </div>

          <div>
            {" "}
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("addressLine2")}
              placeholder="AddressLine2"
              type="text"
              id="addressLine2"
            ></input>
            <p className="text-red-900">{errors.addressLine2?.message}</p>
          </div>

          <div>
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("area")}
              placeholder="Enter Area"
              type="text"
              id="area"
            ></input>
            <p className="text-red-900">{errors.area?.message}</p>
          </div>

          <div>
            {" "}
            <input
              className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
              {...register("city")}
              placeholder="Enter City"
              type="text"
              id="city"
            ></input>
            <p className="text-red-900">{errors.city?.message}</p>
          </div>

          <input
            className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
            {...register("state")}
            placeholder="Enter State"
            type="text"
            id="state"
          ></input>
          <p className="text-red-900">{errors.state?.message}</p>

          <input
            className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
            {...register("zipcode")}
            placeholder="Enter zipcode"
            type="text"
            id="zipcode"
          ></input>
          <p className="text-red-900">{errors.zipcode?.message}</p>

          {/* <input
                  className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("owner")}
                  placeholder="Enter"
                  type="text"
                 
                ></input> */}
          {/* <input
                  className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("contactPerson.name")}
                  placeholder="Enter name"
                  type="text"
                 
                ></input>
                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("contactPerson.phone")}
                  placeholder="Enter phone"
                  type="text"
                 
                ></input> */}

          <button
            className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900 mt-2"
            type="submit"
          >
            SUBMIT
          </button>

          <br />
        </form>
      </div>
      {/* <div>
        <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900  py-16 px-10">
          <div className="flex  items-center   justify-center bg-gery-300 mt-20">
            <div className="px-8 py-3  mt-1000   text-left bg-green-200 shadow-lg form-container">
              <form
                onSubmit={handleSubmit(onSubmitHandler)}
                method="post"
                className="form-componenet"
              >
                <h2 className="text-2xl"> Add Shops </h2>
                <br />
                <div>
                  {" "}
                  <input
                    className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                    {...register("name")}
                    id="name"
                    placeholder="Enter Shops"
                    type="text"
                  ></input>
                  <p className="text-red-900">{errors.name?.message}</p>
                </div>

                <br />

                <div>
                  <label for="category">Category : </label>

                  <select
                    name="category"
                    {...register("category")}
                    id="category"
                  >
                    <option selected>Select a Category</option>
                    {categories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-900">{errors.category?.message}</p>
                </div>

                <div>
                  {" "}
                  <input
                    className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                    {...register("shopId")}
                    placeholder="Shop Id"
                    id="shopId"
                    type="text"
                  ></input>
                  <p className="text-red-900">{errors.shopId?.message}</p>
                </div>

                <div>
                  {" "}
                  <input
                    className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                    {...register("addressLine1")}
                    placeholder="AddressLine1"
                    type="text"
                    id="addressLine1"
                  ></input>
                  <p className="text-red-900">{errors.addressLine1?.message}</p>
                </div>

                <div>
                  {" "}
                  <input
                    className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                    {...register("addressLine2")}
                    placeholder="AddressLine2"
                    type="text"
                    id="addressLine2"
                  ></input>
                  <p className="text-red-900">{errors.addressLine2?.message}</p>
                </div>

                <div>
                  <input
                    className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                    {...register("area")}
                    placeholder="Enter Area"
                    type="text"
                    id="area"
                  ></input>
                  <p className="text-red-900">{errors.area?.message}</p>
                </div>

                <div>
                  {" "}
                  <input
                    className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                    {...register("city")}
                    placeholder="Enter City"
                    type="text"
                    id="city"
                  ></input>
                  <p className="text-red-900">{errors.city?.message}</p>
                </div>

                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("state")}
                  placeholder="Enter State"
                  type="text"
                  id="state"
                ></input>
                <p className="text-red-900">{errors.state?.message}</p>

                <input
                  className="w-full px-4 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("zipcode")}
                  placeholder="Enter zipcode"
                  type="text"
                  id="zipcode"
                ></input>
                <p className="text-red-900">{errors.zipcode?.message}</p>

               
                <button
                  className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900 mt-2"
                  type="submit"
                >
                  SUBMIT
                </button>

                <br />
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ShopsForm;
