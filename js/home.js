checkLoad(function() {

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