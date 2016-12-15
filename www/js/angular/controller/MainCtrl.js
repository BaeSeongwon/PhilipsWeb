/**
 * Created by Life on 2016-12-14.
 */
angular.module('App').controller('MainCtrl',function($scope,$timeout,HueService,RaspService){
    $scope.result = $timeout(function(){
        $('#toggle-one').bootstrapToggle();
        $('#toggle-one').change(function() {
            console.log($(this).prop('checked') == true);
            if($(this).prop('checked')){
                HueService.onHue();
            }else{
                HueService.offHue();
            }
        })
    }, 1000);

    $scope.testRaspBerry = function(){
        RaspService.connectRasp()
            .then(function(data){

            })
    }

    $scope.clickHueControl = function(){
        window.location.href = '#/HueControl';
    }
});