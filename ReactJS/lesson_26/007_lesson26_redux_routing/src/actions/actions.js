export const createUser = (user) => {
    return {
        type: 'CREATE_USER', 
        payload: user
    }
} 

export const deleteUser = (id) => {
    return {
        type: 'DELETE_USER', 
        payload: id
    }
}  

export const sendMsg = (text) => {
    return {
        type: 'SEND_MESSAGE', 
        payload: text
    }
}
