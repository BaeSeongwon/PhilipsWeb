/**
 * Created by Life on 2016-12-16.
 */
angular.module('App').controller('WemoDetailCtrl',function($scope,WemoService){
    WemoService.getWemoData()
        .then(function(data){
            alert(data[0].intantPower);
            $scope.Wemo = data;
        })
});