import request from "@/utils/request";
import md5 from "js-md5";

export function loginByUsername(username, password) {
  const data = {
    username,
    password: md5(password)
  };
  logout;
  return request({
    url: "/admin/site/login",
    method: "post",
    data
  });
}

export function logout() {
  return request({
    url: "/admin/site/logout",
    method: "post"
  });
}
