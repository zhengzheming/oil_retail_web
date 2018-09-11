import { fetchModuleTree } from "@/api/system/module-auth";
import Vue from "vue";
function traverseTree(root, leafName, callback) {
  if (!root) return;
  if (Array.isArray(root[leafName])) {
    callback(root);
    const children = root[leafName];
    children.forEach(function(child) {
      traverseTree(child, leafName, callback);
    });
  }
}
function generateTree(curNode, nodeArray, nodeRef = {}) {
  let parent = nodeArray.find(node => curNode.parent_id == node.id);
  if (parent && curNode.id != 0) {
    parent.children = Array.isArray(parent.children)
      ? [...parent.children.filter(node => node.id !== curNode.id), curNode]
      : [curNode];
    nodeRef[curNode.parent_id] = parent;
    generateTree(parent, nodeArray, nodeRef);
  }
  return nodeRef;
}
const moduleAuth = {
  state: {
    checkedKeys: [],
    tree: {},
    flattenTree: [],
    generatedTree: {}
  },
  mutations: {
    GENERATE_TREE: function(state, tree) {
      state.generatedTree = tree[0];
    }
  },
  actions: {
    "module-auth:fetch-tree": function({ state, rootGetters }) {
      fetchModuleTree().then(res => {
        const tree = res.data;
        traverseTree(tree, "children", function(child) {
          // 处理全选等ui状态
          const matchedCode = rootGetters.authCodes.find(
            code => code.id == child.id
          );
          const actionCodes =
            matchedCode && matchedCode.actions
              ? matchedCode.actions.map(action => action.code)
              : [];
          child.checkedActions = child.actions.filter(action =>
            actionCodes.includes(action.code)
          );
          const checkedCount = child.checkedActions;
          Vue.set(
            child,
            "allChecked",
            checkedCount.length === child.actions.length
          );
          Vue.set(
            child,
            "isIndeterminate",
            checkedCount > 0 && checkedCount < child.actions.length
          );
          // 拍平树形
          const childCopy = { ...child };
          delete childCopy.children;
          state.flattenTree.push(childCopy);
        });
        state.checkedKeys = rootGetters.authCodes.map(code => code.id);
        state.tree = tree;
        state.generatedTree = _.cloneDeep(tree);
        setTimeout(function() {
          traverseTree(state.generatedTree, "children", function(child) {
            child.actions = child.checkedActions;
          });
        });
      });
    },
    "module-auth:generate-tree": function({ state, commit }, checkedModules) {
      console.log(checkedModules);
      state.generatedTree = {};
      checkedModules.forEach(function(module) {
        const flattenTree = state.flattenTree;
        commit(
          "GENERATE_TREE",
          generateTree(_.clone(module), _.clone(flattenTree))
        );
      });
    }
  }
};

export default moduleAuth;
