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
      @delete-item="row => showChildCom('delete',row)"
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
import configForDelete from "./data/delete";

export default {
  data() {
    let pathName = this.$route.name;
    return {
      currentPage: 1,
      pageSize: 10,
      pageTotal: 0,
      queryList: queryList[pathName] || [],
      tableHeader: tableHeader[pathName] || {},
      editPath: editPath[pathName] || {},
      detailPath: detailPath[pathName] || {},
      configForDelete: configForDelete[pathName] || {},
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
          this.pageTotal = parseInt($utils.getDeepKey(res, "data.data.total"));
          if (this.tableContent.length) {
            this.tableContent.forEach(item => {
              // 链接加参数
              Object.keys(this.tableHeader).forEach(key => {
                const tableHeaderKey = this.tableHeader[key];
                if (Array.isArray(tableHeaderKey.query)) {
                  tableHeaderKey.params = tableHeaderKey.query.reduce(
                    (acc, cur) => ({
                      ...acc,
                      [cur.name]: item[cur.field]
                    }),
                    {}
                  );
                }
                // 文案转换 status: 0 -  未启用
                const mapKey = tableHeaderKey.mapKey;
                if (mapKey) {
                  item[key] = this.$lookupInDict(
                    this.$route,
                    mapKey,
                    item[mapKey]
                  );
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
              // 删除
              Object.keys(this.configForDelete).forEach(key => {
                item.configForDelete = item.configForDelete || {};
                item.configForDelete[key] = this.configForDelete[key];
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
    showChildCom(type, row) {
      const actionMap = {
        detail: () => {
          this.$router.push({
            name: this.detailPath.pathName,
            query: row.query
          });
        },
        edit: () => {
          this.$router.push({ name: this.editPath.pathName, query: row.query });
        },
        delete: () => {
          if (!row.configForDelete) return;
          const message =
            row.configForDelete.message ||
            "您确定要删除当前信息，该操作不可逆？";
          this.$confirm(message, "提示", {
            type: "warning",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          }).then(() => {
            const cb = row.configForDelete.callback || function() {};
            const args = row.configForDelete.args.map(argKey => row[argKey]);
            cb(...args);
            this.$message({
              type: "success",
              message: "删除成功"
            });
          });
        }
      };
      const cb = actionMap[type] || function() {};
      cb();
    }
  }
};
</script>
