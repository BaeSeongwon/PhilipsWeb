/**
 * Created by Life on 2016-12-14.
 */
angular.module('App').directive('shadow',function(){
    var linker = function(scope,element,attrs){

    }
    return{
        restrict : 'EA',
        templateUrl : 'template/shadow.html',
        link : linker,
        scope : true
    }
})