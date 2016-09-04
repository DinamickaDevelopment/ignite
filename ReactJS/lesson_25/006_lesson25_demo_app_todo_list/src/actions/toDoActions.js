import dispatcher from '../dispatcher'; 

// создать элемент 
export function createItem(item) {
    dispatcher.dispatch({
        type: 'CREATE_ITEM', 
        item
    })
}

// удалить элемент
export function removeItem(id) {
    dispatcher.dispatch({
        type: 'REMOVE_ITEM', 
        id
    })
} 

// переключить режим отображения данных (таблица или список)
export function changeMode() {
    dispatcher.dispatch({
        type: 'CHANGE_MODE'
    })
}  

// редактировать элемент 
export function editStart(id) {
    dispatcher.dispatch({
        type: 'EDIT_START', 
        id
    })
} 

export function editEnd(item) {
    dispatcher.dispatch({
        type: 'EDIT_END', 
        item
      })
}
