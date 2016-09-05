/// <binding ProjectOpened='Watch - Development' /> 
"use strict" 

var path = require('path'); 

module.exports = {

  entry: './src/main.js',
  output: { path: path.join(__dirname, 'build'), filename: 'bundle.js' }, 
  devtool: 'source-map', 
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};