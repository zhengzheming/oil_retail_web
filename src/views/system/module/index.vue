<template>
  <div class="system-user">
    <card>
      <span slot="title">系统模块管理</span>
      <div style="display:flex;width:50%;">
        <el-input 
          type="text" 
          placeholder="输入关键字查询" 
          style="margin-right:10px;"/>
        <el-button 
          type="primary" 
          style="width:65px;"
          @click="query">查询</el-button>
        <el-button 
          style="width:65px;"
          @click="add">添加</el-button>
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
          :data="treeData"
          :expand-on-click-node="false"
          style="width: 32%;min-width: 600px;"
          node-key="id"
          default-expand-all>
          <span 
            slot-scope="{ node, data }" 
            class="custom-tree-node">
            <span style="display:inline-block;width:350px;">{{ node.label }}</span>
            <div class="btn-wrap">
              <span>已启用</span>
              <span class="icon-list">
                <i 
                  class="icon icon-shezhi icon-spec" 
                  @click="() => detail(data)"/>
                <i 
                  class="icon icon-shezhi icon-spec" 
                  @click="() => update(data)"/>
                <i 
                  class="icon icon-shezhi icon-spec" 
                  @click="() => remove(data)"/>
              </span>
            </div>
          </span>
        </el-tree>
      </div>
    </card>
  </div>
</template>

<script>
import { list } from "@/api/system/module-manage";
let id = 1000;
export default {
  name: "SystemModule",
  data() {
    return {
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
    query() {},
    add() {
      this.$router.push({ name: "addModule" });
    },
    detail(data) {
      this.$router.push({ name: "moduleDetail", query: { id: data.id } });
    },
    update(data) {
      this.$router.push({ name: "moduleEdit", query: { id: data.id } });
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
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
  min-width: 600px;
  height: 32px;
  line-height: 32px;
}
.btn-wrap {
  width: 150px;
  display: flex;
  justify-content: space-around;
  span {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
