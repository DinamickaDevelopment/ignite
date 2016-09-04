const usersReducer = (state=[], action) => {
    switch (action.type) {
        case 'CREATE_USER': { 

            var newUser = action.payload; 
            var newState = {...state, users: state.users.concat(action.payload) }

            return newState; 
            break; 
        }
        case 'DELETE_USER': {
            var id = action.payload 

            function matchesId(val) {
                if (val.id != id) {
                    return val
                }
            }
            var newData = {...state, users: state.users.filter(matchesId)};
            console.log(newData);

            return newData; 
            break;
        }


            // обработчики асинхронной загрузки данных
        case 'FETCH_USERS_START': {
            return {...state, fetching: true, users: []}
            break;
    }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, users: []}
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

export default usersReducer; 