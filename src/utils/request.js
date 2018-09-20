import axios from "axios";

// import store from "@/store";
// import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // request timeout
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

export default service;
