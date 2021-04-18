const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    //cache busting and plugins
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader', // 1. Turns sass into css
        ],
      },
    ],
  },
  //conflict with port 8080;
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000, // <--- Add this line and choose your own port number
  },
});
