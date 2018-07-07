<?php
header("Content-Type: text/html;charset=utf-8");
$pass = isset($_GET["pass"]) ? $_GET["pass"] : " ";
$cpass = isset($_GET["cpass"]) ? $_GET["cpass"]:" ";
if ($pass !== " " && strlen($pass) !== 0) {
	if($pass === $cpass){
		echo "密码验证正确!";
		exit;
	}else{
		echo "您输入的密码不一致,请重新输入!";
		exit;
	}
}else{
	echo "密码为空,不能进行验证!";
	exit;
}
?>