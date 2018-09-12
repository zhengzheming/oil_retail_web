<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 scoped slot</p>
      <el-tree
        :data="tree"
        :expand-on-click-node="false"
        :default-checked-keys="checkedKeys"
        show-checkbox
        node-key="id"
        default-expand-all
        @check="changeTree">
        <span
          slot-scope="{ node, data }"
          class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span
            class="custom-tree__actions"
            @change="changeTree(null, curNodes)">
            <el-checkbox
              v-if="!data.children || data.children.length === 0"
              :indeterminate="data.isIndeterminate"
              v-model="data.allChecked"
              @change="selectAll(data, $event)">
              全选
            </el-checkbox>
            <el-checkbox-group
              v-model="data.checkedActions"
              @change="handleItemCheckedChange(data, $event)">
              <el-checkbox
                v-for="action in data.actions"
                :label="action"
                :key="action.code">
                {{ action.name }}
              </el-checkbox>
            </el-checkbox-group>
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthTree",
  data() {
    return {
      curNodes: []
    };
  },
  computed: {
    checkedKeys() {
      return this.$store.state.system.moduleAuth.checkedKeys;
    },
    tree() {
      return this.$store.getters.moduleTree.children;
    }
  },
  created() {
    this.$store.dispatch("module-auth:fetch-tree");
  },
  methods: {
    handleItemCheckedChange(data, value) {
      let checkedCount = value.length;
      this.$set(data, "allChecked", checkedCount === data.actions.length);
      this.$set(
        data,
        "isIndeterminate",
        checkedCount > 0 && checkedCount < data.actions.length
      );
    },
    selectAll(data, val) {
      this.$set(data, "checkedActions", val ? data.actions : []);
      this.$set(data, "isIndeterminate", false);
    },
    changeTree(curNodeData, nodes) {
      this.curNodes = nodes;
      this.$store.dispatch("module-auth:generate-tree", [
        nodes.checkedNodes,
        nodes.halfCheckedNodes
      ]);
    }
  }
};
</script>

<style lang="scss">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-right: 8px;
}
.custom-tree__actions {
  margin-left: 15px;
  display: flex;
  & > .el-checkbox:first-child {
    margin-right: 30px;
  }
}
</style>
