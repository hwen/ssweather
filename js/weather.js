var weather = angular.module('ssweather', []);


weather.controller('weatherController',["$scope","$http", function($scope, $http) {
    $scope.tips = [];
    $scope.city = '上海';
    $scope.temperature = '12';
    
    $scope.getWeatherNow = function(city) {
        var api = 'https://api.thinkpage.cn/v2/weather/now.json?language=zh-chs&unit=c&key=STUQDFMKSP&city=';
        api += city;
        $scope.city = city;
        $http({
            method: 'JSONP',
            url: api
        }).then(function success(response) {
            console.log(response);
            $scope.temperature = data.now.temperature;
        }, function error(response) {
            console.log('get weather now error:'+response);
        });
    };

    (function() {
        var where = document.querySelector('.where');
        var ul = document.querySelector('.for-location');
        var count=0;


        EventUtil.addHandler(where, 'input', function() {
            var reg = new RegExp('^' + where.value + '.*$', 'im');
            //console.log("where?"+where.value);
            $scope.tips = [];
            count = 0;

            for (var i=0; i<citys.length; i++) {
                if (count > 2) break;
                if (reg.test(citys[i][0])) {
                    //console.log(citys[i][0]);
                    $scope.tips.push(citys[i][0]);
                    count++;
                }
            }
            ul.innerHTML = '';

            for (var i=0; i<$scope.tips.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = $scope.tips[i];
                EventUtil.addHandler(li, 'click', function(e) {
                    //console.log(e.target.innerHTML);
                    $scope.getWeatherNow(e.target.innerHTML);
                });
                ul.appendChild(li);
            }
        });
    })();
} ]);