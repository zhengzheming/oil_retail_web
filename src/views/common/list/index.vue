<template>
  <card>
    <list-page
      :currentPage="currentPage"
      :pageSize="pageSize"
      :queryList="queryList"
      :tableHeader="tableHeader"
      :tableContent="tableContent"
      @reset="handleReset"
      @query="list"
      @show-view="componentName=logisticsEnterpriseDetail"
      @show-edit="componentName=logisticsEnterpriseEdit">
      <component :is="componentName"></component>
    </list-page>
  </card>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getList } from '@/api/commonList';
import logisticsEnterpriseDetail from '@/views/basicInfo/logisticsEnterprise/detail'
import logisticsEnterpriseEdit from '@/views/basicInfo/logisticsEnterprise/edit'
import queryList from './data/queryList'
import tableHeader from './data/tableHeader'

export default {
  data(){
    let pathName = this.$route.name
    return{
      componentName:'',
      logisticsEnterpriseEdit,
      logisticsEnterpriseDetail,
      currentPage:1,
      pageSize:10,
      queryList: queryList[pathName],
      tableHeader:tableHeader[pathName],
      tableContent: [],
    }
  },
  mounted(){
    this.list();
  },
  methods: {
    list(){
      let params = [this.currentPage,this.pageSize];
      this.queryList && this.queryList.forEach(item => {
        params.push(item.val)
      })
      getList(...params)
      .then(res => {
        if(res.state == 0){
          this.tableContent = res.data.data.rows;
        }
      })
    },
    handleReset(){
      this.queryList && this.queryList.forEach(item => {
        item.val = ''
      })
    }
  }
};
</script>
