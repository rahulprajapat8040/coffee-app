import { API_BASE_URL } from "@/lib/constants/routes.constant";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,

  // required for cookies
  withCredentials: true,

  timeout: 15000,
});