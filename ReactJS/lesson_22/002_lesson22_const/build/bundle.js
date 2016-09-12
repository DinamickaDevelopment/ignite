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

	"use strict";
	
	function constTest() {
	
	    var x = 1;
	    alert(x);
	
	    //x = 2; ==> ошибка! 
	    //alert(x);
	
	    var y = { a: 1, b: 2 };
	    y.a = 3;
	    y.c = 4;
	
	    alert(y.c);
	
	    var z = [1, 2];
	    z[0] = 5;
	
	    alert(z[0]);
	}
	constTest();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map