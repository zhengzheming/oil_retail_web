import { fetchModuleTree } from "@/api/system/module-auth";
import Vue from "vue";
import { traverseTree } from "@/utils/helper";
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
  traverseTree(tree, "children", function(child) {
    child.actions = child.checkedActions;
  });
}
const moduleAuth = {
  state: {
    checkedKeys: [],
    tree: {},
    flattenTree: [],
    generatedTree: {},
    flattenGeneratedTree: []
  },
  mutations: {
    GENERATE_TREE: function(state, flattenTree) {
      state.generatedTree = {};
      const tree = generateTree({ id: 0, parent_id: 0 }, flattenTree);
      processGeneratedTree(tree);
      state.generatedTree = tree;
    },
    GENERATE_FLATTEN_TREE: function(state, flattenGeneratedTree) {
      state.flattenGeneratedTree = flattenGeneratedTree;
    }
  },
  actions: {
    "modue-auth:read-only": function({ state }, readOnly) {
      traverseTree(state.tree, "children", child => {
        Vue.set(child, "disabled", readOnly);
        if (Array.isArray(child.actions)) {
          child.actions.forEach(action =>
            Vue.set(action, "disabled", readOnly)
          );
        }
      });
    },
    initGeneratedTree({ commit }, authCodes) {
      // let flattenTree = authCodes.map(code =>
      //   $utils.renameKeys({ name: "label", actions: "checkedActions" }, code)
      // );
      // commit("GENERATE_TREE", flattenTree);
      commit("GENERATE_FLATTEN_TREE", authCodes);
    },
    processUIstate({ rootGetters }, child) {
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
    },
    "module-auth:fetch-tree": function({ state, dispatch, rootGetters }) {
      return fetchModuleTree().then(res => {
        const tree = res.data;
        traverseTree(tree, "children", function(child) {
          // 处理全选等ui状态
          dispatch("processUIstate", child);
          // 拍平树形
          const childCopy = { ...child };
          delete childCopy.children;
          state.flattenTree.push(childCopy);
        });
        state.checkedKeys = rootGetters.authCodes.map(code => code.id);
        state.tree = tree;
        dispatch("initGeneratedTree", _.cloneDeep(rootGetters.authCodes));
      });
    },
    "module-auth:generate-tree": function(
      { commit },
      [checkedNodes /* halfCheckedNodes */]
    ) {
      commit("GENERATE_FLATTEN_TREE", checkedNodes);
      // commit("GENERATE_TREE", _.cloneDeep([...checkedNodes, ...halfCheckedNodes]));
    }
  }
};

export default moduleAuth;
