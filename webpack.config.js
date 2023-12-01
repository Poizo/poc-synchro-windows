const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    },
    {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
            "style-loader",
            'css-loader',
            "postcss-loader",
            "sass-loader",
        ],
    },
    ],
  },
  resolve: {
    extensions: [ ".ts", ".js"],
  },
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "public", "bundle"),
  },
};