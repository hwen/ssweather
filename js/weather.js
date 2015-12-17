var weather = angular.module('ssweather', []);

weather.controller('weatherController',["$scope","$http", function($scope, $http) {
    $scope.tips = [];
    $scope.city = '上海';
    $scope.temperature = '12';
    $scope.humidity = 35;


    $scope.setHumidity = function(h) {
        var rPercent = document.querySelector('.rightRotate'),
            lPercent = document.querySelector('.leftRotate');
        if (h<50) {
            console.log('h:'+ h);
            rPercent.style.transform = 'rotate(' + (3.6*h+45) + 'deg)';
        } else {
            console.log('h:'+ h);
            rPercent.style.transform = 'rotate(225deg)'
            lPercent.style.transform = 'rotate(' + (3.6*(h-50)+45) + 'deg)';
        }
    };
    
    $scope.getWeatherNow = function(city) {
        var api = 'https://api.thinkpage.cn/v2/weather/now.json?language=zh-chs&unit=c&key=STUQDFMKSP&city=';
        api += city;
        $scope.city = city;
        $http({
            method: 'GET',
            url: api
        }).then(function success(response) {
            var data = response.data.weather;
            console.log(data[0].now.temperature);
            $scope.temperature = data[0].now.temperature;
            $scope.humidity = data[0].now.humidity;
            $scope.setHumidity($scope.humidity);
        }, function error(response) {
            console.log('get weather now error:'+response);
        });
    };

    var getWeatherFuture = function(city) {
        var api = 'https://api.thinkpage.cn/v3/weather/daily.json?key=STUQDFMKSP&language=zh-Hans&unit=c&start=0&days=5';
        api += '&location=' + city;
        $http({
            method: 'GET',
            url: api
        }).then(function success(response) {
            var data = response.data.results[0].daily;
            $scope.day1 = data[0].date.substr(5);
            $scope.day2 = data[1].date.substr(5);
            $scope.textDay1 = data[0].text_day;
            $scope.textDay2 = data[1].text_day;
            $scope.low1 = data[0].low;
            $scope.low2 = data[1].low;
            $scope.high1 = data[0].high;
            $scope.high2 = data[1].high;
            $scope.w1   = data[0].code_day;
            $scope.w2   = data[1].code_day;
        }, function error(response) {
            console.log('get future weather error:');
            console.log('city:'+ city + "-->" + response.data.status);
        });
    };

    $scope.hideAsk = function() {
        var bar  = document.querySelector('.contact-bar');
        var ask  = document.querySelector('.askLocation');
        var ul = document.querySelector('.for-location');
        var where = document.querySelector('.where');
        bar.style.display = '';
        ask.style.display = 'none';
        ul.innerHTML = '';
        where.value = '';
    };

    //ask city
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
                    $scope.hideAsk();
                });
                ul.appendChild(li);
            }
        });
    })();

    //future weather
    (function() {
        var dayText = document.querySelector('.day-text'),
            refresh = document.querySelector('.refresh');

        EventUtil.addHandler(dayText, 'click', function() {
            var fw = document.querySelector('.future-weather');
            if (fw.style.display === 'none') {
                getWeatherFuture($scope.city);
            }
        });
    })();

    //refresh
    (function() {
        var refresh = document.querySelector('.refresh').firstChild;
        EventUtil.addHandler(refresh, 'click', function() {
            var oldCls = refresh.className;
            refresh.className += ' is-active';
            setTimeout(function() {
                refresh.className = oldCls;
            }, 1000);
            $scope.getWeatherNow($scope.city);
        });
    })();
} ]);