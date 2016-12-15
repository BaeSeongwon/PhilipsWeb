/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').controller('addHueCtrl',function ($scope,HueService) {
    $scope.type = HueService.getRoomType();
    $scope.clickRoomType = function(){
        window.location.href = '#/roomType';
    }

    $scope.clickHome = function(){
        window.location.href = '#/';
    }
});