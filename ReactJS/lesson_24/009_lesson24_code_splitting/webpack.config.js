/// <binding ProjectOpened='Watch - Development' /> 
"use strict"; 

var path = require('path'); 

module.exports = {
    entry: {
        "build/bundle": "./jsx/main.jsx"

    } ,
           
    output: {
		path: path.join(__dirname, 'build'), 
		publicPath: '/build/', 
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                       presets: ['es2015', 'react']
                }
            }
        ]
    }
};