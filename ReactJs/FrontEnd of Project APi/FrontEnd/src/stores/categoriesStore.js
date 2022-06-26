import create from "zustand";
import axios from "../http.common";
import LoginUseStore from "./loginStore";
// const userToken = LoginUseStore((state) => state.userToken);
//console.log("userToken in categories", userToken);
const useStore = create((set) => ({
  categories: [],

  retrieveCategory: async () => {
    const res = await axios.get("/categories", {
      headers: { Authorization: sessionStorage.getItem("token") },
    });
    const { data } = res.data;
    set((state) => ({ categories: (state = data) }));
  },

  createCategory: async (data) => {
    const res = await axios.post("/categories", data, {
      headers: { Authorization: sessionStorage.getItem("token") },
    });
    console.log("in the respose", data);
    return res;
  },

  updateCategory: async (data) => {
    const res = await axios.put(`/categories/${data._id}`, data, {
      headers: { Authorization: sessionStorage.getItem("token") },
    });
    return res;
  },

  deleteCategory: async (_id) => {
    const res = await axios.delete(`/categories/${_id}`, {
      headers: { Authorization: sessionStorage.getItem("token") },
    });

    return res;
  },
}));

export default useStore;
