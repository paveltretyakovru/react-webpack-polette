const path = require('path');
const webpack = require('./node_modules/webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const JasmineWebpackPlugin = require('jasmine-webpack-plugin');
const HtmlWebpackInlineSourcePlugin =  require('html-webpack-inline-source-plugin');

const ROOT_DIR = path.join(__dirname);
const PUBLIC_DIR = path.join(__dirname,'./public');

module.exports = {
  devtool: 'inline-source-map',
  
  entry: './src/specRoot.js',
  
  output: {path: PUBLIC_DIR, filename:'[name].bundle.js'},
  
  resolve: {extensions: ['.js', '.jsx', '.json']},

  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },

  plugins: [
    new JasmineWebpackPlugin({filename: 'index.html'}),
    new WebpackNotifierPlugin({title: 'Jasmine', alwaysNotify: true}),
    new webpack.SourceMapDevToolPlugin({filename: '[name].bundle.js.map'}),
    new HtmlWebpackInlineSourcePlugin(),
  ],

  devServer: {
    // hot: true,
    port: 8080,
    host: 'localhost',
    contentBase: [PUBLIC_DIR, ROOT_DIR],
  },
}

// new webpack.ProvidePlugin({fs: 'fs'}),
// new webpack.HotModuleReplacementPlugin(),