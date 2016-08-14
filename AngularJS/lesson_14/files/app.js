// Для работы данного примера используется модуль ngResource который предоставляет удобный интерфейс для взаимодействия c REST сервисами
// посредством $resource
angular.module("exampleApp", ["ngResource"])
.constant("baseUrl", "http://localhost:2403/items/")
.controller("defaultCtrl", function ($scope, $http, $resource, baseUrl) {

    // текущее педставление
    $scope.currentView = "table";

    // $resource - функция, используется для описания ссылк через которые будет происходить взаимодействеи с REST сервисом
    // baseUrl + ":id" - http://localhost:2403/items/:id - определяет часть адреса в котором храниться изменяемое значение :id
    // { id: "@id" } - определяет источник данных для :id, в нашем случае @id указывает на то, что данные будут браться из свойства id объекта, 
    // который будет использоваться ниже в коде.
    // результатом работы $resource является объект (access object) с помощью которого можно выполнять обращения к серверу.
    $scope.itemsResource = $resource(baseUrl + ":id", { id: "@id" });

    // получение всех данных из модели
    $scope.refresh = function () {
        // метод query выполняет запрос на сервер и возвращает коллекцию, которая содержит объекты с данными и дополнительными методами
        // которые используются для взаимодействия с данными на сервере $delete, $get, $remove, $save 
        $scope.items = $scope.itemsResource.query();

    }

    // создание нового элемента
    $scope.create = function (item) {
        new $scope.itemsResource(item).$save().then(function (newItem) {
            $scope.items.push(newItem);
            $scope.currentView = "table";
        });
    }

    // обновление элемента
    $scope.update = function (item) {
        item.$save();
        $scope.currentView = "table";
    }

    // удаление элемента из модели
    $scope.delete = function (item) {
        item.$delete().then(function () {
            $scope.items.splice($scope.items.indexOf(item), 1);
        });
        $scope.currentView = "table";
    }

    // редеактирование существующего или создание нового элемента
    $scope.editOrCreate = function (item) {
        $scope.currentItem = item ? item : {};
        $scope.currentView = "edit";
    }

    // сохранение изменений
    $scope.saveEdit = function (item) {
        if (angular.isDefined(item.id)) {
            $scope.update(item);
        } else {
            $scope.create(item);
        }
    }

    // отмена изменений и возврат в представление table
    $scope.cancelEdit = function () {
        if ($scope.currentItem && $scope.currentItem.$get) {
            $scope.currentItem.$get();
        }
        $scope.currentItem = {};
        $scope.currentView = "table";
    }

    $scope.refresh();
});