<?php
header("Content-Type: text/html;charset=utf-8");
include_once("comm.php");

$id = isset($_POST["m_id"]) ? intval($_POST["m_id"]) : intval("0");

$info = isset($_POST["m_info"]) ? $_POST["m_info"]: " ";
$sql = "UPDATE `message` SET `m_info`='".$info."' WHERE `m_id`=".$id;
		$result = $conn ->query($sql);
		$mark = $conn -> affected_rows;
	if (!$result || $mark == 0) {
			echo "更新失败!";
			exit ;
		}
		echo "更新成功!";
		$conn -> close();
?>