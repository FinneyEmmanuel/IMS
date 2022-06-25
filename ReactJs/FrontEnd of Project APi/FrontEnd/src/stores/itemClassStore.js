import create from "zustand";
import axios from "../http.common";

const useStore = create((set) => ({
  itemsClasses: [],

  retrieveItemClasses: async () => {
    const res = await axios.get("/item-classes");
    const { data } = res.data;

    set((state) => ({ itemsClasses: (state = data) }));
  },

  addItemClasses: async (data) => {
    const res = await axios.post("/item-classes", data);
    console.log("this is response", res);
    return res;
  },

  updateItemClasses: async (data) => {
    const res = await axios.put(`/item-classes/${data._id}`, data);
    console.log("in the response", res);
    return res;
  },

  deleteItemClasses: async (_id) => {
    const res = await axios.delete(`/item-classes/${_id}`);
    return res;
  },
}));

export default useStore;
