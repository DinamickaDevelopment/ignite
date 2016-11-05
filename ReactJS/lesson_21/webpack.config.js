/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "001_lesson21_synthetic_event/build/bundle": "./001_lesson21_synthetic_event/jsx/main.jsx",
        "002_lesson21_event_pooling_1/build/bundle": "./002_lesson21_event_pooling_1/jsx/main.jsx",
        "003_lesson21_event_pooling_2/build/bundle": "./003_lesson21_event_pooling_2/jsx/main.jsx",
        "004_lesson21_supported_events/build/bundle": "./004_lesson21_supported_events/jsx/main.jsx",
        "005_lesson21_keyboard_events/build/bundle": "./005_lesson21_keyboard_events/jsx/main.jsx",
        "006_lesson21_focus_events/build/bundle": "./006_lesson21_focus_events/jsx/main.jsx",
        "007_lesson21_form_events/build/bundle": "./007_lesson21_form_events/jsx/main.jsx",
        "008_lesson21_mouse_events/build/bundle": "./008_lesson21_mouse_events/jsx/main.jsx",
        "009_lesson21_mouse_events_drag'n'drop/build/bundle": "./009_lesson21_mouse_events_drag'n'drop/jsx/main.jsx",
        "010_lesson21_select_events/build/bundle": "./010_lesson21_select_events/jsx/main.jsx",
        "011_lesson21_ui_events/build/bundle": "./011_lesson21_ui_events/jsx/main.jsx",
        "012_lesson21_event_delegation/build/bundle": "./012_lesson21_event_delegation/jsx/main.jsx"

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
                    presets: ['react', 'es2015'],
                    plugins: ["transform-object-rest-spread", "transform-es2015-destructuring"]
                }
            }
        ]
    }
};