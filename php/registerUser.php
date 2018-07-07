<?php
header("Content-Type: text/html;charset=utf-8");
$name = isset($_GET["name"]) ? $_GET["name"] : " ";
include_once("comm.php");
if ($name === " " || strlen($name) == 0) {
	echo "昵称不能为空!";
} else if(!preg_match("/^[\x{4e00}-\x{9fa5}]{2,10}+$/u", $name)) {
	echo "用户名只能是中文,长度在2~10之间";
} else {
	$sql = "SELECT * FROM users WHERE  u_name ='" . $name . "'";
	$re = $conn -> query($sql);
	$flat = 0;
	$flat = $re -> num_rows;
	if ($flat !== 0) {

		echo "不可用,该昵称已被注册!";

	} else {
		echo "昵称可用!";
	}
}
$conn -> close();
?>
