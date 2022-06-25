import create from "zustand";
import axios from "../http.common";

const useStore = create((set) => ({
  users: [],

  login: async (data) => {
    const response = await axios.post("/authentication", {
      ...data,
      strategy: "local",
    });
    console.log(`in  login`, response);
    sessionStorage.setItem("token", response.data.accessToken);
    set((state) => ({ users: (state.users = response.data.user) }));
  },
}));

export default useStore;
