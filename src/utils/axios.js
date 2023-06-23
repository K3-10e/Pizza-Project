import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://files.olo.com/pizzas.json",
});

export default axiosInstance;
