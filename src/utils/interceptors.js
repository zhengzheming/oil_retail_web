import { Message } from "element-ui";
// request interceptor
import service from "@/utils/request";
import store from "@/store";

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
    if (res.state == 100011000) {
      Message({
        message: res.data,
        type: "error",
        duration: 3 * 1000
      });
      return store.dispatch("FedLogOut");
    }
    if (res.state !== 0) {
      let errMessage = res.data;
      if ($utils.typeIs(errMessage) === "object") {
        errMessage =
          '<p style="line-height: 22px;">' +
          $utils.getStringFromDeep(errMessage).join("<p></p>") +
          "</p>";
      }
      Message({
        message: errMessage,
        type: "error",
        duration: 3 * 1000,
        dangerouslyUseHTMLString: true
      });
      return Promise.reject("state-exception");
    }
    return response.data;
  },
  error => {
    console.log("err" + error); // for debug
    let errMessage = error.message;
    if (errMessage === "state-exception") return;
    if (error.response.status == "403") {
      errMessage = error.response.data.data;
    }
    Message({
      message: errMessage,
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);
