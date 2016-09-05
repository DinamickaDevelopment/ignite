/// <binding ProjectOpened='Watch - Development' /> 
"use strict" 

module.exports = {
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
      }
    ]
  }
};