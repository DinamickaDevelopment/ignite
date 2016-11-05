/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "001_lessons19_webpack/build/bundle": "./001_lessons19_webpack/jsx/main.jsx",
        "002_lesson19_JSX_syntax_basic/build/bundle": "./002_lesson19_JSX_syntax_basic/jsx/main.jsx",
        "003_lesson19_react_basic_jsx/build/bundle": "./003_lesson19_react_basic_jsx/jsx/main.jsx",
        "004_lesson19_component_props_1/build/bundle": "./004_lesson19_component_props_1/jsx/main.jsx",
        "005_lesson19_component_props_2/build/bundle": "./005_lesson19_component_props_2/jsx/main.jsx",
        "006_lesson19_JSX_transform/build/bundle": "./006_lesson19_JSX_transform/jsx/main.jsx",
        "007_lesson19_JSX_transform_child/build/bundle": "./007_lesson19_JSX_transform_child/jsx/main.jsx",
        "008_lesson19_namespaced_components/build/bundle": "./008_lesson19_namespaced_components/jsx/main.jsx",
        "009_lesson19_JS_expressions/build/bundle": "./009_lesson19_JS_expressions/jsx/main.jsx",
        "010_lesson19_JSX_spread_attributes/build/bundle": "./010_lesson19_JSX_spread_attributes/jsx/main.jsx",
        "011_lesson19_custom_HTML_attributes/build/bundle": "./011_lesson19_custom_HTML_attributes/jsx/main.jsx" 

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
                       presets: ['react']
                }
            }
        ]
    }
};