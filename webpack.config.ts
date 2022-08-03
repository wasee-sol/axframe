import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const isDev: boolean = process.env.NODE_ENV === "development";

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV as "development" | "production",
  watch: isDev,
  entry: ["/src/index.tsx"],
  output: {
    filename: "output.bundle.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
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
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    fallback: { buffer: false },
  },
  node: {
    __dirname: false, // Use Node __dirname
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
      devServer: isDev,
    }),
    new HtmlWebpackPlugin({ template: path.join(__dirname, "public", "index.html") }),
  ],
};

export default config;
