import request from "@/utils/request";

export const createOilStationApply = (
  {
    stationId,
    applyId,
    companyId,
    cityId,
    provinceId,
    name,
    address,
    longitude,
    latitude,
    contactPerson,
    contactPhone,
    remark,
    status,
    files
  },
  isSubmit
) =>
  request({
    url: "/webAPI/oilStationApply/save",
    method: "post",
    data: {
      is_submit: isSubmit,
      apply_id: applyId,
      station_id: stationId,
      company_id: companyId,
      city_id: cityId,
      province_id: provinceId,
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

export const fetchOilStationApplyDetail = applyId =>
  request({
    url: "/webAPI/oilStationApply/detail",
    method: "get",
    params: {
      apply_id: applyId
    }
  });

export const fetchDropDownListMapInOil = () =>
  request({
    url: "/webAPI/oilCommon/dropDownListMap",
    method: "get"
  });
