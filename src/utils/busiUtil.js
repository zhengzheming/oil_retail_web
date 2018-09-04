import Vue from 'vue';

function formatMenu(menu) {
  let type;
  // let icon = /"(.+)"/.test(menu.icon) ? /"(.+)"/.exec(menu.icon)[1] : '';
  let icon = menu.icon;
  let parentUnknownIcon = '';
  let childUnknowIcon = '';
  let children;
  if (menu.children.length) {
    type = 'tree';
    children = menu.children.map(childMenu => formatMenu(childMenu));
  } else {
    type = 'item';
    children = [];
  }
  return {
    type,
    code: menu.code,
    icon: icon || (children.length ? parentUnknownIcon : childUnknowIcon),
    name: menu.name,
    items: children,
    router: children.length
      ? undefined
      : {
          path: menu.page_url
        },
    link: children.length ? undefined : menu.page_url
  };
}

let findMenuNode = (function() {
  let hasTarget = false;
  let result;
  return function innerFunc(menuList, routePath) {
    let nodeList = menuList;
    while (nodeList.length > 0) {
      if (hasTarget) {
        break;
      }
      let node = nodeList.pop();
      node.parentNode = nodeList.parentNode;
      if (node.items.length) {
        node.items.parentNode = node;
        innerFunc(node.items, routePath);
      }
      if (node.link === routePath) {
        hasTarget = true;
        result = node;
        break;
      }
    }
    hasTarget = false;
    return result;
  };
})();

function findPathFromNode(node) {
  if (!node) return;
  if (node.parentNode) {
    return [...findPathFromNode(node.parentNode), node.name];
  } else {
    return [node.name];
  }
}

function getValueFrom(obj, value = 'value', type = 'object') {
  let result;
  if (type === 'object') {
    result = _.isPlainObject(obj) ? obj[value] : '';
  }
  return result;
}

let busEvent = new Vue();

export {
  formatMenu,
  findMenuNode,
  findPathFromNode,
  getValueFrom,
  busEvent
};
