<template>
  <card>
    <span slot="title">系统模块详情</span>
    <item-list :com-data="detailData"/>
  </card>
</template>
<script>
import { detail } from "@/api/system/module-manage";
import { getMap } from "@/api/common/map";
export default {
  data() {
    return {
      detailData: {
        data: {},
        list: [
          {
            label: "名称",
            prop: "name"
          },
          {
            label: "权限码",
            prop: "code"
          },
          {
            label: "排序码",
            prop: "order_index"
          },
          {
            label: "操作",
            prop: "actions"
          },
          {
            label: "页面链接",
            prop: "page_url"
          },
          {
            label: "是否公开",
            prop: "is_public"
          },
          {
            label: "是否外部链接",
            prop: "is_external"
          },
          {
            label: "状态",
            prop: "status"
          },
          {
            label: "更新时间",
            prop: "update_time"
          },
          {
            label: "是否菜单",
            prop: "is_menu"
          },
          {
            label: "备注",
            prop: "remark"
          }
        ]
      }
    };
  },
  mounted() {
    detail(this.$route.query.id).then(res => {
      if (res.state == 0) {
        this.detailData.data = $utils.getDeepKey(res, "data");
        // 对返回的actions做格式转换
        var str = ''
        this.detailData.data.actions.forEach(item => {
          str += item.name + '|' + item.code + ','
        })
        if(str[str.length-1] == ','){
          str = str.substring(0,str.length-1)
        }
        this.detailData.data.actions = str;
        // 对四个是否到map中找对应的值
        getMap()
        .then(res => {
          if(res.state == 0 ){
            let arr = ['status','is_public','is_external','is_menu']
            arr.forEach(item => {
              this.detailData.data[item] = res.data['module_'+item][this.detailData.data[item]]
            });
          }
        })
      }
    });
  }
};
</script>
