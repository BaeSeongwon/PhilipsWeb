/**
 * Created by Life on 2016-12-01.
 */
var app = angular.module('App',['ngRoute','ngCookies']);

app.controller('AppCtrl',function($scope,$compile){
    $scope.clickMenue = function(){
        angular.element(document.getElementById('shadowContainer')).append($compile("<shadow></shadow>")($scope));
        $('.menue').animate({
            left: '0%'
        });
    }

    $scope.closeMenue = function(e){
        if ($('.menue').has(e.target) && $('.menue').has(e.target).length === 0){
            $('.menue').animate({
                left: '-70%'
            });
            $('shadow').remove();
        };
    };

    $scope.clickAddHue = function(){
        window.location.href = '#/addHue';
    }
});
