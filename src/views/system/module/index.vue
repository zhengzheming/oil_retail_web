<template>
    <card>
      <span slot="title">系统模块管理</span>
      <div style="display:flex;width:50%;min-width:800px;">
        <el-input 
          v-model="searchTxt"
          type="text" 
          placeholder="输入关键字查询" 
          style="margin-right:10px;width:348px;"/>
        <el-button 
          type="primary" 
          style="width:65px;"
          @click="query">查询</el-button>
      </div>
      <div>
        <div 
          class="table-header" 
          style="margin-top:20px;">
          <span>模块名</span>
          <p class="btn-wrap">
            <span>状态</span>
            <span style="justify-content: flex-start;">操作</span>
          </p>
        </div>
        <el-tree
          ref="tree1"
          :data="treeData"
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          style="width: 32%;min-width: 620px;"
          node-key="id"
          default-expand-all>
          <span 
            slot-scope="{ node, data }" 
            class="custom-tree-node">
            <span style="display:inline-block;width:350px;">{{ node.label }}</span>
            <div class="btn-wrap">
              <span>已启用</span>
              <p class="action-wrap">
                <button class="el-button el-button--text el-button--small" @click="() => detail(data)">查看</button>
                <button class="el-button el-button--text el-button--small" @click="() => update(data)">编辑</button>
                <button class="el-button el-button--text el-button--small" @click="() => remove(data)">删除</button>
              </p>
            </div>
          </span>
        </el-tree>
      </div>
    </card>
</template>

<script>
import { list,del } from "@/api/system/module-manage";
let id = 1000;
export default {
  name: "SystemModule",
  data() {
    return {
      searchTxt:'',
      treeData: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      list().then(res => {
        if (res.state == 0) {
          this.treeData = $utils.getDeepKey(res,'data.children');
        }
      });
    },
    query() {
      this.$refs.tree1.filter(this.searchTxt);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    add() {
      this.$router.push({ name: "addModule" });
    },
    detail(data) {
      this.$router.push({ name: "moduleDetail", query: { id: data.id } });
    },
    update(data) {
      this.$router.push({ name: "moduleEdit", query: { id: data.id } });
    },
    remove(data) {
      const message = "您确定要删除该模块，该操作不可逆？";
      this.$confirm(message, "提示", {
        type: "warning",
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(() => {
        del(data.id);
        this.$message({
          type: "success",
          message: "删除成功"
        });
        this.getList();
      }).catch(err => {});
    }
  }
};
</script>
<style lang="scss" scoped>
.custom-tree-node,
.table-header {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.table-header {
  width: 32%;
  min-width: 620px;
  height: 32px;
  line-height: 32px;
  font-weight: 600;
}
.btn-wrap {
  width: 220px;
  display: flex;
  justify-content: space-around;
  span {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.action-wrap{
    flex: 1;
    display: flex;
}
</style>
