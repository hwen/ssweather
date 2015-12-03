var weather = angular.module('ssweather', []);


weather.controller('locationController', function() {
    var location = this;
    location.tips = [];

    (function() {
        var where = document.querySelector('.where');
        var ul = document.querySelector('.for-location');
        var count=0;


        EventUtil.addHandler(where, 'input', function() {
            var reg = new RegExp('^' + where.value + '.*$', 'im');
            console.log("where?"+where.value);
            location.tips = [];
            count = 0;

            for (var i=0; i<citys.length; i++) {
                if (count > 2) break;
                if (reg.test(citys[i][0])) {
                    console.log(citys[i][0]);
                    location.tips.push(citys[i][0]);
                    count++;
                }
            }
            ul.innerHTML = '';
            for (var i=0; i<location.tips.length; i++) {
                //ul.innerHTML += '<li onclick="getWeather()">'+location.tips[i]+'</i>';
                var li = document.createElement('li');
                li.innerHTML = location.tips[i];
                EventUtil.addHandler(li, 'click', function(e) {
                    console.log(e.target.innerHTML);
                });
                ul.appendChild(li);
            }
        });
    })();
});