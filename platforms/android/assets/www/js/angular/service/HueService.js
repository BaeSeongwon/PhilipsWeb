/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').service('HueService',function(){
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
        getRoomType : getRoomType
    }

    function setRoomType(data){
        Hue.type = data;
    }

    function getRoomType(){
        return Hue.type;
    }
})