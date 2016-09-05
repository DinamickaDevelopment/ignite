/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "001_lesson25_architecture_basic_demo/build/bundle": "./001_lesson25_architecture_basic_demo/src/main.js",
        "002_lesson25_stores_multiple/build/bundle": "./002_lesson25_stores_multiple/src/main.js",
        "003_lesson_25_actions/build/bundle": "./003_lesson_25_actions/src/main.js",
        "004_lesson25_async_actions/build/bundle": "./004_lesson25_async_actions/src/main.js",
        "005_lesson25_controller_views/build/bundle": "./005_lesson25_controller_views/src/main.js",
        "006_lesson25_demo_app_todo_list/build/bundle": "./006_lesson25_demo_app_todo_list/src/main.js" 

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
                       presets: ['es2015', 'react']
                }
            }
        ]
    }
};