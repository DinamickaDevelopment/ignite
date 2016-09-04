var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 
 
module.exports = {
  context: __dirname, 
  resolveLoader: {
      extensions: ['', '.js', '.jsx', '.css'],
      modulesDirectories: [
        './node_modules'
      ]        
  },
  entry: {"build/bundle": "./src/main.js"},
  output: {
	 filename: '[name].js' 
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  plugins: [
     new ExtractTextPlugin('build/bundle.css')]
};