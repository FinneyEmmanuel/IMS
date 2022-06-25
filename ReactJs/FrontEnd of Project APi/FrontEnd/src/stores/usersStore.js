import create from "zustand";
import axios from "../http.common";

const useStore = create((set) => ({
  users: [],

  retrieveUsers: async () => {
    const res = await axios.get("/users");
    const { data } = res.data;
    set((state) => ({ users: (state = data) }));
  },

  updateUsers: async (data) => {
    const res = await axios.put(`/users/${data._id}`, data);
    return res;
  },

  deleteUsers: async (_id) => {
    const res = await axios.delete(`/users/${_id}`);
    return res;
  },
}));

export default useStore;
