<template>
  <div class="home">
    <list-page
      :currentPage="currentPage"
      :pageSize="pageSize"
      :queryList="queryList"
      :tableHeader="tableHeader"
      :tableContent="tableContent">
        <component  :is="componentName"></component >
      </list-page>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getList } from '@/api/logisticsEnterprise';
import logisticsEnterpriseEdit from '@/views/basicInfo/logisticsEnterprise/edit'

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    return{
      componentName:logisticsEnterpriseEdit,
      currentPage:1,
      pageSize:10,
      queryList: [
        {
          label:'企业名称',
          val:''
        },
        {
          type:'slt',
          label:"企业状态",
          val:'',
          data: [
            {
              label:'aaa',
              val:'1'
            },
            {
              label:'bbb',
              val:'2'
            },
            {
              label:'ccc',
              val:'3'
            }
          ]
        },
        {
          type:'slt',
          label:"银管家状态",
          val:'',
          data: [
            {
              label:'aaa',
              val:'1'
            },
            {
              label:'bbb',
              val:'2'
            },
            {
              label:'ccc',
              val:'3'
            }
          ]
        }
      ],
      tableHeader:[
        {
          label:'编号',
          prop:'logistics_id',
          width:'120'
        },
        {
          label:'企业名称',
          prop:'name',
          width:'120'
        },
        {
          label:'银管家状态',
          prop:'out_status_name',
          width:'120'
        },
        {
          label:'企业状态',
          prop:'status_name'
        }
      ],
      tableContent: [{
          "logistics_id": "1392",
          "out_status_name": "禁用",
          "name": "朝阳物流有限公司",
          "status_name": "正常",
          "is_can_edit": false,
          "is_can_view": false,
      }]
    }
  },
  mounted(){
    let params = [this.currentPage,this.pageSize];
    this.queryList.forEach(item => {
      params.push(item.val)
    })
    getList(...params)
    .then(res => {
      console.log(res)
    })
  },
  methods: {
  }
};
</script>
