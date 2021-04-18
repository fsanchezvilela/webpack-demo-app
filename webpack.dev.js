const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    //cache busting and plugins
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //conflict with port 8080;
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000 // <--- Add this line and choose your own port number
  }
});
