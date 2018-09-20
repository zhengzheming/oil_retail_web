<template>
  <div class="list-page-com">
    <div>
      <query-form
        v-if="showQueryList"
        :com-data="queryList"
        @change-tab="handleChangeTab"
        @reset="handleReset"
        @query="handleQuery"/>
      <item-list
        v-if="itemList.data"
        :com-data="itemList"/>
      <el-table
        :data="tableContent"
        border
        style="width: 100%">
        <el-table-column
          v-for="(val,key) in tableHeader"
          :key="key"
          :label="val.label"
          :width="val.width"
          :min-width="val.minWidth">
          <template slot-scope="scope">
            <router-link
              v-if="val.pathName"
              :style="{color:val.pathName?'#6666FF':'#333'}"
              :to="{ name: val.pathName, query: scope.row.params}"
              :title="scope.row[key]"
              class="oparation"
              tag="a"
              style="text-overflow:ellipsis;white-space:nowrap;overflow: hidden;">
              {{ (scope.row[key]===null || scope.row[key]===undefined || scope.row[key]==='') ? '--' : scope.row[key] }}
            </router-link>
            <p
              v-else-if="val.filter"
              :title="scope.row[key]"
              style="text-overflow:ellipsis;white-space:nowrap;overflow: hidden;">{{ (scope.row[key]===null || scope.row[key]===undefined || scope.row[key]==='') ? '--' : val.filter(scope.row[key]) }}</p>
            <p
              v-else
              :title="scope.row[key]"
              style="text-overflow:ellipsis;white-space:nowrap;overflow: hidden;">{{ (scope.row[key]===null || scope.row[key]===undefined || scope.row[key]==='') ? '--' : scope.row[key] }}</p>
          </template>
        </el-table-column>
        <el-table-column
          v-if="hasAction !== false"
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="config.detailPath.pathName && scope.row.is_can_view !== false"
              type="text"
              size="small"
              @click="handleVIew(scope.row)">查看</el-button>
            <el-button
              v-if="config.editPath.pathName && scope.row.is_can_edit !== false"
              type="text"
              size="small"
              @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              v-if="config.configForDelete.pathName && scope.row.is_can_delete !== false"
              type="text"
              size="small"
              @click="handleDelete(scope.row)">删除</el-button>
            <el-button
              v-if="config.configForAuth.pathName && scope.row.is_can_auth !== false"
              type="text"
              size="small"
              @click="handleAuth(scope.row)">授权</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        :total="pageTotal"
        style="margin-top:14px;padding:0;"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
    <side-content :visible.sync="sideContentVisible">
      <keep-alive>
        <component
          :is="nestedComponent"/>
      </keep-alive>
    </side-content>
  </div>
</template>
<script>
import components from "./componentsForView";
import { mapState } from "vuex";
export default {
  name: "ListPage",
  filters: {
    topercent: function(val) {
      if (val != "--") {
        return Number(val * 100).toFixed(2) + "%";
      } else {
        return "--";
      }
    }
  },
  components,
  props: {
    pageSize: {
      type: Number,
      default: () => 10
    },
    currentPage: {
      type: Number,
      default: () => 1
    },
    pageTotal: {
      type: Number,
      default: () => 0
    },
    queryList: {
      type: Array,
      default: () => []
    },
    itemList: {
      type: Object,
      default: () => {}
    },
    tableHeader: {
      type: Object,
      default: () => {}
    },
    tableContent: {
      type: Array,
      default: () => []
    },
    hasAction: {
      type: Boolean,
      default: () => true
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      showQueryList: true
    };
  },
  computed: {
    ...mapState({
      sideContentVisible: state => state.listPage.sideContentVisible,
      nestedComponent: state => state.listPage.nestedComponent
    })
  },
  mounted() {
    let length = this.queryList.filter(item => {
      return !item.hide;
    }).length;
    if (!length) {
      this.showQueryList = false;
    }
  },
  methods: {
    handleChangeTab(val) {
      this.$emit("change-tab", val);
    },
    handleQuery() {
      this.$emit("query");
    },
    handleReset() {
      this.$emit("reset");
    },
    handleVIew(row) {
      this.$emit("show-view", row);
    },
    handleEdit(row) {
      this.$emit("show-edit", row);
    },
    handleDelete(row) {
      this.$emit("delete-item", row);
    },
    handleAuth(row) {
      this.$emit("auth", row);
    },
    handleSizeChange(val) {
      this.$emit("size-change", val);
    },
    handleCurrentChange(val) {
      this.$emit("page-change", val);
    }
  }
};
</script>

<style scoped lang="scss">
.list-page-com {
  background-color: #fff;
}
</style>
