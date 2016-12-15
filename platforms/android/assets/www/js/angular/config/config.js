/**
 * Created by Life on 2016-12-14.
 */
angular.module('App').config(function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl: 'template/main.html',
            controller: 'MainCtrl'
        })
        .when('/lootin',{
            templateUrl: 'template/lootin.html',
            controller: 'lootinCtrl'
        })
        .when('/raspberry',{
            templateUrl: 'template/raspberry.html',
            controller: 'raspberryCtrl'
        })
        .when('/etc',{
            templateUrl: 'template/etc.html',
            controller: 'etcCtrl'
        })
        .when('/login',{
            templateUrl: 'template/login.html',
            controller: 'loginCtrl'
        })
        .when('/regist',{
            templateUrl: 'template/regist.html',
            controller: 'registCtrl'
        })
        .when('/addHue',{
            templateUrl: 'template/addHue.html',
            controller: 'addHueCtrl'
        })
        .when('/roomType',{
            templateUrl: 'template/roomType.html',
            controller: 'roomTypeCtrl'
        })
        .otherwise({redirectTo: '/home'});
});