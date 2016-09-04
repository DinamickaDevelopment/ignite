//При добавлении ключевого словоа async к функции или стрелочной функции, она автоматически будет возвращать промис.
//Ключевое слово await используется, чтобы ход выполнения дождался завершения async-выражения (к примеру, вызова async-функции) и получил значение из промиса.

window.onload = function() {
    function getText() {
            
			return new Promise(function(resolve, reject) {
					
				var xhr = new XMLHttpRequest(); 
				
				xhr.open('GET','hello.html'); 
				setTimeout(function() {
					xhr.send(); 
				}, 1000); 
						
					
				xhr.onload = function() {
					if (this.status == 200) {
						console.log('text loaded'); 
						resolve(this.responseText); 
					} 
					else {
						reject(new Error("Network Error"));
					}
				} 

				xhr.onerror = function() {
					reject(new Error("Network Error"));
				};
			
       }); 
	}
 
    async function main() {
        var greeting = await getText();

        document.write(greeting);
            
    }
 
    main();

}