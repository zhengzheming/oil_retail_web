import request from "@/utils/request";

export const fetchOilStationDetail = stationId =>
  request({
    url: "/webAPI/oilStation/detail",
    method: "get",
    params: {
      station_id: stationId
    }
  });
