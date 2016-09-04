export const showText = () => {
    alert('action!')
    return {
        type: 'GREET', 
        payload: 'Hello World'
    }
}
