import request from "@/utils/request";

export const save = (logistics_id,status) => {
  const data = {
      logistics_id,
      status
    };
  return request({
    url: "/webAPI/LogisticsCompany/save",
    method: "post",
    data
  });
}
export const getMap = () => {
  return request({
    url: "/webAPI/logisticsCommon/dropDownListMap",
    method: "get"
  });
}