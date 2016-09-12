/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "001_lesson26_redux_basic_1/build/bundle": "./001_lesson26_redux_basic_1/src/main.js",
        "002_lesson26_redux_basic_2/build/bundle": "./002_lesson26_redux_basic_2/src/main.js",
        "003_lesson26_redux_react_basic/build/bundle": "./003_lesson26_redux_react_basic/src/main.jsx",
        "004_lesson26_actions_functions/build/bundle": "./004_lesson26_actions_functions/src/main.jsx",
        "005_lesson26_sync_stream/build/bundle": "./005_lesson26_sync_stream/src/main.jsx",
        "006_lesson26_async_stream/build/bundle": "./006_lesson26_async_stream/src/main.jsx",
        "007_lesson26_redux_routing/build/bundle": "./007_lesson26_redux_routing/src/main.jsx"

    } ,
           
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                       presets: ['es2015', 'react'], 
					   plugins: ['transform-object-rest-spread']
                }
            }
        ]
    }
};