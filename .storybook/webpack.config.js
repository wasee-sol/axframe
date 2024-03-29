const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@core": path.resolve(__dirname, "../src/@core"),
    "@types": path.resolve(__dirname, "../src/@types"),
    components: path.resolve(__dirname, "../src/components"),
    hooks: path.resolve(__dirname, "../src/hooks"),
    i18n: path.resolve(__dirname, "../src/i18n"),
    pages: path.resolve(__dirname, "../src/pages"),
    router: path.resolve(__dirname, "../src/router"),
    services: path.resolve(__dirname, "../src/services"),
    stores: path.resolve(__dirname, "../src/stores"),
    stories: path.resolve(__dirname, "../src/stories"),
    styles: path.resolve(__dirname, "../src/styles"),
  };

  return config;
};
