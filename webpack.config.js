// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/drop-down.js",
  output: {
    library: {
      type: "module",
    },
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};