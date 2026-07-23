import axios from "axios";

const API = axios.create({
  baseURL: "https://backendtoyshop.onrender.com/api/users",
});

export default API;