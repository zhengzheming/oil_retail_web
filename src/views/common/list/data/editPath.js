import { editPath as system } from "./modules/system";
import { editPath as basicInfo } from "./modules/basicInfo";
import { editPath as oilStationManage } from "./modules/oil-station-manage";
export default {
  logistics: {
    pathName: "logisticsEdit",
    query: [
      {
        name: "logistics_id", //参数key
        field: "logistics_id" //参数value所对应的后台字段
      }
    ]
  },
  ...system,
  ...basicInfo,
  ...oilStationManage
};
