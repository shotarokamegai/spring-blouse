const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = "development";
require("babel-polyfill");

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  entry: {
    entry: ["./src/index.js"],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, './build/assets/js')
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(glsl|frag|vert)$/,
        use: ['raw-loader']
    },
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: ["@babel/preset-env"]
            }
          },
        ],
        // node_modules は除外する
        exclude: /node_modules/,
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // ローダー名
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  require("autoprefixer")({ grid: true }),
                ],
              }
            },
          },
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
      {
        test: /\.otf$/,
        use: "url-loader?mimetype=application/font-woff",
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100 * 1024, // 100KB以上だったら埋め込まずファイルとして分離する
              name: "./img/[name].[ext]",
            },
          },
        ],
        type: 'javascript/auto'
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./../css/[name].css"
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: path.join(__dirname, './build') }
    })
  ],
};