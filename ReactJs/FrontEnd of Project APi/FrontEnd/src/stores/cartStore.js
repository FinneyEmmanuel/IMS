import create from "zustand";
import axios from "../http.common";

const useStore = create((set) => ({
  cart: [],

  retrieveCart: async () => {
    const res = await axios.get("/cart");
    const { data } = res.data;
    set((state) => ({ cart: (state = data) }));
  },

  addToCart: async (data) => {
    console.log("this is before", data);
    const res = await axios.patch(`/cart/${data.cartId}`, {
      $push: {
        items: {
          itemId: data.item,
          quantity: {
            number: data.number,
            unit: data.unit,
          },
          totalPrice: data.price,
        },
      },
    });
    console.log("this is after", data);
    return res;
  },
}));
export default useStore;
