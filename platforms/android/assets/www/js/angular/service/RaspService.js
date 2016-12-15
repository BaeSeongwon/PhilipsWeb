/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').service('RaspService',function($http,IP,CPE_IP){
    return{
        connectRasp : connectRasp,
        setCpeInfo : setCpeInfo,
        getCpeInfo : getCpeInfo
    }
    var cpeInfo = {
        ip : null,
        cpe_key : null,
        cpe_os : null,
        cpe_version : null
    };

    function connectRasp(){
        var request = $http({
            method : 'get',
            url : CPE_IP + '/test'
        });
        return request.then(success);
    }

    function  setCpeInfo(data){
        cpeInfo.ip = data.ip;
        cpeInfo.cpe_key = data.cpe_key;
        cpeInfo.cpe_os = data.cpe_os;
        cpeInfo.cpe_version = data.cpe_version;
        alert(cpeInfo.cpe_version);
    }

    function getCpeInfo(){
        alert(cpeInfo.cpe_version);
        return cpeInfo;
    }

    function success(res){
        return res.data;
    };
})