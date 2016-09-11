import dispatcher from '../dispatcher' 

export function count() {
    dispatcher.dispatch({
        type: 'COUNT'
    })
} 

export function changeStyle() {
    dispatcher.dispatch({
        type: 'CHANGE_STYLE'
    })
}