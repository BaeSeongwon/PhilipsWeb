/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').controller('registCtrl',function($scope,UserService){
    $scope.clickRegist = function(){
        var registData = {
            id : $scope.id,
            password : $scope.password,
            cpe_key : $scope.raspberrykey
        };
        UserService.register(registData)
            .then(function(data){
                if(data == '회원가입 완료!'){
                    alert('회원가입 성공!');
                    window.location.href = '#/home';
                }
            })
    };
});