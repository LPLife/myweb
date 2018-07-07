<?php
header("Content-Type: text/html;charset=utf-8");
$pass = isset($_GET["pass"]) ? $_GET["pass"] : " ";
$cpass = isset($_GET["cpass"]) ? $_GET["cpass"]:" ";
if ($pass === " " || strlen($pass) == 0) {
	echo "密码不能为空!";
	exit;
}else if(!preg_match(" /^[A-Za-z0-9]{6,16}$/", $pass)){
echo "大于6位小于11位,由字母 数字组成!";
exit;
}else{
	echo "密码可用!";
	exit;
	
}

?>