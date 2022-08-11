const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@controller": path.resolve(__dirname, "../src/@controller"),
    "@template": path.resolve(__dirname, "../src/@template"),
    hooks: path.resolve(__dirname, "../src/hooks"),
    i18n: path.resolve(__dirname, "../src/i18n"),
    router: path.resolve(__dirname, "../src/router"),
    stores: path.resolve(__dirname, "../src/stores"),
    styles: path.resolve(__dirname, "../src/styles"),
    utils: path.resolve(__dirname, "../src/utils"),
  };

  return config;
};
