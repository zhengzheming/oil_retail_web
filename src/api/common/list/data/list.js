import request from "@/utils/request";

export default {
  // 基础信息-物流企业
  logistics: (page, pageSize, name, out_status, status) => {
    const data = {
      page,
      pageSize,
      search: {
        name,
        out_status,
        status
      }
    };
    return request({
      url: "/webAPI/LogisticsCompany/list",
      method: "post",
      data
    });
  },
  //基础信息-车辆数据
  "vehicleData": (page, pageSize, logistics_name, number) => {
    const data = {
      page,
      pageSize,
      search: {
        logistics_name,
        number
      }
    };
    return request({
      url: "/webAPI/Vehicle/list",
      method: "post",
      data
    });
  },
  //物流企业管理-司机信息
  "driver": (page, pageSize, driver_name, status, logistics_name) => {
    const data = {
      page,
      pageSize,
      search: {
        driver_name,
        status,
        logistics_name
      }
    };
    return request({
      url: "/webAPI/driver/list",
      method: "post",
      data
    });
  },
  // 物流企业管理-企业每日限额
  "enterpriseDayQuota": (page, pageSize, create_time_start, create_time_end, code ) => {
    const data = {
      page,
      pageSize,
      search: {
        create_time_start,
        create_time_end,
        code
      }
    };
    return request({
      url: "/webAPI/LogisticsQuotaLimit/list",
      method: "post",
      data
    });
  },
  // 物流企业管理-车辆每日限额
  "vehicleDayQuota":  (page, pageSize, create_time_start, create_time_end, code ) => {
    const data = {
      page,
      pageSize,
      search: {
        create_time_start,
        create_time_end,
        code
      }
    };
    return request({
      url: "/webAPI/VehicleQuotaLimit/list",
      method: "post",
      data
    });
  },
  // 物流企业管理-企业额度
  "enterpriseQuota": (page, pageSize, logistics_name, status) => {
    const data = {
      page,
      pageSize,
      search: {
        status,
        logistics_name
      }
    };
    return request({
      url: "/webAPI/LogisticsQuota/list",
      method: "post",
      data
    });
  },
  // 物流企业管理-企业额度-企业可用额度
  "availableCredit": (page, pageSize, category, create_time_start, create_time_end, logistics_id ) => {
    const data = {
      page,
      pageSize,
      search: {
        category,
        create_time_start,
        create_time_end,
        logistics_id
      }
    };
    return request({
      url: "/webAPI/LogisticsQuotaLog/getByLogisticsId",
      method: "post",
      data
    });
  },
  // 物流企业管理-企业额度-今日可用额度
  "dayCredit": (page, pageSize, logistics_id ) => {
    const data = {
      page: page,
      pageSize,
      search: {
        logistics_id
      }
    };
    console.log(data)
    return request({
      url: "/webAPI/LogisticsDailyQuotaLog/getByLogisticsId",
      method: "post",
      data
    });
  },
  // 物流企业管理-车辆容量
  "vehicleCapacity": (page, pageSize, logistics_name, number ) => {
    const data = {
      page: page,
      pageSize,
      search: {
        logistics_name,
        number
      }
    };
    console.log(data)
    return request({
      url: "/webAPI/LogisticsDailyQuotaLog/getByLogisticsId",
      method: "post",
      data
    });
  }, 
  "system-user-list": (
    page,
    pageSize,
    user_name,
    name,
    main_role_id,
    role_id
  ) => {
    const data = {
      page: page,
      pageSiz: pageSize,
      search: {
        user_name,
        name,
        main_role_id,
        role_id
      }
    };
    return request({
      url: "/admin/user/list",
      method: "post",
      data
    });
  },
  "system-role-list": (page, pageSize, name) => {
    const data = {
      page: page,
      pageSiz: pageSize,
      search: {
        name
      }
    };
    return request({
      url: "/admin/role/list",
      method: "post",
      data
    });
  }
};
