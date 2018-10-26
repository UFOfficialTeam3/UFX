/* register the modules the application depends upon here*/
// angular.module();

/* register the application and inject all the necessary dependencies */
const app = angular.module('UFX', []);
app.controller("ufxCtrl", function($scope) {
    $scope.a = [1, 2, 3];
});
