module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    const cssModel = config.module.rules.find((i) => i.test.toString() === "/\\.css$/");
    config.module.rules.push(
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          ...cssModel.use,
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff2|eot|woff|ttf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset",
      },
      {
        test: /\.txt$/i,
        type: "asset/source",
      }
    );

    return config;
  },
};
