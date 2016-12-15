/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').service('HueService',function(IP,$http){
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
        offHue : offHue
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
            url : IP + '/huecontrolOn'
        });
        return request.then(success);
    }

    function offHue(){
        var request = $http({
            method : 'get',
            url : IP + '/huecontrolOff'
        });
        return request.then(success);
    }

    function success(res){
        return res.data;
    }
})