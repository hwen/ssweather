var weather = angular.module('ssweather', []);

weather.controller('locationController', function() {
    var location = this;
    location.tips = [];

    (function() {
        var where = document.querySelector('.where');
        var count=0;
        EventUtil.addHandler(where, 'input', function() {
            var reg = new RegExp('^' + where.value + '.*$', 'im');
            console.log("where?"+where.value);
            for (var i=0; i<citys.length; i++) {
                if (count > 2) break;
                if (reg.test(citys[i][0])) {
                    console.log(citys[i][0]);
                    location.tips.push(citys[i][0]);
                    var li = document.createElement('li');
                    li.innerHTML  = citys[i][0];
                    where.appendChild(li);
                    count++;
                }
            }
        });
    })();
});