<template>
  <div class="home">
    <list-page
      :currentPage="currentPage"
      :pageSize="pageSize"
      :queryList="queryList"
      :tableHeader="tableHeader"
      :tableContent="tableContent"
      @show-view="componentName=logisticsEnterpriseDetail"
      @show-edit="componentName=logisticsEnterpriseEdit">
        <component :is="componentName"></component >
      </list-page>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { getList } from '@/api/logisticsEnterprise';
import logisticsEnterpriseDetail from '@/views/basicInfo/logisticsEnterprise/detail'
import logisticsEnterpriseEdit from '@/views/basicInfo/logisticsEnterprise/edit'
import queryList from './data/queryList'
import tableHeader from './data/tableHeader'
import tableContent from './data/tableContent'

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data(){
    let path = this.$route.path
    return{
      componentName:logisticsEnterpriseEdit,
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
    console.log(this.$route.path)
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
