const countReducer = (state=0, action) => { 

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

export default countReducer; 