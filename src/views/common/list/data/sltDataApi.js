import request from "@/utils/request";
import { fetchDropDownListMapInOil } from "@/api/oilStationManage/oilStation";
// 查询条件列表数据获取
export default {
  logistics: function() {
    return request({
      url: "/webAPI/logisticsCommon/dropDownListMap",
      method: "get"
    });
  },
  driver: function() {
    return request({
      url: "/webAPI/logisticsCommon/dropDownListMap",
      method: "get"
    });
  },
  enterpriseQuota: function() {
    return request({
      url: "/webAPI/logisticsCommon/dropDownListMap",
      method: "get"
    });
  },
  availableCredit: function() {
    return request({
      url: "/webAPI/logisticsCommon/dropDownListMap",
      method: "get"
    });
  },
  "oil-station-checked-list": fetchDropDownListMapInOil,
  "oil-company-list": fetchDropDownListMapInOil,
  "oil-station-list": fetchDropDownListMapInOil,
  "order-list": fetchDropDownListMapInOil
};
