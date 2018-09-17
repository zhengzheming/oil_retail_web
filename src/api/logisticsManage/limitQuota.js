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
    const data = {
        rate
    }
    return request({
      url: "/webAPI/LogisticsQuotaLimit/add",
      method: "post",
      data
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
    const data = {
        rate
    }
    return request({
      url: "/webAPI/VehicleQuotaLimit/add",
      method: "post",
      data
    });
}
