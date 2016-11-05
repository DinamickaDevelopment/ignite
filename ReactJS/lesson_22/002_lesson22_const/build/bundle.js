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
/*!****************************************!*\
  !*** ./002_lesson22_const/src/main.js ***!
  \****************************************/
/***/ function(module, exports) {

	'use strict';
	
	function constTest() {
	    var x = 1;
	    alert(x);
	
	    //x = 2; ==> ошибка! 
	    //alert(x); 
	}
	constTest();
	
	var testObj = {
	    a: 'Hello',
	    b: 1
	};
	
	// Особенность const при работе с объектами и массивами следующая: 
	// Переопределение свойств объекта / элементов массива разоешается 
	// Непосредственное переопределение константы запрещается 
	
	testObj.a = 'Hi';
	alert(testObj.a); // 'Hi'
	
	// testObj = 'Hi' // => ошибка! попытка переопределения константы 
	
	var testArr = [1, 2, 3, 4, 5];
	
	for (var i = 0; i < testArr.length; i++) {
	    testArr[i] = ++testArr[i];
	}
	
	alert(testArr); // 2, 3, 4, 5, 6 
	
	// testArr = 1 // => ошибка! попытка переопределения константы

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map