import create from "zustand";
import axios from "../http.common";
import LoginUseStore from "./loginStore";
// const userToken = LoginUseStore((state) => state.userToken);
//console.log("userToken in categories", userToken);
const useStore = create((set) => ({
  categories: [],

  retrieveCategory: async () => {
    const res = await axios.get("/categories");
    const { data } = res.data;
    set((state) => ({ categories: (state = data) }));
  },

  createCategory: async (data) => {
    const res = await axios.post("/categories", data);
    console.log("in the respose", data);
    return res;
  },

  updateCategory: async (data) => {
    const res = await axios.put(`/categories/${data._id}`, data);
    return res;
  },

  deleteCategory: async (_id) => {
    const res = await axios.delete(`/categories/${_id}`);

    return res;
  },
}));

export default useStore;
