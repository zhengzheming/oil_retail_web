import { isvalidPhone } from "@/utils/validate";

export function validatePhone(rule, value, callback) {
  if (isvalidPhone(value) || !value) {
    callback();
  } else {
    callback("请输入正确的手机号");
  }
}
