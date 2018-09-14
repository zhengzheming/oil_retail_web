import request from "@/utils/request";
// 企业每日限额详情
export const logisticsQuotaLimit = () => {
  return request({
    url: "/webAPI/logisticsQuotaLimit/detail",
    method: "get"
  });
};
// 企业每日限额保存
export const logisticsQuotaLimitAdd = rate => {
    const params = {
        rate
    }
    return request({
      url: "/webAPI/LogisticsQuotaLimit/add",
      method: "get",
      params
    });
}
// 司机每日限额详情
export const vehicleQuotaLimit = () => {
  return request({
    url: "/webAPI/VehicleQuotaLimit/detail",
    method: "get"
  });
};
// 司机每日限额保存
export const vehicleQuotaLimitAdd = rate => {
    const params = {
        rate
    }
    return request({
      url: "/webAPI/VehicleQuotaLimit/add",
      method: "get",
      params
    });
}
