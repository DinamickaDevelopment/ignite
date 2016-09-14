import dispatcher from '../dispatcher' 

// flux Actions / Действия — хелперы, упрощающие передачу данных Диспетчеру 

export function count() {
    dispatcher.dispatch({ type: 'COUNT'})
}