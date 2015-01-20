//I borrowed heavily from this Youtube tutorial by JREAM:
//https://www.youtube.com/watch?v=D8F2-uPprdI
//and also the documentation at docs.angularjs.org, 
//specifically the orderBy page
//https://docs.angularjs.org/api/ng/filter/orderBy

var app = angular.module('setup', []);

app.controller('RepeaterController', ['$scope', '$filter', function ($scope, $filter) {
    var orderBy = $filter('orderBy');
    $scope.users = [
        { 'name': 'Johnny', 'gender': 'M', 'phone': '555-1212' },
        { 'name': 'Teddy', 'gender': 'M', 'phone': '555-2093' },
        { 'name': 'Benny', 'gender': 'M', 'phone': '555-4033' },
        { 'name': 'Danny', 'gender': 'F', 'phone': '555-9028' }
    ];
    $scope.order = function (predicate, reverse) {
        $scope.users = orderBy($scope.users, predicate, reverse);
    };
}]);

app.controller('CountController', function ($scope) {
    $scope.val = 1;

    $scope.up = function () {
        $scope.val += 1;
    }
    $scope.down = function () {
        $scope.val -= 1;
    }
})