import { detailPath as system } from "./modules/system";
export default {
  // 基础数据-物流企业
  logistics: {
    pathName: "logisticsDetail"
  },
  // 基础数据-车辆数据
  "vehicleData": {
    pathName: "vehicleDataDetail",
    query: [
      {
        name: "vehicle_id",
        field: "vehicle_id"
      }
    ]
  },
  // 物流企业管理-司机信息
  "driver": {
    pathName: "driverDetail",
    query: [
      {
        name: "driver_id",
        field: "driver_id"
      }
    ]
  },
  "system-user-list": {
    pathName: "system-user-detail",
    query: [
      {
        name: "userId",
        field: "user_id"
      }
    ]
  },
  "system-role-list": {
    pathName: "system-role-detail",
    query: [
      {
        name: "roleId",
        field: "role_id"
      }
    ]
  },
  ...system
};
