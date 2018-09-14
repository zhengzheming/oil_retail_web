import request from "@/utils/request";

export default {
  "oil-company-list": (page, pageSize, name, status) => {
    const data = {
      page: page,
      pageSize: pageSize,
      search: {
        name,
        status
      }
    };
    return request({
      url: "/webAPI/oilCompany/list",
      method: "post",
      data
    });
  },
  "oil-goods-list": (page, pageSize, name) => {
    const data = {
      page: page,
      pageSize: pageSize,
      search: {
        name
      }
    };
    return request({
      url: "/webAPI/oilGoods/list",
      method: "post",
      data
    });
  },
  "oil-station-checked-list": (
    page,
    pageSize,
    name,
    companyId,
    status,
    stationId
  ) => {
    const data = {
      page: page,
      pageSize: pageSize,
      search: {
        name,
        company_id: companyId,
        status,
        station_id: stationId
      }
    };
    return request({
      url: "/webAPI/oilStation/list",
      method: "post",
      data
    });
  }
};
