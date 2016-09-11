#browserify 

Browserify - ������� �������. Browserify ��������� � JavaScript ���� � ������� ������ ������������, ��������� � ��� � ������� require, � ����� �������� �� � �������� ������ � ����� ����. 
����� ������������ Browserify �� ��������� ������ ��� �������� ��������� API Node (��������� Gulp).

## ��������� browserify 

```
$ npm install -g browserify
```

## ������ � broswserify �� ������� 

### ������� ������ ������ � browserify �� �������: 

* �������� ���������� /app
* � ���������� �������� ���� index.html �� ��������� �����: 

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

* � ���������� �������� ����� src
* � ����� src �������� ���� main.js �� ��������� �����: 

```
document.write('welcome to my app');
console.log('app loaded');
```

* �������� ��������� ������ � ��������� � ���������� /app 

```
$ cd ...path/to/app
```

* ��������� ��������� �������: 
```
$ browserify src/main.js -o build/bundle.js 
```

* src/main.js - ������� ����� ���������� (entry point)
* -o build/bundle.js - ���� � ��� �����, ����������� � ���������� ��������� ���������� browserify 

### ���������� npm-������������� browserify ����� package.json 

���������� ���������� npm-������������� browserify ����� package.json �� ������� ������������ browserify ��� ������ � ReactJS: 

* �������� � ���������� � ����������� ���� package.json: 

```
$ npm init -y
```

* ���������� ��������� ������ � devDependencies: browserify, babelify, babel-preset-react, babel-preset-es2015, babel-preset-stage-0 
* ���������� ��������� ������ � dependencies: react, react-dom 

* ����� ��������� �������, ��� ���� package,json ������ ��������� ���: 

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
* �������� � package.json ��������� ������: 

```
  "scripts": {
	"build": "browserify -t [ babelify --presets [ es2015 react ] ] ./src/main.jsx -o build/bundle.js" 
  } 
``` 

* babelify - �����, ����������� browserify ������������ babel ��� ���������� �������. 
* ���� -t (��� -transform) ��������� browserify ���������������� �������� ����� �������� � ��������� ���������. ������ ���� ��������� ����� � ��������������� ������� npm � ����������� browserify: https://github.com/substack/node-browserify/wiki/list-of-transforms 

* � ���������� � ����������� �������� ���� index.html �� ��������� �����: 

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

* � ���������� � ����������� c������� ����� src. 
* � ����� src �������� ������(����) app.jsx � ������������ React ����������� (����������� ��������� ES6). ������������� ��� �� ������. ��������: 

```
import React from 'react' 

export default class App extends React.Component {
	render() {
		return <h1>Hello from React</h1>
	}
}
```

* � ����� src �������� ���� main.jsx, � ������� ������������ ������ app: 
```
import React from 'react'
import ReactDOM from 'react-dom'  
import App from './app.jsx' 

var container = document.getElementById('container'); 

ReactDOM.render(<App />, container); 
```

* �������� �������� � ��������� � ���������� � ����������� 
* ��������� �������: 
```
$ npm run build
``` 

* �������� ���� index.html � ��������. 

### �������������� ���������� bundle ��� ��������� �������� ������ ����������: 

* ��� ��������������� ���������� bundle ��� ��������� �������� ������ ���������� browserify ���������� ����� watchify: 
```
$ npm install --save-dev watchify 
```
* �������� � ���� scripts ����� package.json ��������� ������: 
```
	"watch": "watchify -t [ babelify --presets [ es2015 react ] ] ./src/main.jsx -o build/bundle.js"
```

* �������� �������� � ��������� � ���������� � ����������� 
* ��������� �������: 
```
$ npm run watch 
``` 
* ������ browserify ����� ����������� ��������� ���� �������� ������ ���������� � ������������� ��������� bundle.js 

### ����������� 

* ��������� ������ uglifyify: 
```
$ npm install uglifyify
``` 

* �������� � ���� scripts ����� package.json ��������� ������: 

```
	"uglify": "browserify -t [ uglifyify ] ./build/bundle.js -o build/bundle.min.js"
```

* �������� �������� � ��������� � ���������� � ����������� 
* ��������� �������: 

```
$ npm run uglify
```  

* � ����� build ����� � ������ bundle.js �������� ���������������� ���� bundle.min.js 
