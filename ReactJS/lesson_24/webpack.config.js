/// <binding ProjectOpened='Watch - Development' /> 

"use strict"; 

module.exports = {
    entry: {
        "001_lesson24_declarative_routing/build/bundle": "./001_lesson24_declarative_routing/jsx/main.jsx",
        "002_lesson24_route_config_plain/build/bundle": "./002_lesson24_route_config_plain/jsx/main.jsx",
        "003_lesson24_nested_routes/build/bundle": "./003_lesson24_nested_routes/jsx/main.jsx",
        "004_lesson24_redirect/build/bundle": "./004_lesson24_redirect/jsx/main.jsx",
        "005_lesson24_enter_leave_hooks/build/bundle": "./005_lesson24_enter_leave_hooks/jsx/main.jsx",
        "006_lesson24_route_matching/build/bundle": "./006_lesson24_route_matching/jsx/main.jsx",
        "007_lesson24_animating_route_transitions/build/bundle": "./007_lesson24_animating_route_transitions/jsx/main.jsx",
        "008_lesson24_query_parameters/build/bundle": "./008_lesson24_query_parameters/jsx/main.jsx"

    } ,
           
    output: {
        filename: '[name].js'
    }, 

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader" 
            }
        ]
    }
};