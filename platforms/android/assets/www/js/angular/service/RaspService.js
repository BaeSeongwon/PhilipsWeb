/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').service('RaspService',function($http,IP,CPE_IP){
    return{
        connectRasp : connectRasp
    }

    function connectRasp(){
        var request = $http({
            method : 'get',
            url : CPE_IP + '/test'
        });
        return request.then(success);
    }

    function success(res){
        return res.data;
    };
})