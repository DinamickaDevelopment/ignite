/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************!*\
  !*** ./005_lesson22_arrow_functions/src/main.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	// В ES6 появился новый синтаксис для задания функций через «стрелку» =>. 
	// Слева от => находится аргумент, а справа – выражение, которое нужно вернуть. 
	// Внутри функций-стрелок – тот же this, что и снаружи. 
	// В качестве arguments используются аргументы внешней «обычной» функции.
	
	//функция-стрелка
	var a = 1,
	    b = 2;
	var count = function count(_count) {
	    return alert(a + b);
	};
	count(); // 3 
	
	//Слева от => находится аргумент, а справа – выражение, которое нужно вернуть. 
	var arr = [1, 2, 3, 4, 5];
	var printNum = arr.forEach(function (num) {
	    return console.log(num);
	});
	
	// Внутри функций-стрелок – тот же this, что и снаружи. 
	var bob = {
	    name: "Bob",
	    friends: ['John', 'Vasya'],
	    printFriends: function printFriends() {
	        var _this = this;
	
	        this.friends.forEach(function (f) {
	            return (
	                // this внутри функции f относится к объекту bob
	                console.log(_this.name + " knows " + f)
	            );
	        });
	    }
	};
	bob.printFriends();
	
	// Когда тело функции достаточно большое, то можно его обернуть в фигурные скобки {…}.  
	// Как только тело функции оборачивается в {…}, то её результат уже не возвращается автоматически. 
	
	var getTime = function getTime() {
	    var date = new Date();
	    var hours = date.getHours();
	    var minutes = date.getMinutes();
	    return hours + ':' + minutes;
	};
	alert(getTime()); // текущее время

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map