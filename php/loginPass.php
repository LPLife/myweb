<?php
header("Content-Type: text/html;charset=utf-8");
$pass = isset($_GET["pass"]) ? $_GET["pass"] : " ";
$name = isset($_GET["name"]) ? $_GET["name"] : " ";
include_once("comm.php");

if ($name === " " || strlen($name) == 0){
	echo "用户名为空,无法识别密码!";
	exit;
} 
if ($pass === " " || strlen($pass) == 0) {
 echo "密码不能为空,请输入密码!";
 } else {
 $sql = "SELECT u_password FROM users WHERE  u_name ='".$name."'";
 $re = $conn -> query($sql);
 if ($re->num_rows > 0) {
 while ($row = $re -> fetch_assoc()) {
 if($row["u_password"] === $pass){
 echo "密码正确!";
	 exit;
 }else{
 continue;
 }
 }
 }
 echo "请输入正确的密码!";
 
 }
$conn -> close();
?>
