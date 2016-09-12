const countReducer = (state=0, action) => { 

	// обработка actions 
    switch(action.type) {
        case 'INC': {
   
            return action.payload + 1; 
            break;
        }
        case 'DEC': {
            return action.payload - 1; 
            break; 
        }
        default: {
            return state; 
        }
    } 

} 

module.exports = countReducer; 