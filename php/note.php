<?php
header("Content-Type: text/html;charset=utf-8");
$name = isset($_POST["name"]) ? $_POST["name"] : " ";
$note = isset($_POST["note"]) ? $_POST["note"] : " ";
$email = isset($_POST["email"]) ? $_POST["email"] : " ";
$time = isset($_POST["time"]) ? $_POST["time"] : " ";

include_once("comm.php");
if ($name === " " || strlen($name) == 0 ||$note === " " || strlen($note) == 0 ||$email === " " || strlen($email) == 0 ||$time === " " || strlen($time) == 0) {
	echo "信息不完整,无法留言!";
}  else {
	$sql = "insert into message (m_name, m_email, m_info, m_time) values (?,?,?,?)";
	$stmt = $conn -> prepare($sql);
	$stmt->bind_param("ssss",$m_name,$m_email,$m_info,$m_time);
	$m_name = $name;
	$m_email = $email;
	$m_info = $note;
	$m_time = $time;
	$b = $stmt -> execute();
  if ($b) {
			echo "留言成功!";
		} else {
			echo "留言失败";
		}
  $stmt->close();
}

$conn -> close();
	
?>
