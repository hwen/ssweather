var weather = angular.module('ssweather', []);

weather.controller('locationController', function() {
    var location = this;
    location.tips = [];

    (function() {
        var where = document.querySelector('.where');
        EventUtil.addHandler(where, 'input', function() {
            var reg = new RegExp('^' + location.where + '.*$', 'im');
            var count=0;
            for (var i=0; i<citys.length; i++) {
                if (count > 2) break;
                if (reg.test(citys[i][0])) {
                    location.tips.push(citys[i][0]);
                    count++;
                }
            }
        });
    })();
});