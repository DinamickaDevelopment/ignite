/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "001_lesson25_architecture_basic_demo/build/bundle": "./001_lesson25_architecture_basic_demo/src/main.jsx",
        "002_lesson25_architecture_demo/build/bundle": "./002_lesson25_architecture_demo/src/main.jsx",
        "003_lesson25_stores_multiple/build/bundle": "./003_lesson25_stores_multiple/src/main.jsx",
        "004_lesson_25_actions/build/bundle": "./004_lesson_25_actions/src/main.jsx",
        "005_lesson25_async_actions/build/bundle": "./005_lesson25_async_actions/src/main.jsx",
		"006_lesson25_controller_views_1/build/bundle": "./006_lesson25_controller_views_1/src/main.jsx",
        "007_lesson25_controller_views_2/build/bundle": "./007_lesson25_controller_views_2/src/main.jsx",
        "008_lesson25_demo_app_todo_list/build/bundle": "./008_lesson25_demo_app_todo_list/src/main.jsx" 

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