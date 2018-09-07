import request from "@/utils/request";

export const getMenu = () =>
  request({
    url: "/api/home/getMenu",
    method: "GET"
  });

export function getUserInfo(token) {
  return request({
    url: "/api/user/info",
    method: "get",
    params: { token }
  });
}
