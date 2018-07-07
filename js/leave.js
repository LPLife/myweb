$(function(){
		$("#min_tips").on("mouseenter", function() {
		$(".sidebar").fadeIn(1000);
	}).on("mouseleave", function() {
		$(".sidebar").fadeOut(1000);
	})
	$(".sidebar").on("mouseenter", function() {
		$(".sidebar").stop().fadeIn(1000);
	}).on("mouseleave", function() {
		$(".sidebar").fadeOut(2000);
	})
})