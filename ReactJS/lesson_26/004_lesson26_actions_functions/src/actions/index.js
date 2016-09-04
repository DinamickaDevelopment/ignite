export const increment = (count) => {
    console.log('incremented value'); 
    return {
        type: 'INC', 
        payload: count
    }
} 

export const decrement = (count) => {
    console.log('decremented value');  
    return {
        type: 'DEC', 
        payload: count
    }
}