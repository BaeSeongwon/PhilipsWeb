/**
 * Created by Life on 2016-12-01.
 */
var app = angular.module('App',['ngRoute']);

app.controller('AppCtrl',function($scope){
    $scope.activeTab = 1;

    $scope.setActiveTab = function(tab){
        $scope.activeTab = tab;
    };
});