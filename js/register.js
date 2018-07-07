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

	$(".a_eyes").on("mouseenter", function() {
		$("#pass").attr("type", "text");
	}).on("mouseleave", function() {
		$("#pass").attr("type", "password");
	})
	$(".a_eye").on("mouseenter", function() {
		$("#cpass").attr("type", "text");

	}).on("mouseleave", function() {
		$("#cpass").attr("type", "password");
	})
	$("#name").on("keyup", function() {
		var name = $("#name").val();
		console.log(name);
		$.get("php/registerUser.php?name=" + name, function(data) {
			if(data == "昵称可用!") {
				$(".message").css("color", "forestgreen");

			} else {
				$(".message").css("color", "red");
			}
			$(".message").html("*" + data);
		})
	})
	$("#pass").on("keyup", function() {
		var pass = $("#pass").val();
		$.get("php/registerPass.php?pass=" + pass, function(data) {
			if(data == "密码可用!") {
				$(".Pmessage").css("color", "forestgreen");

			} else {
				$(".Pmessage").css("color", "red");
			}
			$(".Pmessage").html("*" + data);
		})
	})
	$("#cpass").on("keyup", function() {
		var pass = $("#pass").val();
		var cpass = $("#cpass").val();
		$.get("php/registerCpass.php?cpass=" + cpass + "&pass=" + pass, function(data) {
			if(data == "密码验证正确!") {
				$(".cPmessage").css("color", "forestgreen");

			} else {
				$(".cPmessage").css("color", "red");
			}
			$(".cPmessage").html("*" + data);
		})
	})
	$("#email").on("keyup", function() {
		var email = $("#email").val();
		$.get("php/registerEmail.php?email=" + email, function(data) {
			if(data == "邮箱可用!") {
				$(".Emessage").css("color", "forestgreen");

			} else {
				$(".Emessage").css("color", "red");
			}
			$(".Emessage").html("*" + data);
		})
	})
	$("#btn-register").on("click", function() {
		var pass = $("#pass").val();
		var name = $("#name").val();
		var email = $("#email").val();
		$.post("php/register.php",{name:name,pass:pass,email:email},function(data){
			
		if(data === "注册成功!") {
				$(".Bmessage").css("color", "forestgreen");

			} else {
				$(".Bmessage").css("color", "red");
			}
			$(".Bmessage").html("*" + data);
		});
	})
})