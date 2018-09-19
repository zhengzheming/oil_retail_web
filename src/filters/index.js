import numeral from "numeral";
export const toPercent = function(val) {
  return Number(val * 100).toFixed(2) + "%";
};

export const formatPrice = function(value, unit) {
  //  分 转 元
  const num = +value;
  if ($utils.typeIs(num) === "number") {
    return numeral(num / 100).format("0,0.00") + ` ${unit || ""}`;
  }
};
