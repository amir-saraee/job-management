import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://job-management-six.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
