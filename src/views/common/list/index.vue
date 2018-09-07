<template>
  <card>
    <list-page
      :current-page="currentPage"
      :page-size="pageSize"
      :query-list="queryList"
      :table-header="tableHeader"
      :table-content="tableContent"
      @show-view="componentName=logisticsEnterpriseDetail"
      @show-edit="componentName=logisticsEnterpriseEdit">
      <component :is="componentName"/>
    </list-page>
  </card>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getList } from "@/api/logisticsEnterprise";
import logisticsEnterpriseDetail from "@/views/basicInfo/logisticsEnterprise/detail";
import logisticsEnterpriseEdit from "@/views/basicInfo/logisticsEnterprise/edit";
import queryList from "./data/queryList";
import tableHeader from "./data/tableHeader";
import tableContent from "./data/tableContent";

export default {
  name: "CommonList",
  components: {
    HelloWorld
  },
  data() {
    let pathName = this.$route.name;
    return {
      componentName: "",
      logisticsEnterpriseEdit,
      logisticsEnterpriseDetail,
      currentPage: 1,
      pageSize: 10,
      queryList: queryList[pathName],
      tableHeader: tableHeader[pathName],
      tableContent: tableContent[pathName]
    };
  },
  mounted() {
    let params = [this.currentPage, this.pageSize];
    this.queryList &&
      this.queryList.forEach(item => {
        params.push(item.val);
      });
    getList(...params).then(res => {
      console.log(res);
    });
  },
  methods: {}
};
</script>
