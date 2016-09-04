import dispatcher from '../dispatcher' 

export function count() {
    dispatcher.dispatch({
        type: 'COUNT'
    })
}