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
/*!*************************************************!*\
  !*** ./012_lesson22_default_params/src/main.js ***!
  \*************************************************/
/***/ function(module, exports) {

	'use strict';
	
	//В ES6/7 можно указывать параметры функции по умолчанию через равенство =. 
	//Параметр по умолчанию используется при отсутствующем аргументе или равном undefined. 
	//При передаче любого значения, кроме undefined, включая пустую строку, ноль или null, 
	//параметр считается переданным, и значение по умолчанию не используется. 
	//Параметры по умолчанию могут быть не только значениями, но и выражениями. 
	
	var num = 5;
	
	function sum() {
	    var a = arguments.length <= 0 || arguments[0] === undefined ? num * 2 : arguments[0];
	    var b = arguments.length <= 1 || arguments[1] === undefined ? 20 : arguments[1];
	
	    alert(a + b);
	}
	
	sum(5); // 25 
	sum(); // 30

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map