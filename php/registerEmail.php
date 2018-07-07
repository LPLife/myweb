<?php
header("Content-Type: text/html;charset=utf-8");
$email = isset($_GET["email"]) ? $_GET["email"] : " ";
if ($email=== " " || strlen($email) == 0) {
	echo "邮箱不能为空!";
	exit;
}else if(!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/", $email)){
echo "邮箱格式不正确,请输入形如:123@qq.com/123@163.com的邮箱";
exit;
}else{
	echo "邮箱可用!";
	exit;
	
}

?>