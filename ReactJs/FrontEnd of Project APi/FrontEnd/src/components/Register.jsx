import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useStore from "../stores/registerStore";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import images from "../images/pexels.jpg";
import images1 from "../images/Capture.PNG";


function Register() {
  const schema = yup.object().shape({
    firstName: yup.string().min(3).max(50).required(),
    lastName: yup.string().min(3).max(50).required(),
    email: yup.string().min(1).max(100).required(),
    phone: yup.string().min(9).max(10),
    userName: yup.string().min(3).max(50).required(),
    password: yup.string().min(8).max(255).required(),

    isActive: yup.boolean().default(),
    isShopkeeper: yup.boolean().default(),
    isCustomer: yup.boolean().default(),
    cartId: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const createRegister = useStore((state) => state.createRegister);

  const onSubmitHandler = (data) => {
    console.log("in this filed", data);
    data.isCustomer = data.isCustomer ? true : false;
    data.isShopkeeper = data.isShopkeeper ? true : false;
    createRegister(data);
    navigate("/login");
  };

  return (
    <div
      className="bg_image"
      // style={{
      //   backgroundImage: `url(${images})`,
      //   backgroundSize: "cover",
      //   height: "120vh",
      // }}
      style={{
        backgroundImage: `url(${images1})`,
        backgroundSize: "cover",
        height: "120vh",
      }}
    >
      <div className="h-full max-w-10xl mx-auto  ">
        <div className="w-2/5 bg-gray-200 rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Register
          </h1>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex flex-col mb-1 w-60 inline-block">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                for="first_name"
              >
                First Name
              </label>
              <input
                className="border py-2 px-1 text-gray-800"
                type="text"
                name="first_name"
                id="first_name"
                {...register("firstName")}
              />
              <p className="text-red-900">{errors.firstName?.message}</p>
            </div>
            <div className="flex flex-col ml-16 mb-4 w-60 inline-flex absolute top-28">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                for="last_name"
              >
                Last Name
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="last_name"
                id="last_name"
                {...register("lastName")}
              />
              <p className="text-red-900">{errors.lastName?.message}</p>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                for="email"
              >
                Email
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="email"
                name="email"
                id="email"
                {...register("email")}
              />
              <p className="text-red-900">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                for="password"
              >
                Password
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="password"
                name="password"
                id="password"
                {...register("password")}
              />
              <p className="text-red-900">{errors.password?.message}</p>
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                for="userName"
              >
                User Name
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="username"
                id="username"
                {...register("userName")}
              />
              <p className="text-red-900">{errors.userName?.message}</p>
            </div>
            <br />
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-1"
                for="grid-phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 

leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-phone"
                type="text"
                placeholder="90210"
                {...register("phone")}
              />
              <p className="text-red-900">{errors.phone?.message}</p>
            </div>
            <br />
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex ">
              <div className="mt-4">
                <span className="text-gray-700">Role Type</span>
                <div className="mt-2">
                  <label className="inline-flex items-center ml-3">
                    <input
                      {...register("isShopkeeper")}
                      type="checkbox"
                      className="form-radio"
                      name="isShopkeeper"
                      id="shopkeeper"
                    />
                    <p className="text-red-900">
                      {errors.isShopkeeper?.message}
                    </p>
                    <span className="ml-2">Shopkeeper</span>
                  </label>

                  <label className="inline-flex items-center ml-0">
                    <input
                      {...register("isCustomer")}
                      type="checkbox"
                      className="form-radio"
                      name="isCustomer"
                      value={true}
                    />
                    <p className="text-red-900">{errors.isCustomer?.message}</p>
                    <span className="ml-2">Customer</span>
                  </label>
                </div>
              </div>
            </div>
            <button
              className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-2 rounded"
              type="submit"
            >
              Create Account
            </button>

            <Link
              className="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
              to="/login"
            >
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
