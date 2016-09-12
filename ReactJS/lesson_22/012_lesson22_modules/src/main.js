//Модулем считается файл с кодом.
//В этом файле ключевым словом export помечаются переменные и функции, которые могут быть использованы снаружи.
//Другие модули могут подключать их через вызов import.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// импорт значений из модуля module 

import {printNum, nums} from './module';

printNum(nums); 