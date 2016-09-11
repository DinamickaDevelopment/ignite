#webpack 

Webpack - система сборки модулей. Webpack позволяет: 

* Создавать и использовать изолированные модули.
* Не думать о порядке загрузки внешних ресурсов(библиотек, скриптов и т.д.).
* Безопасно подключать сторонние решения.
* Использовать разные версии библиотек.
* Собирать из нескольких модулей один JS-файл. 
* Синхронно или асинхронно загружать модули приложения. 

Логика работы Webpack простая, но эффективная
Webpack принимает один или несколько файлов, так называемых entry points, используя пути из конфигурационного файла(или указанные напрямую из консоли), далее загружает его. 
Во время обработки файла, встречая знакомую ему функцию require(), webpack оборачивает содержимое вызываемого файла в функцию, которая возвращает его контекст. 

Есть две стратегии использования webpack:

через консоль (подходит для небольших проектов);
через скрипт в качестве Node.js-модуля(конфигурационный файл webpack.config.js). 

## Установка webpack 

```
$ npm install webpack -g 
``` 
Глобальная установка webpack с помощью npm делает в консоли доступной команду webpack. 

## Работа с webpack из консоли

### Базовый пример работы с webpack из консоли: 

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
webpack src/main.js build/bundle.js
``` 

####src/main.js - входная точка приложения(entry point) 
####build/bundle.js - файл, полученный в результате сборки. 

* Откройте в браузере файл index.html. 


### Конфигурация webpack для работы с ReactJS.  



* Создайте в директории с приложением файл package.json: 

```
$ npm init -y
```

* Установите следующие пакеты в devDependencies: webpack, babel-core, babel-loader, babel-preset-react, babel-preset-es2015, babel-preset-stage-0 
* Установите следующие пакеты в dependencies: react, react-dom 

* После установки пакетов, ваш файл package,json должен выглядеть так: 

```
{
  "version": "1.0.0",
  "name": "app",
  "scripts": {
    "webpack": "webpack -w"
  },
  "dependencies": {
    "react": "15.3.1",
    "react-dom": "15.3.1" 
  },
  "devDependencies": {
    "webpack": "1.13.2",
    "babel-core": "6.14.0",
    "babel-loader": "6.2.5",
    "babel-preset-es2015": "6.14.0",
    "babel-preset-react": "6.11.1",
    "babel-preset-stage-0": "6.5.0"
  }
}

``` 

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

* В директории с приложением создайте файл webpack.config.js 

* Укажите в файле webpack.config.js главный файл вашего приложения(entry point): 

```
module.exports = {
	entry: './src/main.jsx'
}
``` 

* Укажите в файле webpack.config.js имя и путь для файла, создаваемого в результате сборки модулей: 

```
module.exports = {
	entry: './src/main.jsx', 
	output: {
		filename: 'bundle.js', 
		path: './build'
	}
}
``` 

* Настройте загрузчик babel-loader для работы с ReactJS и ES6: 

```
module.exports = {
	entry: './src/main.jsx', 
	output: {
		filename: 'bundle.js', 
		path: './build'
	}, 
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				query:
				{
				    presets: ['es2015', 'react']
			    }
            }
		]
	}
}
``` 

* Откройте командную строку и перейдите в директорию с приложением 
* Выполните следующую команду: 

```
$ webpack
``` 
* Откройте файл index.html в браузере. 


### Автоматическое обновление bundle при изменении исходных файлов приложения: 

* Для того, чтобы webpack отслеживал изменения исходных файлов и автоматически компилировал их, нужно добавить следующую опцию в конфигурационный файл webpack: 

```
watch: true 
```


### Оптимизация 

* Для оптимизации файлов при их обработке webpack нужно установить плагин webpack-uglify-js-plugin: 

```
$ npm install webpack-uglify-js-plugin
``` 

* Загрузка необходимых модулей в файле webpack.config.js: 
```
var webpack = require('webpack'); 
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin'); 
```

* Конфигурация плагина: 

```

module.exports = {
	entry: './src/main.jsx', 
	output: {
		filename: 'bundle.js', 
		path: './build'
	}, 
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				query:
				{
				    presets: ['es2015', 'react']
			    }
            }
		]
	}, 
	plugins: [
		new  webpack.optimize.UglifyJsPlugin({
			  debug: true,
			  minimize: true,
			  sourceMap: true,
			  output: {
				     comments: false
			  }, 
			  compressor: {
				warnings: false
			  }
		})
	]
}
``` 


