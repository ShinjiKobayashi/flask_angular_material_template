/**
 * Created by skobayashi1 on 2015/11/15.
 */

angular.module("app")
    .controller("MainCtrl", ['$scope', function($scope){
        $scope.title = "Template Title";
        $scope.msg = "Hello World";
    }]);
