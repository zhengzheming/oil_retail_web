import request from "@/utils/request";
import md5 from "js-md5";

export function loginByUsername(username, password) {
  const data = {
    username,
    password: md5(password)
  };
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

export function resetPwd({ password, newPassword, cpassword }) {
  return request({
    url: "/admin/site/updatePwd",
    method: "post",
    data: {
      password: password ? md5(password) : "",
      newPassword: newPassword ? md5(newPassword) : "",
      confirmPassword: cpassword ? md5(cpassword) : ""
    }
  });
}
