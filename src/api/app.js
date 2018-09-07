import request from "@/utils/request";

export const getMenu = () =>
  request({
    url: "/api/home/getMenu",
    method: "GET"
  });

export function getUserInfo(token) {
  return request({
    url: "/admin/site/getUserInfo",
    method: "get",
    params: { token }
  });
}
