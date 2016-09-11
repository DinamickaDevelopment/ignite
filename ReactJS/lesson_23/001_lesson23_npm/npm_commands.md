# Часто используемые команды npm 

* npm init - создание нового пакета 

* npm search *package_name* - поиск пакета 
* npm view *package_name* - просмотр информации о пакете 

* npm install - установка зависимостей из файла package.json в текущей директории
* npm install *package_name* - локальная установка пакета
* npm install *package_name* -g - глобальная установка пакета 
* npm install *package_name* --save - локальная установка пакета в качестве зависимости 
* npm install *package_name* --save-dev - локальная установка пакета в качестве зависимости на этапе разработки 
* npm install *package_name*@1.1.1 - установка конкретной версии пакета 

* npm update *package_name* - обновить указанный пакет до последней версии
* npm update - обновление установленных в качестве зависимостей пакетов
* npm update --dev - обновление пакетов, установленных в dependencies и devDependencies 

* npm list - список локально установленных пакетов 
* npm list -g - список глобально установленных пакетов 

* npm uninstall - локальное удаление пакета 
* npm uninstall -g - глобальное удаление пакета

* npm publish - публикация пакета в репозиторий npm 
* npm unpublish - удаление пакета из репозитория npm
