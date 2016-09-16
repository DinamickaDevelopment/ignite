const demoReducer = (state=0, action) => {
    switch( action.type) {
        case 'COUNT': {
            return state + 1;
            break;
        }
        default: {
            return state
        }
    }
}

module.exports = demoReducer