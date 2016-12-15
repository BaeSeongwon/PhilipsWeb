/**
 * Created by Life on 2016-12-14.
 */
angular.module('App').controller('MainCtrl',function($scope,$timeout,HueService,RaspService,WemoService){
    $scope.result = $timeout(function(){
        $('#toggle-one').bootstrapToggle();
        $('#toggle-one').change(function() {
            console.log($(this).prop('checked') == true);
            if($(this).prop('checked')){
                HueService.onHue()
                    .then(function(data){
                        HueService.onHueServer(data)
                            .then(function(){

                            });
                    });
            }else{
                HueService.offHue()
                    .then(function(data){
                        HueService.offHueServer(data)
                            .then(function(){

                            });
                    });
            }
        })

        $('#toggle-two').bootstrapToggle();
        $('#toggle-two').change(function() {
            console.log($(this).prop('checked') == true);
            if($(this).prop('checked')){
                var data = {
                    wemo : 1
                }
                WemoService.wemoOn(data)
                    .then(function(data){
                        WemoService.wemoOnServer(data);
                    });
            }else{
                var data = {
                    wemo : 0
                }
                WemoService.wemoOff(data)
                    .then(function(data){
                        WemoService.wemoOffServer(data);
                    });
            }
        })
    }, 1000);

    $scope.testRaspBerry = function(){
        RaspService.connectRasp()
            .then(function(data){
                RaspService.setCpeInfo(data);
            })
    };

    $scope.clickHueControl = function(){
        window.location.href = '#/HueControl';
    };

    $scope.testRaspBerry();

    $scope.clickWemoDetail = function(){
        window.location.href = '#/WemoDetail';
    }
});