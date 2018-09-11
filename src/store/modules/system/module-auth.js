import { fetchModuleTree } from "@/api/system/module-auth";
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
const moduleAuth = {
  state: {
    tree: []
  },
  actions: {
    "module-auth:fetch-tree": function({ state }) {
      fetchModuleTree().then(res => {
        const tree = res.data;
        traverseTree(tree, "children", function(child) {
          child.checkedActions = [];
        });
        state.tree = tree;
      });
    }
  }
};

export default moduleAuth;
