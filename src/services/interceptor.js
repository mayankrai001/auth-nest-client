import api from "./apiClient";
import store from "@/store";

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        await store.dispatch("auth/handleRefresh");
        return api(original);
      } catch (e) {
        // refresh failed → logout flow later
        return Promise.reject(e);
      }
    }

    return Promise.reject(err);
  }
);
