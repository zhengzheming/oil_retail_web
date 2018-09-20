import { tableHeader as system } from "./modules/system";
import { tableHeader as basicInfo } from "./modules/basicInfo";
import { tableHeader as oilStationManage } from "./modules/oil-station-manage";
import { tableHeader as orderManage } from "./modules/order-manage";
import { tableHeader as physicalManage } from "./modules/physicalManage";
import { tableHeader as quota } from "./modules/quota";

export default {
  ...system,
  ...basicInfo,
  ...oilStationManage,
  ...orderManage,
  ...physicalManage,
  ...quota
};
