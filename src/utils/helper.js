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
  const keys = key.split(".");
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

export function traverseTree(root, leafName, callback) {
  if (!root) return;
  if (Array.isArray(root[leafName])) {
    callback(root);
    const children = root[leafName];
    children.forEach(function(child) {
      traverseTree(child, leafName, callback);
    });
    return root;
  }
}

export function typeIs(arg) {
  const type = Object.prototype.toString.call(arg);
  if (typeof arg === "number" && isNaN(arg)) return "NaN";
  return type.slice(8, -1).toLowerCase();
}

export function getStringFromDeep(target) {
  if ($utils.typeIs(target) === "object") {
    let arr = [];

    Object.keys(target).forEach(key => {
      const value = target[key];
      const result = getStringFromDeep(value);
      if ($utils.typeIs(result) === "string") {
        arr.push(result);
      } else {
        arr = [...arr, ...result];
      }
    });
    return arr;
  }
  if ($utils.typeIs(target) === "array") {
    let arr = [];
    target.forEach(value => {
      if ($utils.typeIs(value) === "string") {
        arr.push(value);
      } else if ($utils.typeIs(value) === "object") {
        arr = [...arr, ...getStringFromDeep(value)];
      }
    });
    return arr;
  }
  return target;
}
