/**
 * Created by Life on 2016-12-14.
 */
angular.module('App').directive('menue',function(){
    var linker = function(scope,element,attrs){
        scope.clickHome = function(){
            window.location.href = '#/home';
            closeMenue();
        };

        scope.clickLootin = function(){
            window.location.href = '#/lootin';
            closeMenue();
        };

        scope.clickRaspberry = function(){
            window.location.href = '#/raspberry';
            closeMenue();
        }

        scope.clickEtc = function(){
            window.location.href = '#/etc';
            closeMenue();
        }

        scope.clickLogin = function(){
            window.location.href = '#/login';
            closeMenue();
        }

        scope.clickRegist = function(){
            window.location.href = '#/regist';
            closeMenue();
        }

        function closeMenue(){
            $('.menue').animate({
                left: '-70%'
            });
            $('shadow').remove();
        }
    }
    return{
        restrict : "EA",
        templateUrl : "template/menue.html",
        link : linker,
        scope : false
    }
})