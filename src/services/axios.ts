import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3005/login",
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config: any) {
    const token = localStorage.getItem("access_token");

    if (config.headers && token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

//! axios interceptor
