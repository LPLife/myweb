<?php
header("Content-Type: text/html;charset=utf-8");
$servername = "localhost";
$username = "lupei";
$password = "123456";
$dbname = "web";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn -> connect_error) {
	die("连接失败:" . $conn -> connect_errno);
}
?>