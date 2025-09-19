import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API;

const API = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

export const predictImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  return API.post("/api/predict/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
