<template>
  <card>
    <list-page
      :current-page="currentPage"
      :page-size="pageSize"
      :page-total="pageTotal"
      :query-list="queryList"
      :item-list="itemList"
      :table-header="tableHeader"
      :table-content="tableContent"
      :has-action="hasAction"
      :config="config"
      @reset="handleReset"
      @query="getList"
      @change-tab="handleChangeTab"
      @size-change="val => pageSize=val"
      @page-change="val => currentPage=val"
      @delete-item="row => showChildCom('delete',row)"
      @show-view="row => showChildCom('detail',row)"
      @auth="row => showChildCom('auth',row)"
      @show-edit="row => showChildCom('edit',row)"/>
  </card>
</template>

<script>
// @ is an alias to /src
import apiList from "@/api/common/list";
import sltDataApi from "./data/sltDataApi"; // 查询条件列表数据获取
import queryList from "./data/queryList";
import itemList from "./data/itemList";
import tableHeader from "./data/tableHeader";
import editPath from "./data/editPath";
import detailPath from "./data/detailPath";
import configForAuth from "./data/configForAuth";
import configForDelete from "./data/delete";
import hasAction from "./data/hasAction"; //列表是否有操作栏:默认有,没有则需配置
import hasExport from "./data/hasExport"; //是否有导出功能

export default {
  data() {
    let pathName = this.$route.name;
    return {
      currentPage: 1,
      pageSize: 10,
      pageTotal: 0,
      sltDataApi: sltDataApi[pathName] || null,
      queryList: queryList[pathName] || [],
      itemList: itemList[pathName] || {},
      tableHeader: tableHeader[pathName] || {},
      editPath: editPath[pathName] || {},
      detailPath: detailPath[pathName] || {},
      configForDelete: configForDelete[pathName] || {},
      configForAuth: configForAuth[pathName] || {},
      hasAction: hasAction[pathName],
      hasExport: hasExport[pathName],
      listApi: apiList.list[pathName],
      editApi: apiList.edit[pathName],
      detailApi: apiList.detail[pathName],
      tableContent: [],
      comContent: ""
    };
  },
  computed: {
    config() {
      const { editPath, detailPath, configForAuth, configForDelete } = this;
      return { editPath, detailPath, configForAuth, configForDelete };
    }
  },
  watch: {
    currentPage: "getList",
    pageSize: "getList"
  },
  mounted() {
    this.getList();
    if (this.sltDataApi) {
      this.sltDataApi().then(res => {
        if (res.state == 0 && res.data) {
          this.queryList.forEach(item => {
            if(item.type == 'slt'){
              item.data = res.data[item.field]
            }
          });
        }
      });
    }
  },
  methods: {
    getList() {
      let params = [this.currentPage, this.pageSize];
      this.queryList &&
        this.queryList.forEach(item => {
          // 给隐藏的queryList赋值
          if (item.hide === true) {
            item.val = this.$route.query[item.label];
          }
          params.push(item.val);
        });
      // 如果有导出功能则执行以下
      if (this.hasExport) {
        this.$store.dispatch(`${this.$route.name}:exportInit`, params);
      }
      this.listApi &&
        this.listApi(...params).then(res => {
          if (res.state == 0) {
            this.tableContent = _.get(res, "data.data");
            this.pageTotal = +_.get(res, "data.totalRows") || 0;
            if(this.itemList.data){
              this.itemList.data = res.extra;
            }
            if (this.tableContent && this.tableContent.length) {
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
                if (this.configForDelete) {
                  Object.keys(this.configForDelete).forEach(key => {
                    item.configForDelete = item.configForDelete || {};
                    item.configForDelete[key] = this.configForDelete[key];
                  });
                }
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
    handleChangeTab(val) {
      let tabEle =
        this.queryList.filter(item => {
          return item.type == "tab";
        }) || [];
      if (tabEle.length) {
        tabEle[0].val = val;
        this.getList();
      }
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
        auth: () => {
          this.$router.push({
            name: this.configForAuth.pathName,
            query: row.query
          });
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
            this.getList();
          });
        }
      };
      const cb = actionMap[type] || function() {};
      cb();
    }
  }
};
</script>
