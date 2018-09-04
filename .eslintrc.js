module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  globals: {
    GLOBAL: true,
    process: true,
    require: true,
    _: true,
    $_util: true,
    $: true,
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
