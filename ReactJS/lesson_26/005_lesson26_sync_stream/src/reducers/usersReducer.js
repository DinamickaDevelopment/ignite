// пользователи 
let data = ['{"id":1,"name":"Betty Knight","gender":"Female"}',
        '{"id":2,"name":"Laura Cook","gender":"Female"}',
       '{"id":3,"name":"Donald Martinez","gender":"Male"}',
        '{"id":4,"name":"Joseph Flores","gender":"Male"}',
        '{"id":5,"name":"Adam Gonzales","gender":"Male"}',
        '{"id":6,"name":"Stephen Arnold","gender":"Male"}',
        '{"id":7,"name":"George Thomas","gender":"Male"}',
        '{"id":8,"name":"Emily Garza","gender":"Female"}',
        '{"id":9,"name":"Roy Cox","gender":"Male"}',
        '{"id":10,"name":"Timothy Hill","gender":"Male"}']; 

let users = []; 
for( let i = 0; i < data.length; i++) {
    users[i] = JSON.parse(data[i]) 
}; 

const usersReducer = (state=users, action) => { 
    // обработка событий 
    switch (action.type) { 
        // создание пользователя
        case 'CREATE_USER': { 

            var newUser = action.payload; 
            var newState = state.concat(action.payload) 

            return newState; 
            break; 
        } 
        // удаление пользователя 
        case 'DELETE_USER': {
            var id = action.payload 

            function matchesId(val) {
                if (val.id != id) {
                    return val
                }
            }
            var newData = state.filter(matchesId);
            console.log(newData);

            return newData; 
            break;
        }
        default: {
            return state;
        }
    }
 
} 

module.exports = usersReducer; 