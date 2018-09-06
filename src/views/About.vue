<template>
  <card>
    <list-page
      :currentPage="currentPage"
      :pageSize="pageSize"
      :queryList="queryList"
      :tableHeader="tableHeader"
      :tableContent="tableContent"
      @query="handleQuery"
      @reset="handleReset"
      @show-view="componentName=logisticsEnterpriseDetail"
      @show-edit="componentName=logisticsEnterpriseEdit">
      <component :is="componentName"></component >
    </list-page>
  </card>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getList } from '@/api/logisticsEnterprise';
import logisticsEnterpriseDetail from '@/views/basicInfo/logisticsEnterprise/detail'
import logisticsEnterpriseEdit from '@/views/basicInfo/logisticsEnterprise/edit'
import queryList from './common/list/data/queryList'
import tableHeader from './common/list/data/tableHeader'
import tableContent from './common/list/data/tableContent'
export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    let path = this.$route.path
    return{
      componentName:'',
      logisticsEnterpriseEdit,
      logisticsEnterpriseDetail,
      currentPage:1,
      pageSize:10,
      queryList: queryList[path],
      tableHeader:tableHeader[path],
      tableContent: tableContent[path],
    }
  },
  mounted(){
    this.list();
  },
  methods: {
    handleQuery(){
      this.list();
    },
    handleReset(){
      this.queryList.forEach(item => {
        item.val = '';
      })
    },
    list(){
      let params = [this.currentPage,this.pageSize];
      this.queryList.forEach(item => {
        params.push(item.val)
      })
      getList(...params)
      .then(res => {
        console.log(res)
      })
    }
  }
};
</script>
