import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://assignment-backend-dun-six.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
