const webpackMerge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const commonConfig = require('./webpack.config.base.js');

module.exports = function prod() {
  return webpackMerge(commonConfig(false), {
    mode: 'production',
    entry: {
      main: path.resolve(__dirname, './src/index.jsx'),
    },
    output: {
      path: `${__dirname}/dist`,
      filename: '[name]-[hash].js',
      publicPath: '/static/',
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [new TerserPlugin()],
    },
  });
};
