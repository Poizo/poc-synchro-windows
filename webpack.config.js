const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.ts"),
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
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
  },
  {
    mode: "production",
    entry: path.resolve(__dirname, "./src/styles.js"),
    module: {
      rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                "postcss-loader",
                "sass-loader",
            ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
        chunkFilename: "styles.css"
      }),
    ],
    output: {
      path: path.resolve(__dirname, "public", "bundle"),
    },
  }
];
