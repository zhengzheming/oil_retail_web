import request from "@/utils/request";

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  };
  return request({
    url: "/admin/site/login",
    method: "post",
    data
  });
}

export function logout() {
  return request({
    url: "/api/logout",
    method: "post"
  });
}
