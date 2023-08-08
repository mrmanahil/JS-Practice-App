import axios from "axios";

// ** Config
// import authConfig from "src/configs/auth";

const instance = axios.create({
  baseURL: "https://7d8c-110-93-244-255.ngrok-free.app/api/v1", // local
  // baseURL: 'http://167.99.29.182/api/v1', // live
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const storedToken = window.localStorage.getItem("accessToken");

  return {
    ...config,
    headers: {
      authorization: storedToken ? `Bearer ${storedToken}` : null,
      // "ngrok-skip-browser-warning": true,
    },
  };
});

export default instance;
