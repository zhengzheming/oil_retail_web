import request from "@/utils/request";

export const createOilStation = ({
  stationId,
  companyId,
  name,
  address,
  longitude,
  latitude,
  contactPerson,
  contactPhone,
  remark,
  status,
  files
}) =>
  request({
    url: "/webAPI/oilStation/save",
    method: "post",
    data: {
      station_id: stationId,
      company_id: companyId,
      name,
      address,
      longitude,
      latitude,
      contact_person: contactPerson,
      contact_phone: contactPhone,
      remark,
      status,
      files
    }
  });

export const fetchOilStationDetail = stationId =>
  request({
    url: "/webAPI/oilStation/detail",
    method: "GET",
    params: {
      station_id: stationId
    }
  });
