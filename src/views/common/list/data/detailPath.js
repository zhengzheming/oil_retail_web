import { detailPath as system } from "./modules/system";
import { detailPath as basicInfo } from "./modules/basicInfo";
import { detailPath as oilStationManage } from "./modules/oil-station-manage";
import { detailPath as orderManage } from "./modules/order-manage";
import { detailPath as physicalManage } from "./modules/physicalManage";
export default {
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
  ...system,
  ...basicInfo,
  ...oilStationManage,
  ...orderManage,
  ...physicalManage
};
