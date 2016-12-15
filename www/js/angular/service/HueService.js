/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').service('HueService',function(IP,$http,CPE_IP){
    var Hue = {
        type : "Test",
        device : [
            {
                name : 'Hue Lamp 1',
                type : 'test'
            },
            {
                name : 'Hue Lamp 2',
                type : 'test'
            },
            {
                name : 'Hue Lamp 3',
                type : 'test'
            },
        ]
    };
    return{
        setRoomType : setRoomType,
        getRoomType : getRoomType,
        onHue : onHue,
        offHue : offHue,
        onHueServer : onHueServer,
        offHueServer : offHueServer
    }

    function setRoomType(data){
        Hue.type = data;
    }

    function getRoomType(){
        return Hue.type;
    }

    function onHue(){
        var request = $http({
            method : 'get',
            url : CPE_IP + '/huecontrolOn'
        });
        return request.then(success);
    }

    function offHue(){
        var request = $http({
            method : 'get',
            url : CPE_IP + '/huecontrolOff'
        });
        return request.then(success);
    }

    function onHueServer(data){
        var request = $http({
            method : 'post',
            url : IP + '/huecontrolOn',
            data : $.param(data),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        return request.then(success);
    }

    function offHueServer(data){
        var request = $http({
            method : 'post',
            url : IP + '/huecontrolOff',
            data : $.param(data),
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });
        return request.then(success);
    }

    function success(res){
        return res.data;
    }
})