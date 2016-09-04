/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
		
        "001_lesson22_let/build/bundle": "./001_lesson22_let/src/main.js",
        "002_lesson22_const/build/bundle": "./002_lesson22_const/src/main.js",
        "003_lesson22_template_strings/build/bundle": "./003_lesson22_template_strings/src/main.js",
        "004_lesson22_obj_props/build/bundle": "./004_lesson22_obj_props/src/main.js",
        "005_lesson22_arrow_functions/build/bundle": "./005_lesson22_arrow_functions/src/main.js",
        "006_lesson22_classes_basic/build/bundle": "./006_lesson22_classes_basic/src/main.js",
        "007_lesson22_classes_props/build/bundle": "./007_lesson22_classes_props/src/main.js",
        "008_lesson22_classes_inheritance/build/bundle": "./008_lesson22_classes_inheritance/src/main.js",
        "009_lesson22_es6_classes_react/build/bundle": "./009_lesson22_es6_classes_react/src/main.jsx",
        "010_lesson22_object_destructuring/build/bundle": "./010_lesson22_object_destructuring/src/main.js",
        "011_lesson22_modules/build/bundle": "./011_lesson22_modules/src/main.js",
        "012_lesson22_default_params/build/bundle": "./012_lesson22_default_params/src/main.js", 
		"013_lesson22_native_promises/build/bundle": "./013_lesson22_native_promises/src/main.js", 
		"014_lesson22_async_await/build/bundle": ["babel-polyfill", "./014_lesson22_async_await/src/main.js"], 
		"015_lesson22_rest_spread_params/build/bundle": "./015_lesson22_rest_spread_params/src/main.js" 

    },
           
    output: {
        filename: '[name].js'
    }, 
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader", 
				exclude: /node_modules/
            }
        ]
    }
};