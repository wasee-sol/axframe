const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@controller": path.resolve(__dirname, "../src/@controller"),
    "@pages": path.resolve(__dirname, "../src/@pages"),
    "@template": path.resolve(__dirname, "../src/@template"),
    styles: path.resolve(__dirname, "../src/styles"),
    stores: path.resolve(__dirname, "../src/stores"),
    utils: path.resolve(__dirname, "../src/utils"),
  };

  return config;
};
