import request from "@/utils/request";
export function fetchArea() {
  return request({
    url: "/webAPI/oilCommon/areaDict",
    method: "get"
  });
}
