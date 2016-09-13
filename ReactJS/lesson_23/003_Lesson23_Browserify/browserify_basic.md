# browserify 

Browserify - сборщик модулей. Browserify открывает в JavaScript файл и следует дереву зависимостей, указанных в нем с помощью require, а затем собирает их и исходный скрипт в новый файл. 
Можно использовать Browserify из командной строки или вызывать используя API Node (используя Gulp).

## Установка browserify 

```
$ npm install -g browserify
```

## Работа с broswserify из консоли 

### Базовый пример работы с browserify из консоли: 

* Создайте директорию /app
* В директории создайте файл index.html со следующим кодом: 

```
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>App</title>
</head>
<body>
    <script src="build/bundle.js"></script>
</body>
</html>
```

* В директории создайте папку src
* В папке src создайте файл main.js со следующим кодом: 

```
document.write('welcome to my app');
console.log('app loaded');
```

* Откройте командную строку и перейдите в директорию /app 

```
$ cd ...path/to/app
```

* Выполните следующую команду: 
```
$ browserify src/main.js -o build/bundle.js 
```

* src/main.js - входная точка приложения (entry point)
* -o build/bundle.js - путь и имя файла, полученного в результате обработки приложения browserify 

### Управление npm-зависимостями browserify через package.json 

Рассмотрим управление npm-зависимостями browserify через package.json на примере конфигурации browserify для работы с ReactJS: 

* Создайте в директории с приложением файл package.json: 

```
$ npm init -y
```

* Установите следующие пакеты в devDependencies: browserify, babelify, babel-preset-react, babel-preset-es2015, babel-preset-stage-0 
* Установите следующие пакеты в dependencies: react, react-dom 

* После установки пакетов, ваш файл package,json должен выглядеть так: 

```
{
  "name": "app",
  "version": "1.0.0", 
  "dependencies":{
    "react": "15.3.1",
    "react-dom": "15.3.1" 
  }, 
  "devDependencies": {
    "babelify": "^7.3.0",
    "browserify": "^13.0.1", 
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13", 
    "babel-preset-stage-0": "6.5.0"
  }
}

``` 
* Добавьте в package.json следующие строки: 

```
  "scripts": {
	"build": "browserify -t [ babelify --presets [ es2015 react ] ] ./src/main.jsx -o build/bundle.js" 
  } 
``` 

* babelify - пакет, позволяющий browserify использовать babel для компиляции модулей. 
* флаг -t (или -transform) позволяет browserify трансформировать исходные файлы согласно с указанным вариантов. Список всех доступных опций и соответствующих пакетов npm в репозитории [browserify](https://github.com/substack/node-browserify/wiki/list-of-transforms)  

* В директории с приложением создайте файл index.html со следующим кодом: 

```
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>App</title>
</head>
<body>
	<div id="container"></div>
    <script src="build/bundle.js"></script>
</body>
</html>
``` 

* В директории с приложением cоздайте папку src. 
* В папке src создайте модуль(файл) app.jsx с произвольным React компонентом (используйте синтаксис ES6). Экспортируйте его из модуля. Например: 

```
import React from 'react' 

export default class App extends React.Component {
	render() {
		return <h1>Hello from React</h1>
	}
}
```

* В папке src создайте файл main.jsx, в котором импортируйте модуль app: 
```
import React from 'react'
import ReactDOM from 'react-dom'  
import App from './app.jsx' 

var container = document.getElementById('container'); 

ReactDOM.render(<App />, container); 
```

* Откройте терминал и перейдите в директорию с приложением 
* Выполните команду: 
```
$ npm run build
``` 

* Откройте файл index.html в браузере. 

### Автоматическое обновление bundle при изменении исходных файлов приложения: 

* Для автоматического обновления bundle при изменении исходных файлов приложения browserify использует пакет watchify: 
```
$ npm install --save-dev watchify 
```
* Добавьте в поле scripts файла package.json следующую строку: 
```
"watch": "watchify -t [ babelify --presets [ es2015 react ] ] ./src/main.jsx -o build/bundle.js"
```

* Откройте терминал и перейдите в директорию с приложением 
* Выполните команду: 
```
$ npm run watch 
``` 
* Теперь browserify будет отслеживать изменения кода исходных файлов приложения и автоматически обновлять bundle.js 

### Оптимизация 

* Установка модуля uglifyify: 
```
$ npm install uglifyify
``` 

* Добавьте в поле scripts файла package.json следующую строку: 

```
"uglify": "browserify -t [ uglifyify ] ./build/bundle.js -o build/bundle.min.js"
```

* Откройте терминал и перейдите в директорию с приложением 
* Выполните команду: 

```
$ npm run uglify
```  

* В папке build рядом с файлом bundle.js появится оптимизированный файл bundle.min.js 