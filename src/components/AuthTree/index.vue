<template>
  <div class="custom-tree-container">
    <div 
      class="block" 
      style="margin-top: 15px;">
      <el-tree
        ref="nodeTree"
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
              :disabled="readOnly"
              @change="selectAll(data, $event)">
              全选
            </el-checkbox>
            <el-checkbox-group
              v-model="data.checkedActions"
              @change="handleItemCheckedChange(data, $event)">
              <el-checkbox
                v-for="action in data.actions"
                :label="action"
                :disabled="action.disabled"
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
  props: {
    readOnly: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "user"
    }
  },
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
  async created() {
    const query = this.$route.query;
    const params = {
      user: query.userId,
      role: query.roleId
    };
    await this.$store.dispatch("module-auth:fetch-auth", [
      this.type,
      params[this.type]
    ]);
    this.$store.dispatch("module-auth:fetch-tree").then(() => {
      this.$nextTick(function() {
        this.$store.dispatch("modue-auth:read-only", this.readOnly);
      });
    });
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
