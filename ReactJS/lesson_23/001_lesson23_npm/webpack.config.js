/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: './src/main.jsx',
    output: {
        filename: 'build/bundle.js'
    }, 
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                       presets: ['react']
                }
            }
        ]
    }
};