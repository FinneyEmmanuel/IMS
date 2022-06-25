import axios from "axios";
// const userToken = sessionStorage.getItem("token");
export default axios.create({
  baseURL: "http://localhost:3030/",
  headers: {
    "Content-type": "application/json",
    // Authorization: userToken,
  },
});
