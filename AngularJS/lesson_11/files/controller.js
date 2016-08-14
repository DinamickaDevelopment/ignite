app.controller('mainCtrl', function ($scope) {
    $scope.value = 1;

    $scope.changeValue = function () {
        $scope.value++; 
    }
})
