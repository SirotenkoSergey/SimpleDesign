$(document).ready(function(){
	var fontsArr = [
		"icon-circle-blank",
		"icon-check-empty",
		"icon-gbp",
		"icon-ellipsis-horizontal",
		"icon-exclamation",
		"icon-sun",
		"icon-moon",
		"icon-star-empty",
		"icon-smile"
	];
	var Rand = function(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	};
	var pointerAnimationWrapper = $(".point-animation-wrapper");
	var renderAnimation = function(pointerAnimationWrapper) {
		var rowLenght = pointerAnimationWrapper.width() / 40;
		var columLength = pointerAnimationWrapper.height() / 40;
		var aLength = Math.round(rowLenght * columLength);
		var activeArr = [];
		for(var i = 0; i < aLength; i++) {
			var point = $(document.createElement("div")).addClass("point");
			var fontElement = $(document.createElement("i")).addClass("icon " + fontsArr[Rand(0, fontsArr.length)]);
			point.append(fontElement);
			pointerAnimationWrapper.append(point);
			point.on("mouseenter", function() {
				$(this).addClass("active");
				/*activeArr.unshift($(this));
				if(activeArr.length > 9) activeArr.length = 9;
				$(".point").removeClass("active");
				for(var i_counter_2 = 0; i_counter_2 < activeArr.length; i_counter_2++) {
					activeArr[i_counter_2].addClass("active");
				};*/
			});
			point.on("mouseleave", function(){
				$(this).animate({
					opacity: 0
				}, 700, function(){
					$(this).removeClass("active").animate({
						opacity: 1
					}, 150);
				});
			});
		};
		
	}
	renderAnimation(pointerAnimationWrapper);
})