import request from "@/utils/request";

export function getList(page, pageSize, name, out_status, status) {
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