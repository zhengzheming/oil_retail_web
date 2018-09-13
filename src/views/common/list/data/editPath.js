import { editPath as system } from "./modules/system";
import { editPath as basicInfo } from "./modules/basicInfo";
export default {
  logistics: {
    pathName: "logisticsEdit"
    // query:[{
    //   name:'id',             //参数key
    //   field:'out_status'     //参数value所对应的后台字段
    // }]
  },
  ...system,
  ...basicInfo
};
