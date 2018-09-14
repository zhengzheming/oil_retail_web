// 各模块通用数据， 例如map数据
import { fetchArea } from "@/api/common/areaDict";
import { fetchDropDownListMapInOil } from "@/api/oilStationManage/oilStation";
const common = {
  state: {
    areaList: [],
    oilCommonListMap: {}
  },
  actions: {
    "common/getArea": function({ state }) {
      return fetchArea().then(res => {
        state.areaList = res.data.children;
      });
    },
    "oilCommon/dropdownListMap": function({ state }) {
      return fetchDropDownListMapInOil().then(res => {
        state.oilCommonListMap = res.data;
        return res.data;
      });
    }
  }
};

export default common;
