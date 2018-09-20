import {
  isvalidPhone,
  isvalidPosInt,
  isValidInt,
  isValidDecimalLength
} from "@/utils/validate";

export function validatePhone(rule, value, callback) {
  if (isvalidPhone(value) || !value) {
    callback();
  } else {
    callback("请输入正确的联系方式");
  }
}

export function validatePosInt(rule, value, callback, source, options) {
  if (isvalidPosInt(value) || !value) {
    callback();
  } else {
    callback(options.messages || "必须为正整数");
  }
}

export function validateRequiredFiles(rule, value, callback, source, options) {
  if (Array.isArray(value) && value.length > 0) {
    callback();
  } else {
    callback(options.messages || "须上传文件");
  }
}

export function validateInt(rule, value, callback, source, options) {
  if (isValidInt(value) || !value) {
    callback();
  } else {
    callback(options.messages || "必须为整数");
  }
}

export function validateNum(rule, value, callback, source, options) {
  const num = +value;
  if ($utils.typeIs(num) === "number" || !value) {
    callback();
  } else {
    callback(options.messages || "必须为数字");
  }
}

export function validateMaxDecimalLength(
  rule,
  value,
  callback,
  source,
  options
) {
  const num = +value;
  if (isValidDecimalLength(num, rule.params.max) || !value) {
    callback();
  } else {
    callback(options.messages || `最多保留${rule.params.max}位小数`);
  }
}
