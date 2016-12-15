/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').service('UserService',function($http,IP){
    return{
        register : register,
        login : login
    }

    function register(data){
        var request = $http({
            method : 'post',
            url : IP + '/Join',
            data : $.param(data),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        return request.then(success);
    };

    function login(data){
        var request = $http({
            method : 'post',
            url : IP + '/Login',
            data : $.param(data),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        return request.then(success);
    }

    function success(res){
        return res.data;
    };
})