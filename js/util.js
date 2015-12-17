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
};

// 检测事件监听浏览器差异
var EventUtil = {
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent){ 
			element.attachEvent("on"+type, handler);
		} else {
			element["on"+type] = handler;
		}
	},

	removeHandler: function(element, type, handler){
		if(element.removeEventListner){
			element.removeEventListner(type, handler, false);
		} else if (element.detachEvent){ 
			element.detachEvent("on"+type, handler);
		} else {
			element["on"+type] = null;
		}
	},

	getEvent: function(event){
		return event ? event : window.event;
	},

	getTarget: function(event){
		return event.target || event.srcElement;
	},

	preventDefault: function(event){
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	stopPropagation: function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
};