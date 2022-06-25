// import { set } from "react-hook-form";
import create from "zustand";
import axios from "../http.common";

const useStore = create((set) => ({
  shops: [],

  retrieveShops: async () => {
    const res = await axios.get("/shops");
    const { data } = res.data;

    set((state) => ({ shops: (state = data) }));
  },

  addShops: async (data) => {
    const res = await axios.post("/shops", data);
    console.log(`in the add`, data);
    return res;
  },

  updateShops: async (data) => {
    const res = await axios.put(`/shops/${data._id}`, data);
    return res;
  },

  deleteShops: async (_id) => {
    const res = await axios.delete(`/shops/${_id}`);
    return res;
  },
}));
export default useStore;
