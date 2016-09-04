// reducer не должен возвращать undefined при инициализации, поэтому указаны параметры по умолчанию 
const userReducer = (state={}, action) => { 

    switch(action.type) {
        case 'CHANGE_NAME': {

            state = {...state, name: action.payload}
            break; 
        }
        case 'CHANGE_AGE': {
            state = {...state, age: action.payload}
            break; 
        }
    }
    return state
} 


export default userReducer; 