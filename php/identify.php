<?php
header("Content-Type: text/html;charset=utf-8");
$Pm = isset($_GET["Pm"])?$_GET["Pm"] : " ";
$Nm = isset($_GET["Nm"])?$_GET["Nm"] : " ";
if($Pm === "*密码正确!" && $Nm === "*用户名正确!"){
echo "登录成功!";}else{
	echo "登录失败!";
}
?>