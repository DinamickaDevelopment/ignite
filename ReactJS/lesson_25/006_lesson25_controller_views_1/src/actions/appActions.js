import dispatcher from '../dispatcher' 

export function makeItems(num) {
    dispatcher.dispatch({
        type: 'MAKE_ITEMS', 
        num
    })
}