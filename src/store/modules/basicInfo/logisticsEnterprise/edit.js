import { save } from "@/api/basicInfo/logisticsEnterprise/edit";
import router from "@/router/index";
import { Message } from "element-ui";
const role = {
  state: {
    logistics_id:'',
    status: ''
  },
  mutations: {
  },
  actions: {
    "logisticsEdit:save": function({ state }) {
      save(state.logistics_id,state.status)
      .then(res=>{
        if(res.state == 0){
          Message.success('保存成功');
          router.push({name:'logistics'})
        }
      })
    },
    "logisticsEdit:update-form": function({ state }, {logistics_id,status}) {
      state.logistics_id = logistics_id;
      state.status = status;
    },
  }
};

export default role;
