import create from "zustand";
import axios from "../http.common";

const useStore = create((set) => ({
  register: [],

  createRegister: async (data) => {
    const res = await axios.post("/users", data);
    console.log("in this field", data);
    return res;
  },
}));

export default useStore;
