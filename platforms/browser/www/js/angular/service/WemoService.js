/**
 * Created by Life on 2016-12-16.
 */
angular.module('App').service('WemoService',function($http,IP){
    return{
        wemoOn : wemoOn,
        wemoOff : wemoOff
    }

    function wemoOn(data){
        var request = $http({
            method : 'post',
            url : IP + '/wemocontrol',
            data : $.param(data),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        return request.then(success);
    }

    function wemoOff(data){
        var request = $http({
            method : 'post',
            url : IP + '/wemocontrol',
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