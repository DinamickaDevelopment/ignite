import dispatcher from '../dispatcher' 

export function loadText() { 
    // событие начала загрузки
    dispatcher.dispatch({
        type: 'LOAD_START'
    }) 

    // асинхронная обработка события 
    let promise = fetch('demo.html')
        .then(function(response) { 
			return response.text(); 
        }).then(function(text){
						
			let data = text
			
            //событие окончания загрузки
            dispatcher.dispatch({
                type: 'LOAD_END', 
                data

            })
		})
    }
