import { isvalidPhone, isvalidPosInt } from "@/utils/validate";

export function validatePhone(rule, value, callback) {
  if (isvalidPhone(value) || !value) {
    callback();
  } else {
    callback("请输入正确的手机号");
  }
}

export function validatePosInt(rule, value, callback, source, options) {
  if (isvalidPosInt(value) || !value) {
    callback();
  } else {
    callback(options.messages);
  }
}

export function validateRequiredFiles(rule, value, callback, source, options) {
  console.log(value);
  if (Array.isArray(value) && value.length > 0) {
    callback();
  } else {
    callback(options.messages || "须上传文件");
  }
}
