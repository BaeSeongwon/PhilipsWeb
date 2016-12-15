/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').controller('loginCtrl',function($scope,UserService){
    $scope.clickLogin = function(){
        var loginData = {
            id : $scope.id,
            password : $scope.password
        }
        UserService.login(loginData)
            .then(function(data){
                if(data == '로그인 완료'){
                    alert(data);
                    window.location.href = '#/home'
                }
            })
    }

});