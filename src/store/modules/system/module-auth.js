import { fetchModuleTree } from "@/api/system/module-auth";
import Vue from "vue";
import { traverseTree } from "@/utils/helper";
import {
  fetchAuthByRoleId,
  fetchAuthByUserId,
  saveModuleTreeByUserId,
  saveModuleTreeByRoleId
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

function initState() {
  return {
    location: [],
    authCodes: [],
    checkedKeys: [],
    tree: {},
    flattenTree: [],
    generatedTree: {},
    flattenGeneratedTree: []
  };
}
const moduleAuth = {
  state: initState(),
  mutations: {
    GENERATE_TREE: function(state, flattenTree) {
      state.generatedTree = {};
      const tree = generateTree({ id: 0, parent_id: 0 }, flattenTree);
      processGeneratedTree(tree);
      state.generatedTree = tree;
    },
    GENERATE_FLATTEN_TREE: function(state, flattenGeneratedTree) {
      flattenGeneratedTree.forEach(node => {
        node.actions = node.checkedActions;
      });
      state.flattenGeneratedTree = flattenGeneratedTree;
    },
    REST_AUTH_STATE: function(state) {
      Object.assign(state, initState());
    }
  },
  actions: {
    "module-auth:reset": function({ commit }) {
      commit("REST_AUTH_STATE");
    },
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
      let flattenTree = authCodes.map(code =>
        $utils.renameKeys({ name: "label", actions: "checkedActions" }, code)
      );
      // commit("GENERATE_TREE", flattenTree);
      commit("GENERATE_FLATTEN_TREE", flattenTree);
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
      const checkedCount = child.checkedActions.length;
      Vue.set(
        child,
        "allChecked",
        child.actions.length > 0 ? checkedCount === child.actions.length : false
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
          // 处理checked中间状态
          const authChild = state.authCodes.find(code => code.id == child.id);
          if (
            authChild &&
            Array.isArray(child.children) &&
            child.children.length > 0
          ) {
            authChild.isMiddleNode = true;
          }
        });
        state.checkedKeys = state.authCodes
          .filter(code => !code.isMiddleNode)
          .map(code => code.id);
        state.tree = tree;
        dispatch("initGeneratedTree", _.cloneDeep(state.authCodes));
      });
    },
    "module-auth:generate-tree": function(
      { commit },
      [checkedNodes, halfCheckedNodes]
    ) {
      commit(
        "GENERATE_FLATTEN_TREE",
        _.cloneDeep([...checkedNodes, ...halfCheckedNodes])
      );
      // commit("GENERATE_TREE", _.cloneDeep([...checkedNodes, ...halfCheckedNodes]));
    },
    "module-auth:save": function({ state, dispatch }) {
      const [type, id] = state.location;
      const fnMap = {
        user: saveModuleTreeByUserId,
        role: saveModuleTreeByRoleId
      };
      const saveFn = fnMap[type] || function() {};
      return saveFn({
        [`${type}_id`]: id,
        [`${type}_right`]: state.flattenGeneratedTree
      }).then(() => {
        Message.success("保存成功");
        dispatch("updateSidebarItems");
        router.push({ name: `system-${type}-list` });
      });
    }
  }
};

export default moduleAuth;
