export function lookupInDict(moduleName, field, value) {
  if (!moduleName || !field || !value) return console.log("请输入必要参数");
  const dict = {
    "system-user-detail": {
      status: {
        1: "启用",
        0: "未启用"
      }
    }
  };
  return dict[moduleName][field][value];
}
