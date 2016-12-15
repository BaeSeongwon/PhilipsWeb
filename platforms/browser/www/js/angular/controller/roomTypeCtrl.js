/**
 * Created by Life on 2016-12-15.
 */
angular.module('App').controller('roomTypeCtrl',function($scope){
    $scope.choiceType;
    $scope.clickType = function(data,event){
        $('.roomTypeTd').each(function(index,element){
            $(element).css('background-color','white');
        });
        if(event.target.localName == 'td'){
            $(event.target).css('background-color','#5FBA7D');
        }
        $scope.choiceType = data;
    }

    $scope.clickTypeChoice = function(){

    }

    $scope.clickRemove = function(){
        window.history.back();
    }
})