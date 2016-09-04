/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "001_lesson20_multiple_components_composition/build/bundle": "./001_lesson20_multiple_components_composition/jsx/main.jsx",
        "002_lesson20_multiple_components_children/build/bundle": "./002_lesson20_multiple_components_children/jsx/main.jsx",
        "003_lesson20_state_1/build/bundle": "./003_lesson20_state_1/jsx/main.jsx",
        "004_lesson20_state_2/build/bundle": "./004_lesson20_state_2/jsx/main.jsx",
        "005_lesson20_stateful_children/build/bundle": "./005_lesson20_stateful_children/jsx/main.jsx",
        "006_lesson20_dynamic_children/build/bundle": "./006_lesson20_dynamic_children/jsx/main.jsx",
        "007_lesson20_prop_validation/build/bundle": "./007_lesson20_prop_validation/jsx/main.jsx",
        "008_lesson20_default_props/build/bundle": "./008_lesson20_default_props/jsx/main.jsx",
        "009_lesson20_transferring_props_1/build/bundle": "./009_lesson20_transferring_props_1/jsx/main.jsx",
        "010_lesson20_transferring_props_2/build/bundle": "./010_lesson20_transferring_props_2/jsx/main.jsx",
        "011_lesson20_transferring_props_3/build/bundle": "./011_lesson20_transferring_props_3/jsx/main.jsx",
        "012_lesson20_interactive_props/build/bundle": "./012_lesson20_interactive_props/jsx/main.jsx", 
		"013_lesson20_uncontrolled_components/build/bundle": "./013_lesson20_uncontrolled_components/jsx/main.jsx", 
		"014_lesson20_lifecycle_of_react_components/build/bundle": "./014_lesson20_lifecycle_of_react_components/jsx/main.jsx", 
		"015_lesson20_mixins/build/bundle": "./015_lesson20_mixins/jsx/main.jsx"

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