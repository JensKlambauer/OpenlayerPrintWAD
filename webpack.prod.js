const webpack = require('webpack');
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// const devMode = process.env.NODE_ENV !== 'production'

const root = path.resolve(__dirname);
const dist = path.join(root, "dist");

module.exports = {
  node: { fs: 'empty' },
  entry: {
   'babel-polyfill': ['babel-polyfill'],
    app: path.join(root, "src", "main.js")
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: ['file-loader?name=img/[name].[ext]']
      }
    ]
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebPackPlugin({
      favicon: 'assets/images/favicon.ico',
      template: path.join(root, "src", "index.html"),
      filename: path.join(dist, "index.html")
    }),
    new ExtractCssChunks(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      }
    ),    
    // new CopyWebpackPlugin([
    //   { from: "assets/images/animatedCircle.gif", to: dist }
    // ]),
    new Dotenv()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        // sourceMap: true // set to true if you want JS source maps
      })
    ],
    // splitChunks: {chunks: 'all'}
  }
};