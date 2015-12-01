checkLoad(function() {

	(function() {
		var location = document.querySelector('.location');

		var slideAnimate = function(isUp) {
			var bar  = document.querySelector('.contact-bar');
			var ask  = document.querySelector('.askLocation');			
			if (isUp) {

			} else {

			}
		};

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
			
		};

		EventUtil.addHandler(location, 'click' , showAsk);
	})();

});