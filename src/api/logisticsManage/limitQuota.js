import request from "@/utils/request";
// 企业每日限额详情
export const logisticsQuotaLimit = () => {
    return request({
      url: "/webAPI/logisticsQuotaLimit/detail",
      method: "get"
    });
}
// 企业每日限额保存
export const logisticsQuotaLimitSave = () => {
    return request({
      url: "/webAPI/LogisticsQuotaLimit/save",
      method: "get"
    });
}
// 司机每日限额详情
export const vehicleQuotaLimit = () => {
    return request({
      url: "/webAPI/VehicleQuotaLimit/detail",
      method: "get"
    });
}
// 司机每日限额保存
export const vehicleQuotaLimitSave = () => {
    return request({
      url: "/webAPI/VehicleQuotaLimit/save",
      method: "get"
    });
}