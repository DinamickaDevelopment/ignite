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
/******/ ({

/***/ 0:
/*!******************************************!*\
  !*** ./011_lesson22_modules/src/main.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(/*! ./module */ 279);
	
	(0, _module.printNum)(_module.nums); //Модулем считается файл с кодом.
	//В этом файле ключевым словом export помечаются переменные и функции, которые могут быть использованы снаружи.
	//Другие модули могут подключать их через вызов import.
	
	// импорт значений из модуля module

/***/ },

/***/ 279:
/*!********************************************!*\
  !*** ./011_lesson22_modules/src/module.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function printNum(args) {
	    document.write(args.map(function (arg) {
	        return "" + arg;
	    }));
	}
	
	var args = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	
	exports.printNum = printNum;
	exports.nums = args;

/***/ }

/******/ });
//# sourceMappingURL=bundle.js.map