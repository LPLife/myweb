$(function() {
	
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
	
	
	$(".text-note").on("keyup", function() {
		var str = $(".text-note").val();
		if(str.trim() === "" || str.length == 0) {
			$(".Tmessage").html("内容为空,不能进行留言!");
		} else {

			$(".Tmessage").html(" ");
		}
	})
	$(".note-btn").on("click", function() {
		$("#name").val("");
		$("#email").val("");
		$(".message").html("");
		$(".Emessage").html("");
		$(".Btnmessage").html("");
		var str = $(".text-note").val();
		if(str.trim() === "" || str.length == 0) {
			$(".Tmessage").html("内容为空,不能进行留言!");
		} else {
			$(".mark").css("display", "block");
			$(".Tmessage").html(" ");
		}

	})

	$(".a_close").on("click", function() {

		$(".mark").css("display", "none");
		$(".text-note").val("");

	})
	$(".a_close4").on("click", function() {

		$(".d-note").css("display", "none");

	})
		$(".a_close5").on("click", function() {

		$(".u-note").css("display", "none");

	})
	$(".n-btn").on("click", function() {

		$(".d-note").css("display", "none");

	})
		$(".n-ubtn").on("click", function() {

		$(".u-note").css("display", "none");

	})
	$(".text-note").on("keyup", function() {
		var str = $(".text-note").val();
		var size = 150 - str.length;
		$(".text-size").html(size);
	})
	$(".text-Unote").on("keyup", function() {
		var str = $(".text-Unote").val();
		var size = 150 - str.length;
		$(".text-Usize").html(size);
	})
	$("#name").on("keyup", function() {
		var name = $("#name").val();
		console.log(name);
		$.get("php/loginUser.php?name=" + name, function(data) {
			if(data == "用户名正确!") {
				$(".message").css("color", "forestgreen");

			} else {
				$(".message").css("color", "red");
			}
			$(".message").html("*" + data);
		})
	})
	$("#email").on("keyup", function() {
		var email = $("#email").val();
		var name = $("#name").val();
		$.get("php/leaveEmail.php?email=" + email + "&name=" + name, function(data) {
			if(data == "邮箱正确!") {
				$(".Emessage").css("color", "forestgreen");

			} else {
				$(".Emessage").css("color", "red");
			}
			$(".Emessage").html("*" + data);
		})
	})
	$(".leave-btn").on("click", function() {
		var email = $("#email").val();
		var name = $("#name").val();
		var str = $(".text-note").val();
		var d = new Date();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		var hours = d.getHours();
		if(minutes < 10) {
			minutes = "0" + minutes;
		}
		if(seconds < 10) {
			seconds = "0" + seconds;
		}
		if(hours < 10) {
			hours = "0" + hours;
		}

		var time = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + "-" + hours + ":" + minutes + ":" + seconds;
		console.log(time);
		$.post("php/note.php", {
			name: name,
			email: email,
			note: str,
			time: time
		}, function(data) {
			if(data == "留言成功!") {
				getData();
				$(".Btnmessage").css("color", "forestgreen");

			} else {
				$(".Btnmessage").css("color", "red");
			}
			$(".Btnmessage").html(data);
		})

	})

	var page = 1;
	var n = 0;
	var max = 1;
	getData();
	/*获取指定页的数据*/
	function getData() {
		$.ajax({
			type: "GET",
			url: "php/getNote.php",
			data: {
				"page": page
			},
			dateType: "json",
			success: function(json) {
				json = JSON.parse(json);
				n = json.total;
				max = json.max;
				content(json.list);
			},
			complete: function() {
				pageList();
			},
			error: function() {
				alert("请求错误");
			}
		});
	}

	/*生成分页连接*/
	function pageList() {
		page = Math.min(page, max);
		page = Math.max(page, 1);
		var html = "<div class='page-div'><span class='span-page'>共" + n + "条,第" + page + "/" + max + "页</span>";
		html += '<a href="#" class="a-page" data-page="1">首页</a>';
		html += (page > 1) ? '<a href="#" class="a-page" data-page="' + (page - 1) + '">上一页</a>' : '<a href="#" class="a-page" data-page="1">上一页</a>';
		html += (page < max) ? '<a href="#" class="a-page" data-page="' + (page + 1) + '">下一页</a>' : '<a href="#" class="a-page" data-page="' + max + '">下一页</a>';
		html += '<a href="#" class="a-page" data-page="' + max + '">尾页</a></div>';
		var $html = $(html);
		//为链接添加单击事件
		$html.find("a").click(function() {
			page = $(this).attr("data-page");
			getData();
		});
		$(".pagelist").html($html);

	}
	/*生成内容*/
	function content(list) {
		var str = " ";

		for(var i in list) {
			str += "<li class='li-list' data-id='" + list[i]['m_id'] + "'> <span class=' m_name'>" + list[i]['m_name'] + "</span>: <br> <span >&nbsp;&nbsp;&nbsp;" + list[i]['m_info'] + "<span></p><p class='p-info' data-info ='"+list[i]['m_info'] +"'>" + list[i]['m_email'] + " --" + list[i]['m_time'] + "<span class='y_id'>" + list[i]['m_id'] + "</span>" + "<button class='D-btn'>删除</button>&nbsp;<button class='U-btn'>更新</button></p></li><hr>";
		}

		$(".ul-list").html(str);
		$(".y_id").css("display", "none");
		$(".li-list").css({
			"font-size": "1.2em",
			"font-family": "微软雅黑",
			"width": "700px",
			"text-align": "left",
			"margin-left": "30px",
			"margin-bottom": "5px"
		});
		$(".p-info").css({
			"font-size": "0.5em",
			"float": "right"
		});
		var id=" ";
		$(".D-btn").on("click", function() {
			$(".DBmessage").html(" ");
			 id = $(this).parent().find(".y_id").text();
			console.log(id);
			$(".d-note").css("display", "block");
		})
		$(".y-btn").on("click",function(){
			console.log(id);
			
			$.post("php/deleteNote.php",{m_id:id},function(data){
		if(data =="删除成功!") {
			    
				$(".DBmessage").css("color", "forestgreen");
              getData();
			} else {
				$(".DBmessage").css("color", "red");
			}
			$(".DBmessage").html(data);
			})
		})
		
		var s =" ";
		$(".U-btn").on("click", function() {
			$(".UBmessage").html(" ");
			 id = $(this).parent().find(".y_id").text();
			s = $(this).parents().attr("data-info");
			console.log(id);
		    console.log(s);
			$(".u-note").css("display", "block");
				$(".text-Unote").html(s);
				
				
		})
	$(".y-ubtn").on("click",function(){
			console.log(id);
		   
			var ss = $(".text-Unote").val(); 
			$.post("php/updateNote.php",{m_id:id,m_info:ss},function(data){
		if(data == "更新成功!") {
			     getData();
				$(".UBmessage").css("color", "forestgreen");

			} else {
				$(".UBmessage").css("color", "red");
			}
			$(".UBmessage").html(data);
			})
		})
		
		
	}

})