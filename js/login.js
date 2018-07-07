$(function() {
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
	$("#name").on("keyup", function() {
		var name = $("#name").val();
		$.get("php/loginUser.php?name=" + name, function(data) {
				if(data=="用户名正确!"){
				$(".message").css("color","forestgreen");
			
			}else{
				$(".message").css("color","red");
			}
			$(".message").html("*" + data);
		})
	})
	$("#pass").on("keyup", function() {
		var pass = $("#pass").val();
		var name = $("#name").val();
		$.get("php/loginPass.php?pass=" + pass + "&name=" + name, function(data) {
			if(data=="密码正确!"){
				$(".Pmessage").css("color","forestgreen");
			
			}else{
				$(".Pmessage").css("color","red");
			}
			$(".Pmessage").html("*" + data);
			
		})
	})
	$("#btn-login").on("click", function() {
		var m1 = $(".message").text();
		var m2 = $(".Pmessage").text();
		$.get("php/identify.php?Nm=" + m1 + "&Pm=" + m2, function(data) {
			if(data=="登录成功!"){
				$(".Bmessage").css("color","forestgreen");
				top.location = "homepage.html";
			
			}else{
				$(".Bmessage").css("color","red");
			}
			$(".Bmessage").html(data);
		})
	})
 
 $(".a_eyes").on("mouseenter",function(){
 	$("#pass").attr("type","text");
 }).on("mouseleave",function(){
 		$("#pass").attr("type","password");
 })
})