checkLoad(function() {

	(function() {
		var location = document.querySelector('.location');

		var showAsk = function() {
			var bar  = document.querySelector('.contact-bar');
			var ask  = document.querySelector('.askLocation');					
			if (bar.style.display === 'none')  {
				bar.style.display = '';
				ask.style.display = 'none';
			} else {
				bar.style.display = 'none';
				ask.style.display = '';
			}
		};

		var askLocation = function() {
			var where = document.querySelector('.where');
			EventUtil.addHandler(where, 'input', function() {
				console.log(where.value);
			});
		};

		askLocation();

		EventUtil.addHandler(location, 'click' , showAsk);
	})();

});