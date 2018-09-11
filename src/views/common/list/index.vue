<template>
  <card>
    <list-page
      :current-page="currentPage"
      :page-size="pageSize"
      :page-total="pageTotal"
      :query-list="queryList"
      :table-header="tableHeader"
      :table-content="tableContent"
      @reset="handleReset"
      @query="getList"
      @size-change="val => pageSize=val"
      @page-change="val => currentPage=val"
      @show-view="row => showChildCom('detail',row)"
      @show-edit="row => showChildCom('edit',row)"/>
  </card>
</template>

<script>
// @ is an alias to /src
import apiList from "@/api/common/list";
import queryList from "./data/queryList";
import tableHeader from "./data/tableHeader";
import editPath from "./data/editPath";
import detailPath from "./data/detailPath";
// import tableFieldsMap from "./data/tableFieldsMap";

export default {
  data() {
    let pathName = this.$route.name;
    return {
      currentPage: 1,
      pageSize: 10,
      pageTotal: 0,
      queryList: queryList[pathName],
      tableHeader: tableHeader[pathName],
      editPath: editPath[pathName],
      detailPath: detailPath[pathName],
      listApi: apiList.list[pathName],
      editApi: apiList.edit[pathName],
      detailApi: apiList.detail[pathName],
      tableContent: [],
      comContent: ""
    };
  },
  watch: {
    currentPage: "getList",
    pageSize: "getList"
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let params = [this.currentPage, this.pageSize];
      this.queryList &&
        this.queryList.forEach(item => {
          params.push(item.val);
        });
      this.listApi(...params).then(res => {
        if (res.state == 0) {
          this.tableContent = $utils.getDeepKey(res, "data.data.rows");
          this.pageTotal = $utils.getDeepKey(res, "data.data.pageCount") * 10;
          if (this.tableContent.length) {
            this.tableContent.forEach(item => {
              // 文案转换 status: 0 -  未启用

              // 链接加参数
              Object.keys(tableHeader).forEach(key => {
                if (this.tableHeader[key].query) {
                  this.tableHeader[key].params = {};
                  this.tableHeader[key].query.forEach(val => {
                    this.tableHeader[key].params[val.name] = item[val.field];
                  });
                }
              });
              // 操作加参数
              let arr = [this.editPath, this.detailPath];
              arr.forEach(val => {
                if (val.query) {
                  item.query = item.query || {};
                  val.query.forEach(val1 => {
                    item.query[val1.name] = item[val1.field];
                  });
                }
              });
            });
          }
        }
      });
    },
    handleReset() {
      this.queryList &&
        this.queryList.forEach(item => {
          item.val = "";
        });
    },
    showChildCom(tag, row) {
      if (tag == "detail") {
        this.$router.push({ name: this.detailPath.pathName, query: row.query });
      } else if (tag == "edit") {
        this.$router.push({ name: this.editPath.pathName, query: row.query });
      }
    }
  }
};
</script>
