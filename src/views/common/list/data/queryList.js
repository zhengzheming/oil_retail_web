import { queryList as system } from "./modules/system";
import { queryList as basicInfo } from "./modules/basicInfo";
import { queryList as oilStationManage } from "./modules/oil-station-manage";
import { queryList as orderManage } from "./modules/order-manage";
import { queryList as physicalManage } from "./modules/physicalManage";
import { queryList as quota } from "./modules/quota";
export default {
  ...system,
  ...basicInfo,
  ...oilStationManage,
  ...orderManage,
  ...physicalManage,
  ...quota
};
