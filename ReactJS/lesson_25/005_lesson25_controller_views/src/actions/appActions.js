import dispatcher from '../dispatcher' 

export function createItem(item) {
    dispatcher.dispatch({
        type: 'CREATE_ITEM', 
        item
    })
}

export function removeItem(id) {
    dispatcher.dispatch({
        type: 'DELETE_ITEM', 
        id
    })
}