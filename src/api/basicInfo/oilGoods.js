import request from "@/utils/request";

export const createOilGoods = ({
  companyId,
  name,
  shortName,
  taxCode,
  corporate,
  address,
  contactPhone,
  ownership,
  buildDate,
  remark,
  status,
  files
}) =>
  request({
    url: "/webAPI/oilCompany/save",
    method: "post",
    data: {
      company_id: companyId,
      name,
      short_name: shortName,
      tax_code: taxCode,
      corporate,
      address,
      contact_phone: contactPhone,
      ownership,
      build_date: buildDate,
      remark,
      status,
      files
    }
  });

export const fetchOilGoodsDetail = companyId =>
  request({
    url: "/webAPI/oilCompany/detail",
    method: "GET",
    params: {
      company_id: companyId
    }
  });
