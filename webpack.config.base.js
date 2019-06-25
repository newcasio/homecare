const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = function base(isDebug) {
  return {
    context: path.resolve(__dirname, './src'),
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        // NOTE: if you add a new alias be sure to also update .babelrc
        src: path.resolve('./src'),
      },
      modules: [
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, 'src'),
      ],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [path.join(__dirname, 'node_modules')],
          loader: 'babel-loader',
          include: [path.join(__dirname, 'src')],
          options: {
            cacheDirectory: isDebug,
            babelrc: true,
          },
        },
        {
          test: /\.s?[ac]ss$/,
          exclude: [path.join(__dirname, 'node_modules')],
          use: [
            isDebug ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.s?[ac]ss$/,
          include: [path.join(__dirname, 'node_modules')],
          use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name() {
              if (process.env.NODE_ENV === 'development') {
                return '[path][name].[ext]';
              }

              return '[hash].[ext]';
            },
            outputPath: 'images/',
          },
        },
        // Font Definitions
        {
          test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new HtmlWebpackPlugin({
        template: './public/index.ejs',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
        inject: true,
        alwaysWriteToDisk: true,
      }),
      new PreloadWebpackPlugin(),
      new HtmlWebpackHarddiskPlugin({
        outputPath: path.resolve(__dirname, 'dist'),
      }),
      new ResourceHintWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: isDebug ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDebug ? '[id].css' : '[id].[hash].css',
      }),
    ],
  };
};
