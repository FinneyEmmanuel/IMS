import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useStore from "../stores/itemClassStore";
import useStores from "../stores/categoriesStore";
import classStore from "../stores/categoriesStore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const ItemClassesForm = () => {
  const schema = yup.object().shape({
    name: yup.string().min(3).max(255).required(),
    category: yup.string().required(),
  });

  const addItemClasses = useStore((state) => state.addItemClasses);
  const categories = useStores((state) => state.categories);
  const retrieveCategory = classStore((state) => state.retrieveCategory);
  const itemsClasses = useStore((state) => state.itemsClasses);
  const updateItemClasses = useStore((state) => state.updateItemClasses);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    retrieveCategory();
  }, []);

  useEffect(() => {
    const itemClassId = params.itemClassId;
    if (!itemClassId) return;
    const itemClass = itemsClasses.find(
      (itemClass) => itemClass._id === params.itemClassId
    );
    if (!itemClass) {
      return;
    }
    setValue("_id", itemClass._id);
    setValue("name", itemClass.name);
    setValue("category", itemClass.category._id);
  });

  const onSubmitHandler = (data) => {
    if (!data._id) {
      addItemClasses(data);
      navigate("/admin/itemsclasses");
    } else {
      updateItemClasses(data);
      console.log("tghis is data", data);
      navigate("/admin/itemsclasses");
    }
  };

  return (
    <div>
      <div>
        <div className="h-min bg-gray-to-tl from-gray-400 to-gray-400 w-full mt-48 px-10 ml-20">
          <div className="flex  items-center   justify-center bg-gery-300 mt-20">
            <div className="px-16 py-6  mt-1000   text-left bg-blue-200 shadow-lg">
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <h2 className="text-2xl ml-14 mt-4"> Item Class </h2>
                <br />
                <input
                  className="w-full px-8 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Enter Items Class"
                  type="text"
                  required
                  {...register("name")}
                ></input>
                <p className=" text-red-900">{errors.name?.message}</p>
                <br />

                <div className="w-full px-4 py-2 mt-2 border rounded-md">
                  <label for="category">Category : </label>

                  <select
                    name="category"
                    {...register("category")}
                    id="category"
                  >
                    {categories.map((c) => (
                      <option key={c._id} value={c._id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <p className=" text-red-900">{errors.category?.message}</p>
                <button
                  className="px-8 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900 ml-16 mb-4"
                  type="submit"
                >
                  Sumit
                </button>

                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemClassesForm;
