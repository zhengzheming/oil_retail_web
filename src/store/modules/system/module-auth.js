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
function generateTree(curNode, nodeArray) {
  let root = curNode;
  const children = nodeArray.filter(node => node.parent_id == root.id);
  root.children = children;
  children.forEach(child => {
    generateTree(child, nodeArray);
  });
  return root;
}

function processGeneratedTree(tree) {
  setTimeout(function() {
    traverseTree(tree, "children", function(child) {
      child.actions = child.checkedActions;
    });
  });
}
const moduleAuth = {
  state: {
    checkedKeys: [],
    tree: {},
    flattenTree: [],
    generatedTree: {}
  },
  mutations: {
    GENERATE_TREE: function(state, flattenTree) {
      state.generatedTree = {};
      const tree = generateTree({ id: 0, parent_id: 0 }, flattenTree);
      processGeneratedTree(tree);
      state.generatedTree = tree;
    }
  },
  actions: {
    "module-auth:fetch-tree": function({ state, commit, rootGetters }) {
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
        commit("GENERATE_TREE", _.cloneDeep(rootGetters.authCodes));
      });
    },
    "module-auth:generate-tree": function({ commit }, checkedModules) {
      commit("GENERATE_TREE", _.cloneDeep(checkedModules));
    }
  }
};

export default moduleAuth;
