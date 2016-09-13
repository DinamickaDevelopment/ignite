# Интеграция webpack в WebStorm

## Установка пакетов

1) Установите NodeJs [node.js](https://nodejs.org/en/)  
2) Нажмите комбинацию клавиш CTRL+ATL+S. В новом окне перейдите на вкладку Languages&Frameworks -> Node.js & NPM
3) Нажмите кнопку Enable в блоке Coding Assistance
4) Нажмите на символ "+" с права, как показано на рисунке для добавления пакетов.
![](images/settings.jpg) 
5) Установите пакеты:
```
babel babel-core babel-loader babel-preset-react babel-preset-es2015 babel-plugin-transform-react-jsx webpack
react react-dom
```
или воспользуйтесь консолью:

```
npm install --save-dev babel-preset-es2015 babel babel-core babel-loader babel-preset-react babel-plugin-transform-react-jsx webpack
npm install --save react react-dom

```  

## Конфигурация webpack 

* Конфигурационный файл webpack.config.js следует разместить в директории с приложением. 
```
module.exports = {
    entry: "./main.jsx",
    output:  {filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query:
                {
                    presets: ["es2015", "react"]
                }

            }
        ]
    }
};
```

## Интеграция Webpack в WebStorm IDE 

1) Сгенерируйте файл package.json, для этого выполните команду:
```
npm init
``` 
2) Для интеграции Webpack c WebStorm добавьте файл package.json должен иметь следующую структуру: 
```
 {
  "version": "1.0.0",
  "name": "asp",
  "private": true,
  "scripts": {
    "build": "webpack -w"
  },
  "dependencies": {
    "react": "^15.3.1",
    "react-dom": "^15.3.1"
  },
  "devDependencies": {
    "babel": "^6.5.2",
    "babel-core": "^6.14.0",
    "babel-loader": "^6.2.5",
    "babel-plugin-transform-react-jsx": "^6.8.0",
    "babel-preset-es2015": "^6.14.0",
    "babel-preset-es2016": "^6.11.3",
    "babel-preset-react": "^6.11.1",
    "webpack": "^1.13.2"
  }
}

``` 

2) Перейдите в пункт меню View, выберите опцию Tool Windows > Project 
‚в открывшемсЯ окне с каталогом папок приложения кликните правой кнопкой мыши по файлу package.json и выберите опцию show npm scripts 

![](images/001.jpg)  

3) в открывшемся диалоговом окне npm кликните два раза по опции build: 

![](images/002.jpg) 

4) следите за работой webpack в открывшемсЯ терминале: 

![](images/003.jpg) 

5) для запуска файла выберите файл и нажмите Ctrl+Shift+F10 

## Отправка файлов на репозиторий 

При наличии большой вложености папок в проекте (node_module), рекомендуется использовать Git Bush, 
для отправки данных на GitHub. Очередность віполнения команд:

1) Stage the file for commit: 

``` 
git add .
```

2) Commit the file:
```
git commit -m "update"
```

3) Push the changes to GitHub.:
```
git push origin master
```

