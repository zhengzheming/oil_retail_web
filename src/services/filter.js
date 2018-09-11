// 先从当前模块搜索， 再从通用模块搜索
export function lookupInDict(route, field, value) {
  if (!field || !value) return;
  const dict = {
    "system-user": {
      status: {
        1: "启用",
        0: "未启用"
      }
    },
    "system-role": {
      status: {
        1: "启用",
        0: "未启用"
      }
    }
  };
  const curMatchedRoute = route.matched.map(route => route.name);
  const matchedModule = Object.keys(dict).find(moduleName => {
    return curMatchedRoute.includes(moduleName);
  });
  if (!matchedModule) throw new Error("当前模块未匹配到相应字典");
  return dict[matchedModule][field][value];
}
