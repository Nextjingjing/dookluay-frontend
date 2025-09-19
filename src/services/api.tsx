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

export const getDiseases = async (page = 1, size = 5) => {
  const res = await API.get(`/api/diseases/?page=${page}&size=${size}`);
  return res.data;
};

export const getTreatments = async (diseaseId: number, page = 1, size = 10) => {
  const res = await API.get(`/api/treatments/?disease_id=${diseaseId}&page=${page}&size=${size}`);
  return res.data; // { count, total_pages, current_page, results }
};
