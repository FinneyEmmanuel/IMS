import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useStore from "../stores/categoriesStore";

const CategoriesForm = () => {
  const schema = yup.object().shape({
    name: yup.string().min(3).max(50).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const categories = useStore((state) => state.categories);
  const createCategory = useStore((state) => state.createCategory);
  const updateCategory = useStore((state) => state.updateCategory);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const categoryId = params.categoryId;
    if (!categoryId) return;
    const category = categories.find(
      (category) => category._id === params.categoryId
    );
    if (!category) {
      return;
    }
    setValue("_id", category._id);
    setValue("name", category.name);
  });

  const onSubmitHandler = (data) => {
    if (!data._id) {
      createCategory(data);
      navigate("/admin/categories");
    } else {
      updateCategory(data);
      navigate("/admin/categories");
    }
  };

  return (
    <div>
      <div className="h-min bg-gray-to-tl from-gray-400 to-gray-400 w-full mt-48 px-10 ml-20">
        <div className="flex  items-center   justify-center bg-gery-300 mt-10">
          <div className="px-16 py-6  mt-1000   text-left bg-blue-200 shadow-lg">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <h2 className="text-2xl ml-10 mt-4"> Add Category </h2>
              <br />
              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
               focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Category"
                type="text"
                required
                {...register("name")}
              ></input>
              <p className=" text-red-900">{errors.name?.message}</p>
              <br />

              <div className="w-full px-4 py-2 mt-2 border rounded-md"></div>

              <button
                className="px-8 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900 ml-14"
                type="submit"
              >
                Submit
              </button>

              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesForm;
