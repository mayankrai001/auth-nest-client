import axios from "axios";

console.log("BASE_URL:", process.env.VUE_APP_API_BASE_URL);
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  withCredentials: true, // cookies / auth
  headers: {
    "Content-Type": "application/json",
  },
});

// apiClient.interceptors.request.use((config) => {
//   const csrfToken = localStorage.getItem("csrfToken");
//   if (csrfToken) {
//     config.headers["x-csrf-token"] = csrfToken;
//   }
//   return config;
// });

export default apiClient;
