const msgReducer = (state={text: ['...']}, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE': {
            let newState = {...state, text: state.text.concat(action.payload)}
            return newState
        }
    } 
    return state
} 

module.exports = msgReducer; 