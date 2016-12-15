/**
 * Created by Life on 2016-12-14.
 */
angular.module('App').directive('menue',function($cookies){
    var linker = function(scope,element,attrs){
        scope.loginCheck = function(){
            if($cookies.get('id') == undefined){
                alert('로그인을 하세요');
                scope.loginId = '로그인을 하세요';
            }
            scope.loginId = $cookies.get('id');
        }

        scope.clickLogout = function(){
            $cookies.remove('id');
            if($cookies.get('id') == undefined){
                alert('로그아웃 성공');
                window.location.reload(true);
            }else{
                alert('로그아웃 실패');
            }
        };

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

        scope.loginCheck();

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