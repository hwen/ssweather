checkLoad(function() {

	(function() {
		var dayText = document.querySelector('.day-text'),
			refresh = document.querySelector('.refresh'),
			day     = document.querySelector('.day'),
			future  = document.querySelector('.future-weather');

		var getFuture = function() {
			day.style.boxShadow = 'inset 2px 2px 1px #72896F';
			day.style.webkitBoxShadow = 'inset 2px 2px 1px #72896F';
			day.style.mozBoxShadow = 'inset 2px 2px 1px #72896F';
			setTimeout(function() {
				day.style.boxShadow = '';
				day.style.webkitBoxShadow = '';
				day.style.mozBoxShadow = '';
			}, 200);

			if(future.style.display === 'none') {
				dayText.innerHTML = 'FUTURE';
				day.style.borderRadius = '2rem 2rem 0 0';
				day.style.webkitBorderRadius = '2rem 2rem 0 0';
				day.style.mozBorderRadius = '2rem 2rem 0 0';
				setTimeout(function(){
					future.style.display = '';
				}, 200);
			} else {
				dayText.innerHTML = 'TODAY';
				future.style.display = 'none';
				day.style.borderRadius = '2rem';
				day.style.webkitBorderRadius = '2rem';
				day.style.mozBorderRadius = '2rem';
			}
		};

		var getRefresh = function() {

		};

		EventUtil.addHandler(dayText, 'click', getFuture);
		EventUtil.addHandler(refresh, 'click', getRefresh);

	})();

	(function() {
		var location = document.querySelector('.location');
		var bar  = document.querySelector('.contact-bar');
		var ask  = document.querySelector('.askLocation');
		var header = document.querySelector('.header');
		var ul = document.querySelector('.for-location');
		var where = document.querySelector('.where');

		var showAsk = function() {
			if (bar.style.display === 'none')  {
				bar.style.display = '';
				ask.style.display = 'none';
				ul.innerHTML = '';
				where.value = '';
			} else {
				bar.style.display = 'none';
				ask.style.display = '';
			}
		};

		EventUtil.addHandler(location, 'click' , showAsk);
		EventUtil.addHandler(document.body, 'click', function(e) {
			if(!header.contains(e.target)) {
				if (bar.style.display === 'none')  {
					bar.style.display = '';
					ask.style.display = 'none';
					ul.innerHTML = '';
					where.value = '';
				}
			}
		});
	})();
});