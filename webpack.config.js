const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash:8].js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      scriptLoading: "defer",
    }),
  ],
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    allowedHosts: "all",
    hot: false,
    historyApiFallback: true,
    headers: {
      "Content-Security-Policy":
        "frame-ancestors 'self' https://superconductor.com https://*.superconductor.com https://*.sandbox.superconductor.com",
    },
  },
};
