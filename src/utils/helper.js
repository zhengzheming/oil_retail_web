export function renameKeys(keysMap, obj) {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      [keysMap[key] || key]: obj[key]
    }),
    {}
  );
}
export function getDeepKey(obj, key) {
  if (!obj) {
    return undefined;
  }
  let result = obj;
  const keys = key.split('.');
  const len = keys.length;
  for (let i = 0; i < len; i++) {
    if (result[keys[i]]) {
      result = result[keys[i]];
    } else {
      result = undefined;
      break;
    }
  }
  return result;
}
