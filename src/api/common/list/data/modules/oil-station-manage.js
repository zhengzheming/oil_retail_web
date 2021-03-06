import request from "@/utils/request";

export default {
  "oil-station-list": (page, pageSize, name, companyId, status, stationId) => {
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
      url: "/webAPI/oilStationApply/list",
      method: "post",
      data
    });
  }
};
