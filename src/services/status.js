import apiClient from "./apiClient";

export const getStatus = () => {
  return apiClient.get("/status");
};
