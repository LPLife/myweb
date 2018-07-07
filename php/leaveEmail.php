<?php
header("Content-Type: text/html;charset=utf-8");
$email = isset($_GET["email"]) ? $_GET["email"] : " ";
$name = isset($_GET["name"]) ? $_GET["name"] : " ";
include_once("comm.php");

if ($name === " " || strlen($name) == 0){
	echo "用户名为空,无法识别邮箱!";
	exit;
} 
if ($email === " " || strlen($email) == 0) {
 echo "邮箱不能为空,请输入邮箱!";
 } else {
 $sql = "SELECT u_email FROM users WHERE  u_name ='".$name."'";
 $re = $conn -> query($sql);
 if ($re->num_rows > 0) {
 while ($row = $re -> fetch_assoc()) {
 if($row["u_email"] === $email){
 echo "邮箱正确!";
	 exit;
 }else{
 continue;
 }
 }
 }
 echo "请输入正确的邮箱!";
 
 }
$conn -> close();
?>
