import axios from "axios";
import { Message } from "element-ui";
// import store from "@/store";
// import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // request timeout
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
    //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.state !== 0) {
      Message({
        message: res.data,
        type: "error",
        duration: 3 * 1000
      });
      return Promise.reject("error");
    }
    return response.data;
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
