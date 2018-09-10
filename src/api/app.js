import request from "@/utils/request";

export const getMenu = () =>
  request({
    url: "/admin/site/getMenu",
    method: "GET"
  });

export function getUserInfo(token) {
  return request({
    url: "/admin/site/getUserInfo",
    method: "get",
    params: { token }
  });
}
