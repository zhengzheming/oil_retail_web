import { oilStationFieldMap } from "@/services/fieldMap";
import { fetchOilStationDetail } from "@/api/basicInfo/oilStationChecked";
const oilStationChecked = {
  state: {
    detail: {
      form: {}
    }
  },
  mutations: {
    UPDATE_OIL_STATION_DETAIL(state, detail) {
      state.detail.form = $utils.renameKeys(oilStationFieldMap, detail);
      state.detail.form.status = String(state.detail.form.status);
    }
  },
  actions: {
    "oil-station-checked-detail:fetch-form": function({
      commit,
      rootState,
      state
    }) {
      return fetchOilStationDetail(rootState.route.query.stationId).then(
        res => {
          commit("UPDATE_OIL_STATION_DETAIL", res.data);
          return state.detail.form;
        }
      );
    }
  }
};

export default oilStationChecked;
