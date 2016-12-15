/**
 * Created by Life on 2016-12-16.
 */
angular.module('App').service('WemoService',function($http,IP,CPE_IP){
    return{
        wemoOn : wemoOn,
        wemoOff : wemoOff,
        wemoOnServer : wemoOnServer,
        wemoOffServer : WemoOffServer,
        getWemoData : getWemoData
    }

    function wemoOn(data){
        var request = $http({
            method : 'post',
            url : CPE_IP + '/wemocontrol',
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
            url : CPE_IP + '/wemocontrol',
            data : $.param(data),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        return request.then(success);
    }

    function wemoOnServer(data){
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

    function WemoOffServer(data){
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

    function getWemoData(){
        var request = $http({
            method : 'get',
            url : IP + '/getWemoData',
        });
        return request.then(success);
    }

    function success(res){
        return res.data;
    };
})