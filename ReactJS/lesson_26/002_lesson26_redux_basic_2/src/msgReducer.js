// reducer не должен возвращать undefined при инициализации, поэтому указаны параметры по умолчанию 
const msgReducer = (state=['Hello world'], action) => {
    switch(action.type) {
        case 'NEW_MSG': {
            state = [...state, action.payload]
            break; 
        }
    }
    return state
} 

export default msgReducer; 