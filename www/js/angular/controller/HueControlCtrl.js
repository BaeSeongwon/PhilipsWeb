/**
 * Created by Life on 2016-12-15.
 */
angular.module("App").controller('HueControlCtrl',function($scope,$timeout,IP){
    $scope.test = '#00AABB';
    var socket = io('http://192.168.0.26:3000');

    $scope.result = $timeout(function(){
        $('#cp7').colorpicker({
            customClass: 'colorpicker-2x',
            color: '#ffaa00',
            format : 'rgba',
            sliders: {
                saturation: {
                    maxLeft: 280,
                    maxTop: 280
                },
                hue: {
                    maxTop: 280
                },
                alpha: {
                    maxTop: 280
                }
            },
            container: true,
            inline: true
        }).on('changeColor',function(ev){
            var color = ev.color.toRGB();
            var bright = ev.color.value.a * 255;
            // console.log(colorChange(color.r,color.g,color,b));
            socket.emit('toclient',colorChange(color.r,color.g,color.b,bright));
        });
    }, 1000);

    function colorChange(red,green,blue,bright){
        var R = ( red / 255 );        //R from 0 to 255
        var G = ( green / 255 );        //G from 0 to 255
        var B = ( blue / 255 );        //B from 0 to 255

        if ( R > 0.04045 ) R = ( ( R + 0.055 ) / 1.055 ) ^ 2.4;
        else                   R = R / 12.92;
        if ( G > 0.04045 ) G = ( ( G + 0.055 ) / 1.055 ) ^ 2.4;
        else                   G = G / 12.92;
        if ( B > 0.04045 ) B = ( ( B + 0.055 ) / 1.055 ) ^ 2.4;
        else                   B = B / 12.92;

        R = R * 100
        G = G * 100
        B = B * 100

//Observer. = 2°, Illuminant = D65
        var X = R * 0.4124 + G * 0.3576 + B * 0.1805
        var Y = R * 0.2126 + G * 0.7152 + B * 0.0722
        var Z = R * 0.0193 + G * 0.1192 + B * 0.9505

        var hueX = X / (X + Y + Z);
        var hueY = Y / (X + Y + Z);
        return {
            X : hueX.toFixed(4),
            y : hueY.toFixed(4),
            bri : bright.toFixed(0)
        }
    }
});