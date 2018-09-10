import request from "@/utils/request";

export function list(page, pageSize, name, out_status, status) {
  const data = {
    page:page,
    pageSiz:pageSize,
    search:{
    name:name,
      out_status:out_status,
    status:status,
    }
  };
  return request({
    url: "/webAPI/LogisticsCompany/list",
    method: "post",
    data
  });
}
export function detail(logistics_id) {
  const params = {
      logistics_id
    };
  return request({
    url: "/webAPI/LogisticsCompany/detail",
    method: "get",
    params
  });
};
  
export function update(logistics_id,status) {
  const data = {
    logistics_id,
    status
  }
  return request({
    url: "/webAPI/LogisticsCompany/save",
    method: "post",
    data
  })
}