/**
 * Created by Life on 2016-12-14.
 */
angular.module('App').controller('raspberryCtrl',function($scope,RaspService){
    $scope.clickConnect = function(){
        RaspService.connectRasp()
            .then(function(data){
                alert(data);
            })
    }

});