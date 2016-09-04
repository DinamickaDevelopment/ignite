const userLoadReducer = (state=[], action) => {
    switch(action.type) {
        case 'FETCH_USERS_START': {
            return {...state, fetching: true}
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads}
            break;
        }
        case 'RECEIVE_USERS': {
            console.log(action.payload)
            return {
                ...state, 
                fetching: false, 
                fetched: true, 
                users: action.payload
            }
            break;
        }
        default: {
            return state; 
        }
    }
} 

export default userLoadReducer