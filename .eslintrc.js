module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },

  globals: {
    GLOBAL: true,
    process: true,
    require: true,
    _: true,
    $utils: true,
    $: true,
    $verify: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier'
  ]
};
