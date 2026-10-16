import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5020',

  // required for cookies
  withCredentials: true,

  timeout: 15000,
});