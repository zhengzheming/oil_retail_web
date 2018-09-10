<template>
  <div class="list-page-com">
    <div>
      <query-form
        :com-data="queryList"
        v-if="queryList.length"
        @reset="handleReset"
        @query="handleQuery"></query-form>
      <el-table
        :data="tableContent"
        border
        style="width: 100%">
        <el-table-column
            v-for="(val,key) in tableHeader"
            :key="key"
            :label="val.label"
            :width="val.width">
            <template slot-scope="scope">
              <router-link
                v-if="val.pathName"
                class="oparation"
                target="_blank"
                tag="a"
                style="text-overflow:ellipsis;white-space:nowrap;"
                :style="{color:val.pathName?'#6666FF':'#333'}"
                :to="{ name: val.pathName, query: val.params}"
                :title="scope.row[key]">
                {{(scope.row[key]===null || scope.row[key]===undefined || scope.row[key]==='') ? '--' : scope.row[key]}}
              </router-link>
              <p v-else style="text-overflow:ellipsis;white-space:nowrap;">{{(scope.row[key]===null || scope.row[key]===undefined || scope.row[key]==='') ? '--' : scope.row[key]}}</p>
            </template>
          </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button v-if="scope.row.is_can_view" @click="handleVIew(scope.row)" type="text" size="small">查看</el-button>
            <el-button v-if="scope.row.is_can_edit" @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top:14px;padding:0;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTotal">
      </el-pagination>
    </div>
    <side-content :visible.sync="sideContentVisible">
      <slot></slot>
    </side-content>
  </div>
</template>
<script>
export default {
  name: 'ListPage',
  data(){
    return {
      sideContentVisible:false,
    }
  },
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
      tableHeader: {
          type: Object,
          default: () => {}
      },
      tableContent: {
          type: Array,
          default: () => []
      }
  },
  methods: {
    handleQuery(){
      this.$emit('query');
    },
    handleReset(){
      this.$emit('reset');
    },
    handleVIew(row) {
      this.sideContentVisible = true;
      this.$emit('show-view',row);
    },
    handleEdit(row) {
      this.sideContentVisible = true;
      this.$emit('show-edit',row);
    },
    handleSizeChange(val) {
      this.$emit('size-change',val);
    },
    handleCurrentChange(val) {
      this.$emit('page-change',val);
    }
  }
};
</script>

<style scoped lang="scss">
.list-page-com {
  background-color: #fff;
}
</style>

