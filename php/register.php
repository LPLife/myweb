<?php
header("Content-Type: text/html;charset=utf-8");
$name = isset($_POST["name"]) ? $_POST["name"] : " ";
$pass = isset($_POST["pass"]) ? $_POST["pass"] : " ";
$email = isset($_POST["email"]) ? $_POST["email"] : " ";

include_once("comm.php");
if ($name === " " || strlen($name) == 0 ||$pass === " " || strlen($pass) == 0 ||$email === " " || strlen($email) == 0 ) {
	echo "信息不完整,无法注册!";
}  else {
	$sql = "insert into users (u_name, u_password, u_email, u_role) values (?,?,?,?)";
	$stmt = $conn -> prepare($sql);
	$stmt->bind_param("sssi",$u_name,$u_password,$u_email,$u_role);
	$u_name = $name;
	$u_password = $pass;
	$u_email = $email;
	$u_role = intval('1');
	$b = $stmt -> execute();
  if ($b) {
			echo "注册成功!";
		} else {
			echo "注册失败";
		}
  $stmt->close();
}

$conn -> close();
	
?>
