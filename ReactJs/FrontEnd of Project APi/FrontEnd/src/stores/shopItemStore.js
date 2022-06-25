import create from "zustand";
import axios from "../http.common";

const useStore = create((set) => ({
  shopItems: [],

  retrieveShopItem: async () => {
    const res = await axios.get("/shop-items");
    const { data } = res.data;
    set((state) => ({ shopItems: (state = data) }));
  },

  updateShopItem: async () => {},

  deleteShopItem: async (_id) => {
    const res = await axios.delete(`/shop-items/${_id}`);
    return res;
  },
}));

export default useStore;
