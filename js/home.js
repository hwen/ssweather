// 检测DOM有没加载完
var checkLoad = function(callback) {
	var browser = window.navigator.userAgent;
	var isIE = false;
	if (/msie/.test(browser.toLowerCase())) {
		isIE = true;
	}

	if (isIE) {
		document.onreadystatechange = function() {
			if (document.readyState == 'complete' || document.readyState == 'loaded') {
				callback.call();
			}
		};
	} else {
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', callback, false);
		}
	}
}

checkLoad(function() {

});