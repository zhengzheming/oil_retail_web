import { fetchModuleTree } from "@/api/system/module-auth";
import Vue from "vue";
import { traverseTree } from "@/utils/helper";
import {
  fetchAuthByRoleId,
  fetchAuthByUserId,
  saveModuleTree
} from "@/api/system/module-auth";
import { Message } from "element-ui";
import router from "@/router";

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
    location: [],
    authCodes: [],
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
      flattenGeneratedTree.forEach(node => {
        if (node.actions) {
          node.actions = node.checkedActions;
        }
      });
      state.flattenGeneratedTree = flattenGeneratedTree;
    }
  },
  actions: {
    "module-auth:fetch-auth": function({ state }, [type, id]) {
      state.location = [type, id];
      const cbs = {
        user: fetchAuthByUserId,
        role: fetchAuthByRoleId
      };
      const cb = cbs[type] || function() {};
      return cb(id).then(res => {
        state.authCodes = res.data[`${type}_right`];
      });
    },
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
    processUIstate({ state }, child) {
      const matchedCode = state.authCodes.find(code => code.id == child.id);
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
    "module-auth:fetch-tree": function({ state, dispatch }) {
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
        state.checkedKeys = state.authCodes.map(code => code.id);
        state.tree = tree;
        dispatch("initGeneratedTree", _.cloneDeep(state.authCodes));
      });
    },
    "module-auth:generate-tree": function(
      { commit },
      [checkedNodes /* halfCheckedNodes */]
    ) {
      commit("GENERATE_FLATTEN_TREE", _.cloneDeep(checkedNodes));
      // commit("GENERATE_TREE", _.cloneDeep([...checkedNodes, ...halfCheckedNodes]));
    },
    "module-auth:save": function({ state }) {
      const [type, id] = state.location;
      return saveModuleTree({
        [`${type}_id`]: id,
        [`${type}_right`]: state.flattenGeneratedTree
      }).then(() => {
        Message.success("保存成功");
        router.push({ name: `system-${type}-list` });
      });
    }
  }
};

export default moduleAuth;
