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
