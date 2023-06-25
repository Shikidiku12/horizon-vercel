import axios from "axios";

// const BASE_URL = "https://api.horizon88.com";

// const BASE_URL = "http://localhost:8001";

// const BASE_URL = "http://13.228.92.65:8007"

// const BASE_URL = "http://44.212.211.156:8007";

// const BASE_URL = "http://backend.horizon88.com";

const BASE_URL = "http://13.237.207.188:8001";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
