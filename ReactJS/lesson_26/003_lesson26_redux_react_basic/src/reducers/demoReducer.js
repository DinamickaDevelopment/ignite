const demoReducer = (state='', action) => {
    switch( action.type) {
        case 'GREET': {
            return action.payload
            break;
        }
        default: {
            return state
        }
    }
}

export default demoReducer