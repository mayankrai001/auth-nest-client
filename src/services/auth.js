import apiClient from "./apiClient";

export const login = async (postData) => {
  const response = await apiClient.post("/auth/login", postData);
  return response.data;
};

export const logout = async () => {
  const response = await apiClient.post("/auth/logout");
  return response.data;
};

export const refresh = async (postData) => {
  const response = await apiClient.post("/auth/refresh", postData);
  return response.data;
};

export const getProfile = async () => {
  const response = await apiClient.get("/profile");
  return response.data;
};

export const getCsrfToken = async () => {
  const response = await apiClient.get("/csrf-token");
  return response.data;
};

export const signup = async (postData) => {
  const response = await apiClient.post("/auth/signup", postData);
  return response.data;
};
