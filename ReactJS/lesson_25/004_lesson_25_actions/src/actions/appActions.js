import dispatcher from '../dispatcher' 

// Flux Действия различаются по типу — константе, которая посылается вместе с данными действия. 
// В зависимости от типа, Действия могут быть соответствующим образом обработаны в зарегистрированных обработчиках, 
// при этом данные из этих Действий используются как аргументы внутренних методов.

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

// передача параметра от view к action, от action к store  
export function showText(text) {
    dispatcher.dispatch({
        type: 'SHOW_TEXT', 
        text
    })
}