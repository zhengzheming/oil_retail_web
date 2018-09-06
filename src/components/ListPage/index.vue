<template>
  <div class="list-page-com">
    <div>
      <query-form
        :com-data="queryList"
        @reset="handleReset"
        @query="handleQuery"></query-form>
      <el-table
        :data="tableContent"
        border
        style="width: 100%">
        <el-table-column
          v-for="item of tableHeader"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width">
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
        :total="400">
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
      queryList: {
          type: Array,
          default: () => []
      },
      tableHeader: {
          type: Array,
          default: () => []
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
      this.$emit('show-view');
    },
    handleEdit(row) {
      this.sideContentVisible = true;
      this.$emit('show-edit');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped lang="scss">
.list-page-com {
  background-color: #fff;
}
</style>

