var index = 0;
var imgs = ["img/index/index.jpg","img/index/index_1.jpg","img/index/index_2.jpg","img/index/index_3.jpg","img/index/index_4.jpg","img/index/index_5.jpg","img/index/index_6.jpg",
"img/index/index_7.jpg","img/index/index_8.jpg","img/index/index_9.jpg","img/index/index_10.jpg","img/index/index_11.jpg"];
$(function(){
	function lunbo(){
		index++;
		$("#index_img").attr("src",imgs[index % 12]);
	}
	var interval = setInterval(function(){
		lunbo();
	},1000);
	$("#index_img").on("mouseenter",function(){
		clearInterval(interval);
	});
	$("#index_img").on("mouseleave",function(){
		interval = setInterval(function(){
			lunbo();
		},1000);
	})
	
	$("#min_tips").on("mouseenter",function(){
		$(".sidebar").fadeIn(1000);
	}).on("mouseleave",function(){
		$(".sidebar").fadeOut(1000);
	})
	$(".sidebar").on("mouseenter",function(){
		$(".sidebar").stop().fadeIn(1000);
	}).on("mouseleave",function(){
		$(".sidebar").fadeOut(2000);
	}) 
})
