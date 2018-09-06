const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "element-ui": path.resolve(__dirname, "node_modules", "bui-element")
      }
    }
  },

  devServer: {
    public: "local.oil.retail.com"
  },

  lintOnSave: undefined
};
