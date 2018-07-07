$(function() {
	var page = 1;
	var n = 0;
	var max = 1;
	getData();
	/*获取指定页的数据*/
	function getData() {
		$.ajax({
			type: "GET",
			url: "php/getLog.php",
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
		var html = "<div class='page-fen'><span class='span-page'>共" + n + "条,第" + page + "/" + max + "页</span>";
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
			str += "<li class='li-list' data-id='" + list[i]['l_id'] + "'> <a class='a_title'><span class='l_title'>" + list[i]['l_title'] + "</a></span> <br> <div class='log-d'><img src='" + list[i]['l_img'] + "' class='img_log'/><p class='p-info' data-info ='" + list[i]['l_info'] + "'>&nbsp;&nbsp;" + list[i]['l_info'].substr(0, 250) + "....</p><div>" + "</li><hr>";
		}

		$(".ul-blog").html(str);
			$(".a_title").on("click", function() {
			var l_id = $(this).parent().attr("data-id");
			$.ajax({
				type:"GET",
				url:"php/detailLog.php?l_id="+l_id,
				type:"json",
				success: function(json) {
				str = JSON.parse(json);
				var title = str.l_title;
				var img = str.l_img;
				var info = str.l_info;
				$(".l_title").html(title);
				$(".l_img").attr("src",img);
				$(".l_info").html("&nbsp;&nbsp;&nbsp;"+info);
				$(".detail_D").css("display","block");
				
				
			}
			})
	
	})

	}
	

})