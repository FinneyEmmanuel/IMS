import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useStore from "../stores/usersStore";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UsersForm = () => {
  const schema = yup.object().shape({
    firstName: yup.string().min(3).max(50).required(),
    lastName: yup.string().min(3).max(50).required(),
    email: yup.string().min(1).max(100).required(),
    phone: yup.string().min(9).max(10),
    userName: yup.string().min(3).max(50).required(),
    password: yup.string().min(8).max(255).required(),
    role: yup.string().required(),
    isAdmin: yup.boolean(),
    isActive: yup.boolean().default(),
    isShopkeeper: yup.boolean().default(),
    isCustomer: yup.boolean().default(),
    updatedBy: yup.string(),
    cartId: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const retrieveUsers = useStore((state) => state.retrieveUsers);
  const users = useStore((state) => state.users);
  const updateUsers = useStore((state) => state.updateUsers);
  useEffect(() => {
    retrieveUsers();
  }, []);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = params.userId;
    if (!userId) return;
    const user = users.find((user) => user._id === params.userId);
    if (!user) {
      return;
    }
    setValue("_id", user._id);
    setValue("firstName", user.firstName);
    setValue("lastName", user.lastName);
    setValue("email", user.email);
    setValue("phone", user.phone);
    setValue("userName", user.userName);
    setValue("password", user.password);
    setValue("role", user.role);
    setValue("isActive", user.isActive);
  });
  const onSubmitHandler = () => {
    updateUsers();
    navigate("/users");
  };

  return (
    <div>
      <div className="h-min bg-gray-to-tl from-gray-400 to-gray-400 w-full mt-48 px-10 ml-20">
        <div className="flex items-center h-min  justify-center bg-gery-300 mt-48">
          <div className="px-16 text-left bg-blue-200 shadow-lg">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <h2 className="text-2xl"> Add Items </h2>
              <br />
              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter FirstName"
                type="text"
                required
                {...register("firstName")}
              ></input>
              <p className=" text-red-900">{errors.name?.message}</p>
              <br />
              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter LastName"
                type="text"
                required
                {...register("lastName")}
              ></input>
              <p className=" text-red-900">{errors.lastName?.message}</p>
              <br />
              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Email"
                type="email"
                required
                {...register("email")}
              ></input>
              <p className=" text-red-900">{errors.email?.message}</p>
              <br />

              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Phone Number"
                type="text"
                required
                {...register("phone")}
              ></input>
              <p className=" text-red-900">{errors.phone?.message}</p>
              <br />
              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter userName"
                type="text"
                required
                {...register("userName")}
              ></input>
              <p className=" text-red-900">{errors.userName?.message}</p>
              <br />
              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Password"
                type="password"
                required
                {...register("password")}
              ></input>
              <p className=" text-red-900">{errors.password?.message}</p>
              <br />
              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="Enter Role"
                type="text"
                required
                {...register("role")}
              ></input>
              <p className=" text-red-900">{errors.role?.message}</p>
              <br />

              <input
                className="w-full px-8 py-2 mt-2 border rounded-md
             focus:outline-none focus:ring-1 focus:ring-blue-600"
                input=""
                type="checkbox"
                required
                {...register("isActive")}
              ></input>
              <p className=" text-red-900">{errors.isActive?.message}</p>
              <br />

              <div className="w-full px-4 py-2 mt-2 border rounded-md"></div>

              <button
                className="px-6 py-2 mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-900 mt-2"
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

export default UsersForm;
