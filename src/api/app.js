import request from "@/utils/request";

export const getMenu = () =>
  request({
    url: "/api/home/getMenu",
    method: "GET"
  });
