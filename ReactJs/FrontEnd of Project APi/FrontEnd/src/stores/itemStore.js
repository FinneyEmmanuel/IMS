import create from "zustand";
import axios from "../http.common";

const useStore = create((set) => ({
  items: [],

  retrieveItems: async () => {
    const res = await axios.get("/items");
    const { data } = res.data;

    set((state) => ({ items: (state = data) }));
  },

  createItems: async (data) => {
    const res = await axios.post("/items", data);
    return res;
  },

  updateItems: async (data) => {
    const res = await axios.put(`/items/${data._id}`, data);
  },

  deleteItems: async (_id) => {
    const res = await axios.delete(`/items/${_id}`);
    return res;
  },
}));

export default useStore;
