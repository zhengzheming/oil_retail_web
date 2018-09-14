import errorMessageTemplate from "./errorMessageTemplate";
import { validatePhone, validatePosInt } from "./validators";
const validators = {
  phone: validatePhone,
  posInt: validatePosInt
};

function createMacroMap(macro, value) {
  const obj = {};
  obj[macro] = value;
  return obj;
}

export default {
  macroToValue(msg, macro, value) {
    const reg = new RegExp(`{${macro}}`, "g");
    return msg.replace(reg, value);
  },
  getErrorMessage(name, templateData) {
    let msg = errorMessageTemplate[name];
    if (!msg)
      throw Error(`can't get the value of errorMessageTemplate['${name}']`);
    if (arguments.length === 1) return msg;
    if (typeof templateData !== "object")
      templateData = createMacroMap(name, templateData);
    for (let macro in templateData)
      msg = this.macroToValue(msg, macro, templateData[macro]);
    return msg;
  },
  getValidator(type) {
    return validators[type];
  }
};
