window.onload = function () { 

    var btn = document.getElementById('btn'); 
    var message_input = document.getElementById('inp'); 
    var message_container = document.getElementById('messages'); 

    var socket = io.connect('http://localhost:1337');

    socket.on('chat message', function (message) {
        console.log(message)
        // сгенерировать html разметку сообщения 
        var display_message = `<div class ="panel well">
                                   <h4>Message: </h4>
                                   <h5>${message.text}</h5>
                               </div>` 

        // добавить результат на страницу 
        message_container.innerHTML += display_message;

    })

    btn.onclick = function () {
        // сгенерировать событие отправки сообщения 
        socket.emit('send message', { text: message_input.value }); 

    }
}