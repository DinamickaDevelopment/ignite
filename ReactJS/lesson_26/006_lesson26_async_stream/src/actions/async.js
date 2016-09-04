// начало загрузки
export const requestUsers = (state) => {
    return {
        type: 'FETCH_USERS_START',
        payload: 'loading...'
    }
} 

// обработка ошибки при загрузке данных
export const fetchError = (state) => {
    return {
        type: 'FETCH_USERS_ERROR', 
        payload: 'error'
    }
} 

//передача данных при успешной их загрузке 
export const receiveUsers = (users) => {
    return {
        type: 'RECEIVE_USERS', 
        payload: users
    }
}

export function fetchUsers() {
    return function(dispatch) {
        dispatch(requestUsers()) 

        // создание promise 
        return fetch('MOCK_DATA.json')
        .then(response => response.json()) 
        .then(json => 
            dispatch(receiveUsers(json))
       )
    }
}